import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { CHANNELS } from '../data/cardData';
import type { ScenarioChannel } from '../types/card';
import { Search, X, Sparkles, Fuel, Store, ShoppingBag, Utensils, ShoppingCart, Building2, Plane, Dumbbell, Check, Star, History, ChevronDown } from 'lucide-react';
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
  const [visualViewportHeight, setVisualViewportHeight] = useState<number | null>(null);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const drawerSelectedRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validFavoritesCount = useMemo(
    () => favorites.filter(id => CHANNELS.some(ch => ch.id === id)).length,
    [favorites]
  );
  const validRecentsCount = useMemo(
    () => recents.filter(id => CHANNELS.some(ch => ch.id === id)).length,
    [recents]
  );

  const handleClose = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
    setSearchQuery('');
    onClose();
  }, [onClose]);

  // 監聽手機虛擬鍵盤與 Visual Viewport 動態變化，避免鍵盤遮擋內容
  useEffect(() => {
    if (!isOpen) return;

    const handleViewportChange = () => {
      if (typeof window !== 'undefined' && window.visualViewport) {
        const vvHeight = window.visualViewport.height;
        setVisualViewportHeight(vvHeight);
        // 當可視高度明顯小於 window.innerHeight (差值 > 120px) 判定虛擬鍵盤彈起
        const isKb = window.innerHeight - vvHeight > 120;
        setIsKeyboardOpen(isKb);
      }
    };

    handleViewportChange();

    const vv = typeof window !== 'undefined' ? window.visualViewport : null;
    if (vv) {
      vv.addEventListener('resize', handleViewportChange);
      vv.addEventListener('scroll', handleViewportChange);
    }

    return () => {
      if (vv) {
        vv.removeEventListener('resize', handleViewportChange);
        vv.removeEventListener('scroll', handleViewportChange);
      }
    };
  }, [isOpen]);

  // 當抽屜開啟時鎖定 body 捲動，並將當前選中項目平滑滾動至視野內
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // 延遲一點點確保 DOM render 完畢
      const timer = setTimeout(() => {
        if (drawerSelectedRef.current) {
          drawerSelectedRef.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      }, 80);
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
    ...(validFavoritesCount > 0 ? [{ id: 'favorites', label: `⭐ 常用 (${validFavoritesCount})`, icon: Star }] : []),
    ...(validRecentsCount > 0 ? [{ id: 'recents', label: '🕒 最近查詢', icon: History }] : []),
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
  // 只有在未輸入搜尋字詞時，才受分類標籤限制；一旦搜尋，全庫檢索避免用戶找不到
  if (!searchQuery.trim()) {
    if (activeCategory === 'favorites') {
      channelsToFilter = CHANNELS.filter(ch => favorites.includes(ch.id));
    } else if (activeCategory === 'recents') {
      const recentsMap = new Map(recents.map((id, index) => [id, index]));
      channelsToFilter = CHANNELS.filter(ch => recentsMap.has(ch.id)).sort((a, b) => (recentsMap.get(a.id) ?? 0) - (recentsMap.get(b.id) ?? 0));
    } else if (activeCategory !== 'all') {
      channelsToFilter = CHANNELS.filter(ch => ch.category === activeCategory);
    }
  }

  const filteredChannels = filterAndRankChannels(channelsToFilter, searchQuery);

  // 判定是否處於高度受限模式（虛擬鍵盤彈起中或螢幕高度偏低）
  const isCompressed = isKeyboardOpen || (visualViewportHeight !== null && visualViewportHeight < 560);

  // 輔助函式：主動收起虛擬鍵盤
  const dismissKeyboard = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
      {/* 全螢幕半透明背景遮罩 (點擊任意處關閉抽屜) */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
      />

      {/* 依據 VisualViewport 動態高度對齊之抽屜外框容器 */}
      <div
        className="relative z-10 w-full flex flex-col justify-end pointer-events-none"
        style={{
          height: visualViewportHeight ? `${visualViewportHeight}px` : '100dvh',
          maxHeight: '100dvh'
        }}
      >
        {/* 底部向上滑出之抽屜主體 */}
        <div
          className="relative bg-white w-full rounded-t-3xl shadow-2xl flex flex-col pointer-events-auto animate-in slide-in-from-bottom duration-250 transition-all ease-out overflow-hidden"
          style={{
            maxHeight: isCompressed ? '100%' : '85vh',
            height: isCompressed ? '100%' : undefined
          }}
        >
          {/* 頂部拖曳手柄與標題列 */}
          <div className={`px-4 border-b border-slate-100 shrink-0 ${isCompressed ? 'pt-2 pb-1.5' : 'pt-3 pb-2'}`}>
            {!isCompressed && (
              <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-2.5" />
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏬</span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900">選擇消費通路情境</h3>
                <span className="text-[11px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">
                  共 {CHANNELS.length} 通路
                </span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors cursor-pointer"
                title="關閉"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 抽屜內部搜尋框 (含 Enter 搜尋收合與快速收起鍵盤按鈕) */}
          <div className="p-2.5 sm:p-3 border-b border-slate-100 bg-slate-50/70 shrink-0">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                dismissKeyboard();
              }}
              className="relative flex items-center gap-2"
            >
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  ref={inputRef}
                  type="search"
                  enterKeyHint="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setIsInputFocused(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      dismissKeyboard();
                    }
                  }}
                  placeholder="搜尋通路名稱（如：高鐵、全聯、中油、蝦皮...）"
                  className="w-full pl-9 pr-8 py-2 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      inputRef.current?.focus();
                    }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
                    title="清除文字"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* 當輸入框聚焦或鍵盤開啟時，顯示「收起鍵盤」快捷鍵 */}
              {(isInputFocused || isKeyboardOpen) && (
                <button
                  type="button"
                  onClick={dismissKeyboard}
                  className="px-2.5 py-2 text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 active:bg-indigo-200 rounded-xl shrink-0 transition-colors flex items-center gap-0.5 cursor-pointer"
                  title="收起鍵盤"
                >
                  <span>收起</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              )}
            </form>
          </div>

          {/* 雙排橫向滾動分類列：若正在文字搜尋，自動隱藏以保留最大高度給搜尋結果 */}
          {!searchQuery.trim() && (
            <div className="px-3 py-2 border-b border-slate-100 grid grid-rows-2 grid-flow-col auto-cols-max gap-1.5 overflow-x-auto no-scrollbar shrink-0 bg-white">
              {twoRowCategories.map((cat) => {
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
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
          )}

          {/* 通路清單可捲動區 (雙欄網格，滑動即自動收起虛擬鍵盤) */}
          <div
            className="p-3 overflow-y-auto flex-1 overscroll-contain"
            onScroll={() => {
              if (document.activeElement === inputRef.current) {
                dismissKeyboard();
              }
            }}
          >
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2 px-1">
              <span className="font-medium">
                找到 <span className="text-indigo-600 font-bold">{filteredChannels.length}</span> 個相關通路
              </span>
              <div className="flex items-center gap-2">
                {isKeyboardOpen && (
                  <button
                    type="button"
                    onClick={dismissKeyboard}
                    className="text-[11px] text-slate-400 hover:text-slate-600 flex items-center gap-0.5 cursor-pointer"
                  >
                    <span>收起鍵盤</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                )}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-indigo-600 font-semibold cursor-pointer"
                  >
                    清除關鍵字
                  </button>
                )}
              </div>
            </div>

            {filteredChannels.length === 0 ? (
              <div className="text-center py-10 text-slate-400">
                <p className="text-3xl mb-2">🔍</p>
                <p className="text-sm font-semibold text-slate-700 mb-1">找不到符合「{searchQuery}」的通路</p>
                <p className="text-xs text-slate-400 mb-3">請嘗試其他關鍵字或別名（如：高鐵、蝦皮、中油、7-11）</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-bold px-3 py-1.5 rounded-lg bg-indigo-50 inline-flex items-center cursor-pointer"
                >
                  清除關鍵字
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pb-6">
                {filteredChannels.map((channel: ScenarioChannel) => {
                  const isSelected = channel.id === selectedChannelId;
                  const isFav = favorites.includes(channel.id);
                  return (
                    <button
                      type="button"
                      key={channel.id}
                      ref={isSelected ? drawerSelectedRef : undefined}
                      onMouseDown={(e) => {
                        // 避免點擊時輸入框過早 blur 造成鍵盤收合動效導致 click 被瀏覽器取消
                        if (!(e.target as HTMLElement).closest('.fav-star-btn')) {
                          e.preventDefault();
                        }
                      }}
                      onClick={() => {
                        onSelectChannel(channel.id);
                        handleClose();
                      }}
                      className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between overflow-hidden min-w-0 cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-indigo-50 to-white border-indigo-600 shadow-sm ring-2 ring-indigo-500/20'
                          : 'bg-white border-slate-200 active:bg-slate-50'
                      }`}
                    >
                      <div className="w-full min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xl sm:text-2xl">{channel.icon}</span>
                          <div className="flex items-center gap-1">
                            {onToggleFavorite && (
                              <span
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onToggleFavorite(channel.id);
                                }}
                                onMouseDown={(e) => {
                                  e.stopPropagation();
                                }}
                                className={`fav-star-btn p-1 rounded-md hover:bg-slate-100 transition-colors ${
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
