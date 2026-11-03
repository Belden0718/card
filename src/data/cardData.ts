import type { CardRewardResult, CubeScheme, ScenarioChannel, UserCardConfig } from '../types/card';

export const CUBE_SCHEME_LABELS: Record<CubeScheme, { name: string; tag: string; desc: string; icon: string }> = {
  selected: { name: '集精選', tag: '中油 / 超商 / 全聯 / 麥當勞', desc: '中油直營、7-11、全家、全聯、家樂福等指定 3%~3.3%', icon: '⭐' },
  dining: { name: '樂饗購', tag: '餐廳 / 外送 / 百貨 / 藥妝', desc: '國內餐飲、UberEats、foodpanda、新光三越、康是美 3.3%', icon: '🍱' },
  digital: { name: '玩數位', tag: '網購 / 串流 / App Store', desc: '蝦皮、momo、酷澎、Netflix、Disney+、App Store 3.3%', icon: '💻' },
  travel: { name: '趣旅行', tag: '海外實體 / 交通 / 機票', desc: '海外實體 3%、日韓實體、機票、Agoda、Uber叫車 3.3%', icon: '✈️' },
  kids: { name: '童樂匯', tag: '婦幼 / 親子樂園', desc: '母嬰婦幼生活用品、親子樂園 3.3%', icon: '🧸' },
  finance: { name: '來金網', tag: '保費 / 理財', desc: '國泰人壽保費、證券等 3%', icon: '💼' }
};

export const CHANNELS: ScenarioChannel[] = [
  // 加油
  {
    id: 'gas_cpc',
    name: '中油加油 (直營/加盟)',
    category: 'gas',
    icon: '⛽',
    description: '台灣中油加油站（支援 Apple Pay / Google Pay / LINE Pay / 實體卡）',
    pitfalls: [
      '切勿使用台新黑狗卡或永豐DAWAY卡直接實體插卡（僅 0.5%~1%）！',
      '黑狗卡必須用 LINE Pay 掃碼才享 3.8%！',
      '永豐 SPORT 卡務必用手機 Apple Pay / Google Pay 感應才有最高 7%！'
    ]
  },
  {
    id: 'gas_national',
    name: '全國 / 台亞 / 台塑加油站',
    category: 'gas',
    icon: '⛽',
    description: '非中油加油站（支援 Apple Pay / Google Pay / LINE Pay）',
    pitfalls: [
      '國泰 CUBE 卡的「集精選」僅限中油直營，全國/台亞刷 CUBE 僅有一般消費 0.3%！',
      '台亞/全國加油站建議走永豐 SPORT (AP/GP感應 7%) 或 黑狗卡 (LINE Pay 3.8%)。'
    ]
  },
  // 超商
  {
    id: 'convenience_711',
    name: '7-ELEVEN (統一超商)',
    category: 'convenience',
    icon: '🏪',
    description: '超商被銀行列為非一般消費排除通路，回饋規則最嚴格！',
    pitfalls: [
      '【致命地雷】7-11 門市的 LINE Pay「不支援」永豐信用卡扣款（刷不過）！',
      '【致命地雷】千萬不要拿台新黑狗卡實體刷卡或感應，直接 0% 回饋！',
      '【首選】永豐 SPORT 用 Apple Pay / Google Pay 手機感應享 7%！',
      '【備選】國泰 CUBE 切換至「集精選」直接感應或實體刷享 3% 小樹點。'
    ]
  },
  {
    id: 'convenience_family',
    name: '全家便利商店 (FamilyMart)',
    category: 'convenience',
    icon: '🏪',
    description: '支援 Apple Pay / Google Pay / LINE Pay / 全盈+PAY',
    pitfalls: [
      '千萬不要拿台新黑狗卡實體刷卡，直接 0% 回饋！',
      '永豐 SPORT 綁定 Apple Pay / Google Pay 感應享 7% 回饋最優！',
      '國泰 CUBE 切換至「集精選」直接刷享 3% 無上限。',
      '全家支援永豐 DAWAY 綁 LINE Pay（享 1.5%~3% LP）。'
    ]
  },
  {
    id: 'convenience_hilife_ok',
    name: '萊爾富 / OK 便利商店',
    category: 'convenience',
    icon: '🏪',
    description: '超商一般刷卡皆為 0% 回饋排除',
    pitfalls: [
      '國泰 CUBE 的「集精選」未涵蓋萊爾富/OK（僅 7-11 與全家）！',
      '建議使用永豐 SPORT 綁定 Apple Pay / Google Pay 感應（享 7%），或黑狗卡綁 LINE Pay。'
    ]
  },
  // 網購
  {
    id: 'online_shopee_momo',
    name: '蝦皮購物 / momo 購物網',
    category: 'online',
    icon: '🛍️',
    description: '大型綜合電商平台',
    pitfalls: [
      '國泰 CUBE 需切換至「玩數位」才享 3.3% 小樹點無上限！',
      '台新黑狗卡線上刷卡直接享 3.8%（每期帳單加碼上限 1,000 點，約可刷 3 萬元）！',
      '若使用 LINE Pay 結帳，DAWAY 新戶享 3% LINE POINTS。'
    ]
  },
  {
    id: 'online_coupang',
    name: '酷澎 Coupang',
    category: 'online',
    icon: '🚀',
    description: '日韓進口與火箭速配電商',
    pitfalls: [
      'CUBE 切換「玩數位」享 3.3% 無上限。',
      '台新黑狗卡享 3.8% 精選回饋。',
      '酷澎若被列為海外交易，請留意國泰 CUBE 需留意海外手續費或切換。'
    ]
  },
  // 外送
  {
    id: 'food_delivery',
    name: 'Uber Eats / foodpanda 外送',
    category: 'food',
    icon: '🛵',
    description: '各大美食與生鮮外送平台',
    pitfalls: [
      '國泰 CUBE 切換至「樂饗購」即享 3.3% 小樹點無上限，最省心首選！',
      '外送走 LINE Pay 結帳時，台新黑狗卡享 3.8%（每期上限 1,000 點）！'
    ]
  },
  // 餐廳
  {
    id: 'dining_restaurant',
    name: '國內實體餐廳 / 聚餐 / 咖啡廳',
    category: 'food',
    icon: '🍽️',
    description: '獨立餐廳、星巴克、連鎖餐飲等',
    pitfalls: [
      '國泰 CUBE 切換至「樂饗購」，國內一般餐飲皆享 3.3% 無上限！',
      '若餐廳支援 Apple Pay 感應，且 SPORT 卡額度未滿，永豐 SPORT 感應享 7% 完勝！'
    ]
  },
  // 超市量販
  {
    id: 'supermarket_px',
    name: '全聯福利中心',
    category: 'supermarket',
    icon: '🛒',
    description: '全聯大部分信用卡直接刷卡為 0% 回饋',
    pitfalls: [
      '【注意】全聯直接刷黑狗卡、DAWAY、SPORT 實體卡皆為 0% 回饋！',
      '【首選】國泰 CUBE 切換至「集精選」，實體刷卡直接拿 3.0% 小樹點！'
    ]
  },
  {
    id: 'supermarket_carrefour',
    name: '家樂福 / 大潤發',
    category: 'supermarket',
    icon: '🏬',
    description: '大型量販超市',
    pitfalls: [
      '永豐 SPORT 卡使用 Apple Pay / Google Pay 感應享 7%！',
      '國泰 CUBE 切換至「集精選」，家樂福享 3% 無上限。'
    ]
  },
  // 海外
  {
    id: 'travel_overseas',
    name: '海外實體消費 (日韓旅遊 / 歐美)',
    category: 'travel',
    icon: '✈️',
    description: '國外實體店面外幣消費（需扣 1.5% 國際手續費）',
    pitfalls: [
      '國泰 CUBE 切換至「趣旅行」或「日本賞」，海外實體消費享 3%~3.5% 無上限！',
      '永豐 DAWAY 卡海外消費享最高 3% LINE POINTS。'
    ]
  },
  // 一般
  {
    id: 'general_store',
    name: '一般實體門市 (無特殊通路優惠小店)',
    category: 'general',
    icon: '💳',
    description: '路邊雜貨、一般服飾店、無法用行動支付之實體店',
    pitfalls: [
      '若店家支援 Apple Pay 感應，永豐 SPORT 卡運動達標享 7%！',
      '若僅能純實體插卡，永豐 SPORT 運動達標享 2%，DAWAY 享 1%，黑狗 0.5%，CUBE 0.3%。'
    ]
  }
];

export function calculateCardRewards(channelId: string, config: UserCardConfig): CardRewardResult[] {
  const results: CardRewardResult[] = [];

  // 1. 國泰 CUBE 卡計算
  results.push(calculateCubeReward(channelId, config));

  // 2. 台新 @GoGo 卡計算
  results.push(calculateGoGoReward(channelId, config));

  // 3. 永豐 SPORT 卡計算
  results.push(calculateSportReward(channelId, config));

  // 4. 永豐 DAWAY 卡計算
  results.push(calculateDawayReward(channelId, config));

  // 排序：先比回饋率降序，若相同則無上限優先
  return results.sort((a, b) => {
    if (b.rewardRate !== a.rewardRate) {
      return b.rewardRate - a.rewardRate;
    }
    return (a.isBlocked ? 1 : 0) - (b.isBlocked ? 1 : 0);
  });
}

function calculateCubeReward(channelId: string, config: UserCardConfig): CardRewardResult {
  const scheme = config.cubeScheme;
  let rate = 0.3; // 基礎回饋
  let isTargetScheme = false;
  let recommendedScheme: CubeScheme = 'selected';
  let potentialRate = 3.0;
  let details: string[] = ['基本回饋：0.3% 小樹點（無上限）'];
  let warning: string | undefined = undefined;
  let isBlocked = false;

  // 判定當前通路的對應最佳方案
  if (channelId === 'gas_cpc') {
    recommendedScheme = 'selected';
    potentialRate = 3.3;
    if (scheme === 'selected') {
      rate = 3.3;
      isTargetScheme = true;
      details = ['【集精選方案】中油直營消費：3.3% 小樹點（無上限）'];
    } else {
      warning = '目前非「集精選」方案，僅有 0.3% 基本回饋！請於 23:59 前切換！';
    }
  } else if (channelId === 'convenience_711' || channelId === 'convenience_family') {
    recommendedScheme = 'selected';
    potentialRate = 3.0;
    if (scheme === 'selected') {
      rate = 3.0;
      isTargetScheme = true;
      details = ['【集精選方案】7-11 / 全家實體感應：3.0% 小樹點（無上限）'];
    } else {
      rate = 0.0;
      isBlocked = true;
      warning = '⚠️ 超商屬於排除通路！若「未切換至集精選」，直接 0% 回饋！切記於今天切換！';
      details = ['非集精選方案時，超商列為非一般消費 0% 回饋'];
    }
  } else if (channelId === 'supermarket_px') {
    recommendedScheme = 'selected';
    potentialRate = 3.0;
    if (scheme === 'selected') {
      rate = 3.0;
      isTargetScheme = true;
      details = ['【集精選方案】全聯實體刷卡/感應：3.0% 小樹點（無上限）'];
    } else {
      rate = 0.0;
      isBlocked = true;
      warning = '⚠️ 全聯為非一般消費！若未切換「集精選」，直接 0%！';
      details = ['非集精選時全聯為 0% 回饋'];
    }
  } else if (channelId === 'supermarket_carrefour') {
    recommendedScheme = 'selected';
    potentialRate = 3.0;
    if (scheme === 'selected') {
      rate = 3.0;
      isTargetScheme = true;
      details = ['【集精選方案】家樂福消費：3.0% 小樹點（無上限）'];
    } else {
      warning = '家樂福未切換「集精選」僅享基本回饋 0.3%';
    }
  } else if (channelId === 'food_delivery') {
    recommendedScheme = 'dining';
    potentialRate = 3.3;
    if (scheme === 'dining') {
      rate = 3.3;
      isTargetScheme = true;
      details = ['【樂饗購方案】Uber Eats / foodpanda：3.3% 小樹點（無上限）'];
    } else {
      warning = '目前非「樂饗購」方案，僅 0.3%！建議今天切換至樂饗購享 3.3%！';
    }
  } else if (channelId === 'dining_restaurant') {
    recommendedScheme = 'dining';
    potentialRate = 3.3;
    if (scheme === 'dining') {
      rate = 3.3;
      isTargetScheme = true;
      details = ['【樂饗購方案】國內餐飲實體消費：3.3% 小樹點（無上限）'];
    } else {
      warning = '聚餐消費建議切換至「樂饗購」，可享 3.3% 小樹點無上限！';
    }
  } else if (channelId === 'online_shopee_momo' || channelId === 'online_coupang') {
    recommendedScheme = 'digital';
    potentialRate = 3.3;
    if (scheme === 'digital') {
      rate = 3.3;
      isTargetScheme = true;
      details = ['【玩數位方案】各大綜合電商消費：3.3% 小樹點（無上限）'];
    } else {
      warning = '網購電商建議切換至「玩數位」，可享 3.3% 小樹點無上限！';
    }
  } else if (channelId === 'travel_overseas') {
    recommendedScheme = 'travel';
    potentialRate = 3.0;
    if (scheme === 'travel') {
      rate = 3.0;
      isTargetScheme = true;
      details = ['【趣旅行方案】海外實體外幣消費：3.0% 小樹點（無上限）'];
    } else {
      warning = '出國刷卡請切換至「趣旅行」或當期海外賞方案。';
    }
  }

  const schemeSuggestion = (!isTargetScheme && potentialRate > rate) ? {
    recommendedScheme,
    potentialRate,
    difference: Number((potentialRate - rate).toFixed(1))
  } : undefined;

  return {
    cardId: 'cube',
    cardName: '國泰世華 CUBE 卡',
    cardColor: 'from-amber-500 to-yellow-600',
    rewardRate: rate,
    rewardType: '小樹點',
    bestPaymentMethod: {
      method: (channelId === 'food_delivery' || channelId.startsWith('online')) ? 'online' : 'physical',
      label: (channelId === 'food_delivery' || channelId.startsWith('online')) ? '線上刷卡 / Apple Pay' : '實體感應 / Apple Pay',
      note: '當天 23:59 前切換方案即可適用全日消費'
    },
    details,
    capWarning: isTargetScheme ? '✅ 本通路回饋無上限！' : undefined,
    isSchemeDependent: true,
    schemeSuggestion,
    warning,
    isBlocked
  };
}

function calculateGoGoReward(channelId: string, config: UserCardConfig): CardRewardResult {
  const isLinked = config.gogoRichartLinked;
  const baseRate = isLinked ? 0.5 : 0.3;

  if (channelId === 'gas_cpc' || channelId === 'gas_national') {
    return {
      cardId: 'gogo',
      cardName: '台新銀行 @GoGo 卡 (黑狗)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 必須使用 LINE Pay 掃碼付款',
        note: '切勿實體刷卡！實體刷卡僅 0.5%'
      },
      details: [
        '一般消費：0.5%（Richart 扣繳）',
        '精選行動支付（LINE Pay）加碼：+3.3%',
        '每期帳單精選加碼上限 1,000 點（折合約可刷 $30,303 封頂）'
      ],
      capWarning: '每期帳單最高折抵 1,000 點 (月消費約 $30,303 封頂)'
    };
  }

  if (channelId.startsWith('convenience_')) {
    return {
      cardId: 'gogo',
      cardName: '台新銀行 @GoGo 卡 (黑狗)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: 0.0,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 不推薦在超商使用黑狗卡',
        note: '直接刷卡感應 0% 回饋'
      },
      details: [
        '超商屬於台新銀行非一般消費排除通路，實體卡直接刷為 0% 回饋！',
        '7-11 若以台新Pay綁定，部分檔期有零星活動，但極易踩雷，強烈建議改用永豐 SPORT 或 CUBE！'
      ],
      warning: '⚠️ 絕對不要在超商拿出黑狗卡感應或插卡！0% 回饋！',
      isBlocked: true
    };
  }

  if (channelId === 'supermarket_px') {
    return {
      cardId: 'gogo',
      cardName: '台新銀行 @GoGo 卡 (黑狗)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: 0.0,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 全聯非一般消費 0%',
        note: '全聯消費排除回饋'
      },
      details: ['全聯門市列為非一般消費排除項目，0% 回饋'],
      warning: '全聯直接刷黑狗為 0%！請改用國泰 CUBE 卡 (集精選 3%)！',
      isBlocked: true
    };
  }

  if (channelId === 'online_shopee_momo' || channelId === 'online_coupang') {
    return {
      cardId: 'gogo',
      cardName: '台新銀行 @GoGo 卡 (黑狗)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'online',
        label: '💻 線上刷卡直接填黑狗卡卡號',
        note: '蝦皮、momo、酷澎列入精選 3.8%'
      },
      details: [
        '精選網購（蝦皮/momo/酷澎）：3.8%',
        '每期帳單加碼上限 1,000 點（可刷滿 $30,303）'
      ],
      capWarning: '每期帳單加碼上限 1,000 點'
    };
  }

  if (channelId === 'food_delivery') {
    return {
      cardId: 'gogo',
      cardName: '台新銀行 @GoGo 卡 (黑狗)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 於外送 App 選擇 LINE Pay 付款',
        note: 'LINE Pay 享 3.8%，若直接輸卡號僅 0.5%'
      },
      details: [
        '外送若走 LINE Pay 結帳，享精選 3.8%',
        '若直接輸入信用卡卡號刷卡，僅一般消費 0.5%'
      ],
      capWarning: '每期帳單加碼上限 1,000 點'
    };
  }

  return {
    cardId: 'gogo',
    cardName: '台新銀行 @GoGo 卡 (黑狗)',
    cardColor: 'from-zinc-800 to-neutral-950',
    rewardRate: baseRate,
    rewardType: '台新Point',
    bestPaymentMethod: {
      method: 'physical',
      label: '實體感應 / 插卡',
      note: '非精選通路僅一般消費'
    },
    details: [`一般消費：${baseRate}%（需綁定 Richart 自動扣繳）`]
  };
}

function calculateSportReward(channelId: string, config: UserCardConfig): CardRewardResult {
  const isCalorieMet = config.sportCalorieMet;
  const hasQuota = config.sportQuotaAvailable;

  // 永豐 SPORT 回饋結構：
  // 1. 基本 1% 無上限
  // 2. 運動達標 (7000卡) +1% (每月上限 50 豐點，消費 $5,000 封頂)
  // 3. 指定支付（Apple Pay / Google Pay 感應）+5% (每月上限 300 豐點，消費 $6,000 封頂)
  // 最高合計 7%

  // 判斷通路是否支援 Apple Pay / Google Pay 感應：
  // 超商 (7-11, 全家, 萊爾富, OK)、加油站 (中油直營/全國)、家樂福、國內實體餐廳皆支援
  const supportsAP = (
    channelId.startsWith('gas_') ||
    channelId.startsWith('convenience_') ||
    channelId === 'dining_restaurant' ||
    channelId === 'supermarket_carrefour' ||
    channelId === 'general_store'
  );

  if (channelId === 'supermarket_px') {
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: 0.0,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 全聯非一般消費 0%',
        note: '全聯無回饋'
      },
      details: ['全聯門市列為非一般消費排除通路，0% 回饋'],
      warning: '全聯消費不適用 SPORT 卡，請改刷 CUBE (集精選 3%)！',
      isBlocked: true
    };
  }

  if (supportsAP) {
    if (isCalorieMet && hasQuota) {
      return {
        cardId: 'sport',
        cardName: '永豐銀行 SPORT 卡',
        cardColor: 'from-emerald-600 to-teal-700',
        rewardRate: 7.0,
        rewardType: '豐點',
        bestPaymentMethod: {
          method: 'apple_pay',
          label: '📱 務必使用 Apple Pay / Google Pay 感應支付',
          note: '感應即享 7% 封頂，切勿出示 LINE Pay 或實體刷'
        },
        details: [
          '基本回饋：1%（無上限）',
          '運動達標（7,000卡）：+1%（上限 50 點，限額 $5,000）',
          '指定行動支付（AP/GP 感應）：+5%（上限 300 點，限額 $6,000）',
          '合計最高 7.0% 豐點！'
        ],
        capWarning: '🔥 每月消費 NT$6,000 內享 7%，超過後降為 1%~2%'
      };
    } else if (isCalorieMet && !hasQuota) {
      return {
        cardId: 'sport',
        cardName: '永豐銀行 SPORT 卡',
        cardColor: 'from-emerald-600 to-teal-700',
        rewardRate: 2.0,
        rewardType: '豐點',
        bestPaymentMethod: {
          method: 'apple_pay',
          label: 'Apple Pay / Google Pay 感應',
          note: '本月 $6,000 額度已用盡，降為 2%'
        },
        details: [
          '基本 1% + 達標 1% = 2% 豐點',
          '指定加碼 5% 本月額度已滿'
        ],
        warning: '指定加碼 +5% 每月 $6,000 額度已達上限！'
      };
    } else {
      return {
        cardId: 'sport',
        cardName: '永豐銀行 SPORT 卡',
        cardColor: 'from-emerald-600 to-teal-700',
        rewardRate: 1.0,
        rewardType: '豐點',
        bestPaymentMethod: {
          method: 'apple_pay',
          label: 'Apple Pay / Google Pay 感應',
          note: '尚未達標 7,000 卡'
        },
        details: [
          '僅基本回饋 1%（無上限）',
          '⚠️ 汗水不白流本月尚未達標 7,000 大卡，無法拿 +1% 與 +5% 加碼！'
        ],
        warning: '汗水不白流尚未達標 7,000 大卡！達標後可升級為 7%！'
      };
    }
  }

  // 線上或外送
  return {
    cardId: 'sport',
    cardName: '永豐銀行 SPORT 卡',
    cardColor: 'from-emerald-600 to-teal-700',
    rewardRate: isCalorieMet ? 2.0 : 1.0,
    rewardType: '豐點',
    bestPaymentMethod: {
      method: 'online',
      label: '線上刷卡',
      note: '純線上刷卡無法觸發 AP/GP 感應 +5%'
    },
    details: [
      `一般消費：1%${isCalorieMet ? ' + 達標 1% = 2%' : ''}`,
      '線上/外送非 AP/GP 實體感應，無 +5% 行動支付加碼'
    ]
  };
}

function calculateDawayReward(channelId: string, config: UserCardConfig): CardRewardResult {
  const isNew = config.dawayIsNewUser;
  const lpRate = isNew ? 3.0 : 1.5;

  // 7-11 特殊防雷：7-11 門市的 LINE Pay 不支援永豐信用卡！
  if (channelId === 'convenience_711') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 0.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '❌ 7-11 不支援永豐卡 LINE Pay',
        note: '門市扣款會失敗'
      },
      details: [
        '【重大限制】7-11 門市的 LINE Pay 不開放綁定永豐信用卡付款！',
        '實體插卡亦被列為非一般消費 0%！'
      ],
      warning: '⚠️ 7-11 門市無法刷永豐 DAWAY 卡（LINE Pay 與實體皆不可）！請改刷 SPORT 或 CUBE！',
      isBlocked: true
    };
  }

  if (channelId === 'supermarket_px') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 0.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 全聯非一般消費 0%',
        note: '全聯無回饋'
      },
      details: ['全聯門市列為非一般消費排除通路，0% 回饋'],
      warning: '全聯刷 DAWAY 0% 回饋！請改用 CUBE 集精選！',
      isBlocked: true
    };
  }

  if (channelId === 'convenience_family') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 全家用 LINE Pay 掃碼付款',
        note: '全家支援永豐卡 LINE Pay'
      },
      details: [
        `LINE Pay 綁定消費：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId.startsWith('gas_')) {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 加油站使用 LINE Pay 掃碼付款',
        note: '切勿實體刷卡（實體僅 1%）'
      },
      details: [
        `中油/全國使用 LINE Pay 支付：${lpRate}% LINE POINTS`,
        '若實體插卡僅 1% 一般消費'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'travel_overseas') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 3.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'physical',
        label: '海外實體刷卡',
        note: '海外消費 3% 回饋'
      },
      details: ['海外外幣消費最高享 3% LINE POINTS 無上限']
    };
  }

  // 預設
  return {
    cardId: 'daway',
    cardName: '永豐銀行 DAWAY 卡',
    cardColor: 'from-sky-500 to-blue-600',
    rewardRate: lpRate,
    rewardType: 'LINE POINTS',
    bestPaymentMethod: {
      method: 'line_pay',
      label: '📱 優先使用 LINE Pay 掃碼',
      note: '純實體刷卡僅 1%'
    },
    details: [
      `LINE Pay 支付：${lpRate}% LINE POINTS`,
      '一般實體刷卡：1% 無上限'
    ],
    capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
  };
}
