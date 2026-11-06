import React from 'react';
import { CHANNELS } from '../data/cardData';
import type { ScenarioChannel } from '../types/card';
import { Fuel, Store, ShoppingBag, Utensils, ShoppingCart, Plane, Search, Sparkles, Building2, Dumbbell, Star, History } from 'lucide-react';
import { filterAndRankChannels } from '../utils/searchMatcher';

interface Props {
  selectedChannelId: string;
  onSelectChannel: (channelId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  hideSearchInput?: boolean;
  favorites?: string[];
  recents?: string[];
  onToggleFavorite?: (channelId: string) => void;
}

export const QuickScenarioGrid: React.FC<Props> = ({
  selectedChannelId,
  onSelectChannel,
  searchQuery,
  onSearchChange,
  hideSearchInput = false,
  favorites = [],
  recents = [],
  onToggleFavorite
}) => {
  // 快速情境篩選標籤
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  const selectedRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    // 首次載入或切換通路時，將被選取的卡片平滑滾動至視野內
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [selectedChannelId]);

  const categories = [
    { id: 'all', label: '全部通路', icon: Sparkles },
    ...(favorites.length > 0 ? [{ id: 'favorites', label: `⭐ 常用 (${favorites.length})`, icon: Star }] : []),
    ...(recents.length > 0 ? [{ id: 'recents', label: '🕒 最近查詢', icon: History }] : []),
    { id: 'gas', label: '⛽ 加油充電', icon: Fuel },
    { id: 'convenience', label: '🏪 超商消費', icon: Store },
    { id: 'online', label: '🛍️ 網購數位', icon: ShoppingBag },
    { id: 'food', label: '🍱 美食飲品/聚餐', icon: Utensils },
    { id: 'supermarket', label: '🛒 超市量販', icon: ShoppingCart },
    { id: 'department', label: '🏬 百貨服飾/藥妝', icon: Building2 },
    { id: 'travel', label: '✈️ 旅遊出行/交通', icon: Plane },
    { id: 'general', label: '🏋️ 運動健身/裝備', icon: Dumbbell }
  ];

  // 將分類整理為自然左右讀取的雙排結構
  const mid = Math.ceil(categories.length / 2);
  const row1 = categories.slice(0, mid);
  const row2 = categories.slice(mid);
  const twoRowCategories: typeof categories = [];
  for (let i = 0; i < mid; i++) {
    if (row1[i]) twoRowCategories.push(row1[i]);
    if (row2[i]) twoRowCategories.push(row2[i]);
  }

  let channelsToFilter = CHANNELS;
  if (activeCategory === 'favorites') {
    channelsToFilter = CHANNELS.filter(ch => favorites.includes(ch.id));
  } else if (activeCategory === 'recents') {
    const recentsMap = new Map(recents.map((id, index) => [id, index]));
    channelsToFilter = CHANNELS.filter(ch => recentsMap.has(ch.id)).sort((a, b) => (recentsMap.get(a.id) ?? 0) - (recentsMap.get(b.id) ?? 0));
  } else if (activeCategory !== 'all') {
    channelsToFilter = CHANNELS.filter(ch => ch.category === activeCategory);
  }

  const filteredChannels = filterAndRankChannels(channelsToFilter, searchQuery);

  return (
    <div className="space-y-4 mb-6">
      {/* 搜尋列與快速情境分類 (若未隱藏則顯示) */}
      {!hideSearchInput && (
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="搜尋通路或品牌（如：星巴克、高鐵、全聯、得正、Tesla、藏壽司、蝦皮...）"
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      )}

      {/* 分類切換按鈕 (雙排滑動列) */}
      <div className="grid grid-rows-2 grid-flow-col auto-cols-max gap-1.5 overflow-x-auto pb-1 no-scrollbar lg:flex lg:flex-wrap">
        {twoRowCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                // 如果切換到指定分類且當前選取的項目不在該分類，自動選第一個
                const inCat = CHANNELS.find(c => cat.id === 'all' || c.category === cat.id);
                if (inCat && !['all', 'favorites', 'recents'].includes(cat.id) && !CHANNELS.filter(c => c.category === cat.id).some(c => c.id === selectedChannelId)) {
                  onSelectChannel(inCat.id);
                }
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-slate-200/70'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 通路統計列 */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>已列出 <strong className="text-slate-800">{filteredChannels.length}</strong> 個通路情境</span>
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
          >
            清除搜尋
          </button>
        )}
      </div>

      {/* 通路卡片網格 (內部獨立捲動，高度控制在適中範圍避免過長) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[300px] sm:max-h-[380px] lg:max-h-[calc(100vh-230px)] overflow-y-auto pr-1">
        {filteredChannels.map((channel: ScenarioChannel) => {
          const isSelected = channel.id === selectedChannelId;
          const isFav = favorites.includes(channel.id);
          return (
            <button
              key={channel.id}
              ref={isSelected ? selectedRef : undefined}
              type="button"
              onClick={() => onSelectChannel(channel.id)}
              className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between overflow-hidden min-w-0 w-full cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-br from-indigo-50 to-white border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div className="w-full min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl shrink-0">{channel.icon}</span>
                  <div className="flex items-center gap-1">
                    {onToggleFavorite && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(channel.id);
                        }}
                        className={`p-1 rounded-md hover:bg-slate-100 transition-colors ${
                          isFav ? 'text-amber-500' : 'text-slate-300 hover:text-slate-500'
                        }`}
                        title={isFav ? '取消常用' : '加入常用'}
                      >
                        <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-amber-400' : ''}`} />
                      </span>
                    )}
                    {isSelected && (
                      <span className="text-[10px] bg-indigo-600 text-white font-bold px-1.5 py-0.5 rounded-full shrink-0">
                        查詢中
                      </span>
                    )}
                  </div>
                </div>
                <div
                  className="font-bold text-xs sm:text-sm text-slate-900 leading-snug break-words [overflow-wrap:anywhere] line-clamp-2"
                  title={channel.name}
                >
                  {channel.name}
                </div>
              </div>
              <div
                className="text-[11px] text-slate-500 mt-1 line-clamp-1 w-full min-w-0 break-words [overflow-wrap:anywhere]"
                title={channel.description}
              >
                {channel.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
