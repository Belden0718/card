import type { CardRewardResult, CubeScheme, ScenarioChannel, TaishinScheme, UserCardConfig } from '../types/card';

export const CUBE_SCHEME_LABELS: Record<CubeScheme, { name: string; tag: string; desc: string; icon: string }> = {
  selected: { name: '集精選', tag: '中油 / 超商 / 全聯 / 麥當勞', desc: '中油直營、7-11、全家、全聯、家樂福等指定 3%~3.3%', icon: '⭐' },
  dining: { name: '樂饗購', tag: '餐廳 / 外送 / 百貨 / 藥妝', desc: '國內餐飲、UberEats、foodpanda、新光三越、康是美 3.3%', icon: '🍱' },
  digital: { name: '玩數位', tag: '網購 / 串流 / App Store', desc: '蝦皮、momo、酷澎、Netflix、Disney+、App Store 3.3%', icon: '💻' },
  travel: { name: '趣旅行', tag: '海外實體 / 交通 / 機票', desc: '海外實體 3%、日韓實體、機票、Agoda、Uber叫車 3.3%', icon: '✈️' },
  japan: { name: '日本賞', tag: '日本實體 / Suica 3.5%~8%', desc: '赴日旅遊指定名店、Suica/ICOCA 儲值、免稅店加碼', icon: '🗾' },
  birthday: { name: '慶生月', tag: '壽星指定餐飲 / 百貨 10%', desc: '當月壽星專屬，精選餐廳、百貨專櫃最高 10% 小樹點', icon: '🎂' },
  kids: { name: '童樂匯', tag: '婦幼 / 親子樂園', desc: '母嬰婦幼生活用品、親子樂園 3.3%', icon: '🧸' },
  finance: { name: '來金網', tag: '保費 / 理財', desc: '國泰人壽保費、證券等 3%', icon: '💼' }
};

export const TAISHIN_SCHEME_LABELS: Record<TaishinScheme, { name: string; tag: string; desc: string; icon: string }> = {
  daily: { name: '天天刷', tag: '加油 / 通勤 / 藥妝 / 超商台新Pay', desc: '中油直營/全國、7-11/全家(限台新Pay)、台鐵高鐵 3.3%~3.8%', icon: '⚡' },
  pay: { name: 'Pay著刷', tag: '台新Pay 3.8% 全超商通殺 / LINE Pay', desc: '四大超商綁台新Pay 3.8%、LINE Pay 2.3%~3.8%', icon: '📱' },
  chill: { name: 'Chill刷', tag: '手搖 / 燒肉火鍋 / 追星追劇 10%', desc: '50嵐/得正/CAFE!N、詹記/屋馬、Netflix/Disney+ 最高10%', icon: '🍹' },
  dining: { name: '好饗刷', tag: '餐廳 / 外送 / 王品瘋Pay 3.3%', desc: '全台餐飲、UberEats、foodpanda、王品瘋Pay 3.3%', icon: '🍱' },
  digital: { name: '數趣刷', tag: '蝦皮 / momo / PChome 網購 3.3%', desc: '網購電商、線上課程、遊戲影音、AI 服務 3.3%', icon: '💻' },
  travel: { name: '玩旅刷', tag: '海外實體 / 機票 / 訂房 3.3%', desc: '海外實體/線上、指定航空、Agoda/Booking/Klook 3.3%', icon: '✈️' },
  big: { name: '大筆刷', tag: '百貨 / Outlet / 居家裝修 3.3%', desc: '新光三越、遠東SOGO、微風、IKEA、特力屋 3.3%', icon: '🛍️' },
  holiday: { name: '假日刷', tag: '節假日不限通路 2.0%', desc: '國內週六日與國定假日一般消費 2.0% 回饋', icon: '🎉' }
};

export const CHANNELS: ScenarioChannel[] = [
  // 加油
  {
    id: 'gas_cpc',
    name: '中油加油 (直營/加盟)',
    category: 'gas',
    icon: '⛽',
    description: '台灣中油加油站（支援 Samsung Pay / Apple Pay / Google Pay / LINE Pay / 台新Pay）',
    pitfalls: [
      '【永豐首選】永豐 SPORT 用 Samsung Pay / Apple Pay / Google Pay 手機感應享最高 7%！',
      '【台新雙方案】台新切換【天天刷】或【Pay著刷】走 LINE Pay / 台新Pay 享 3.8%！',
      '【CUBE無上限】CUBE 切換至【集精選】，中油直營享 3.3% 小樹點無上限！',
      '切勿使用台新或永豐DAWAY直接「實體插卡」（實體僅 0.5%~1%）！'
    ]
  },
  {
    id: 'gas_national',
    name: '全國 / 台亞 / 台塑加油站',
    category: 'gas',
    icon: '⛽',
    description: '非中油加油站（支援 Samsung / Apple / Google Pay / LINE Pay）',
    pitfalls: [
      '國泰 CUBE 卡的「集精選」僅限中油直營，全國/台亞刷 CUBE 僅有一般消費 0.3%！',
      '首選永豐 SPORT (Samsung/Apple Pay感應 7%) 或 台新 (LINE Pay 3.8%)。'
    ]
  },
  // 超商
  {
    id: 'convenience_711',
    name: '7-ELEVEN (統一超商)',
    category: 'convenience',
    icon: '🏪',
    description: '超商被列為非一般消費排除通路，回饋規則極為嚴格！',
    pitfalls: [
      '【永豐霸主 7%】永豐 SPORT 綁定 Samsung Pay / Apple Pay / Google Pay 感應享 7% 封頂！',
      '【台新Pay神器 3.8%】台新切換【天天刷】或【Pay著刷】，打開「台新Pay」掃碼享 3.8%（單筆上限 $3,000）！',
      '【CUBE 3.0%】CUBE 切換【集精選】，直接感應/實體刷享 3% 無上限。',
      '【致命地雷 1】千萬不要拿台新卡直接「實體刷卡或Apple Pay感應」，非台新Pay直接 0%！',
      '【致命地雷 2】7-11 門市的 LINE Pay「不支援」永豐信用卡扣款（刷不過）！',
      '【致命地雷 3】CUBE 卡若未切換至「集精選」，在 7-11 直接 0% 排除！'
    ]
  },
  {
    id: 'convenience_family',
    name: '全家便利商店 (FamilyMart)',
    category: 'convenience',
    icon: '🏪',
    description: '支援 Samsung Pay / Apple Pay / Google Pay / LINE Pay / 全盈+PAY / 台新Pay',
    pitfalls: [
      '【永豐首選】永豐 SPORT 綁定 Samsung / Apple / Google Pay 感應享 7%！',
      '【台新Pay 3.8%】台新【天天刷】或【Pay著刷】出示「台新Pay」掃碼享 3.8%（單筆限額 $3,000）！',
      '【CUBE 3.0%】國泰 CUBE 切換至「集精選」直接刷享 3% 無上限。',
      '【避雷】全家千萬不要拿台新實體卡直接感應（0%），一定要出示台新Pay條碼！'
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
      '【台新Pay 3.8%】台新切換至【Pay著刷】，使用台新Pay掃碼享有 3.8%！',
      '【永豐 SPORT 7%】使用 Samsung Pay / Apple Pay / Google Pay 感應享 7%！'
    ]
  },
  // 手搖飲與精緻聚會
  {
    id: 'drink_chill',
    name: '手搖飲 / 連鎖咖啡 (50嵐/得正/CAFE!N)',
    category: 'drink',
    icon: '🍹',
    description: '日常續命飲品、得正、50嵐、五桐號、龜記、CAFE!N',
    pitfalls: [
      '【台新 Chill刷神技】台新方案切換至【Chill刷】，指定手搖咖啡享有高達 10% 回饋！',
      '永豐 SPORT 若支援 Apple Pay / Samsung Pay 感應亦享 7%！'
    ]
  },
  {
    id: 'dining_hotpot',
    name: '燒肉火鍋名店 (詹記/屋馬/碳佐麻里)',
    category: 'food',
    icon: '🥩',
    description: '歡聚微醺、精緻燒肉與麻辣鍋',
    pitfalls: [
      '【台新 Chill刷】指定名店（詹記、屋馬、碳佐麻里）享最高 10% 狂暴回饋！',
      '國泰 CUBE 切換【樂饗購】享 3.3% 無上限，大額聚餐不用擔心上限！'
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
      '【台新 3.8%】台新【數趣刷】或【Pay著刷】(走LINE Pay) 享 3.3%~3.8%！',
      '【CUBE 3.3%】國泰 CUBE 切換至「玩數位」享 3.3% 小樹點無上限！',
      '【DAWAY 3%】永豐 DAWAY 若走 LINE Pay 結帳，新戶享 3% LINE POINTS。'
    ]
  },
  {
    id: 'online_coupang',
    name: '酷澎 Coupang',
    category: 'online',
    icon: '🚀',
    description: '日韓進口與火箭速配電商',
    pitfalls: [
      '台新切換【數趣刷】享 3.3%~3.8%。',
      'CUBE 切換「玩數位」享 3.3% 無上限。'
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
      '【台新 3.8%】台新切換【好饗刷】(3.3%) 或 外送結帳選 LINE Pay (Pay著刷 3.8%)！',
      '【CUBE 3.3%】國泰 CUBE 切換至「樂饗購」即享 3.3% 小樹點無上限！'
    ]
  },
  // 餐廳
  {
    id: 'dining_restaurant',
    name: '全台實體餐廳 / 聚餐',
    category: 'food',
    icon: '🍽️',
    description: '一般餐廳、咖啡廳、早午餐、連鎖餐飲',
    pitfalls: [
      '【台新 好饗刷】台新切換至【好饗刷】，全台餐飲（含王品瘋Pay）享 3.3%！',
      '【CUBE 樂饗購】國泰 CUBE 切換至「樂饗購」，全台餐廳實體消費享 3.3% 無上限！',
      '若餐廳能用 Samsung Pay / Apple Pay 感應且額度充足，永豐 SPORT 感應享 7% 完勝！'
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
      '【全聯唯一首選】國泰 CUBE 切換至「集精選」，實體刷卡直接拿 3.0% 小樹點無上限！',
      '【注意】全聯直接刷黑狗卡、DAWAY、SPORT 實體卡皆為 0% 回饋！'
    ]
  },
  {
    id: 'supermarket_carrefour',
    name: '家樂福 / 大潤發',
    category: 'supermarket',
    icon: '🏬',
    description: '大型量販超市',
    pitfalls: [
      '永豐 SPORT 卡使用 Samsung Pay / Apple Pay 感應享 7%！',
      '台新切換【天天刷】(家樂福等指定量販) 享 3.3%！',
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
      '【台新 玩旅刷】台新切換至【玩旅刷】，海外實體與線上消費享 3.3%！',
      '【CUBE 趣旅行】國泰 CUBE 切換至「趣旅行」或「日本賞」，海外實體享 3%~3.5% 無上限！',
      '永豐 DAWAY 卡海外消費享最高 3% LINE POINTS。'
    ]
  },
  // 一般
  {
    id: 'general_store',
    name: '一般實體門市 (無指定加碼小店)',
    category: 'general',
    icon: '💳',
    description: '路邊雜貨、一般服飾店、無法用行動支付之實體店',
    pitfalls: [
      '若店家支援 Apple/Samsung Pay 感應，永豐 SPORT 運動達標享 7%！',
      '週末假日消費若用台新切換【假日刷】，國內不限通路享 2.0%！'
    ]
  }
];

export function calculateCardRewards(channelId: string, config: UserCardConfig): CardRewardResult[] {
  const results: CardRewardResult[] = [];

  // 1. 國泰 CUBE 卡計算
  results.push(calculateCubeReward(channelId, config));

  // 2. 台新卡計算 (包含天天刷、Pay著刷、Chill刷、好饗刷、數趣刷、玩旅刷、大筆刷、假日刷)
  results.push(calculateTaishinReward(channelId, config));

  // 3. 永豐 SPORT 卡計算
  results.push(calculateSportReward(channelId, config));

  // 4. 永豐 DAWAY 卡計算
  results.push(calculateDawayReward(channelId, config));

  // 排序：先比回饋率降序，若相同則無上限/非排除優先
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
  } else if (channelId === 'dining_restaurant' || channelId === 'dining_hotpot') {
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
    cardName: '國泰 CUBE 卡',
    schemeType: 'cube' as const,
    recommendedScheme: CUBE_SCHEME_LABELS[recommendedScheme].name,
    recommendedSchemeKey: recommendedScheme,
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

function calculateTaishinReward(channelId: string, config: UserCardConfig): CardRewardResult {
  const isLinked = config.gogoRichartLinked;
  const currentScheme = config.taishinScheme;
  const baseRate = isLinked ? 0.5 : 0.3;

  // 1. 加油情境 (中油 / 全國)
  if (channelId === 'gas_cpc' || channelId === 'gas_national') {
    if (currentScheme === 'daily' || currentScheme === 'pay') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 3.8 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'line_pay',
          label: '📱 出示 LINE Pay 或 台新Pay 掃碼付款',
          note: currentScheme === 'daily' ? '【天天刷】加油充電享 3.8%' : '【Pay著刷】行動支付享 3.8%'
        },
        details: [
          `【${TAISHIN_SCHEME_LABELS[currentScheme].name}】加油消費：${isLinked ? 3.8 : baseRate}% 台新Point`,
          '需綁定 Richart / 台新帳戶自動扣繳',
          '每期帳單精選加碼上限 1,000 點（折合月刷約 $30,303 封頂）'
        ],
        capWarning: '每期帳單加碼上限 1,000 點 (月刷約 $30,303 封頂)',
        isSchemeDependent: true
      };
    } else {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'line_pay',
          label: '📱 建議切換至【天天刷】或【Pay著刷】',
          note: '目前方案加油僅一般消費'
        },
        details: [`目前【${TAISHIN_SCHEME_LABELS[currentScheme].name}】方案非加油加碼，僅享一般消費 ${baseRate}%`],
        schemeSuggestion: {
          cardName: '台新卡',
          schemeType: 'taishin',
          recommendedScheme: '天天刷',
          recommendedSchemeKey: 'daily',
          potentialRate: isLinked ? 3.8 : baseRate,
          difference: Number((3.8 - baseRate).toFixed(1))
        },
        warning: `目前為「${TAISHIN_SCHEME_LABELS[currentScheme].name}」，加油僅 ${baseRate}%！切換至「天天刷」享 3.8%！`
      };
    }
  }

  // 2. 超商情境 (7-11 與 全家)
  if (channelId === 'convenience_711' || channelId === 'convenience_family') {
    if (currentScheme === 'pay' || currentScheme === 'daily') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 3.8 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'taishin_pay',
          label: '📱 必須使用「台新Pay」掃碼結帳',
          note: `【${TAISHIN_SCHEME_LABELS[currentScheme].name}】7-11與全家限台新Pay！單筆限額 NT$3,000，實體感應直接 0%！`
        },
        details: [
          `【${TAISHIN_SCHEME_LABELS[currentScheme].name}】超商綁定「台新Pay」掃碼：${isLinked ? 3.8 : baseRate}% 台新Point`,
          '超商門市單筆限額最高 NT$3,000',
          '需綁定 Richart / 台新帳戶自動扣繳',
          '⚠️ 實體卡感應或一般刷卡為 0% 排除！代收稅費、悠遊儲值不回饋'
        ],
        capWarning: '超商限台新Pay，單筆限額 NT$3,000',
        isSchemeDependent: true
      };
    } else {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: 0.0,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'taishin_pay',
          label: '📱 切換至【Pay著刷】或【天天刷】並用台新Pay',
          note: `目前為「${TAISHIN_SCHEME_LABELS[currentScheme].name}」，超商 0%`
        },
        details: [
          `目前台新設定為【${TAISHIN_SCHEME_LABELS[currentScheme].name}】，超商非指定通路為 0% 回饋`,
          '若切換為【Pay著刷】或【天天刷】，打開台新Pay掃碼即可享 3.8% 回饋！'
        ],
        schemeSuggestion: {
          cardName: '台新卡',
          schemeType: 'taishin',
          recommendedScheme: 'Pay著刷',
          recommendedSchemeKey: 'pay',
          potentialRate: isLinked ? 3.8 : baseRate,
          difference: isLinked ? 3.8 : baseRate
        },
        warning: `⚠️ 目前為「${TAISHIN_SCHEME_LABELS[currentScheme].name}」，超商直接 0%！切換至「Pay著刷」或「天天刷」並出示台新Pay即可拿 3.8%！`,
        isBlocked: true
      };
    }
  }

  // 3. 萊爾富 / OK 超商
  if (channelId === 'convenience_hilife_ok') {
    if (currentScheme === 'pay') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 3.8 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'taishin_pay',
          label: '📱 必須使用「台新Pay」掃碼結帳',
          note: '【Pay著刷】四大超商通吃台新Pay 3.8%！'
        },
        details: [
          '【Pay著刷】四大超商綁台新Pay享 3.8% 台新Point',
          '超商單筆上限 NT$3,000'
        ],
        capWarning: '超商限台新Pay，單筆限額 NT$3,000'
      };
    } else {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: 0.0,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'taishin_pay',
          label: '📱 切換至【Pay著刷】用台新Pay',
          note: '萊爾富/OK 僅【Pay著刷】加碼'
        },
        details: ['萊爾富/OK 需切換至【Pay著刷】綁台新Pay才享 3.8%'],
        schemeSuggestion: {
          cardName: '台新卡',
          schemeType: 'taishin',
          recommendedScheme: 'Pay著刷',
          recommendedSchemeKey: 'pay',
          potentialRate: isLinked ? 3.8 : baseRate,
          difference: isLinked ? 3.8 : baseRate
        },
        warning: '萊爾富/OK 請切換至【Pay著刷】使用台新Pay掃碼，或使用永豐 SPORT 感應 7%！',
        isBlocked: true
      };
    }
  }

  // 4. 手搖飲 / 咖啡名店 (50嵐/得正/CAFE!N)
  if (channelId === 'drink_chill') {
    if (currentScheme === 'chill') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 10.0 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'physical',
          label: '📱 實體感應 / Apple Pay / LINE Pay 皆可',
          note: '【Chill刷神方案】指定手搖飲與咖啡享狂暴 10% 回饋！'
        },
        details: [
          '【Chill刷方案】50嵐、得正、CAFE!N、五桐號、龜記等享 10% 台新Point！',
          '需綁定 Richart 自動扣繳'
        ],
        capWarning: 'Chill刷每月有指定加碼上限'
      };
    } else {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'physical',
          label: '📱 切換至【Chill刷】',
          note: '切換即享 10% 回饋'
        },
        details: [`目前為「${TAISHIN_SCHEME_LABELS[currentScheme].name}」，手搖飲僅 ${baseRate}%`],
        schemeSuggestion: {
          cardName: '台新卡',
          schemeType: 'taishin',
          recommendedScheme: 'Chill刷',
          recommendedSchemeKey: 'chill',
          potentialRate: isLinked ? 10.0 : baseRate,
          difference: Number((10.0 - baseRate).toFixed(1))
        },
        warning: '🔥 買手搖咖啡強烈建議切換至【Chill刷】，回饋直接衝上 10%！'
      };
    }
  }

  // 5. 燒肉火鍋名店 (詹記/屋馬/碳佐麻里)
  if (channelId === 'dining_hotpot') {
    if (currentScheme === 'chill') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 10.0 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'physical',
          label: '💳 實體刷卡或 Apple/Samsung Pay 感應',
          note: '【Chill刷名店】詹記、屋馬、碳佐麻里享 10%！'
        },
        details: [
          '【Chill刷方案】微醺聚會指定燒肉火鍋享 10% 台新Point！',
          '需綁定 Richart 自動扣繳'
        ]
      };
    } else {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: currentScheme === 'dining' ? 3.3 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'physical',
          label: '切換至【Chill刷】拿 10%',
          note: '名店專屬加碼'
        },
        details: [
          currentScheme === 'dining' ? '【好饗刷】享全台餐飲 3.3%' : `目前方案僅 ${baseRate}%`,
          '若切換為【Chill刷】，指定名店（詹記/屋馬）可享最高 10%！'
        ],
        schemeSuggestion: {
          cardName: '台新卡',
          schemeType: 'taishin',
          recommendedScheme: 'Chill刷',
          recommendedSchemeKey: 'chill',
          potentialRate: 10.0,
          difference: Number((10.0 - (currentScheme === 'dining' ? 3.3 : baseRate)).toFixed(1))
        }
      };
    }
  }

  // 6. 外送 (Uber Eats / foodpanda)
  if (channelId === 'food_delivery') {
    if (currentScheme === 'pay') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 3.8 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'line_pay',
          label: '📱 外送結帳選擇 LINE Pay 付款',
          note: '【Pay著刷】LINE Pay 享 3.8%'
        },
        details: ['【Pay著刷】外送選擇 LINE Pay 付款：3.8% 台新Point']
      };
    } else if (currentScheme === 'dining') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 3.3 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'online',
          label: '線上刷卡直接輸入卡號',
          note: '【好饗刷】外送享 3.3%'
        },
        details: ['【好饗刷】外送平台消費：3.3% 台新Point']
      };
    } else {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'line_pay',
          label: '建議切換至【好饗刷】或【Pay著刷】',
          note: '目前僅一般消費'
        },
        details: [`目前【${TAISHIN_SCHEME_LABELS[currentScheme].name}】方案外送僅 ${baseRate}%`],
        schemeSuggestion: {
          cardName: '台新卡',
          schemeType: 'taishin',
          recommendedScheme: 'Pay著刷',
          recommendedSchemeKey: 'pay',
          potentialRate: isLinked ? 3.8 : baseRate,
          difference: Number((3.8 - baseRate).toFixed(1))
        }
      };
    }
  }

  // 7. 網購 (蝦皮 / momo / 酷澎)
  if (channelId === 'online_shopee_momo' || channelId === 'online_coupang') {
    if (currentScheme === 'digital') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 3.3 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'online',
          label: '💻 線上刷卡直接輸卡號',
          note: '【數趣刷】綜合電商享 3.3%'
        },
        details: ['【數趣刷】各大綜合電商消費：3.3% 台新Point']
      };
    } else if (currentScheme === 'pay') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 3.8 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'line_pay',
          label: '📱 網購結帳選擇 LINE Pay 付款',
          note: '【Pay著刷】LINE Pay 享 3.8%'
        },
        details: ['【Pay著刷】若走 LINE Pay 結帳享 3.8% 台新Point']
      };
    } else {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'online',
          label: '建議切換至【數趣刷】或【Pay著刷】',
          note: '目前僅一般消費'
        },
        details: [`目前【${TAISHIN_SCHEME_LABELS[currentScheme].name}】網購僅 ${baseRate}%`],
        schemeSuggestion: {
          cardName: '台新卡',
          schemeType: 'taishin',
          recommendedScheme: '數趣刷',
          recommendedSchemeKey: 'digital',
          potentialRate: isLinked ? 3.3 : baseRate,
          difference: Number((3.3 - baseRate).toFixed(1))
        }
      };
    }
  }

  // 8. 海外實體
  if (channelId === 'travel_overseas') {
    if (currentScheme === 'travel') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 3.3 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'physical',
          label: '✈️ 海外實體感應 / 插卡',
          note: '【玩旅刷】海外消費 3.3%'
        },
        details: ['【玩旅刷】海外實體與線上外幣消費：3.3% 台新Point']
      };
    } else {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'physical',
          label: '建議切換至【玩旅刷】',
          note: '海外必切'
        },
        details: [`目前【${TAISHIN_SCHEME_LABELS[currentScheme].name}】海外僅 ${baseRate}%`],
        schemeSuggestion: {
          cardName: '台新卡',
          schemeType: 'taishin',
          recommendedScheme: '玩旅刷',
          recommendedSchemeKey: 'travel',
          potentialRate: isLinked ? 3.3 : baseRate,
          difference: Number((3.3 - baseRate).toFixed(1))
        }
      };
    }
  }

  // 9. 全聯門市 (排除)
  if (channelId === 'supermarket_px') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: 0.0,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 全聯非一般消費 0%',
        note: '全聯消費排除回饋'
      },
      details: ['全聯門市列為台新非一般消費排除項目，0% 回饋'],
      warning: '全聯直接刷台新卡為 0%！請改用國泰 CUBE 卡 (集精選 3%)！',
      isBlocked: true
    };
  }

  // 10. 家樂福 (天天刷支援)
  if (channelId === 'supermarket_carrefour') {
    if (currentScheme === 'daily') {
      return {
        cardId: 'gogo',
        cardName: '台新卡 (Richart / @GoGo)',
        cardColor: 'from-zinc-800 to-neutral-950',
        rewardRate: isLinked ? 3.3 : baseRate,
        rewardType: '台新Point',
        bestPaymentMethod: {
          method: 'physical',
          label: '實體刷卡或感應',
          note: '【天天刷】指定量販 3.3%'
        },
        details: ['【天天刷】家樂福等指定量販：3.3% 台新Point']
      };
    }
  }

  // 11. 節假日通用
  if (currentScheme === 'holiday') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: 2.0,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'physical',
        label: '實體感應 / 線上刷卡',
        note: '【假日刷】週六日不限通路 2%'
      },
      details: ['【假日刷方案】節假日國內一般消費：2.0% 回饋']
    };
  }

  // 預設一般
  return {
    cardId: 'gogo',
    cardName: '台新卡 (Richart / @GoGo)',
    cardColor: 'from-zinc-800 to-neutral-950',
    rewardRate: baseRate,
    rewardType: '台新Point',
    bestPaymentMethod: {
      method: 'physical',
      label: '實體感應 / 插卡',
      note: '一般消費'
    },
    details: [`一般消費：${baseRate}%（需綁定 Richart / 台新帳戶扣繳）`]
  };
}

function calculateSportReward(channelId: string, config: UserCardConfig): CardRewardResult {
  const isCalorieMet = config.sportCalorieMet;
  const hasQuota = config.sportQuotaAvailable;

  const supportsContactless = (
    channelId.startsWith('gas_') ||
    channelId.startsWith('convenience_') ||
    channelId === 'dining_restaurant' ||
    channelId === 'dining_hotpot' ||
    channelId === 'drink_chill' ||
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

  if (supportsContactless) {
    if (isCalorieMet && hasQuota) {
      return {
        cardId: 'sport',
        cardName: '永豐銀行 SPORT 卡',
        cardColor: 'from-emerald-600 to-teal-700',
        rewardRate: 7.0,
        rewardType: '豐點',
        bestPaymentMethod: {
          method: 'apple_pay',
          label: '📱 務必使用 Samsung Pay / Apple Pay / Google Pay 感應支付',
          note: '感應即享 7% 封頂，切勿出示 LINE Pay 或實體刷'
        },
        details: [
          '基本回饋：1%（無上限）',
          '運動達標加碼：+1%（上限 50 點，限額 $5,000）',
          '指定行動支付（Samsung/Apple/Google Pay 感應）：+5%（上限 300 點，限額 $6,000）',
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
          label: 'Samsung Pay / Apple Pay / Google Pay 感應',
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
          label: 'Samsung Pay / Apple Pay / Google Pay 感應',
          note: '尚未達標運動門檻'
        },
        details: [
          '僅基本回饋 1%（無上限）',
          '⚠️ 運動數據本月尚未達標，無法拿 +1% 與 +5% 加碼！'
        ],
        warning: '運動數據尚未達標！達標後可升級為 7%！'
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
      note: '純線上刷卡無法觸發感應 +5%'
    },
    details: [
      `一般消費：1%${isCalorieMet ? ' + 達標 1% = 2%' : ''}`,
      '線上/外送非實體感應，無 +5% 行動支付加碼'
    ]
  };
}

function calculateDawayReward(channelId: string, config: UserCardConfig): CardRewardResult {
  const isNew = config.dawayIsNewUser;
  const lpRate = isNew ? 3.0 : 1.5;

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
      warning: '⚠️ 7-11 門市無法刷永豐 DAWAY 卡（LINE Pay 與實體皆不可）！請改刷 SPORT、台新Pay 或 CUBE！',
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
