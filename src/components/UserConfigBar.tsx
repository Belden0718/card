import React, { useState } from 'react';
import type { UserCardConfig, CubeScheme, TaishinScheme, CardId } from '../types/card';
import { CUBE_SCHEME_LABELS, TAISHIN_SCHEME_LABELS } from '../data/cardData';
import { Settings2, ChevronDown, ChevronUp, Smartphone, Sparkles, CheckCircle2, CreditCard, Flame } from 'lucide-react';

interface Props {
  config: UserCardConfig;
  onChange: (newConfig: UserCardConfig) => void;
}

export const UserConfigBar: React.FC<Props> = ({ config, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const owned = config.ownedCards || { cube: true, gogo: true, sport: true, daway: true };
  const ownedCount = Object.values(owned).filter(Boolean).length;

  const updateConfig = <K extends keyof UserCardConfig>(key: K, value: UserCardConfig[K]) => {
    onChange({
      ...config,
      [key]: value
    });
  };

  const toggleOwnedCard = (cardId: CardId) => {
    const current = config.ownedCards || { cube: true, gogo: true, sport: true, daway: true };
    const updated = { ...current, [cardId]: !current[cardId] };
    if (Object.values(updated).some(Boolean)) {
      updateConfig('ownedCards', updated);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 mb-6 overflow-hidden">
      {/* 頂部快速狀態條 */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-50/70 transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Settings2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-800 flex items-center gap-2">
              <span>你的 4 張卡片條件設定</span>
              <span className="text-xs font-normal text-slate-500 hidden sm:inline">（查詢通路時自動匹配最佳方案；點擊展開調整持有卡片與帳戶條件）</span>
            </div>
            <div className="text-xs text-slate-500 flex flex-wrap gap-x-2 gap-y-1 mt-0.5">
              <span>💳 持有卡片：<strong className={ownedCount === 4 ? "text-indigo-600" : "text-amber-600"}>{ownedCount === 4 ? "4 張全開" : `${ownedCount}/4 張啟用`}</strong></span>
              <span>•</span>
              <span>CUBE：<strong className="text-amber-600">Lv{config.cubeLevel || 2} ({((config.cubeLevel || 2) === 3 ? 3.3 : (config.cubeLevel || 2) === 2 ? 3.0 : 2.0).toFixed(1)}%)</strong></span>
              <span>•</span>
              <span>SPORT：<strong className={config.sportCalorieMet ? "text-emerald-600" : "text-slate-400"}>{config.sportCalorieMet ? "🔥 7000卡已達標" : "未達標"}</strong></span>
              <span>•</span>
              <span>DAWAY：<strong className="text-blue-600">{config.dawayIsNewUser ? "新戶 3%" : "舊戶 2.0%"}</strong></span>
              <span>•</span>
              <span>台新：<strong className={config.gogoRichartLinked ? "text-emerald-600" : "text-slate-400"}>{config.gogoRichartLinked ? "已綁 Richart" : "未綁帳戶"}</strong></span>
              <span>•</span>
              <span>📱 裝置：<strong className="text-indigo-600">Samsung Pay 首位</strong></span>
            </div>
          </div>
        </div>

        <button 
          className="text-slate-400 hover:text-slate-600 p-1 flex items-center gap-1 text-xs font-medium"
          aria-label="Toggle settings"
        >
          <span className="hidden sm:inline">{isOpen ? '收合設定' : '展開完整卡片與方案設定'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* 展開後的自訂面板 */}
      {isOpen && (
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/50 space-y-6">
          {/* 0. 我持有的卡片開關 (自訂推薦範圍) */}
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-indigo-600" />
                我持有的信用卡（未持有的卡片不會被推薦為首選冠軍 No.1）
              </span>
              <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full w-fit">
                目前啟用：{ownedCount} / 4 張卡片
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'cube' as CardId, name: '國泰 CUBE 卡', tag: '3%~3.3% 小樹點', color: 'border-amber-400 bg-amber-50/90 text-amber-950 ring-1 ring-amber-300' },
                { id: 'gogo' as CardId, name: '台新卡 (7+1大刷)', tag: '最高 10% 台新Point', color: 'border-zinc-800 bg-zinc-900 text-white shadow-xs' },
                { id: 'sport' as CardId, name: '永豐 SPORT 卡', tag: '感應最高 7% 豐點', color: 'border-emerald-500 bg-emerald-50/90 text-emerald-950 ring-1 ring-emerald-300' },
                { id: 'daway' as CardId, name: '永豐 DAWAY 卡', tag: 'LINE Pay 2%~3%', color: 'border-blue-500 bg-blue-50/90 text-blue-950 ring-1 ring-blue-300' }
              ].map(card => {
                const isOwned = owned[card.id] !== false;
                return (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => toggleOwnedCard(card.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                      isOwned
                        ? card.color
                        : 'border-slate-200 bg-slate-100/70 text-slate-400 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${!isOwned ? 'line-through text-slate-400' : ''}`}>{card.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                        isOwned ? 'bg-black/10 text-current' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {isOwned ? '✓ 持有' : '未持有'}
                      </span>
                    </div>
                    <div className="text-[10px] mt-1 opacity-80 truncate">
                      {card.tag}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          {/* 1. 國泰 CUBE 權益切換 (官方即時方案) */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-amber-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                國泰 CUBE 卡：今日設定權益（每日可切換一次，23:59前切換整天生效）
              </span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {(Object.keys(CUBE_SCHEME_LABELS) as CubeScheme[]).map((schemeKey) => {
                const item = CUBE_SCHEME_LABELS[schemeKey];
                const isSelected = config.cubeScheme === schemeKey;
                return (
                  <button
                    key={schemeKey}
                    type="button"
                    onClick={() => updateConfig('cubeScheme', schemeKey)}
                    className={`p-2.5 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'bg-amber-50/90 border-amber-400 text-amber-950 shadow-sm ring-1 ring-amber-400'
                        : 'bg-white border-slate-200/90 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold flex items-center gap-1">
                        <span>{item.icon}</span> {item.name}
                      </span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      {item.tag}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. 台新卡 權益切換 (全新 7+1 大刷方案) */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-zinc-800">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 inline-block"></span>
                台新卡 (Richart / @GoGo / 玫瑰太陽)：全新 7+1 大刷自選權益（Richart Life App 每日切換）
              </span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {(Object.keys(TAISHIN_SCHEME_LABELS) as TaishinScheme[]).map((schemeKey) => {
                const item = TAISHIN_SCHEME_LABELS[schemeKey];
                const isSelected = config.taishinScheme === schemeKey;
                return (
                  <button
                    key={schemeKey}
                    type="button"
                    onClick={() => updateConfig('taishinScheme', schemeKey)}
                    className={`p-2.5 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm ring-1 ring-zinc-900'
                        : 'bg-white border-slate-200/90 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold flex items-center gap-1">
                        <span>{item.icon}</span> {item.name}
                      </span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <div className={`text-[10px] mt-1 line-clamp-1 ${isSelected ? 'text-zinc-300' : 'text-slate-500'}`}>
                      {item.tag}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. 各卡身分與扣繳帳戶條件 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1 border-t border-slate-200/60">
            {/* 國泰 CUBE 卡等級設定 */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                國泰 CUBE 卡會員等級
              </div>

              <div className="p-2 rounded-lg bg-slate-50">
                <div className="text-xs font-medium text-slate-600 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  CUBE App 會員級別
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    { lv: 1 as const, label: 'Lv1 (2%)' },
                    { lv: 2 as const, label: 'Lv2 (3%)' },
                    { lv: 3 as const, label: 'Lv3 (3.3%)' }
                  ].map(item => {
                    const isSelected = (config.cubeLevel || 2) === item.lv;
                    return (
                      <button
                        key={item.lv}
                        type="button"
                        onClick={() => updateConfig('cubeLevel', item.lv)}
                        className={`py-1.5 px-1 rounded-md text-xs font-bold border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
                <div className="text-[10px] text-slate-500 mt-2 leading-tight space-y-0.5">
                  <div>
                    {(config.cubeLevel || 2) === 2
                      ? '✅ Lv2（帳戶自扣/繳費）：樂饗/數位/旅行享 3.0%'
                      : (config.cubeLevel || 2) === 3
                        ? '👑 Lv3（財富管理 VIP）：樂饗/數位/旅行享 3.3%'
                        : '📌 Lv1（一般卡友核卡即享）：享 2.0%'}
                  </div>
                  <div className="text-amber-700/80 font-medium">
                    ⚠️ 提醒：「集精選」中油直營/超商/全聯不論等級固定為 2.0%
                  </div>
                </div>
              </div>
            </div>

            {/* 永豐 SPORT 卡設定 */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 mb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                永豐 SPORT 卡 (Samsung/Apple Pay 7%)
              </div>

              <div className="space-y-2.5">
                <label className="flex items-center justify-between p-2 rounded-lg bg-slate-50 cursor-pointer hover:bg-slate-100/70 transition-colors">
                  <div className="flex items-center gap-2">
                    <Flame className={`w-4 h-4 ${config.sportCalorieMet ? 'text-orange-500' : 'text-slate-400'}`} />
                    <span className="text-xs font-medium text-slate-700">汗水/DACARD 達標 7000卡</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.sportCalorieMet}
                    onChange={(e) => updateConfig('sportCalorieMet', e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                </label>

                <label className="flex items-center justify-between p-2 rounded-lg bg-slate-50 cursor-pointer hover:bg-slate-100/70 transition-colors">
                  <div className="flex items-center gap-2">
                    <Smartphone className={`w-4 h-4 ${config.sportQuotaAvailable ? 'text-emerald-500' : 'text-slate-400'}`} />
                    <span className="text-xs font-medium text-slate-700">Samsung/Apple Pay 額度充足</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={config.sportQuotaAvailable}
                    onChange={(e) => updateConfig('sportQuotaAvailable', e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                </label>
              </div>
            </div>

            {/* 永豐 DAWAY 卡設定 */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-blue-800 flex items-center gap-1.5 mb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                永豐 DAWAY 卡 (LINE Pay)
              </div>

              <div className="p-2 rounded-lg bg-slate-50">
                <div className="text-xs font-medium text-slate-600 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  核卡身分資格
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => updateConfig('dawayIsNewUser', true)}
                    className={`py-1.5 px-2 rounded-md text-xs font-medium border text-center transition-all cursor-pointer ${
                      config.dawayIsNewUser
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    ✨ 新戶 (3.0%)
                  </button>
                  <button
                    type="button"
                    onClick={() => updateConfig('dawayIsNewUser', false)}
                    className={`py-1.5 px-2 rounded-md text-xs font-medium border text-center transition-all cursor-pointer ${
                      !config.dawayIsNewUser
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    舊戶 (2.0%)
                  </button>
                </div>
              </div>
            </div>

            {/* 台新帳戶扣繳設定 */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200">
              <div className="text-xs font-bold text-zinc-800 flex items-center gap-1.5 mb-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700 inline-block"></span>
                台新帳戶自動扣繳
              </div>

              <label className="flex items-center justify-between p-2 rounded-lg bg-slate-50 cursor-pointer hover:bg-slate-100/70 transition-colors">
                <div className="text-xs">
                  <div className="font-medium text-slate-700">Richart 自動扣繳卡款</div>
                  <div className="text-[11px] text-slate-400">解鎖 Level 2 (3.3%~3.8% 或 Chill 10%)</div>
                </div>
                <input
                  type="checkbox"
                  checked={config.gogoRichartLinked}
                  onChange={(e) => updateConfig('gogoRichartLinked', e.target.checked)}
                  className="rounded text-zinc-800 focus:ring-zinc-600 w-4 h-4"
                />
              </label>
            </div>

            {/* 行動支付載具偏好 */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 sm:col-span-2">
              <div className="text-xs font-bold text-indigo-900 flex items-center gap-1.5 mb-2.5">
                <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                感應支付順位偏好（影響 SPORT 卡等感應推薦標籤順序）
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'samsung_pay' as const, label: '📱 三星 (Samsung Pay 首位)' },
                  { id: 'google_pay' as const, label: '🤖 Android (Google Pay)' },
                  { id: 'apple_pay' as const, label: '🍏 iPhone (Apple Pay)' }
                ].map((device) => {
                  const isSelected = (config.preferredMobilePay || 'samsung_pay') === device.id;
                  return (
                    <button
                      key={device.id}
                      type="button"
                      onClick={() => updateConfig('preferredMobilePay', device.id)}
                      className={`py-2 px-2 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {device.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
