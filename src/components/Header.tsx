import React from 'react';
import { CreditCard, HelpCircle } from 'lucide-react';

interface Props {
  onOpenCheatSheet: () => void;
}

export const Header: React.FC<Props> = ({ onOpenCheatSheet }) => {
  return (
    <header className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
      <div>
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>卡友聰明刷</span>
              <span className="text-xs bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded-md border border-slate-200/80">
                4大主力卡決策神器
              </span>
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              國泰 CUBE • 台新黑狗 • 永豐 SPORT • 永豐 DAWAY
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenCheatSheet}
          className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
        >
          <HelpCircle className="w-4 h-4 text-indigo-600" />
          <span>4卡規則速查表</span>
        </button>
      </div>
    </header>
  );
};
