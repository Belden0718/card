import { useState, useEffect, useRef } from 'react';
import type { UserCardConfig } from './types/card';
import { CHANNELS, calculateCardRewards } from './data/cardData';
import { Header } from './components/Header';
import { UserConfigBar } from './components/UserConfigBar';
import { QuickScenarioGrid } from './components/QuickScenarioGrid';
import { RecommendationResult } from './components/RecommendationResult';
import { CardCheatSheet } from './components/CardCheatSheet';
import { ChannelDrawer } from './components/ChannelDrawer';
import { ChevronDown, Star } from 'lucide-react';

const STORAGE_KEY = 'credit_card_advisor_config_v2';
const LAST_CHANNEL_KEY = 'credit_card_advisor_last_channel_v1';
const FAVORITES_KEY = 'credit_card_advisor_favorites_v1';
const RECENTS_KEY = 'credit_card_advisor_recents_v1';

const DEFAULT_FAVORITES = ['supermarket_px', 'convenience_711', 'convenience_family', 'gas_cpc', 'drink_chill', 'transit_thsr'];

// 歷史舊通路 ID 自動遷移與相容轉換
const migrateChannelIds = (ids: string[]): string[] => {
  const result: string[] = [];
  for (const id of ids) {
    if (id === 'ev_charging_parking') {
      result.push('ev_charging', 'parking_smart');
    } else if (CHANNELS.some((c) => c.id === id)) {
      result.push(id);
    }
  }
  return Array.from(new Set(result));
};

const DEFAULT_CONFIG: UserCardConfig = {
  cubeScheme: 'selected',      // 預設集精選（涵蓋加油與超商 2.0%）
  cubeLevel: 2,                // CUBE 會員等級 Lv2 (3.0% 無上限)
  sportCalorieMet: true,       // 預設汗水有達標
  sportQuotaAvailable: true,   // 預設本月 $6,000 額度未滿
  dawayIsNewUser: false,       // 已非新戶，預設舊戶 1.5%
  gogoRichartLinked: true,     // 預設有綁 Richart 自動扣繳
  taishinScheme: 'pay',        // 本月已領取 Pay著刷（LINE Pay 3.8% / 超商台新Pay 3.8%）
  preferredMobilePay: 'samsung_pay', // 預設使用者為三星手機 (Samsung Pay 首位)
  ownedCards: {
    cube: true,
    gogo: true,
    sport: true,
    daway: true
  }
};

// 精選高頻熱門捷徑 (21 大核心生活消費通路)
const HOT_SHORTCUTS = [
  { id: 'convenience_711', label: '🏪 7-11' },
  { id: 'convenience_family', label: '🏪 全家' },
  { id: 'supermarket_px', label: '🛒 全聯' },
  { id: 'supermarket_carrefour', label: '🏬 家樂福/大潤發' },
  { id: 'fastfood_mcdonalds', label: '🍟 麥當勞' },
  { id: 'fastfood_kfc', label: '🍗 肯德基' },
  { id: 'fastfood_burgerking', label: '🍔 漢堡王' },
  { id: 'food_delivery', label: '🛵 Uber Eats/熊貓' },
  { id: 'drink_chill', label: '🍹 50嵐/得正手搖' },
  { id: 'dining_sushiro', label: '🍣 壽司郎' },
  { id: 'gas_cpc', label: '⛽ 中油加油' },
  { id: 'transit_thsr', label: '🚄 台灣高鐵' },
  { id: 'transit_tra', label: '🚆 台鐵火車' },
  { id: 'online_shopee', label: '🦐 蝦皮購物' },
  { id: 'online_momo', label: '🍑 momo購物' },
  { id: 'streaming_video', label: '🎬 Netflix/Disney+' },
  { id: 'streaming_music', label: '🎵 YouTube/Spotify' },
  { id: 'digital_stores', label: '📱 App Store/課金' },
  { id: 'department_store', label: '🏬 新光/微風/百貨' },
  { id: 'fashion_uniqlo_gu', label: '👕 UNIQLO/GU' },
  { id: 'drugstore_cosmetics', label: '💄 康是美/屈臣氏/寶雅' }
];

export function App() {
  const [config, setConfig] = useState<UserCardConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_CONFIG;
  });

  const [selectedChannelId, setSelectedChannelId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(LAST_CHANNEL_KEY);
      if (saved) {
        if (saved === 'ev_charging_parking') return 'ev_charging';
        if (CHANNELS.some((c) => c.id === saved)) return saved;
      }
    } catch {
      // ignore
    }
    return 'gas_cpc';
  });
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const migrated = migrateChannelIds(parsed);
          localStorage.setItem(FAVORITES_KEY, JSON.stringify(migrated));
          return migrated;
        }
      }
    } catch {
      // ignore
    }
    return DEFAULT_FAVORITES;
  });

  const [recents, setRecents] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(RECENTS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const migrated = migrateChannelIds(parsed).slice(0, 8);
          localStorage.setItem(RECENTS_KEY, JSON.stringify(migrated));
          return migrated;
        }
      }
    } catch {
      // ignore
    }
    return [];
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);
  const [isChannelDrawerOpen, setIsChannelDrawerOpen] = useState<boolean>(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // ignore
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem(LAST_CHANNEL_KEY, selectedChannelId);
    } catch {
      // ignore
    }
  }, [selectedChannelId]);

  const handleSelectChannel = (channelId: string) => {
    setSelectedChannelId(channelId);
    setRecents((prev) => {
      const next = [channelId, ...prev.filter((id) => id !== channelId)].slice(0, 8);
      try {
        localStorage.setItem(RECENTS_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleToggleFavorite = (channelId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(channelId);
      const next = exists ? prev.filter((id) => id !== channelId) : [...prev, channelId];
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // 當前選取的通路
  const currentChannel = CHANNELS.find((c) => c.id === selectedChannelId) || CHANNELS[0];

  // 計算 4 張卡的回饋結果
  const rewards = calculateCardRewards(currentChannel.id, config);

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-5 sm:pt-8">
        {/* 頁頭 */}
        <Header onOpenCheatSheet={() => setIsCheatSheetOpen(true)} />

        {/* 頂部狀態列（可收合展開調整4張卡個別狀態） */}
        <UserConfigBar config={config} onChange={setConfig} />

        {/* ══════════════════════════════════════════════════════════════
            1. 電腦版 (Desktop >= 1024px)：雙欄專業儀表板 (左欄50+通路 + 右欄Sticky釘選結果)
           ══════════════════════════════════════════════════════════════ */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-start">
          {/* 左欄：搜尋、分類與完整 50+ 通路網格 (內部獨立捲動) */}
          <div className="lg:col-span-5 space-y-4">
            <QuickScenarioGrid
              selectedChannelId={selectedChannelId}
              onSelectChannel={handleSelectChannel}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              favorites={favorites}
              recents={recents}
              onToggleFavorite={handleToggleFavorite}
            />
          </div>

          {/* 右欄：Sticky 釘選推薦結果 (永遠停留在螢幕最精華區) */}
          <div className="lg:col-span-7 lg:sticky lg:top-6 space-y-6">
            <RecommendationResult
              channel={currentChannel}
              results={rewards}
              ownedCards={config.ownedCards}
              dawayIsNewUser={config.dawayIsNewUser}
              isFavorite={favorites.includes(currentChannel.id)}
              onToggleFavorite={() => handleToggleFavorite(currentChannel.id)}
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            2. 手機版 (Mobile < 1024px)：方案 B「底部抽屜選擇器 + 結果第一屏置頂」
           ══════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden space-y-4">
          {/* 通路狀態切換列 */}
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-2xl shrink-0">{currentChannel.icon}</span>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase block">
                  當前查詢通路
                </span>
                <p className="font-bold text-sm sm:text-base text-slate-900 truncate">
                  {currentChannel.name}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsChannelDrawerOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-sm active:scale-95 transition-all cursor-pointer"
            >
              <span>切換通路</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* ⭐ 我的常用 (自訂常用門市快捷膠囊) */}
          {favorites.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
              <span className="font-bold text-amber-600 whitespace-nowrap px-1 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                常用：
              </span>
              {favorites.map((favId) => {
                const favCh = CHANNELS.find((c) => c.id === favId);
                if (!favCh) return null;
                const isSelected = selectedChannelId === favId;
                const shortLabel = favCh.name.split(' (')[0].replace(' (統一超商)', '').replace(' (FamilyMart)', '');
                return (
                  <button
                    key={favId}
                    onClick={() => handleSelectChannel(favId)}
                    className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-white border-amber-500 shadow-xs ring-1 ring-amber-300'
                        : 'bg-white text-slate-700 border-amber-200 hover:bg-amber-50'
                    }`}
                  >
                    <span>{favCh.icon}</span>
                    <span>{shortLabel}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* 🔥 常用秒查 (單行水平滑動膠囊，16大高頻通路點擊秒換) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="font-bold text-slate-500 whitespace-nowrap px-1">🔥 秒查：</span>
            {HOT_SHORTCUTS.map((item) => {
              const isSelected = selectedChannelId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectChannel(item.id)}
                  className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* 🥇 核心推薦結果 (直接在手機第 1 屏展示！完全零滾動看最優卡片與避雷！) */}
          <div ref={resultRef} className="scroll-mt-4">
            <RecommendationResult
              channel={currentChannel}
              results={rewards}
              ownedCards={config.ownedCards}
              dawayIsNewUser={config.dawayIsNewUser}
              isFavorite={favorites.includes(currentChannel.id)}
              onToggleFavorite={() => handleToggleFavorite(currentChannel.id)}
            />
          </div>

          {/* 下方輔助大按鈕：開啟全部 50+ 通路抽屜 */}
          <div className="pt-2">
            <button
              onClick={() => setIsChannelDrawerOpen(true)}
              className="w-full py-3.5 px-4 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors active:scale-98 cursor-pointer"
            >
              <span>🏬 瀏覽全部 50+ 消費通路清單（開啟抽屜選擇器）</span>
              <span className="text-indigo-600 font-semibold">➔</span>
            </button>
          </div>
        </div>

        {/* 手機版專屬：底部滑出之「50+ 通路選擇抽屜」 */}
        <ChannelDrawer
          isOpen={isChannelDrawerOpen}
          onClose={() => setIsChannelDrawerOpen(false)}
          selectedChannelId={selectedChannelId}
          onSelectChannel={handleSelectChannel}
          favorites={favorites}
          recents={recents}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 頁尾資訊 */}
        <footer className="mt-12 text-center text-xs text-slate-400 space-y-1">
          <p>專為 國泰 CUBE • 台新 @GoGo • 永豐 SPORT • 永豐 DAWAY 量身打造</p>
          <p className="text-[11px] text-slate-400">
            ※ 信用卡回饋以各發卡銀行最新公告為準。遇非一般消費或特殊排除條款請遵循本工具避雷指示。
          </p>
        </footer>

        {/* 規則速查彈窗 */}
        <CardCheatSheet
          isOpen={isCheatSheetOpen}
          onClose={() => setIsCheatSheetOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;
