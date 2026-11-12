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

  // --- 美食飲品/聚餐 (19 通路：綜合外送 -> 連鎖速食 -> 手搖咖啡 -> 日系名店 -> 人氣燒肉火鍋) ---
  // 1. 綜合餐飲與外送平台 (2)
  dining_restaurant: [
    '王品', '瓦城', '藏壽司', '鼎泰豐', '春水堂', '餐廳', '聚餐',
    '西堤', '陶板屋', '原燒', '夏慕尼', '大心', '1010湘', '時時香', '涓豆腐',
    '饗饗', '旭集', '饗食天堂', '島語', 'nagomi', 'buffet', '吃到飽', '晶華柏麗廳',
    '漢來海港', '寒舍艾美', '探索廚房', '凱菲屋', '美福彩匯'
  ],
  food_delivery: ['外送', 'uber eats', 'foodpanda', '熊貓', '外賣', 'ubereats', '熊貓外送', 'uber外送', '外送平台'],

  // 2. 連鎖速食 (5)
  fastfood_mcdonalds: ['麥當勞', 'mcdonald', '得來速', '大麥克', '麥克雞塊', '麥當當'],
  fastfood_kfc: ['肯德基', 'kfc', 'pk雙饗', 'pk雙饗卡', '蛋撻', '蛋塔', '炸雞', '肯爺爺', '卡啦脆雞', '炸雞桶'],
  fastfood_burgerking: [
    '漢堡王', 'burger king', 'burgerking', 'bugerking', 'bk', '華堡', '小華堡', '安格斯牛堡', '火烤牛肉', '洋蔥圈'
  ],
  fastfood_mos: ['摩斯', '摩斯漢堡', 'mos', '米漢堡', '蒟蒻'],
  fastfood_pizzahut: ['必勝客', 'pizza hut', 'pizzahut', 'pk雙饗', 'pk雙饗卡', '披薩', '比薩', '芝心', '大比薩', '小比薩', '買大送大'],

  // 3. 手搖茶飲與咖啡輕食 (2)
  drink_chill: [
    '星巴克', 'starbucks', '路易莎', 'louisa', '50嵐', '得正', '八曜', '八曜和茶',
    '茶魔', '茶的魔手', '麻古', 'ug', '迷客夏', '可不可', '清心', 'cafe!n', 'cama',
    '手搖', '飲料', '咖啡', '一芳', '萬波', '先喝道', '龜記', '五桐號', '十盛', '鶴茶樓'
  ],
  dining_komeda: [
    '客美多', '客美多咖啡', 'komeda', 'komeda coffee', '名古屋早餐', '冰磚咖啡', '咖啡店'
  ],

  // 4. 日系名店與日式料理 (4)
  dining_sushiro: [
    '壽司郎', 'sushiro', '台灣壽司郎', '壽司郎扭蛋', '迴轉壽司', '生魚片', '日式料理'
  ],
  dining_sushiexpress: [
    '爭鮮', '爭鮮plus', '爭鮮迴轉壽司', '定食8', 'magic touch', '點爭鮮', '爭鮮餐飲', '迴轉壽司', '生魚片'
  ],
  dining_sukiya: [
    'すき家', 'sukiya', '食其家', '牛丼', '日式丼飯', '秋葵牛丼', '咖哩飯'
  ],
  dining_japanese_luxury: [
    '初魚', '初魚鮨', '初魚鉄板料亭', '初魚鐵板燒', '梵燒肉', '侍燒肉', '作天麩羅', '作 天麩羅',
    '濟安鮨', '元一天婦羅', '元一', '鳥苑', '成蔵', '成藏', '雞湯桑', '朝炭',
    '燒鳥すみか', '山崎', '天麩羅', '割烹', '日料', '日式料理', '預約制'
  ],

  // 5. 精品燒肉與人氣火鍋 (6)
  dining_uma: [
    '屋馬', '屋馬燒肉', '文心店', '中港店', '國安店', '崇德店', '中友店', '燒肉', '海鮮粥'
  ],
  dining_tanzuomali: [
    '碳佐麻里', '碳佐麻里精品燒肉', '碳佐', '台南燒肉', '高雄燒肉', '精品燒肉', '燒肉'
  ],
  dining_zhanji: [
    '詹記', '詹記麻辣火鍋', '敦南店', '西門大世界', '算算屋', '麻辣火鍋', '麻辣鍋', '鴨血'
  ],
  dining_orangeshabu: [
    '橘', '橘色', '橘色涮涮屋', 'orange shabu', 'extension 1', 'extension 1 by 橘色',
    '橘色一館', '橘色二館', '橘色台中館', '頂級火鍋', '橘色火鍋'
  ],
  dining_hotpot: [
    '茶六', '海底撈', '乾杯', '胡同', '火鍋', '燒肉', '餐酒', '臺虎',
    '刁民', '馬辣', '新馬辣', '老四川', '青花驕', '和牛涮', '肉多多', '萬客什鍋', '雞湯大叔'
  ],
  dining_chientu: [
    '錢都', '錢都日式涮涮鍋', '錢都火鍋', '涮涮鍋', '小火鍋', '連鎖火鍋'
  ],

  // --- 超市量販 (4) ---
  supermarket_px: ['全聯', 'px pay', '全聯福利中心', '全聯先生', '全支付'],
  supermarket_carrefour: ['萬家福', '大全聯', '家樂福', '家樂福便利購', 'carrefour', '大潤發', 'rt-mart', '家樂福超市'],
  supermarket_lopia: ['lopia', '樂比亞', '日系超市'],
  supermarket_donki: ['唐吉訶德', 'don don donki', 'donki', '驚安殿堂', '唐吉軻德', '堂吉訶德', '唐吉', 'donki donki'],

  // --- 百貨服飾/藥妝 (15 通路：百貨購物 -> 藥妝美妝 -> 流行服飾 -> 居家雜貨 -> 休閒育樂) ---
  // 1. 大型綜合百貨與商場購物中心 (4)
  department_store: [
    '新光三越', '微風', '微風廣場', '遠百', '遠東百貨', '台北101', '漢神', '漢神百貨',
    '百貨', '百貨公司', '購物中心', '美麗華', '京站', '統一時代',
    '無印良品', 'muji', '誠品', '誠品生活', '誠品書店', 'eslite', '燦坤', '全國電子', '順發', '3c'
  ],
  mall_sogo_dome: [
    'sogo', '遠東sogo', '遠東 sogo', '遠東sogo百貨', '大巨蛋', '台北大巨蛋', 'garden city', '遠東garden city',
    'sogo百貨', 'sogo大巨蛋', '潮美食公園', '大巨蛋餐廳', 'sogo復興', 'sogo忠孝', 'sogo天母', 'sogo中壢', 'sogo新竹', 'sogo高雄'
  ],
  mall_mitsui_lalaport: [
    '三井', 'mitsui', 'mitsui outlet', 'outlet', 'mitsui outlet park', 'lalaport',
    '三井outlet', '三井lalaport', '南港lalaport', '台中lalaport', '林口outlet', '台中港outlet', '台南outlet',
    '林口三井', '台中港三井', '台南三井'
  ],
  mall_mingyao: [
    '明曜', '明曜百貨', '明曜商場', '忠孝敦化明曜', 'ming yao'
  ],

  // 2. 連鎖藥妝與日系美妝 (2)
  drugstore_cosmetics: [
    '康是美', '屈臣氏', '寶雅', 'poya', '寶家', 'watsons', 'cosmed', '松本清', 'tomod', 'tomods', '藥妝', '大樹', '大樹藥局', '杏一', '丁丁'
  ],
  drugstore_jp_med: [
    '日藥本舖', '日藥', '日系藥妝', '日藥本舖指定門市'
  ],

  // 3. 流行服飾與快時尚 (5)
  fashion_uniqlo_gu: [
    'uniqlo', 'gu', '優衣庫', '極優', 'uniqlo直營店', 'uniqlo門市', 'uniqlo網路商店', 'gu網路商店', 'gu門市', '日系快時尚'
  ],
  fashion_zara: [
    'zara', '颯拉', 'zara台灣', 'zara官網', 'zara門市', '西班牙快時尚'
  ],
  fashion_hm: [
    'h&m', 'hm', '海恩斯莫里斯', 'h and m', 'hm門市', 'h&m門市', '瑞典快時尚'
  ],
  fashion_net: [
    'net', '主婦之店', 'net服飾', 'net國民服飾', '國民服飾'
  ],
  store_united_arrows: [
    'united arrows', 'ua', 'united arrows官方購物網', 'united arrows官網', 'ua官網', 'beauty & youth'
  ],

  // 4. 居家生活與生活雜貨 (3)
  home_ikea: ['ikea', '宜家家居', '宜家', '肉丸'],
  store_hands_nankang: [
    '台隆南港', '南港lalaport台隆', '南港手創館', '南港台隆', '台隆手創館南港店', 'hands南港', '南港lalaport手創館', '台隆南港店'
  ],
  store_hands_general: [
    '台隆', '台隆手創館', 'hands', '手創館', '大創', 'daiso', '台隆微風', '台隆京站', '台隆sogo', '台隆遠百', '台隆美麗華'
  ],

  // 5. 休閒育樂與特色景點 (1)
  spot_xpark: [
    'xpark', '水生公園', 'xpark水族館', '桃園水族館', '青埔水族館', '橫濱八景島', 'xpark門票'
  ],

  // --- 網購數位 (8) ---
  online_shopee: ['蝦皮', 'shopee', '蝦皮購物', '蝦皮直送'],
  online_momo: ['momo', '富邦媒', 'momo購物'],
  online_pchome: ['pchome', 'pchome 24h', '24h購物', '皮卡', '24h', '網家', 'pchome線上購物'],
  online_coupang: ['酷澎', 'coupang', '酷鵬'],
  online_taobao: ['淘寶', '天貓', 'taobao', '集運'],
  streaming_video: ['netflix', 'disney+', 'disney', '網飛', '迪士尼', '追劇', '影視串流', '線上電影', 'max', 'hbo', '影集'],
  streaming_music: ['spotify', 'youtube', 'youtube premium', 'yt', 'yt music', 'kkbox', '音樂串流', '線上音樂', 'podcast', 'yt premium'],
  digital_stores: [
    'app store', 'google play', 'apple store', '課金', 'icloud', 'apple music', '手遊', '遊戲課金',
    'steam', 'playstation', 'ps5', 'ps store', 'switch', '任天堂', 'mycard', '遊戲', 'garena', 'xbox'
  ],
  ai_software: ['chatgpt', 'claude', 'cursor', 'notion', 'ai', 'openai', 'perplexity', 'gemini', 'copilot', 'canva', 'midjourney', '生產力工具'],

  // --- 旅遊出行/交通 (8) ---
  transit_thsr: ['高鐵', '台灣高鐵', 'thsr', '高鐵車票', '高鐵票', '自由座', '對號座', 't-ex', 'tex', '商務車廂'],
  transit_tra: ['台鐵', '台灣鐵路', '火車', '火車票', '自強號', '普悠瑪', '太魯閣', '新自強', '區間車', 'e-booking', '鐵路'],
  travel_airlines: [
    '華航', '長榮', '星宇', '虎航', '日航', '航空', '機票', '廉航', '酷航', '國泰航空', '全日空', 'ana', 'eva air', 'china airlines', 'starlux'
  ],
  travel_booking_ota: [
    'agoda', 'booking', 'booking.com', 'trip.com', 'airbnb', 'hotels.com', 'expedia', '訂房', '飯店預訂', '住宿', '國外訂房', '青年旅館'
  ],
  travel_klook_kkday: [
    'klook', 'kkday', '客路', '行程', '門票', '票券', '體驗', '一日遊', '交通券', 'jr pass', '環球影城門票', '迪士尼門票'
  ],
  travel_agencies: [
    '雄獅', '可樂', '易遊網', '東南', '旅行社', '跟團', '團費', '雄獅旅遊', '可樂旅遊', '東南旅遊', 'ezfly', 'eztravel'
  ],
  transit_taxi_meter: ['55688', '台灣大車隊', 'yoxi', '計程車', '車載設備', '感應計程車', '小黃', '大車隊', '車內感應'],
  transit_taxi_app: ['uber', 'line go', 'grab', '叫車平台', '網約車', '優步', '境外叫車', 'app叫車', '線上叫車'],
  transit_car_rental: ['irent', '和運', '格上', 'udrive', '租車', '共享汽車', '和運租車', '格上租車', '短期租車', '門市租車'],
  transit_scooter_sharing: ['goshare', 'wemo', '共享機車', '電動機車', '共享電動機車', 'wemo scooter', 'gogoro share', '機車租借', '威摩'],
  transit_japan_ic: ['suica', '西瓜卡', 'pasmo', 'icoca', '日本交通卡', '交通卡加值', '日本西瓜卡', 'apple suica', 'apple pasmo', 'apple icoca', '西瓜卡儲值', '交通卡儲值'],
  travel_overseas: ['海外實體', '出國', '國外消費', '日本實體', '韓國實體', '迪士尼', '環球影城', 'usj', '日本', '韓國', '泰國', '美國', '加拿大', '免稅店', '海外刷卡', '日本購物'],
  travel_europe: ['歐洲', '英國', '法國', '義大利', '德國', '西班牙', '瑞士', '歐盟', '巴黎', '倫敦', '羅馬', '精品', 'chanel', 'lv', 'hermes', 'gucci', '歐洲實體', '歐盟排除', '歐洲退稅'],

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
