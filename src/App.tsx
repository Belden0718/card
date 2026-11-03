import { useState, useEffect } from 'react';
import type { UserCardConfig, CubeScheme } from './types/card';
import { CHANNELS, calculateCardRewards } from './data/cardData';
import { Header } from './components/Header';
import { UserConfigBar } from './components/UserConfigBar';
import { QuickScenarioGrid } from './components/QuickScenarioGrid';
import { RecommendationResult } from './components/RecommendationResult';
import { CardCheatSheet } from './components/CardCheatSheet';

const STORAGE_KEY = 'credit_card_advisor_config_v1';

const DEFAULT_CONFIG: UserCardConfig = {
  cubeScheme: 'selected',      // 預設集精選（涵蓋加油與超商）
  sportCalorieMet: true,       // 預設汗水有達標
  sportQuotaAvailable: true,   // 預設本月 $6,000 額度未滿
  dawayIsNewUser: true,        // 預設新戶 3%
  gogoRichartLinked: true      // 預設有綁 Richart 自動扣繳
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

  const handleSwitchCubeScheme = (newScheme: CubeScheme) => {
    setConfig((prev) => ({
      ...prev,
      cubeScheme: newScheme
    }));
  };

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
            onClick={() => { setSelectedChannelId('online_shopee_momo'); setSearchQuery(''); }}
            className={`px-2.5 py-1 rounded-lg border font-semibold whitespace-nowrap transition-all ${
              selectedChannelId === 'online_shopee_momo'
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            🛍️ 網購 (蝦皮/momo)
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
          onSwitchCubeScheme={handleSwitchCubeScheme}
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
