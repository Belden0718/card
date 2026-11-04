import React from 'react';
import { CHANNELS } from '../data/cardData';
import type { ScenarioChannel } from '../types/card';
import { Fuel, Store, ShoppingBag, Utensils, ShoppingCart, Plane, Search, Sparkles, Building2 } from 'lucide-react';

interface Props {
  selectedChannelId: string;
  onSelectChannel: (channelId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const QuickScenarioGrid: React.FC<Props> = ({
  selectedChannelId,
  onSelectChannel,
  searchQuery,
  onSearchChange
}) => {
  // 快速情境篩選標籤
  const [activeCategory, setActiveCategory] = React.useState<string>('all');

  const categories = [
    { id: 'all', label: '全部通路', icon: Sparkles },
    { id: 'gas', label: '⛽ 加油充電', icon: Fuel, highlight: true },
    { id: 'convenience', label: '🏪 超商消費', icon: Store, highlight: true },
    { id: 'online', label: '🛍️ 網購數位', icon: ShoppingBag },
    { id: 'food', label: '🍱 外送餐飲', icon: Utensils },
    { id: 'supermarket', label: '🛒 超市量販', icon: ShoppingCart },
    { id: 'department', label: '🏬 百貨家居/藥妝', icon: Building2 },
    { id: 'travel', label: '✈️ 旅遊出行/交通', icon: Plane, highlight: true }
  ];

  const filteredChannels = CHANNELS.filter((ch) => {
    const matchesCategory = activeCategory === 'all' || ch.category === activeCategory;
    const matchesQuery = 
      ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ch.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-4 mb-6">
      {/* 搜尋列與快速情境分類 */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* 搜尋框 */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="搜尋通路關鍵字（如：高鐵、Agoda、機票、Uber、雄獅、福懋、速邁樂、中油、ChatGPT、Netflix、蝦皮...）"
            className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full w-5 h-5 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* 分類切換按鈕 */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                // 如果切換到指定分類且當前選取的項目不在該分類，自動選第一個
                const inCat = CHANNELS.find(c => cat.id === 'all' || c.category === cat.id);
                if (inCat && cat.id !== 'all' && !CHANNELS.filter(c => c.category === cat.id).some(c => c.id === selectedChannelId)) {
                  onSelectChannel(inCat.id);
                }
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-sm'
                  : cat.highlight
                    ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100/70 border border-indigo-200/50'
                    : 'bg-white text-slate-600 hover:bg-slate-100/80 border border-slate-200/80'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 通路卡片網格 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {filteredChannels.map((channel: ScenarioChannel) => {
          const isSelected = channel.id === selectedChannelId;
          return (
            <button
              key={channel.id}
              type="button"
              onClick={() => onSelectChannel(channel.id)}
              className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-indigo-50 to-white border-indigo-500 shadow-md ring-2 ring-indigo-500/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-2xl">{channel.icon}</span>
                  {isSelected && (
                    <span className="text-[10px] bg-indigo-600 text-white font-bold px-1.5 py-0.5 rounded-full">
                      查詢中
                    </span>
                  )}
                </div>
                <div className="font-bold text-sm text-slate-900 leading-tight">
                  {channel.name}
                </div>
              </div>
              <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                {channel.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
