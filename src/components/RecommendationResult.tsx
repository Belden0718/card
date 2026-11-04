import React, { useState } from 'react';
import type { CardRewardResult, ScenarioChannel } from '../types/card';
import { calculateExactRewardPoints } from '../data/cardData';
import { Trophy, AlertTriangle, Zap, CheckCircle, Calculator, Info, ShieldCheck, Smartphone, ExternalLink } from 'lucide-react';

function openAppOrFallback(scheme: string, fallbackUrl: string) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) {
    window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    return;
  }
  const start = Date.now();
  window.location.href = scheme;
  setTimeout(() => {
    if (Date.now() - start < 2500) {
      window.location.href = fallbackUrl;
    }
  }, 1500);
}

interface Props {
  channel: ScenarioChannel;
  results: CardRewardResult[];
}

export const RecommendationResult: React.FC<Props> = ({
  channel,
  results,
}) => {
  const [calcAmount, setCalcAmount] = useState<number>(1000);
  const [showCalculator, setShowCalculator] = useState<boolean>(true);

  const bestCard = results[0];
  const otherCards = results.slice(1);

  return (
    <div className="space-y-6">
      {/* 當前通路標題列 */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-3xl">{channel.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>{channel.name}</span>
                <span className="text-xs bg-indigo-100 text-indigo-700 font-semibold px-2 py-0.5 rounded-full">
                  決策推薦
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">{channel.description}</p>
            </div>
          </div>
        </div>

        {/* 試算機快速切換 */}
        <button
          onClick={() => setShowCalculator(!showCalculator)}
          className="self-start sm:self-auto text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 transition-colors"
        >
          <Calculator className="w-3.5 h-3.5 text-indigo-600" />
          <span>{showCalculator ? '隱藏消費試算' : '開啟金額試算'}</span>
        </button>
      </div>

      {/* 🥇 今日最佳推薦冠軍卡片 */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-7 shadow-xl ring-1 ring-white/10">
        {/* 背景裝飾 */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-amber-950 font-black text-xs shadow-sm">
              <Trophy className="w-3.5 h-3.5 fill-amber-950" />
              今日最佳首選 🥇 No.1
            </div>

            {bestCard.capWarning && (
              <span className="text-[11px] bg-white/10 text-indigo-200 px-2.5 py-1 rounded-full border border-white/10">
                {bestCard.capWarning}
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 border-b border-white/10">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {bestCard.cardName}
                </span>
                {bestCard.requiredSchemeTag && (
                  <span className="text-xs bg-amber-400 text-amber-950 font-black px-2.5 py-1 rounded-lg shadow-sm border border-amber-300 flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-amber-950" />
                    {bestCard.requiredSchemeTag}
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm text-indigo-200 mt-1 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>此通路回饋率全卡第一</span>
              </div>
            </div>

            <div className="flex items-baseline gap-1 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
              <span className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
                {bestCard.rewardRate.toFixed(1)}%
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {bestCard.rewardType}
              </span>
            </div>
          </div>

          {/* 關鍵：推薦支付方式 */}
          <div className="mt-5 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <div className="text-xs text-indigo-200 font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              指定付款方式（必讀）：
            </div>
            <div className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>{bestCard.bestPaymentMethod.label}</span>
            </div>
            {bestCard.bestPaymentMethod.note && (
              <div className="text-xs text-amber-200/90 mt-1 font-medium">
                ⚠️ {bestCard.bestPaymentMethod.note}
              </div>
            )}
          </div>

          {/* 快捷喚醒對應 App 切換方案按鈕 */}
          {bestCard.requiredSchemeName && (bestCard.cardId === 'cube' || bestCard.cardId === 'gogo') && (
            <div className="mt-3 flex items-center gap-2">
              {bestCard.cardId === 'cube' ? (
                <button
                  type="button"
                  onClick={() => openAppOrFallback('cathaybk://', 'https://www.cathaybk.com.tw/cathaybk/personal/digital-banking/cube-app/')}
                  className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  title="直接喚醒國泰 CUBE App 切換指定方案"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>📱 開啟 CUBE App 切換【{bestCard.requiredSchemeName}】</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => openAppOrFallback('cardaily://', 'https://richartlife.taishinbank.com.tw/')}
                  className="bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-zinc-600 flex items-center gap-1.5 transition-all cursor-pointer"
                  title="直接喚醒台新 Richart Life App 切換指定方案"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>📱 開啟 Richart Life 切換【{bestCard.requiredSchemeName}】</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </button>
              )}
            </div>
          )}

          {/* 上限與封頂規則徽章 */}
          {bestCard.capInfo && (
            <div className="mt-3 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs text-indigo-100">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>封頂上限規則：<strong className="text-white font-bold">{bestCard.capInfo.capNote}</strong></span>
            </div>
          )}

          {/* 回饋邏輯拆解 */}
          <div className="mt-3 pt-3 flex flex-wrap gap-2">
            {bestCard.details.map((detail, idx) => (
              <span
                key={idx}
                className="text-xs bg-white/5 text-slate-300 px-2.5 py-1 rounded-lg border border-white/5"
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ⚠️ 本通路踩坑避雷區 (Critical Warnings) */}
      {channel.pitfalls.length > 0 && (
        <div className="bg-red-50/90 border border-red-200 rounded-2xl p-4 sm:p-5 shadow-xs">
          <div className="flex items-center gap-2 text-red-800 font-bold text-sm mb-2.5">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span>避雷指南：{channel.name} 最容易踩的 0% 地雷</span>
          </div>
          <ul className="space-y-1.5 text-xs text-red-700/90 leading-relaxed">
            {channel.pitfalls.map((pitfall, index) => (
              <li key={index} className="flex items-start gap-1.5">
                <span className="text-red-500 font-bold">•</span>
                <span>{pitfall}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 💰 消費金額即時試算機 */}
      {showCalculator && (
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-indigo-600" />
              <h3 className="text-sm font-bold text-slate-800">消費金額即時試算</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">預計消費金額 NT$</span>
              <input
                type="number"
                min="0"
                step="100"
                value={calcAmount}
                onChange={(e) => setCalcAmount(Math.max(0, Number(e.target.value) || 0))}
                className="w-28 px-2.5 py-1 bg-slate-50 border border-slate-300 rounded-lg text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {results.map((res) => {
              const exact = calculateExactRewardPoints(calcAmount, res);
              const isBest = res.cardId === bestCard.cardId;

              return (
                <div
                  key={res.cardId}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isBest
                      ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-300'
                      : res.isBlocked
                        ? 'bg-slate-50 border-slate-200 opacity-60'
                        : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="text-[11px] font-semibold text-slate-500 truncate mb-1">
                    {res.cardName.replace('銀行 ', '')}
                  </div>
                  <div className={`text-xl font-black ${
                    isBest ? 'text-amber-600' : res.isBlocked ? 'text-slate-400' : 'text-slate-800'
                  }`}>
                    {res.isBlocked ? '0' : exact.points}
                    <span className="text-xs font-normal text-slate-500 ml-0.5">點/元</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    ({res.rewardRate.toFixed(1)}% {res.rewardType})
                  </div>
                  {exact.isCapped && exact.capNote && (
                    <div className="text-[10px] text-amber-700 bg-amber-100/90 px-1.5 py-0.5 rounded mt-1.5 font-bold leading-tight">
                      {exact.capNote}
                    </div>
                  )}
                  {!exact.isCapped && !res.isBlocked && res.rewardRate > 0 && (
                    <div className="text-[10px] text-emerald-600 mt-1 font-semibold">
                      {res.capInfo?.isUnlimited ? '✅ 回饋無上限' : '✅ 未達上限'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 🥈 次佳與其他卡片排名 */}
      <div>
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span>其他卡片回饋比較與備選方案</span>
        </h3>

        <div className="space-y-3">
          {otherCards.map((card, idx) => {
            const rank = idx + 2;
            const isZero = card.rewardRate === 0 || card.isBlocked;

            return (
              <div
                key={card.cardId}
                className={`p-4 rounded-2xl border transition-all ${
                  isZero
                    ? 'bg-slate-50/80 border-slate-200/80 opacity-75'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                      rank === 2
                        ? 'bg-slate-200 text-slate-700'
                        : rank === 3
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-500'
                    }`}>
                      #{rank}
                    </div>

                    <div>
                      <div className="font-bold text-slate-900 flex flex-wrap items-center gap-2">
                        <span>{card.cardName}</span>
                        {card.requiredSchemeTag && (
                          <span className="text-xs bg-indigo-50 text-indigo-700 font-bold px-2 py-0.5 rounded-md border border-indigo-200">
                            ⚡ {card.requiredSchemeTag}
                          </span>
                        )}
                        {card.capWarning && (
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-normal">
                            {card.capWarning}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-600 mt-1 flex items-center gap-1.5 font-medium">
                        <span>{card.bestPaymentMethod.label}</span>
                      </div>
                      {card.bestPaymentMethod.note && (
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          💡 {card.bestPaymentMethod.note}
                        </div>
                      )}
                      <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                        <span className="font-semibold text-slate-700">封頂上限：</span>
                        <span>{card.capInfo?.capNote || '依銀行公告規範'}</span>
                      </div>
                      {card.requiredSchemeName && (card.cardId === 'cube' || card.cardId === 'gogo') && (
                        <div className="mt-2 flex items-center gap-2">
                          {card.cardId === 'cube' ? (
                            <button
                              type="button"
                              onClick={() => openAppOrFallback('cathaybk://', 'https://www.cathaybk.com.tw/cathaybk/personal/digital-banking/cube-app/')}
                              className="bg-amber-50 hover:bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-amber-200 flex items-center gap-1 transition-all cursor-pointer"
                            >
                              <Smartphone className="w-3 h-3 text-amber-600" />
                              <span>📱 開啟 CUBE App 切換【{card.requiredSchemeName}】</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => openAppOrFallback('cardaily://', 'https://richartlife.taishinbank.com.tw/')}
                              className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-300 flex items-center gap-1 transition-all cursor-pointer"
                            >
                              <Smartphone className="w-3 h-3 text-slate-600" />
                              <span>📱 開啟 Richart Life 切換【{card.requiredSchemeName}】</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl font-black ${
                        isZero ? 'text-slate-400' : 'text-slate-800'
                      }`}>
                        {card.rewardRate.toFixed(1)}%
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {card.rewardType}
                      </span>
                    </div>
                    {isZero && (
                      <span className="text-[10px] font-bold text-red-500">
                        不推薦（0% 或排除）
                      </span>
                    )}
                  </div>
                </div>

                {/* 警告或備註 */}
                {card.warning && (
                  <div className="mt-2.5 text-xs text-amber-700 bg-amber-50/80 px-2.5 py-1.5 rounded-lg flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600" />
                    <span>{card.warning}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
