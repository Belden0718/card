import React, { useState } from 'react';
import type { UserCardConfig, CubeScheme, TaishinScheme } from '../types/card';
import { CUBE_SCHEME_LABELS, TAISHIN_SCHEME_LABELS } from '../data/cardData';
import { Settings2, ChevronDown, ChevronUp, Flame, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

interface Props {
  config: UserCardConfig;
  onChange: (newConfig: UserCardConfig) => void;
}

export const UserConfigBar: React.FC<Props> = ({ config, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const updateConfig = <K extends keyof UserCardConfig>(key: K, value: UserCardConfig[K]) => {
    onChange({
      ...config,
      [key]: value
    });
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
              <span className="text-xs font-normal text-slate-500 hidden sm:inline">（查詢通路時自動匹配最佳方案；點擊展開調整帳戶條件）</span>
            </div>
            <div className="text-xs text-slate-500 flex flex-wrap gap-x-2 gap-y-1 mt-0.5">
              <span>⚡ 方案決策：<strong className="text-indigo-600">全自動匹配 No.1 最佳方案</strong></span>
              <span>•</span>
              <span>SPORT：<strong className={config.sportCalorieMet ? "text-emerald-600" : "text-slate-400"}>{config.sportCalorieMet ? "🔥 7000卡已達標" : "未達標"}</strong></span>
              <span>•</span>
              <span>DAWAY：<strong className="text-blue-600">{config.dawayIsNewUser ? "新戶 3%" : "舊戶 1.5%"}</strong></span>
              <span>•</span>
              <span>台新：<strong className={config.gogoRichartLinked ? "text-emerald-600" : "text-slate-400"}>{config.gogoRichartLinked ? "已綁 Richart" : "未綁帳戶"}</strong></span>
            </div>
          </div>
        </div>

        <button 
          className="text-slate-400 hover:text-slate-600 p-1 flex items-center gap-1 text-xs font-medium"
          aria-label="Toggle settings"
        >
          <span className="hidden sm:inline">{isOpen ? '收合設定' : '展開完整方案設定'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* 展開後的自訂面板 */}
      {isOpen && (
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/50 space-y-6">
          {/* 1. 國泰 CUBE 權益切換 (9大方案) */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-amber-700">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                國泰 CUBE 卡：今日設定權益（每日可切換一次，23:59前切換整天生效）
              </span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
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

          {/* 3. 永豐與扣繳帳戶條件 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 border-t border-slate-200/60">
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
                    className={`py-1.5 px-2 rounded-md text-xs font-medium border text-center transition-all ${
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
                    className={`py-1.5 px-2 rounded-md text-xs font-medium border text-center transition-all ${
                      !config.dawayIsNewUser
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    舊戶 (1.5%)
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
          </div>
        </div>
      )}
    </div>
  );
};
