import { useState, useEffect } from 'react';
import type { UserCardConfig } from './types/card';
import { CHANNELS, calculateCardRewards } from './data/cardData';
import { Header } from './components/Header';
import { UserConfigBar } from './components/UserConfigBar';
import { QuickScenarioGrid } from './components/QuickScenarioGrid';
import { RecommendationResult } from './components/RecommendationResult';
import { CardCheatSheet } from './components/CardCheatSheet';

const STORAGE_KEY = 'credit_card_advisor_config_v2';

const DEFAULT_CONFIG: UserCardConfig = {
  cubeScheme: 'selected',      // 預設集精選（涵蓋加油與超商）
  sportCalorieMet: true,       // 預設汗水有達標
  sportQuotaAvailable: true,   // 預設本月 $6,000 額度未滿
  dawayIsNewUser: false,       // 已非新戶，預設舊戶 1.5%
  gogoRichartLinked: true,     // 預設有綁 Richart 自動扣繳
  taishinScheme: 'daily'       // 預設天天刷（超商台新Pay 3.8%、加油 3.8%）
};

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

  const [selectedChannelId, setSelectedChannelId] = useState<string>('gas_cpc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // ignore
    }
  }, [config]);

  // 當前選取的通路
  const currentChannel = CHANNELS.find((c) => c.id === selectedChannelId) || CHANNELS[0];

  // 計算 4 張卡的回饋結果
  const rewards = calculateCardRewards(currentChannel.id, config);

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* 頁頭 */}
        <Header onOpenCheatSheet={() => setIsCheatSheetOpen(true)} />

        {/* 頂部狀態列（可收合展開調整4張卡個別狀態） */}
        <UserConfigBar config={config} onChange={setConfig} />

        {/* 快速常用直達捷徑標籤 */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1 text-xs">
          <span className="font-bold text-slate-500 whitespace-nowrap">🔥 常用秒查：</span>
          <button
            onClick={() => { setSelectedChannelId('gas_cpc'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'gas_cpc'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            ⛽ 中油加油
          </button>
          <button
            onClick={() => { setSelectedChannelId('gas_formosa'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'gas_formosa'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            ⛽ 福懋/台塑
          </button>
          <button
            onClick={() => { setSelectedChannelId('gas_smile'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'gas_smile'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            ⛽ 速邁樂加油
          </button>
          <button
            onClick={() => { setSelectedChannelId('convenience_711'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'convenience_711'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🏪 7-ELEVEN
          </button>
          <button
            onClick={() => { setSelectedChannelId('convenience_family'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'convenience_family'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🏪 全家超商
          </button>
          <button
            onClick={() => { setSelectedChannelId('drink_chill'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'drink_chill'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🍹 手搖/咖啡 (Chill 10%)
          </button>
          <button
            onClick={() => { setSelectedChannelId('fastfood_mos'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'fastfood_mos'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🍔 摩斯漢堡
          </button>
          <button
            onClick={() => { setSelectedChannelId('fastfood_mcdonalds'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'fastfood_mcdonalds'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🍟 麥當勞
          </button>
          <button
            onClick={() => { setSelectedChannelId('fastfood_kfc'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'fastfood_kfc'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🍗 肯德基
          </button>
          <button
            onClick={() => { setSelectedChannelId('supermarket_px'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'supermarket_px'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🛒 全聯福利中心
          </button>
          <button
            onClick={() => { setSelectedChannelId('supermarket_carrefour'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'supermarket_carrefour'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🏬 萬家福 / 大全聯
          </button>
          <button
            onClick={() => { setSelectedChannelId('supermarket_lopia'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'supermarket_lopia'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🥩 LOPIA 日系超市
          </button>
          <button
            onClick={() => { setSelectedChannelId('home_ikea'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'home_ikea'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🪑 IKEA 宜家家居
          </button>
          <button
            onClick={() => { setSelectedChannelId('ev_charging_parking'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'ev_charging_parking'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            ⚡ 充電停車
          </button>
          <button
            onClick={() => { setSelectedChannelId('department_store'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'department_store'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🏬 百貨公司
          </button>
          <button
            onClick={() => { setSelectedChannelId('drugstore_cosmetics'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'drugstore_cosmetics'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            💄 生活藥妝
          </button>
          <button
            onClick={() => { setSelectedChannelId('food_delivery'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'food_delivery'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🛵 外送平台
          </button>
          <button
            onClick={() => { setSelectedChannelId('online_shopee'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'online_shopee'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🦐 蝦皮購物
          </button>
          <button
            onClick={() => { setSelectedChannelId('online_momo'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'online_momo'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🍑 momo購物
          </button>
          <button
            onClick={() => { setSelectedChannelId('online_pchome'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'online_pchome'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            📦 PChome
          </button>
          <button
            onClick={() => { setSelectedChannelId('streaming_media'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'streaming_media'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🎬 Netflix / 串流 (Chill 10%)
          </button>
          <button
            onClick={() => { setSelectedChannelId('ai_software'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'ai_software'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🤖 ChatGPT / AI 工具
          </button>
          <button
            onClick={() => { setSelectedChannelId('digital_stores'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'digital_stores'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            📱 App Store 課金
          </button>
          <button
            onClick={() => { setSelectedChannelId('online_taobao'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'online_taobao'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🛍️ 淘寶天貓
          </button>
          <button
            onClick={() => { setSelectedChannelId('transit_rail'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'transit_rail'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🚄 高鐵/台鐵
          </button>
          <button
            onClick={() => { setSelectedChannelId('travel_airlines'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'travel_airlines'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🛫 航空公司機票
          </button>
          <button
            onClick={() => { setSelectedChannelId('travel_booking_ota'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'travel_booking_ota'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🏨 Agoda / 訂房票券
          </button>
          <button
            onClick={() => { setSelectedChannelId('transit_taxi'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'transit_taxi'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🚕 Uber / 台灣大車隊
          </button>
          <button
            onClick={() => { setSelectedChannelId('travel_agencies'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'travel_agencies'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🗺️ 雄獅 / 各大旅行社
          </button>
          <button
            onClick={() => { setSelectedChannelId('transit_japan_ic'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'transit_japan_ic'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🍏 日本Suica交通卡
          </button>
          <button
            onClick={() => { setSelectedChannelId('travel_overseas'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'travel_overseas'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            ✈️ 海外實體 / 迪士尼
          </button>
        </div>

        {/* 通路與情境選擇器 */}
        <QuickScenarioGrid
          selectedChannelId={selectedChannelId}
          onSelectChannel={setSelectedChannelId}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 決策與推薦結果展示 */}
        <RecommendationResult
          channel={currentChannel}
          results={rewards}
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
