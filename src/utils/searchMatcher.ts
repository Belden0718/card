import type { ScenarioChannel } from '../types/card';

// 通路品牌別名與關鍵字對照表 (智慧精準對照庫 - 50 個指定通路專屬映射)
export const CHANNEL_ALIASES: Record<string, string[]> = {
  // --- 加油充電 (5) ---
  gas_cpc: ['中油', '中油直營', '台灣中油', 'cpc', '中油加油站'],
  gas_formosa: ['台塑', '台亞', '台塑石油', 'formosa', '福懋', '福懋加油站'],
  gas_smile: ['速邁樂', '統一精工', 'smile'],
  gas_national: ['全國', '全國加油站'],
  ev_charging_parking: [
    '特斯拉', 'tesla', 'u-power', 'evoasis', 'evalue', '特爾', '充電樁', '超充', '電動車',
    '車麻吉', 'utaggo', '嘟嘟房', '城市車旅', 'times', 'uspace', '停車費', '停車場', 'autopass', 'vivipark'
  ],

  // --- 超商消費 (3) ---
  convenience_711: ['7-11', '711', '統一超商', 'seven', '小七', '7-eleven', 'city cafe', 'city prime'],
  convenience_family: ['全家', '全家超商', '全家便利商店', 'familymart', 'family', 'letscafe', '全家咖啡', '匠土司'],
  convenience_hilife_ok: ['萊爾富', 'ok超商', 'hilife', 'ok', 'ok mart', '萊爾富超商', '萊爾富便利商店'],

  // --- 美食飲品/聚餐 (10) ---
  drink_chill: [
    '星巴克', 'starbucks', '路易莎', 'louisa', '50嵐', '得正', '八曜', '八曜和茶',
    '茶魔', '茶的魔手', '麻古', 'ug', '迷客夏', '可不可', '清心', 'cafe!n', 'cama',
    '手搖', '飲料', '咖啡', '一芳', '萬波', '先喝道', '龜記', '五桐號', '十盛', '鶴茶樓'
  ],
  dining_hotpot: [
    '詹記', '屋馬', '茶六', '海底撈', '乾杯', '胡同', '火鍋', '燒肉', '餐酒', '臺虎',
    '刁民', '馬辣', '新馬辣', '老四川', '青花驕', '和牛涮', '肉多多', '碳佐麻里'
  ],
  dining_orangeshabu: [
    '橘', '橘色', '橘色涮涮屋', 'orange shabu', 'extension 1', 'extension 1 by 橘色',
    '橘色一館', '橘色二館', '橘色台中館', '頂級火鍋', '橘色火鍋'
  ],
  dining_sushiro: [
    '壽司郎', 'sushiro', '台灣壽司郎', '爭鮮', '爭鮮plus', '爭鮮迴轉壽司', '迴轉壽司', '生魚片', '日式料理'
  ],
  dining_japanese_luxury: [
    '初魚', '初魚鮨', '初魚鉄板料亭', '初魚鐵板燒', '梵燒肉', '侍燒肉', '作天麩羅', '作 天麩羅',
    '濟安鮨', '元一天婦羅', '元一', '鳥苑', '成蔵', '成藏', '雞湯桑', '朝炭',
    '燒鳥すみか', '山崎', '天麩羅', '割烹', '日料', '日式料理', '預約制'
  ],
  dining_japanese_chain: [
    '客美多', '客美多咖啡', 'komeda', 'komeda coffee', 'すき家', 'sukiya', '牛丼',
    '錢都', '錢都日式涮涮鍋', '錢都火鍋', '涮涮鍋'
  ],
  fastfood_mos: ['摩斯', '摩斯漢堡', 'mos', '米漢堡', '蒟蒻'],
  fastfood_mcdonalds: ['麥當勞', 'mcdonald', '得來速', '大麥克', '麥克雞塊', '麥當當'],
  fastfood_kfc: ['肯德基', 'kfc', '必勝客', 'pizza hut', 'pk雙饗', '蛋撻', '披薩', '炸雞'],
  dining_restaurant: [
    '王品', '瓦城', '藏壽司', '鼎泰豐', '春水堂', '餐廳', '聚餐',
    '西堤', '陶板屋', '原燒', '夏慕尼', '大心', '1010湘', '時時香', '涓豆腐',
    '饗饗', '旭集', '饗食天堂', '島語', 'nagomi', 'buffet', '吃到飽', '晶華柏麗廳',
    '漢來海港', '寒舍艾美', '探索廚房', '凱菲屋', '美福彩匯'
  ],

  // --- 超市量販 (4) ---
  supermarket_px: ['全聯', 'px pay', '全聯福利中心', '全聯先生', '全支付'],
  supermarket_carrefour: ['萬家福', '大全聯', '家樂福', '家樂福便利購', 'carrefour', '大潤發', 'rt-mart', '家樂福超市'],
  supermarket_lopia: ['lopia', '樂比亞', '日系超市'],
  supermarket_donki: ['唐吉訶德', 'don don donki', 'donki', '驚安殿堂', '唐吉軻德', '堂吉訶德', '唐吉', 'donki donki'],

  // --- 百貨服飾/藥妝 (9) ---
  department_store: [
    '新光三越', '微風', '微風廣場', '遠百', '遠東百貨', '台北101', '漢神', '漢神百貨',
    '百貨', '百貨公司', '購物中心', '美麗華', '京站', '統一時代',
    '無印良品', 'muji', '誠品', '誠品生活', '誠品書店', 'eslite', '燦坤', '全國電子', '順發', '3c'
  ],
  store_hands: [
    '台隆', '台隆手創館', 'hands', '台隆南港店', '南港lalaport台隆', '南港手創館', 'hands台隆手創館', '大創', 'daiso'
  ],
  mall_mingyao_xpark: [
    '明曜', '明曜百貨', 'xpark', '水生公園', 'xpark水族館', 'united arrows', 'ua', 'united arrows官方購物網'
  ],
  mall_sogo_dome: [
    'sogo', '遠東sogo', '遠東 sogo', '遠東sogo百貨', '大巨蛋', '台北大巨蛋', 'garden city', '遠東garden city', 'sogo百貨', 'sogo大巨蛋'
  ],
  mall_mitsui_lalaport: [
    '三井', 'mitsui', 'mitsui outlet', 'outlet', 'mitsui outlet park', 'lalaport',
    '三井outlet', '三井lalaport', '南港lalaport', '台中lalaport', '林口outlet', '台中港outlet', '台南outlet'
  ],
  drugstore_jp_med: [
    '日藥本舖', '日藥', '日系藥妝', '日藥本舖指定門市'
  ],
  fashion_fast: [
    'uniqlo', 'gu', '優衣庫', '極優', '網路商店', 'zara', 'net', '快時尚', 'h&m', '無印服飾', 'uniqlo直營店'
  ],
  home_ikea: ['ikea', '宜家家居', '宜家', '肉丸'],
  drugstore_cosmetics: [
    '康是美', '屈臣氏', '寶雅', 'poya', '寶家', 'watsons', 'cosmed', '松本清', 'tomod', 'tomods', '藥妝', '大樹', '大樹藥局', '杏一', '丁丁'
  ],

  // --- 網購數位 (8) ---
  online_shopee: ['蝦皮', 'shopee', '蝦皮購物', '蝦皮直送'],
  online_momo: ['momo', '富邦媒', 'momo購物'],
  online_pchome: ['pchome', 'pchome 24h', '24h購物', '皮卡', '24h', '網家', 'pchome線上購物'],
  online_coupang: ['酷澎', 'coupang', '酷鵬'],
  online_taobao: ['淘寶', '天貓', 'taobao', '集運'],
  streaming_media: ['netflix', 'disney+', 'disney', 'youtube', 'youtube premium', 'spotify', '串流', '追劇', '網飛', 'yt', 'yt music', 'kkbox'],
  digital_stores: [
    'app store', 'google play', 'apple store', '課金', 'icloud', 'apple music', '手遊', '遊戲課金',
    'steam', 'playstation', 'ps5', 'ps store', 'switch', '任天堂', 'mycard', '遊戲', 'garena', 'xbox'
  ],
  ai_software: ['chatgpt', 'claude', 'cursor', 'notion', 'ai', 'openai', 'perplexity', 'gemini', 'copilot', 'canva', 'midjourney', '生產力工具'],
  food_delivery: ['外送', 'uber eats', 'foodpanda', '熊貓', '外賣', 'ubereats', '熊貓外送', 'uber外送', '外送平台'],

  // --- 旅遊出行/交通 (8) ---
  transit_rail: ['高鐵', '台鐵', '火車', 'thsr', '鐵路', '車票', '普悠瑪', '太魯閣', '自強號'],
  travel_airlines: [
    '華航', '長榮', '星宇', '虎航', '日航', '航空', '機票', '廉航', '酷航', '國泰航空', '全日空', 'ana', 'eva air', 'china airlines', 'starlux'
  ],
  travel_booking_ota: [
    'agoda', 'booking', 'klook', 'kkday', 'trip.com', '訂房', '行程', '門票', '飯店預訂', '機加酒', 'expedia', 'hotels.com'
  ],
  travel_agencies: [
    '雄獅', '可樂', '易遊網', '東南', '旅行社', '跟團', '團費', '雄獅旅遊', '可樂旅遊', '東南旅遊', 'ezfly', 'eztravel'
  ],
  transit_taxi: ['uber', '55688', '台灣大車隊', 'yoxi', 'line go', '計程車', '叫車', '大車隊', 'grab'],
  transit_car_rental: ['irent', '和運', '格上', 'udrive', '租車', '共享汽車', '共享機車', 'wemo', 'goshare'],
  transit_japan_ic: ['suica', '西瓜卡', 'pasmo', 'icoca', '日本交通卡', '交通卡加值', '日本西瓜卡', 'apple suica', 'apple pasmo'],
  travel_overseas: ['海外實體', '出國', '國外消費', '日本實體', '迪士尼', '環球影城', 'usj', '日本', '韓國', '泰國', '歐美', '免稅店', '海外刷卡'],

  // --- 運動健身/裝備 (2) ---
  fitness_gym: [
    'world gym', '健身工廠', 'worldgym', 'wg', '健身房', 'being sport', 'being spa', 'curves',
    'anytime fitness', '健身', '重訓', '會籍', '月費', '健身房月費', '運動中心', 'wg會費'
  ],
  store_momentum: [
    '摩曼頓', 'momentum', '喬山', '喬山健康科技', 'johnson', '喬山生機', '跑步機', '健身器材'
  ]
};

/**
 * 計算單一通路的相關度評分 (Relevance Score)
 * 分數越高代表越核心、越相關；0 分代表不符合
 */
export function getChannelScore(ch: ScenarioChannel, rawQuery: string): number {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return 1;

  let score = 0;
  const nameLower = ch.name.toLowerCase();
  const descLower = ch.description.toLowerCase();
  const aliases = CHANNEL_ALIASES[ch.id] || [];

  // 1. 名稱完全相等
  if (nameLower === query) {
    score += 1000;
  }
  // 2. 名稱開頭包含關鍵字 (例如搜 "全家" 命中 "全家便利商店 (FamilyMart)")
  else if (nameLower.startsWith(query)) {
    score += 800;
  }
  // 3. 名稱內包含關鍵字 (例如搜 "全家" 命中 "全盈+PAY (PlusPay / 全家便利商店...)")
  else if (nameLower.includes(query)) {
    score += 500;
  }

  // 4. 品牌別名庫完全匹配 (例如搜 "星巴克", "得正", "全家")
  if (aliases.some(a => a.toLowerCase() === query)) {
    score += 400;
  }
  // 5. 品牌別名包含關鍵字 (例如搜 "中油" 命中 "中油加油站")
  else if (aliases.some(a => a.toLowerCase().includes(query) || query.includes(a.toLowerCase()))) {
    score += 250;
  }

  // 6. 官方主描述包含 (Description)
  if (descLower.includes(query)) {
    score += 100;
  }

  return score;
}

/**
 * 智慧比對通路是否符合搜尋字串 (已移除易引起雜訊的 pitfalls 全文搜尋)
 */
export function matchChannel(ch: ScenarioChannel, rawQuery: string): boolean {
  if (!rawQuery.trim()) return true;
  return getChannelScore(ch, rawQuery) > 0;
}

/**
 * 依相關度權重智慧篩選並排序通路列表
 * 名稱直接命中者永遠優先排在第 1 位
 */
export function filterAndRankChannels(channels: ScenarioChannel[], rawQuery: string): ScenarioChannel[] {
  const query = rawQuery.trim();
  if (!query) return channels;

  const scored = channels
    .map(ch => ({ channel: ch, score: getChannelScore(ch, query) }))
    .filter(item => item.score > 0);

  scored.sort((a, b) => b.score - a.score);

  return scored.map(item => item.channel);
}
