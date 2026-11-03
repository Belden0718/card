import React from 'react';
import { X, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CardCheatSheet: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-7 relative">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-6">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">4大信用卡核心規則速查指南</h2>
            <p className="text-xs text-slate-500">掌握各卡神級優勢與避坑規則</p>
          </div>
        </div>

        <div className="space-y-5">
          {/* 1. 永豐 SPORT 卡 */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-emerald-900 text-sm">永豐 SPORT 卡</span>
              <span className="text-xs font-black bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                最高 7.0% 豐點
              </span>
            </div>
            <ul className="text-xs text-emerald-950 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>超商/加油之神</strong>：7-11、全家、中油加油只要走 <strong>Apple Pay / Google Pay / Samsung Pay 感應</strong>，享最高 7%！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>門檻</strong>：每月需在「汗水不白流」App 達標 7,000 大卡。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>上限注意</strong>：+5% 指定加碼每月上限 300 點（折合月刷 NT$6,000 封頂），超過後降為 1%~2%。</span>
              </li>
            </ul>
          </div>

          {/* 2. 台新卡 (Richart / @GoGo / 玫瑰太陽) */}
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-zinc-900 text-sm">台新卡 (全新 7+1 大刷權益)</span>
              <span className="text-xs font-black bg-zinc-900 text-white px-2 py-0.5 rounded-full">
                最高 10% 台新Point
              </span>
            </div>
            <ul className="text-xs text-zinc-800 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>🍹 Chill刷 (10%)</strong>：手搖飲（50嵐/得正/CAFE!N）、燒肉火鍋（詹記/屋馬）、串流（Netflix/Disney+）狂享 <strong>10%</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>📱 Pay著刷 (3.8%)</strong>：四大超商出示<strong>「台新Pay」掃碼結帳</strong>通吃 <strong>3.8%</strong>！（單筆限額 $3,000）</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>⚡ 天天刷 (3.3%~3.8%)</strong>：中油直營/全國加油、高鐵台鐵通勤、7-11/全家(台新Pay) 享加碼！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>🍱 好饗刷 (3.3%) & 💻 數趣刷 (3.3%)</strong>：全台餐飲外送 3.3%、綜合網購電商 3.3%！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>超大地雷</strong>：在超商<strong>絕對不能拿實體卡感應或插卡（直接 0%）</strong>！必須出示「台新Pay」掃碼！</span>
              </li>
            </ul>
          </div>

          {/* 3. 國泰世華 CUBE 卡 */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-amber-900 text-sm">國泰世華 CUBE 卡</span>
              <span className="text-xs font-black bg-amber-500 text-white px-2 py-0.5 rounded-full">
                指定 3%~3.3% 無上限
              </span>
            </div>
            <ul className="text-xs text-amber-950 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>靈活權益切換</strong>：每天可換一次（23:59前切換整天生效）。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>集精選</strong>：中油直營 (3.3%)、7-11、全家、全聯 (3.0%) 回饋<strong>無上限</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>超大地雷</strong>：7-11、全家、全聯若「未切換至集精選」，直接列為 <strong>0% 排除</strong>！</span>
              </li>
            </ul>
          </div>

          {/* 4. 永豐 DAWAY 卡 */}
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sky-900 text-sm">永豐 DAWAY 卡</span>
              <span className="text-xs font-black bg-sky-600 text-white px-2 py-0.5 rounded-full">
                LINE Pay 3.0% / 1.5%
              </span>
            </div>
            <ul className="text-xs text-sky-950 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>LINE Pay 主力</strong>：新戶綁定 LINE Pay 享 3.0% LINE POINTS，舊戶 1.5%。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>上限注意</strong>：新戶加碼 +2% 每期上限 800 點（折合每月消費 NT$40,000 封頂），超額後降為 1% 無上限。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>超大地雷</strong>：<strong>7-ELEVEN 門市的 LINE Pay 目前不支援永豐信用卡！</strong>（刷不過）。</span>
              </li>
            </ul>
          </div>

          {/* 5. 封頂上限全景橫向對照表 */}
          <div className="p-4 rounded-2xl bg-slate-900 text-white">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
              <span>📊 4大信用卡封頂上限與門檻總盤點</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start justify-between py-1 border-b border-white/10">
                <span className="font-bold text-amber-300">國泰 CUBE 卡</span>
                <span className="text-right text-emerald-400 font-semibold">✅ 方案內回饋無上限（刷多少賺多少）</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-white/10">
                <span className="font-bold text-zinc-300">台新 Richart 卡</span>
                <span className="text-right text-emerald-400 font-semibold">✅ 7+1方案無上限（⚠️超商限單筆$3,000）</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-white/10">
                <span className="font-bold text-emerald-300">永豐 SPORT 卡</span>
                <span className="text-right text-amber-300 font-semibold">⚠️ 每月 NT$6,000 封頂（超額降為 1% 無上限）</span>
              </div>
              <div className="flex items-start justify-between py-1">
                <span className="font-bold text-blue-300">永豐 DAWAY 卡</span>
                <span className="text-right text-amber-300 font-semibold">⚠️ 新戶每月 NT$40,000 封頂（超額降為 1% 無上限）</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
          >
            我瞭解了，關閉指南
          </button>
        </div>
      </div>
    </div>
  );
};
