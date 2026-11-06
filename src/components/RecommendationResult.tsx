import React, { useState } from 'react';
import type { CardRewardResult, ScenarioChannel, CardId } from '../types/card';
import { calculateExactRewardPoints } from '../data/cardData';
import { Trophy, AlertTriangle, Zap, CheckCircle, Calculator, Info, ShieldCheck, Smartphone, ExternalLink, Star } from 'lucide-react';

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
  ownedCards?: Record<CardId, boolean>;
  dawayIsNewUser?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const RecommendationResult: React.FC<Props> = ({
  channel,
  results,
  ownedCards,
  dawayIsNewUser,
  isFavorite,
  onToggleFavorite,
}) => {
  const [calcAmount, setCalcAmount] = useState<number>(1000);
  const [showCalculator, setShowCalculator] = useState<boolean>(true);

  const isCardOwned = (cardId: CardId) => !ownedCards || ownedCards[cardId] !== false;

  // 僅保留有回饋、未被封鎖排除，且為使用者所持有的卡片
  const validCards = results.filter((card) => card.rewardRate > 0 && !card.isBlocked && isCardOwned(card.cardId));
  const bestCard = validCards[0];
  const otherCards = validCards.slice(1);

  // 檢查是否有未持有的卡片其實回饋更高（提醒使用者）
  const unownedBetterCards = results.filter((card) =>
    card.rewardRate > (bestCard?.rewardRate || 0) &&
    !card.isBlocked &&
    !isCardOwned(card.cardId)
  );

  return (
    <div className="space-y-6">
      {/* 當前通路標題列 */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-start sm:items-center gap-3 min-w-0">
            <span className="text-3xl shrink-0">{channel.icon}</span>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex flex-wrap items-center gap-2 break-words [overflow-wrap:anywhere]">
                <span>{channel.name}</span>
                <span className="text-xs bg-indigo-100 text-indigo-700 font-semibold px-2 py-0.5 rounded-full shrink-0">
                  決策推薦
                </span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5 break-words [overflow-wrap:anywhere]">{channel.description}</p>
            </div>
          </div>
        </div>

        {/* 右側按鈕組：常用收藏 + 試算機快速切換 */}
        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          {onToggleFavorite && (
            <button
              type="button"
              onClick={onToggleFavorite}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer ${
                isFavorite
                  ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              title={isFavorite ? '點擊取消常用' : '點擊加入常用'}
            >
              <Star className={`w-3.5 h-3.5 ${isFavorite ? 'fill-amber-400 text-amber-500' : 'text-slate-400'}`} />
              <span>{isFavorite ? '已在常用' : '加入常用'}</span>
            </button>
          )}

          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5 text-indigo-600" />
            <span>{showCalculator ? '隱藏試算' : '開啟試算'}</span>
          </button>
        </div>
      </div>

      {/* 🥇 今日最佳推薦冠軍卡片（若無大於0%的推薦卡片則顯示全排除警示） */}
      {bestCard ? (
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

            {/* 未持有但回饋更高的友善提示 (若使用者手邊未持有原第一名) */}
            {unownedBetterCards.length > 0 && (
              <div className="mt-3 px-3.5 py-2.5 rounded-xl bg-amber-500/15 border border-amber-400/30 text-xs text-amber-200 flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-300 shrink-0" />
                <span>
                  💡 <strong>更優卡片提示</strong>：若您有持有 <strong>{unownedBetterCards[0].cardName}</strong>，此通路最高可享 <strong>{unownedBetterCards[0].rewardRate.toFixed(1)}%</strong>（您目前設定為未持有，故推薦手邊持卡冠軍）。
                </span>
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
      ) : (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-900 text-white p-6 sm:p-7 shadow-xl ring-1 ring-white/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl shrink-0">🚫</span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">4 大信用卡於此通路均無回饋 (0% 排除)</h3>
              <p className="text-xs text-slate-400 mt-0.5">本工具支援之 4 張信用卡在此均無加碼或不支援刷卡，不推薦使用</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            💡 <strong>刷卡建議</strong>：請使用店家指定專屬支付方式（例如好市多量販店請使用富邦 Costco 聯名卡或現金支付）。
          </div>
        </div>
      )}

      {/* ⚠️ 本通路踩坑避雷區 (Critical Warnings) */}
      {channel.pitfalls.length > 0 && (
        <div className="bg-red-50/90 border border-red-200 rounded-2xl p-4 sm:p-5 shadow-xs">
          <div className="flex items-center gap-2 text-red-800 font-bold text-sm mb-2.5 min-w-0">
            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
            <span className="break-words [overflow-wrap:anywhere]">避雷指南：{channel.name} 最容易踩的 0% 地雷</span>
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

      {/* 💰 消費金額即時試算機 (僅試算有回饋之有效卡片) */}
      {showCalculator && validCards.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
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

          {/* 快捷金額膠囊 (含關鍵封頂臨界點) */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3.5 pb-3 border-b border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 mr-1 shrink-0">快選金額：</span>
            {[
              { label: '+$500', isDelta: true, value: 500 },
              { label: '$1,000', value: 1000 },
              { label: '🎯 $6,000 (SPORT封頂)', value: 6000, color: 'text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border-emerald-200' },
              ...(dawayIsNewUser
                ? [{ label: '🎯 $40,000 (DAWAY新戶封頂/買空機)', value: 40000, color: 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border-indigo-200' }]
                : [
                    { label: '🎯 $20,000 (DAWAY舊戶封頂)', value: 20000, color: 'text-blue-700 bg-blue-50 hover:bg-blue-100 border-blue-200' },
                    { label: '🎯 $40,000 (買空機/大筆消費)', value: 40000, color: 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border-indigo-200' }
                  ])
            ].map((chip) => {
              const isCurrent = !chip.isDelta && calcAmount === chip.value;
              return (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => {
                    if (chip.isDelta) {
                      setCalcAmount(prev => prev + chip.value);
                    } else {
                      setCalcAmount(chip.value);
                    }
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs ring-2 ring-indigo-200'
                      : chip.color || 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200'
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

          <div className={`grid gap-2.5 ${
            validCards.length === 1
              ? 'grid-cols-1 max-w-xs'
              : validCards.length === 2
                ? 'grid-cols-2'
                : validCards.length === 3
                  ? 'grid-cols-2 sm:grid-cols-3'
                  : 'grid-cols-2 sm:grid-cols-4'
          }`}>
            {validCards.map((res) => {
              const exact = calculateExactRewardPoints(calcAmount, res);
              const isBest = res.cardId === bestCard?.cardId;

              return (
                <div
                  key={res.cardId}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    isBest
                      ? 'bg-amber-50/70 border-amber-300 ring-1 ring-amber-300'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="text-[11px] font-semibold text-slate-500 truncate mb-1">
                    {res.cardName.replace('銀行 ', '')}
                  </div>
                  <div className={`text-xl font-black ${isBest ? 'text-amber-600' : 'text-slate-800'}`}>
                    {exact.points}
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
                  {!exact.isCapped && res.rewardRate > 0 && (
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

      {/* 🥈 次佳與其他卡片排名 (僅顯示有回饋 > 0% 的卡片，完全排除 0% 廢卡) */}
      {otherCards.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span>其他卡片回饋比較與備選方案</span>
            <span className="text-xs font-normal text-slate-400">（已排除 0% 無回饋卡片）</span>
          </h3>

          <div className="space-y-3">
            {otherCards.map((card, idx) => {
              const rank = idx + 2;

              return (
                <div
                  key={card.cardId}
                  className="p-4 rounded-2xl border bg-white border-slate-200 hover:border-slate-300 shadow-xs transition-all"
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
                        <span className="text-2xl font-black text-slate-800">
                          {card.rewardRate.toFixed(1)}%
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {card.rewardType}
                        </span>
                      </div>
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
      )}
    </div>
  );
};
