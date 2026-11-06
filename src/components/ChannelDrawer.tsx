import React, { useState, useEffect, useCallback } from 'react';
import { CHANNELS } from '../data/cardData';
import type { ScenarioChannel } from '../types/card';
import { Search, X, Sparkles, Fuel, Store, ShoppingBag, Utensils, ShoppingCart, Building2, Plane, Dumbbell, Check, Star, History } from 'lucide-react';
import { filterAndRankChannels } from '../utils/searchMatcher';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedChannelId: string;
  onSelectChannel: (channelId: string) => void;
  favorites?: string[];
  recents?: string[];
  onToggleFavorite?: (channelId: string) => void;
}

export const ChannelDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  selectedChannelId,
  onSelectChannel,
  favorites = [],
  recents = [],
  onToggleFavorite
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const drawerSelectedRef = React.useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setSearchQuery('');
    onClose();
  }, [onClose]);

  // 當抽屜開啟時鎖定 body 捲動，並將當前選中項目平滑滾動至視野內
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // 延遲一點點確保 DOM render 完畢
      const timer = setTimeout(() => {
        if (drawerSelectedRef.current) {
          drawerSelectedRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 按下 ESC 鍵自動關閉
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
      {/* 半透明背景遮罩 (點擊關閉) */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      {/* 底部向上滑出之抽屜主體 */}
      <div className="relative bg-white w-full rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col z-10 animate-in slide-in-from-bottom duration-250">
        {/* 頂部拖曳手柄與標題列 */}
        <div className="pt-3 pb-2 px-4 border-b border-slate-100 shrink-0">
          <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-3" />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🏬</span>
              <h3 className="font-bold text-base text-slate-900">選擇消費通路情境</h3>
              <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">
                共 {CHANNELS.length} 通路
              </span>
            </div>
            <button
              onClick={handleClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 抽屜內部搜尋框 */}
        <div className="p-3 border-b border-slate-100 bg-slate-50/50 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜尋通路名稱（如：高鐵、全聯、中油、蝦皮、外送、拓元...）"
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* 雙排橫向滾動分類列 */}
        <div className="px-3 py-2 border-b border-slate-100 grid grid-rows-2 grid-flow-col auto-cols-max gap-1.5 overflow-x-auto no-scrollbar shrink-0 bg-white">
          {twoRowCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-slate-200/70'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 通路清單可捲動區 (雙欄網格) */}
        <div className="p-3 overflow-y-auto flex-1 overscroll-contain">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 px-1">
            <span>找到 {filteredChannels.length} 個相關通路</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-indigo-600 font-semibold"
              >
                清除關鍵字
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 pb-6">
            {filteredChannels.map((channel: ScenarioChannel) => {
              const isSelected = channel.id === selectedChannelId;
              const isFav = favorites.includes(channel.id);
              return (
                <button
                  key={channel.id}
                  ref={isSelected ? drawerSelectedRef : undefined}
                  onClick={() => {
                    onSelectChannel(channel.id);
                    handleClose();
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between overflow-hidden min-w-0 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-br from-indigo-50 to-white border-indigo-600 shadow-sm ring-2 ring-indigo-500/20'
                      : 'bg-white border-slate-200 active:bg-slate-50'
                  }`}
                >
                  <div className="w-full min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-2xl">{channel.icon}</span>
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
                          <span className="text-[10px] bg-indigo-600 text-white font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5 shrink-0">
                            <Check className="w-2.5 h-2.5" />
                            已選取
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
      </div>
    </div>
  );
};
