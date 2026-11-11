import type { CardRewardResult, CubeScheme, ScenarioChannel, TaishinScheme, UserCardConfig } from '../types/card';

export const CUBE_SCHEME_LABELS: Record<CubeScheme, { name: string; tag: string; desc: string; icon: string }> = {
  selected: { name: '集精選', tag: '中油 / 超商 / 全聯 / IKEA 2%', desc: '中油直營、7-11、全家、全聯、家樂福、LOPIA、IKEA 2.0% 無上限', icon: '⭐' },
  travel: { name: '趣旅行', tag: '海外實體 / 高鐵 / 機票 3%', desc: '海外實體外幣、高鐵、機票、Agoda/Booking、Uber叫車 3.0% 無上限', icon: '✈️' },
  dining: { name: '樂饗購', tag: '餐廳 / 外送 / 百貨 / 藥妝 3%', desc: '全台餐飲、UberEats、foodpanda、新光三越/SOGO/微風、康是美 3.0% 無上限', icon: '🍱' },
  digital: { name: '玩數位', tag: '網購 / 串流 / App / AI 3%', desc: '蝦皮、momo、酷澎、淘寶、Netflix、Spotify、ChatGPT、App Store 3.0% 無上限', icon: '💻' },
  formosa: { name: '台塑家', tag: '福懋/速邁樂/台塑/台亞 2%', desc: '台塑石油、台亞、福懋、統一速邁樂 2.0% 小樹點無上限 + 天天汽油降價', icon: '⛽' },
  pxpay: { name: '全支付', tag: '全支付特約 / 全聯 2%', desc: '全支付 App 綁定 CUBE 卡於指定特約門市消費享 2.0% 小樹點無上限', icon: '📱' },
  autumn: { name: '秋日遊', tag: '10/1~11/30 限定 3%~8%', desc: '期間限定日本指定名店、機場免稅、Suica/ICOCA 交通卡 3%~8% 小樹點', icon: '🍁' },
  birthday: { name: '慶生日', tag: '壽星專屬 3.5%~10% (7月)', desc: '當月壽星專屬，精選名店餐廳、百貨專櫃最高 3.5%~10% 小樹點', icon: '🎂' },
  japan: { name: '日本賞', tag: '日本實體 / Suica 3.5%~8%', desc: '赴日旅遊指定名店、Suica/ICOCA 儲值、免稅店加碼', icon: '🗾' },
  kids: { name: '童樂匯', tag: '婦幼 / 親子樂園 3%', desc: '母嬰婦幼生活用品、親子樂園 3.0% 無上限', icon: '🧸' },
  finance: { name: '來金網', tag: '保費 / 理財 3%', desc: '國泰人壽保費、證券等 3.0%', icon: '💼' }
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
    description: '台灣中油加油站（支援 Samsung Pay / Apple Pay / Google Pay / LINE Pay / 中油Pay / 台新Pay）',
    pitfalls: [
      '【直營 vs 加盟陷阱】國泰 CUBE「集精選 2.0%」嚴格限制「台灣中油直營店」！若在千越、台糖、車容坊等「加盟站」刷 CUBE 僅有 0.3%！',
      '【永豐 SPORT 7% 不挑站】永豐 SPORT 綁定 Apple Pay / Google Pay 手機感應享最高 7%，直營或加盟通通適用，不用費心辨別直營站！',
      '【台新 3.8% 雙方案】台新切換【天天刷】或【Pay著刷】，出示中油Pay / LINE Pay / 台新Pay 掃碼享 3.8%！',
      '【避雷】切勿直接拿台新或永豐 DAWAY 實體插卡結帳（實體僅 0.5%~1%）。'
    ]
  },
  {
    id: 'gas_formosa',
    name: '福懋加油站 (台塑體系 / 台亞 / 台塑石油)',
    category: 'gas',
    icon: '⛽',
    description: '福懋興業加油站、台亞石油、台塑石油直營與加盟體系（支援 Apple Pay / Google Pay / 實體刷卡 / 台塑石油Pay）',
    pitfalls: [
      '【CUBE 2% + 降價首選】國泰 CUBE 切換專屬【台塑家】權益，享 2% 小樹點無上限！現場天天汽油每公升降 1.2 元起，亦可搭配台塑石油 Pay 累積 F 幣！',
      '【永豐 SPORT 7% 感應之神】自助機台或人工島使用 Apple Pay / Google Pay / Samsung Pay 感應付款，達標享最高 7% 豐點（月刷 $6,000 封頂）！比 2% 更賺！',
      '【台新未涵蓋福懋】台新「天天刷」加油名單僅限中油直營、全國、台亞直營；福懋加油站未列入指定名單，實體刷卡僅享一般消費 0.3%~0.5%！',
      '【避開第三方電支】在福懋刷 CUBE 台塑家時，嚴禁使用 LINE Pay、街口等第三方電支條碼付款，否則直接被排除 2% 加碼降為 0.3%！'
    ]
  },
  {
    id: 'gas_smile',
    name: '速邁樂加油站 (統一精工 Smile)',
    category: 'gas',
    icon: '⛽',
    description: '統一集團旗下統一精工速邁樂加油中心（支援 Apple Pay / Google Pay / 實體刷卡 / OPEN 錢包 / icash Pay）',
    pitfalls: [
      '【CUBE 2% + 降價】國泰 CUBE 切換【台塑家】權益方案（限本島站點），刷卡享 2% 小樹點無上限 + 天天汽油每公升降價優惠！',
      '【⚠️ 速邁樂三大地雷】1. 速邁樂「不支援」台塑石油 Pay！2. 切勿使用 OPEN 錢包或 icash Pay 等第三方電支掃碼扣款（會被排除 CUBE 2% 回饋）！3. 速邁樂站內會員降價與 CUBE 降價通常互斥二選一。',
      '【永豐 SPORT 7% 不挑站】使用 Apple Pay / Google Pay / Samsung Pay 感應付款，達標享最高 7% 豐點（月刷 $6,000 封頂）！免算降價最簡單無腦！',
      '【台新未列入】速邁樂加油站不在台新「天天刷」指定名單中，實體刷卡僅 0.3%~0.5% 一般消費。'
    ]
  },
  {
    id: 'gas_national',
    name: '全國加油站 (National)',
    category: 'gas',
    icon: '⛽',
    description: '全國加油站連鎖站點（支援 Apple Pay / Google Pay / LINE Pay / 街口 / 實體刷卡）',
    pitfalls: [
      '【CUBE 0.3% 踩雷】全國加油站「不在」國泰 CUBE「集精選」或「台塑家」加碼名單中，刷 CUBE 僅享一般消費 0.3%！',
      '【永豐 SPORT 7% 首選】自助機台或人工島使用 Samsung / Apple / Google Pay 感應享最高 7% 豐點！',
      '【台新 3.8% 掃碼】全國加油站支援 LINE Pay，台新切換【Pay著刷】走 LINE Pay 掃碼享 3.8%（亦在天天刷名單中）！',
      '【DAWAY 3%】走 LINE Pay 付款，新戶享 3% LINE POINTS。'
    ]
  },
  // 充電與行車出行
  {
    id: 'ev_charging_parking',
    name: '電動車充電 / 智慧停車 (EVOASIS/U-POWER/車麻吉/uTagGo)',
    category: 'gas',
    icon: '⚡',
    description: 'U-POWER、EVOASIS、EVALUE、TAIL特爾電力、iCharging充電站；車麻吉、uTagGo智慧停車',
    pitfalls: [
      '【CUBE 2.0%】國泰 CUBE 切換【集精選】，指定充電站與車麻吉/uTagGo享 2.0% 小樹點無上限！',
      '【台新 3.3%】台新切換【天天刷】（加油/充電/交通出行）享 3.3% 台新Point！',
      '【避雷注意】車麻吉中油加油消費不列入集精選（加油請直接刷中油直營）；uTagGo 月租停車排除。',
      '【永豐 DAWAY 3%】App 內付款若支援 LINE Pay 享新戶 3% / 舊戶 1.5%。'
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
      '【致命地雷 1】7-11 門市不支援永豐信用卡與 Apple Pay（未合作刷不過），且超商屬小額支付 0% 排除，千萬不要用 SPORT 卡！',
      '【台新Pay神器 3.8%】台新切換【天天刷】或【Pay著刷】，打開「台新Pay」掃碼享 3.8%（單筆上限 $3,000）！',
      '【CUBE 2.0%】CUBE 切換【集精選】，門市實體/感應享 2.0% 小樹點無上限（一般0.3%+指定加碼1.7%）。',
      '【致命地雷 2】千萬不要拿台新卡直接「實體刷卡或Apple Pay感應」，非台新Pay直接 0%！',
      '【致命地雷 3】7-11 門市的 LINE Pay「不支援」永豐信用卡扣款（刷不過）！',
      '【致命地雷 4】CUBE 卡若未切換至「集精選」，在 7-11 直接 0% 排除！'
    ]
  },
  {
    id: 'convenience_family',
    name: '全家便利商店 (FamilyMart)',
    category: 'convenience',
    icon: '🏪',
    description: '支援 Samsung Pay / Apple Pay / Google Pay / LINE Pay / 全盈+PAY / 台新Pay',
    pitfalls: [
      '【永豐超商 0% 排除】全家雖然可刷永豐卡，但超商屬於非一般消費小額排除通路，SPORT 卡 Apple Pay 拿不到 7%（直接 0%）！',
      '【台新Pay 3.8%】台新【天天刷】或【Pay著刷】出示「台新Pay」掃碼享 3.8%（單筆限額 $3,000）！',
      '【CUBE 2.0% + 券最高 6%】國泰 CUBE 切換至「集精選」享 2.0% 無上限；11月領券滿額折抵最高享 6.0%！',
      '【避雷】全家千萬不要拿台新實體卡直接感應（0%），一定要出示台新Pay條碼！'
    ]
  },
  {
    id: 'convenience_hilife_ok',
    name: '萊爾富 / OK 便利商店',
    category: 'convenience',
    icon: '🏪',
    description: '超商一般刷卡皆為 0% 回饋排除，僅特定行動支付有回饋',
    pitfalls: [
      '【國泰 CUBE 0% 排除】CUBE「集精選」只有 7-11 與全家，萊爾富/OK 刷 CUBE 直接 0% 排除！',
      '【台新Pay唯一解 3.8%】台新切換至【Pay著刷】，出示「台新Pay」掃碼享 3.8%（單筆限額 $3,000）！',
      '【永豐全系列 0% 排除】萊爾富與 OK 屬於超商小額支付，永豐 SPORT 與 DAWAY 直接 0% 排除！',
      '【實體感應地雷】萊爾富與 OK 千萬不要拿任何信用卡直接插卡或 Apple Pay 感應（一律 0% 排除）！'
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
  {
    id: 'dining_orangeshabu',
    name: '橘色涮涮屋 / Extension 1 by 橘色',
    category: 'food',
    icon: '🍲',
    description: '頂級日式鍋物（橘色涮涮屋一館/二館/台中館、Extension 1 by 橘色）',
    pitfalls: [
      '【CUBE 秋日遊 8.0% 狂暴加碼】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，橘色涮涮屋全門市享高達 8.0% 小樹點（無上限）！',
      '【CUBE 平常樂饗購 3%~3.3%】若非秋日遊期間，切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 小樹點無上限！大額聚餐免算上限！',
      '【台新 好饗刷 3.3%】台新切換【好饗刷】享全台餐飲 3.3% 台新Point！',
      '【永豐 SPORT 7% 感應支付】門市支援 Apple Pay / Google Pay / Samsung Pay 感應，達標享最高 7% 豐點（月刷 $6,000 封頂）！'
    ]
  },
  {
    id: 'dining_sushiro',
    name: '台灣壽司郎 / 爭鮮迴轉壽司',
    category: 'food',
    icon: '🍣',
    description: '熱門連鎖迴轉壽司（台灣壽司郎、爭鮮迴轉壽司、爭鮮PLUS）',
    pitfalls: [
      '【CUBE 慶生日 10% 壽星神卡】7月壽星生日當月切換【慶生日】方案，台灣壽司郎享狂暴 10.0% 小樹點無上限！',
      '【CUBE 秋日遊 5.0% 快閃】10/01~11/30 期間限定：切換【秋日遊】方案，爭鮮迴轉壽司、爭鮮PLUS 享 5.0% 小樹點無上限！',
      '【台新雙方案】門市支援 LINE Pay 條碼切【Pay著刷】享 3.8%；實體卡感應切【好饗刷】享 3.3%！',
      '【永豐 SPORT 7%】門市收銀機台支援 Apple Pay 感應付款，每月運動達標享最高 7%！'
    ]
  },
  {
    id: 'dining_japanese_luxury',
    name: '日系頂級名店 (初魚/梵燒肉/侍燒肉/天麩羅)',
    category: 'food',
    icon: '🍱',
    description: '初魚鮨、初魚 鉄板料亭、梵燒肉、侍燒肉、作 天麩羅、濟安鮨、元一天婦羅、鳥苑、成蔵、雞湯桑、朝炭',
    pitfalls: [
      '【CUBE 秋日遊 8.0% 狂暴加碼】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，名店饗宴享高達 8.0% 小樹點（無上限）！秋日預約制日料首選！',
      '【CUBE 平常樂饗購 3%~3.3%】若非秋日遊期間，切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 小樹點無上限！',
      '【台新 好饗刷 3.3%】台新切換【好饗刷】享全台餐飲 3.3% 台新Point！',
      '【永豐 SPORT 7%】現場支援 Apple Pay / Google Pay 感應且每月運動達標，享最高 7% 豐點（月刷 $6,000 封頂）！'
    ]
  },
  {
    id: 'dining_japanese_chain',
    name: '日系連鎖美饌 (客美多咖啡 / すき家 / 錢都涮涮鍋)',
    category: 'food',
    icon: '☕',
    description: '客美多咖啡 (Komeda\'s Coffee)、すき家 SUKIYA、錢都日式涮涮鍋',
    pitfalls: [
      '【CUBE 秋日遊 5.0% 快閃】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，客美多咖啡、すき家 SUKIYA、錢都日式涮涮鍋享 5.0% 小樹點無上限！',
      '【CUBE 平常樂饗購 3%~3.3%】平時切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 小樹點無上限！',
      '【台新雙方案】門市出示 LINE Pay 條碼切【Pay著刷】享 3.8%；實體卡感應切【好饗刷】享 3.3%！',
      '【永豐 SPORT 7%】門市收銀機台支援 Apple Pay 感應付款，達標享最高 7%！'
    ]
  },
  // 網購
  {
    id: 'online_shopee',
    name: '蝦皮購物 Shopee',
    category: 'online',
    icon: '🦐',
    description: '全台最大 C2C/B2C 電商平台（蝦皮商城 / 蝦皮直送 / 個人賣場）',
    pitfalls: [
      '【CUBE 3.3% 無上限】國泰 CUBE 切換「玩數位」，線上刷卡享 3.3% 小樹點無上限，大額採購第一首選！',
      '【台新 3.3% 直刷】蝦皮大部分訂單不支援 LINE Pay，台新請切換【數趣刷】直接輸入卡號結帳享 3.3%！',
      '【避開永豐】永豐 SPORT/DAWAY 直刷僅 1%，且無法使用行動支付加碼。'
    ]
  },
  {
    id: 'online_momo',
    name: 'momo 購物網',
    category: 'online',
    icon: '🍑',
    description: '綜合 B2C 購物網（家電、日常用品、美妝等，支援 LINE Pay）',
    pitfalls: [
      '【台新 3.8% 首選】結帳付款選擇「LINE Pay」，台新切換【Pay著刷】享最高 3.8% 台新Point！',
      '【CUBE 3.3% 大額無上限】切換「玩數位」直接刷卡享 3.3% 小樹點無上限，高單價商品採購首選！',
      '【永豐 DAWAY 3%】結帳選擇 LINE Pay 付款，新戶享 3% LINE POINTS。'
    ]
  },
  {
    id: 'online_pchome',
    name: 'PChome 24h 購物',
    category: 'online',
    icon: '📦',
    description: '3C 家電與 24h 到貨電商平台（支援 LINE Pay / 信用卡）',
    pitfalls: [
      '【台新 3.8% 首選】結帳選擇「LINE Pay」付款，台新切換【Pay著刷】享最高 3.8% 台新Point！若直接刷卡切【數趣刷】享 3.3%！',
      '【CUBE 3.3% 大額無上限】切換「玩數位」直接輸入卡號刷卡享 3.3% 小樹點無上限，高單價 3C 電腦採購第一首選！',
      '【CUBE 避坑提醒】在 PChome 刷 CUBE 千萬不能分期（分期降為 0.3%），也不要買儲值金/票券（整單降為 0.3%），且不可走 LINE Pay 扣款！',
      '【永豐 DAWAY 3%】結帳選擇 LINE Pay 付款，新戶享 3% LINE POINTS。'
    ]
  },
  {
    id: 'online_coupang',
    name: '酷澎 Coupang',
    category: 'online',
    icon: '🚀',
    description: '日韓進口與火箭速配電商平台（支援 LINE Pay / 信用卡）',
    pitfalls: [
      '【台新 3.8% 首選】結帳付款方式選擇「LINE Pay」，台新切換【Pay著刷】享最高 3.8% 台新Point！',
      '【CUBE 3.3% 無上限】切換「玩數位」直接輸入卡號刷卡享 3.3% 小樹點無上限！',
      '【永豐 DAWAY 3%】結帳選擇 LINE Pay 付款，新戶享 3% LINE POINTS。',
      '【火箭跨境提醒】若選購「火箭跨境」海外商品，可能產生 1.5% 海外交易手續費。'
    ]
  },
  {
    id: 'online_taobao',
    name: '淘寶 / 天貓 (Taobao 跨境網購)',
    category: 'online',
    icon: '🛍️',
    description: '淘寶 App、天貓跨境電商購物結帳',
    pitfalls: [
      '【CUBE 3.3% 首選】國泰 CUBE 切換【玩數位】享 3.3% 小樹點無上限！',
      '【台新 3.3%】台新切換【數趣刷】享 3.3% 台新Point！',
      '【DAWAY 3%】永豐 DAWAY 跨境海外消費享 3% LINE POINTS 無上限。',
      '【手續費提醒】淘寶結帳會有 1.5% 國際手續費，刷 3.3% 或 3% 可完美覆蓋！'
    ]
  },
  {
    id: 'streaming_media',
    name: '串流影音與音樂 (Netflix/Disney+/YouTube/Spotify)',
    category: 'online',
    icon: '🎬',
    description: 'Netflix、Disney+、YouTube Premium、Spotify、Max(HBO) 等線上串流訂閱',
    pitfalls: [
      '【台新 Chill刷 10% 狂暴首選】台新卡切換【Chill刷】（指定影音串流），Netflix/Disney+ 享 10.0% 台新Point！',
      '【CUBE 3.3% 無上限】國泰 CUBE 切換【玩數位】享 3.3% 小樹點無上限！',
      '【海外手續費說明】部分串流（如 Netflix、Spotify）主機設於海外，帳單會收取 1.5% 手續費；台新 10% 扣除後仍淨賺 8.5%！',
      '【SPORT / DAWAY】走線上扣款僅一般消費 1%~2%。'
    ]
  },
  {
    id: 'digital_stores',
    name: 'App Store / Google Play (手遊課金 / 軟體訂閱 / iCloud)',
    category: 'online',
    icon: '📱',
    description: 'Apple 媒體服務（App Store、Apple Music、iCloud、Apple One）；Google Play 應用程式與手遊課金',
    pitfalls: [
      '【CUBE 3.3% 大課長首選】國泰 CUBE 切換【玩數位】，App Store 與 Google Play 享 3.3% 小樹點無上限！課金大戶首選！',
      '【台新 3.3%】台新切換【數趣刷】（指定數位娛樂），App Store / Google Play 享 3.3% 台新Point！',
      '【致命避雷】Apple 實體直營店（台北 101/A13）或官網購買 iPhone/Mac 硬體設備「不屬於」玩數位（買硬體切勿誤刷玩數位）！',
      '【SPORT / DAWAY】App Store 與 Google Play 線上扣款僅一般消費 1%~2%。'
    ]
  },
  {
    id: 'ai_software',
    name: 'AI 工具與雲端生產力 (ChatGPT/Cursor/Claude/Notion/Canva)',
    category: 'online',
    icon: '🤖',
    description: 'ChatGPT (OpenAI)、Claude、Cursor、Perplexity、Gemini、Notion、Canva、Duolingo 等 AI 與生產力軟體',
    pitfalls: [
      '【CUBE 3.3% 業界最強】國泰 CUBE 領先納入！切換【玩數位】享各大 AI 工具訂閱 3.3% 小樹點無上限！',
      '【台新 3.3%】台新切換【數趣刷】（AI 服務與線上軟體），ChatGPT / Cursor 享 3.3% 台新Point！',
      '【DAWAY 3%】永豐 DAWAY 美元外幣扣款享海外消費 3% LINE POINTS 無上限！',
      '【海外手續費說明】AI 服務大多為海外扣款（以美元計價），帳單會有 1.5% 交易手續費，使用 3.3% 信用卡可倒賺 1.8%！'
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
  // 速食連鎖 (摩斯漢堡)
  {
    id: 'fastfood_mos',
    name: '摩斯漢堡 MOS Burger',
    category: 'food',
    icon: '🍔',
    description: '全台實體門市、自助點餐機、MOS Order App（支援 Apple Pay / LINE Pay / 信用卡）',
    pitfalls: [
      '【永豐首選 7%】門市櫃台或自助點餐機使用 Apple Pay / Google Pay / Samsung Pay 感應，SPORT 卡最高享 7%！',
      '【台新神技 3.8%】切換【Pay著刷】門市出示 LINE Pay 條碼掃碼享 3.8%（亦可切換【好饗刷】實體刷 3.3%）！',
      '【百貨美食街避坑】若摩斯開在百貨/車站內，實體刷卡常被列為「百貨」而排除餐飲回饋！強烈建議直接走 LINE Pay 掃碼最穩！',
      '【CUBE 3.3%】國泰 CUBE 切換至「樂饗購」享 3.3% 小樹點無上限（或當期秋日遊專屬加碼最高 3.5%）！',
      '【DAWAY 3%】永豐 DAWAY 綁定 LINE Pay 門市掃碼，新戶享 3% / 舊戶 1.5% LINE POINTS！',
      '【MOS App 線上點餐】MOS Order App 線上點餐主要支援信用卡綁卡線上刷（不支援 LINE Pay），建議選 CUBE 樂饗購 3.3% 或台新！'
    ]
  },
  // 速食連鎖 (麥當勞)
  {
    id: 'fastfood_mcdonalds',
    name: "麥當勞 McDonald's",
    category: 'food',
    icon: '🍟',
    description: '全台實體門市、自助點餐機、得來速、麥當勞 APP（支援 LINE Pay / 信用卡 / 點點卡）',
    pitfalls: [
      '【致命小額地雷】麥當勞實體刷卡機走 NCCC「小額支付平台」，千萬不要直接拿台新或永豐「實體卡直接插卡或感應」，直接被銀行列為 0% 排除！',
      '【破解首選 LINE Pay 3.8%】臨櫃或自助點餐機出示「LINE Pay 條碼掃碼」，台新切換【Pay著刷】享 3.8%！永豐 DAWAY 新戶享 3%！',
      '【CUBE 樂饗購 3.3%】國泰 CUBE 卡有特別將麥當勞納入樂饗購餐飲加碼，門市刷卡或麥當勞 APP 手機點餐享 3.3% 小樹點無上限！',
      '【點點卡雙賺密技】使用 CUBE 樂饗購線上儲值麥當勞點點卡拿 3.3%，結帳再扣點點卡累積 M Point 點數！'
    ]
  },
  // 速食連鎖 (肯德基)
  {
    id: 'fastfood_kfc',
    name: '肯德基 KFC',
    category: 'food',
    icon: '🍗',
    description: '全台實體門市、自助點餐機、得來速、PK雙饗卡 APP / 官網線上訂餐（支援 Apple Pay / LINE Pay / 街口）',
    pitfalls: [
      '【永豐 SPORT 7%】門市櫃台/自助機使用 Apple Pay / Google Pay / Samsung Pay 感應，SPORT 卡最高享 7%！',
      '【台新雙方案 3.8%】門市或線上出示 LINE Pay 條碼切換【Pay著刷】享 3.8%！實體刷卡切換【好饗刷】享 3.3%！',
      '【⚠️ CUBE 切換樂饗購 3.3%】肯德基切換【樂饗購】享 3.3% 小樹點無上限！注意：肯德基「未列入」秋日遊名單，切勿切換秋日遊，否則僅 0.3%！',
      '【PK App 三重疊加】先在 PK雙饗卡 App 輸入 5 碼優惠代碼折價，搭配線上刷卡或 LINE Pay 賺 PK 點數與信用卡回饋！'
    ]
  },
  // 速食連鎖 (必勝客)
  {
    id: 'fastfood_pizzahut',
    name: '必勝客 Pizza Hut',
    category: 'food',
    icon: '🍕',
    description: '全台實體門市、自助點餐機、PK雙饗卡 APP / 必勝客官網線上訂餐（支援 Apple Pay / LINE Pay / 街口）',
    pitfalls: [
      '【CUBE 秋日遊限定 5.0%】10/1~11/30 切換【秋日遊】方案，必勝客全通路刷卡享 5.0% 小樹點無上限（非活動期間切【樂饗購】享 3.3%）！',
      '【永豐 SPORT 7%】門市櫃台/自助機使用 Apple Pay / Google Pay / Samsung Pay 感應，SPORT 卡最高享 7%！',
      '【台新雙方案 3.8%】門市或線上出示 LINE Pay 條碼切換【Pay著刷】享 3.8%！實體刷卡切換【好饗刷】享 3.3%！',
      '【⚠️ 隨饗券排除】PK雙饗卡 App 購買「PK隨饗券」與「禮物卡」不適用秋日遊 5% 回饋！'
    ]
  },
  // 餐廳
  {
    id: 'dining_restaurant',
    name: '全台實體餐廳 / 聚餐',
    category: 'food',
    icon: '🍽️',
    description: '一般獨立餐廳、特色餐酒館、排餐合菜、連鎖餐飲',
    pitfalls: [
      '【CUBE 樂饗購 3%~3.3% 首選】全台合法登記餐飲（MCC 5811/5812）刷 CUBE 切換【樂饗購】享最高 3.3% 小樹點無上限！幾萬塊聚餐大額消費不封頂！',
      '【⚠️ 飯店餐廳致命地雷】若在晶華、萬豪、喜來登等「飯店/酒店附設餐廳」用餐，簽單常登記為「飯店住宿業 (MCC 7011)」，樂饗購會直接排除判定為 0.3%！此時 CUBE 必須改切【趣旅行】享 3.3%！',
      '【⚠️ KTV / 酒吧排除】在錢櫃、好樂迪點餐，簽單登記為視聽娛樂業 (MCC 7999)，不屬於餐飲業，僅一般消費 0.3%！',
      '【永豐 SPORT 7% 感應之神】若餐廳櫃檯能使用 Apple Pay / Google Pay / Samsung Pay 感應且月刷 $6,000 內，SPORT 卡享 7% 完勝！',
      '【台新 好饗刷 3.3%】台新切換至【好饗刷】，全台餐飲（含王品瘋Pay、連鎖餐飲）享 3.3% 台新Point！'
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
      '【全聯唯一首選】國泰 CUBE 切換至「集精選」，實體刷卡享 2.0% 小樹點無上限（全聯非一般消費但CUBE集精選特例加碼）！',
      '【注意】全聯直接刷黑狗卡、DAWAY、SPORT 實體卡皆為 0% 回饋！'
    ]
  },
  {
    id: 'supermarket_carrefour',
    name: '萬家福 / 大全聯',
    category: 'supermarket',
    icon: '🏬',
    description: '大型量販超市（含萬家福量販、樂家康超市、大全聯量販）',
    pitfalls: [
      '永豐 SPORT 卡使用 Samsung Pay / Apple Pay 感應享 7%！',
      '台新切換【天天刷】(萬家福/大全聯等指定量販) 享 3.3%！',
      '國泰 CUBE 切換至「集精選」，家樂福實體享 2.0% 小樹點無上限。'
    ]
  },
  {
    id: 'supermarket_lopia',
    name: 'LOPIA 台灣日系超市',
    category: 'supermarket',
    icon: '🥩',
    description: '日本人氣生鮮肉品超市（新北中和環球、台中LaLaport、桃園等店）',
    pitfalls: [
      '【CUBE 2.0%】國泰 CUBE 正式納入【集精選】，門市實體刷卡享 2.0% 小樹點無上限！',
      '【永豐 SPORT 7%】門市收銀機台支援 Apple Pay / Google Pay 感應，達標享最高 7%！',
      '【台新 3.3%】若門市設立於百貨商場（如中和環球、台中LaLaport），台新切換【大筆刷】或【天天刷】享 3.3%！',
      '【注意】部分 LOPIA 特殊生鮮櫃位僅收現金，結帳前請留意該收銀台標示。'
    ]
  },
  {
    id: 'supermarket_donki',
    name: 'DON DON DONKI 唐吉訶德',
    category: 'supermarket',
    icon: '🐧',
    description: '台灣 DON DON DONKI 唐吉訶德（日系生活量販、生鮮熟食、零食美妝）',
    pitfalls: [
      '【CUBE 秋日遊 5.0% 快閃】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，台灣 DON DON DONKI 享 5.0% 小樹點無上限！',
      '【台新 Pay著刷 3.8%】結帳出示 LINE Pay 條碼付款，台新切換【Pay著刷】享最高 3.8% 台新Point！',
      '【永豐 SPORT 7%】現場收銀機支援 Apple Pay / Google Pay / Samsung Pay 感應，達標享最高 7% 豐點！',
      '【平日避雷提醒】唐吉訶德非秋日遊期間，獨立街邊門市刷 CUBE 僅一般消費 0.3%（非集精選常態加碼）；百貨店中櫃需視百貨自營機台認定。'
    ]
  },
  // 百貨家居與藥妝
  {
    id: 'department_store',
    name: '全台指定百貨 (新光三越/SOGO/遠百/微風/台北101/漢神)',
    category: 'department',
    icon: '🏬',
    description: '新光三越、遠東SOGO、遠東百貨、微風廣場、台北101、漢神百貨、京站、統一時代、美麗華等大型百貨',
    pitfalls: [
      '【CUBE 週年慶/精品首選】國泰 CUBE 切換【樂饗購】享 3.3% 小樹點無上限！大額消費不封頂！',
      '【台新 3.3%】台新切換【大筆刷】享 3.3%（新光三越、遠東SOGO、微風、台北101等）！',
      '【SPORT 7% 限額】若專櫃支援 Apple Pay / Google Pay 感應，SPORT 卡享 7%（每月限額 $6,000）！',
      '【避雷注意】部分百貨館內獨立租賃特約店、部分精品專櫃（獨立收銀機台）若非百貨自營機台，可能不列入加碼名單，建議結帳時確認發票為百貨抬頭。'
    ]
  },
  {
    id: 'store_hands',
    name: 'HANDS 台隆手創館 (南港 LaLaport 店 / 門市)',
    category: 'department',
    icon: '🛍️',
    description: 'HANDS 台隆手創館（南港 LaLaport 店享秋日遊 8.0% 小樹點無上限）',
    pitfalls: [
      '【CUBE 秋日遊 8.0% 狂暴加碼】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，HANDS 台隆手創館（南港 LaLaport 店）享最高 8.0% 小樹點（無上限）！',
      '【永豐 SPORT 7% 不挑店】實體機台使用 Apple Pay / Google Pay 感應付款，達標享最高 7% 豐點！',
      '【台新 3.3%】門市消費切換【大筆刷】享 3.3% 台新Point！'
    ]
  },
  {
    id: 'mall_mingyao_xpark',
    name: '明曜百貨 / Xpark 水生公園 / UNITED ARROWS',
    category: 'department',
    icon: '🏬',
    description: '台北明曜百貨、Xpark 都會型水生公園、UNITED ARROWS 官方購物網站',
    pitfalls: [
      '【CUBE 秋日遊 5.0% 快閃】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，明曜百貨、Xpark、UNITED ARROWS 享 5.0% 小樹點（無上限）！',
      '【永豐 SPORT 7%】現場機台使用 Apple Pay / Google Pay 感應付款享最高 7%！',
      '【台新雙方案】明曜百貨切【大筆刷】享 3.3%；若支援 LINE Pay 切【Pay著刷】享 3.8%！'
    ]
  },
  {
    id: 'mall_sogo_dome',
    name: '遠東SOGO百貨 / Garden City 大巨蛋 (SOGO各館)',
    category: 'department',
    icon: '🏬',
    description: '遠東SOGO各館 (忠孝/復興/敦化/天母/中壢/新竹/高雄) 與 Garden City 台北大巨蛋商場',
    pitfalls: [
      '【CUBE 秋日遊 3.5%】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，遠東 SOGO（含 Garden City 大巨蛋）享 3.5% 小樹點無上限！',
      '【CUBE 平常樂饗購 3%~3.3%】平常日切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3)；7月壽星切【慶生日】享 3.5%！',
      '【永豐 SPORT 7%】專櫃支援 Apple Pay 感應付款享最高 7%（月刷 $6,000 封頂）！',
      '【台新 3.3%】台新切換【大筆刷】專櫃實體消費享 3.3% 台新Point！'
    ]
  },
  {
    id: 'mall_mitsui_lalaport',
    name: '三井 MITSUI OUTLET / Mitsui LaLaport',
    category: 'department',
    icon: '🛍️',
    description: 'MITSUI OUTLET PARK (林口/台中港/台南)、Mitsui Shopping Park LaLaport (南港/台中)',
    pitfalls: [
      '【CUBE 秋日遊 3.0%】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，三井 OUTLET 與 LaLaport 享 3.0% 小樹點無上限！',
      '【平日樂饗購 3%~3.3%】平常日切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 小樹點無上限！',
      '【永豐 SPORT 7%】商場專櫃使用 Apple Pay / Google Pay 感應付款享最高 7%！',
      '【台新 3.3%】台新切換【大筆刷】享 3.3% 台新Point！'
    ]
  },
  {
    id: 'drugstore_jp_med',
    name: '日藥本舖 (指定門市) / 日系藥妝',
    category: 'department',
    icon: '💊',
    description: '日藥本舖全台指定門市（秋日遊加碼日系藥妝 3.5%）',
    pitfalls: [
      '【CUBE 秋日遊 3.5%】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，日藥本舖指定門市享 3.5% 小樹點無上限！',
      '【平日樂饗購 3%~3.3%】平常日切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 小樹點無上限！',
      '【永豐 SPORT 7%】門市出示 Apple Pay 感應付款享 7% 豐點！',
      '【台新雙方案】切【天天刷】實體感應享 3.3%；出示 LINE Pay 切【Pay著刷】享 3.8%！'
    ]
  },
  {
    id: 'fashion_fast',
    name: 'UNIQLO / GU (網路商店與直營門市) / 快時尚',
    category: 'department',
    icon: '👕',
    description: 'UNIQLO（網路商店/直營門市）、GU 台灣網路商店、ZARA、H&M、NET',
    pitfalls: [
      '【CUBE 秋日遊 3.0% 快閃】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，UNIQLO（網路商店/直營店）與 GU 台灣網路商店享 3.0% 小樹點無上限！',
      '【百貨店中櫃地雷】若在百貨館內門市消費，UNIQLO/GU 多使用品牌自營獨立刷卡機（簽單非百貨抬頭），刷 CUBE 僅一般消費 0.3%！',
      '【永豐 SPORT 7% 無腦破解】實體門市結帳直接使用 Apple Pay / Google Pay 感應付款，達標享最高 7% 豐點，完全不受店中櫃特店名稱限制！',
      '【台新雙方案】門市或線上出示 LINE Pay 條碼切【Pay著刷】享 3.8%；百貨專櫃機台切【大筆刷】享 3.3%！'
    ]
  },
  {
    id: 'home_ikea',
    name: 'IKEA 宜家家居 (門市 / 餐廳 / 官網)',
    category: 'department',
    icon: '🪑',
    description: '全台 IKEA 實體門市、IKEA 餐廳用餐、線上購物官網',
    pitfalls: [
      '【台新 3.3% 首選】台新切換【大筆刷】（指定居家裝修：IKEA、特力屋）享 3.3% 台新Point！',
      '【CUBE 2.0%】國泰 CUBE 切換【集精選】享 2.0% 小樹點無上限！大額家具採購不封頂！',
      '【永豐 SPORT 7%】門市使用 Apple Pay / Google Pay 感應付款，達標享最高 7% 回饋（月刷 $6,000 封頂）！',
      '【永豐 DAWAY 3%】出示 LINE Pay 條碼結帳，新戶享 3% / 舊戶享 1.5% LINE POINTS。'
    ]
  },
  {
    id: 'drugstore_cosmetics',
    name: '生活藥妝 (康是美/屈臣氏/寶雅/松本清)',
    category: 'department',
    icon: '💄',
    description: '康是美、屈臣氏、寶雅 POYA、松本清、Tomod\'s、日藥本舖等連鎖生活藥妝',
    pitfalls: [
      '【永豐 SPORT 7% 首選】門市使用 Apple Pay / Google Pay / Samsung Pay 感應付款，達標享最高 7% 回饋！',
      '【國泰 CUBE 3.3%】切換至【樂饗購】享 3.3% 小樹點無上限，大額醫美保養首選！',
      '【台新 3.3%】台新切換【天天刷】（涵蓋康是美、屈臣氏等）享 3.3% 台新Point！',
      '【永豐 DAWAY 3%】出示 LINE Pay 條碼結帳，新戶享 3% / 舊戶享 1.5% LINE POINTS。'
    ]
  },
  // 旅遊與交通出行 (趣旅行核心通路)
  {
    id: 'transit_rail',
    name: '台灣高鐵與台鐵 (THSR / 台灣鐵路)',
    category: 'travel',
    icon: '🚄',
    description: '台灣高鐵（官網 / T-EX App / 車站售票機/臨櫃）、台鐵火車（官網 / e-Booking / 車站窗口）',
    pitfalls: [
      '【⚠️ 高鐵有加碼、台鐵沒有！】國泰 CUBE「趣旅行 3.3%」嚴格限制「台灣高鐵」！台鐵火車「不在」加碼名單中，刷台鐵僅有一般消費 0.3%！',
      '【台鐵/高鐵雙通吃首選】台新切換【天天刷】，高鐵與台鐵通通享有 3.3%~3.8% 台新Point 無上限！通勤族與返鄉最穩首選！',
      '【永豐 SPORT 7% 感應之神】在車站自動售票機或窗口購票，使用 Apple Pay / Google Pay / Samsung Pay 感應付款享 7% 豐點（月刷 $6,000 封頂）！比 3.3% 更賺！線上 App 刷卡僅 1%~2%。',
      '【永豐 DAWAY 3%】若在車站售票窗口使用 LINE Pay 條碼掃碼，新戶享 3% / 舊戶 1.5% LINE POINTS。'
    ]
  },
  {
    id: 'travel_airlines',
    name: '全球指定航空公司 (華航/長榮/星宇/虎航/日航/酷航)',
    category: 'travel',
    icon: '🛫',
    description: '國籍航空（華航、長榮、星宇、台灣虎航、國泰航空）與外籍/廉航（日航、全日空、酷航、樂桃、捷星、大韓航空等）官網或官方 App 直購機票',
    pitfalls: [
      '【CUBE 3.3% 大額購票神卡】國泰 CUBE 切換【趣旅行】，全球指定航空官網刷卡享 3.3% 小樹點無上限！幾萬塊機票回饋完全不封頂！',
      '【⚠️ 分期直接降為 0.3%】各大航空公司官網常跳出分期 0 利率促銷，CUBE 卡「只要辦理分期」立即喪失 3.3% 加碼，直接降為 0.3%！務必選擇「一次付清」！',
      '【台新 3.3%】台新切換【玩旅刷】（指定航空），享 3.3% 台新Point！',
      '【避開永豐 SPORT】航空公司線上購票無法使用手機感應支付，SPORT 卡僅一般消費 1%~2%，且機票金額常遠超 $6,000 上限！',
      '【永豐 DAWAY 3%】若為外籍航空公司（國外主機外幣計價結帳），DAWAY 享海外消費 3% LINE POINTS 無上限。'
    ]
  },
  {
    id: 'travel_booking_ota',
    name: '訂房平台與行程票券 (Agoda/Booking/Trip.com/Klook/KKday)',
    category: 'travel',
    icon: '🏨',
    description: 'Agoda、Booking.com、Trip.com、Airbnb、Hotels.com、Expedia、Klook 客路、KKday 國內外訂房與旅遊體驗票券',
    pitfalls: [
      '【CUBE 3.3% 無上限】國泰 CUBE 切換【趣旅行】，線上預訂享 3.3% 小樹點無上限！搭配國泰專屬 Agoda 連結常有額外 7%~10% 現折！',
      '【⚠️ 訂房三大地雷】1. 切勿選擇「到店付款」（若店家刷卡機非指定平台，加碼恐失效）；2. 務必避開 DCC「動態貨幣轉換」（國外訂房請選外幣結帳，若選台幣會被加收 1.5% 且匯率極差）；3. 勿分期（分期降為 0.3%）！',
      '【台新 3.3% / 3.8%】台新切換【玩旅刷】享 3.3%！若在 Klook / KKday 結帳選擇 LINE Pay，切換【Pay著刷】享 3.8%！',
      '【永豐 DAWAY 3%】Klook/KKday 結帳選 LINE Pay 享新戶 3% / 舊戶 1.5%；Agoda/Booking 外幣扣款享 3% LINE POINTS。'
    ]
  },
  {
    id: 'travel_agencies',
    name: '各大旅行社 (雄獅旅遊/可樂旅遊/易遊網/東南旅遊)',
    category: 'travel',
    icon: '🗺️',
    description: '雄獅旅遊、可樂旅遊、易遊網 ezTravel、東南旅遊、五福旅遊、燦星旅遊、山富旅遊等官網與直營門市團體行程與自由行',
    pitfalls: [
      '【CUBE 3.3% 團費大額無上限首選】國泰 CUBE 切換【趣旅行】，刷各大直營旅行社享 3.3% 小樹點無上限！數萬至十幾萬團費回饋不封頂！',
      '【⚠️ 旅行社分期大陷阱】旅行社業務常推 3期/6期 0利率分期，CUBE 卡只要分期就「直接降為 0.3%」，幾千塊小樹點瞬間泡湯！請務必一次付清！',
      '【台新 3.3%】台新切換【玩旅刷】（雄獅/可樂/易遊網等指定旅行社），享 3.3% 台新Point！',
      '【永豐卡不適用大額團費】永豐 SPORT 卡 $6,000 即封頂，DAWAY 卡在國內旅行社僅一般消費 1%，強烈建議刷 CUBE 或台新！'
    ]
  },
  {
    id: 'transit_taxi',
    name: '計程車與叫車平台 (Uber / 台灣大車隊 55688 / yoxi / Grab)',
    category: 'travel',
    icon: '🚕',
    description: 'Uber 網約車、台灣大車隊 55688、yoxi (和泰)、Grab 境外叫車、LINE GO',
    pitfalls: [
      '【永豐 SPORT 7% 車上感應首選】台灣大車隊、yoxi 車內刷卡機支援 Apple Pay / Google Pay / Samsung Pay 感應，SPORT 卡運動達標享 7% 豐點（月刷 $6,000 封頂）！',
      '【台新 3.8% 掃碼神器】台灣大車隊、LINE GO 結帳選擇 LINE Pay 條碼，台新切換【Pay著刷】享 3.8%（切天天刷享 3.3%）！',
      '【CUBE 3.3% 無上限】國泰 CUBE 切換【趣旅行】，Uber、台灣大車隊、yoxi、Grab 綁卡直刷享 3.3% 小樹點無上限！',
      '【永豐 DAWAY 3%】出示 LINE Pay 付款，新戶享 3% / 舊戶 1.5% LINE POINTS。'
    ]
  },
  {
    id: 'transit_car_rental',
    name: '租車與共享交通 (iRent / 和運租車 / 格上租車)',
    category: 'travel',
    icon: '🚗',
    description: 'iRent 共享汽機車、和運租車、格上租車、GoShare、WeMo 等自駕出行與租車服務',
    pitfalls: [
      '【CUBE 3.3% 首選】國泰 CUBE 切換【趣旅行】，指定租車（iRent、和運、格上）享 3.3% 小樹點無上限！',
      '【台新 3.3%】台新切換【天天刷】（交通出行租車）享 3.3% 台新Point！',
      '【永豐 SPORT 7% 限門市感應】和運/格上實體門市臨櫃使用 Apple Pay / Google Pay 感應享 7%（$6,000 封頂）；App 內扣款無感應加碼僅 1%~2%。',
      '【DAWAY】一般消費 1%（若門市支援 LINE Pay 享新戶 3%）。'
    ]
  },
  {
    id: 'transit_japan_ic',
    name: '日本交通卡儲值 (Apple 錢包 Suica / PASMO / ICOCA)',
    category: 'travel',
    icon: '🍏',
    description: 'iPhone / Apple Watch「Apple 錢包」直接在線上以信用卡加值 Suica (西瓜卡)、PASMO、ICOCA 日本交通卡',
    pitfalls: [
      '【CUBE 日本賞 / 趣旅行 必備神卡】國泰 CUBE 切換【日本賞】加值享 3.5%~8% 小樹點！切換【趣旅行】亦享 3.0% 小樹點無上限！赴日自由行交通首選！',
      '【台新 3.3%】台新切換【玩旅刷】（Apple 錢包外幣線上加值認列海外消費），享 3.3% 台新Point！',
      '【永豐 DAWAY 3%】外幣海外消費認列 3% LINE POINTS 無上限！',
      '【避開永豐 SPORT】線上錢包儲值無法觸發實體感應 +5%，且部分系統不認列為一般消費，僅 1% 甚至 0%！',
      '【手續費提醒】Apple 錢包加值日本交通卡為日圓外幣交易，會產生 1.5% 海外交易手續費，以 CUBE 或 DAWAY 扣抵後仍倒賺！'
    ]
  },
  {
    id: 'travel_overseas',
    name: '海外實體消費 (日韓旅遊 / 歐美 / 東京迪士尼 / USJ)',
    category: 'travel',
    icon: '✈️',
    description: '國外實體店面外幣消費、日本三大樂園（東京迪士尼、大阪環球影城、哈利波特影城）、海外飯店現場付款（需扣 1.5% 國際手續費）',
    pitfalls: [
      '【CUBE 趣旅行 / 日本賞 3%~3.5% 無上限】國泰 CUBE 切換【趣旅行】海外實體享 3.0%~3.3% 無上限；若去日本切換【日本賞】精選實體與名店高達 3.5%~8%！大額出國採購精品必備！',
      '【台新 玩旅刷 3.3%】台新切換【玩旅刷】，海外實體與線上外幣消費享 3.3% 台新Point！',
      '【永豐 DAWAY 3%】海外外幣消費最高享 3% LINE POINTS 無上限，無腦出國刷卡！',
      '【永豐 SPORT 7% 限額 $6,000】國外實體店若支援 Apple Pay / Google Pay 感應，達標享最高 7% 豐點，但每月限額 $6,000，超過後請換 CUBE 或台新！',
      '【⚠️ 避開 DCC 雙幣陷阱】在國外刷卡若店員詢問「要刷台幣還是當地貨幣」，務必堅定回答「當地貨幣（日圓/韓元/美金等）」，避免被收取高達 4%~5% DCC 匯差！'
    ]
  },
  // 運動健身與一般
  {
    id: 'fitness_gym',
    name: '連鎖健身房 (World Gym / 健身工廠 / BEING / Curves)',
    category: 'general',
    icon: '🏋️',
    description: 'World Gym、健身工廠 (Fitness Factory)、BEING sport / BEING spa、Curves 等指定運動場館會籍月費與門市消費',
    pitfalls: [
      '【永豐 SPORT 7% 扣繳神卡】官方指定特約健身通路！每月運動達標 7,000 大卡，直接綁定信用卡定期定額扣繳月費或現場感應享狂暴 7.0% 豐點（月刷 $6,000 封頂）！健人每月省下一大筆！',
      '【台新雙方案】若櫃檯支援 LINE Pay 條碼切【Pay著刷】享 3.8%；週末現場刷卡切【假日刷】享 2.0%；月費直接扣款為一般消費 0.5%。',
      '【CUBE 0.3% 踩雷】健身房未列入國泰 CUBE 任何方案加碼名單中，刷卡扣繳會費僅有一般消費 0.3%！',
      '【DAWAY 1.5%】永豐 DAWAY 實體刷卡或扣繳僅一般消費 1.5% LINE POINTS。'
    ]
  },
  {
    id: 'store_momentum',
    name: '摩曼頓 / 喬山健康科技 (SPORT 官方特約通路)',
    category: 'general',
    icon: '👟',
    description: '摩曼頓 (Momentum)、喬山健康科技 (實體門市/官網) — 永豐 SPORT 官方直接列名之特約運動通路',
    pitfalls: [
      '【無腦隨便刷都 7.0%】摩曼頓與喬山是永豐官方合約白紙黑字明文列名的運動裝備特約通路！拿實體卡直接插卡、線上官網刷卡、或用 Apple Pay 感應，通通穩拿 7.0% 豐點（月刷 $6,000 封頂）！',
      '【官網線上買也算】在摩曼頓官網或喬山官網輸入 SPORT 卡號線上結帳，一樣認列指定特約 7.0%！',
      '【台新雙方案】門市出示 LINE Pay 切【Pay著刷】享 3.8%；百貨專櫃機台切【大筆刷】享 3.3%！'
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

  // 統一確保每張卡片具備權威、精準的封頂上限資訊 (capInfo)
  for (const r of results) {
    if (r.cardId === 'cube') {
      r.capInfo = {
        isUnlimited: true,
        capNote: r.rewardRate > 0.3 ? '✅ 方案回饋無上限（消費無上限）' : '✅ 基礎消費無上限'
      };
      if (r.rewardRate > 0.3) r.capWarning = '✅ 回饋無上限';
    } else if (r.cardId === 'gogo') {
      if (r.bestPaymentMethod.method === 'taishin_pay') {
        r.capInfo = {
          isUnlimited: true,
          perTxCap: 3000,
          capNote: '✅ 方案無上限（⚠️ 超商門市限單筆 NT$3,000）'
        };
        r.capWarning = '方案無上限（超商限單筆 $3,000）';
      } else {
        r.capInfo = {
          isUnlimited: true,
          capNote: '✅ 方案回饋無上限（消費無上限）'
        };
        if (r.rewardRate >= 3.0) r.capWarning = '✅ 回饋無上限';
      }
    } else if (r.cardId === 'sport') {
      if (r.rewardRate === 7.0) {
        r.capInfo = {
          isUnlimited: false,
          monthlySpendCap: 6000,
          pointCap: 350,
          capNote: '⚠️ 每月消費滿 NT$6,000 封頂（$0~$5,000享7%、$5,001~$6,000享6%、超過降為1%）'
        };
        r.capWarning = '⚠️ 每月消費滿 NT$6,000 封頂';
      } else if (r.rewardRate === 2.0) {
        r.capInfo = {
          isUnlimited: true,
          capNote: '⚠️ 指定加碼額度已滿，目前享 2% 豐點'
        };
        r.capWarning = '加碼額度已滿，降為 2%';
      } else if (r.isBlocked) {
        r.capInfo = {
          isUnlimited: false,
          capNote: '❌ 本通路為非一般消費 0% 排除'
        };
      } else {
        r.capInfo = {
          isUnlimited: true,
          capNote: '基本回饋 1% 無上限'
        };
      }
    } else if (r.cardId === 'daway') {
      if (r.rewardRate === 3.0) {
        r.capInfo = {
          isUnlimited: false,
          monthlySpendCap: 40000,
          pointCap: 800,
          capNote: '⚠️ 新戶加碼每月滿 NT$40,000 封頂（超額降為 1% 無上限）'
        };
        r.capWarning = '⚠️ 新戶加碼月刷 $40,000 封頂';
      } else if (r.rewardRate === 1.5) {
        r.capInfo = {
          isUnlimited: false,
          monthlySpendCap: 60000,
          pointCap: 300,
          capNote: '⚠️ 舊戶加碼每期上限 300 點（超額降為 1% 無上限）'
        };
        r.capWarning = '加碼每期上限 300 點';
      } else if (r.isBlocked) {
        r.capInfo = {
          isUnlimited: false,
          capNote: '❌ 門市無法使用或 0% 排除'
        };
      } else {
        r.capInfo = {
          isUnlimited: true,
          capNote: '一般消費 1% 無上限'
        };
      }
    }
  }

  // 排序：先比回饋率降序，若相同則無上限/非排除優先
  return results.sort((a, b) => {
    if (b.rewardRate !== a.rewardRate) {
      return b.rewardRate - a.rewardRate;
    }
    return (a.isBlocked ? 1 : 0) - (b.isBlocked ? 1 : 0);
  });
}

/**
 * 依據各卡官方封頂上限與階梯遞減規則，精準計算回饋點數
 */
export function calculateExactRewardPoints(amount: number, res: CardRewardResult): { points: number; isCapped: boolean; capNote?: string } {
  if (res.rewardRate <= 0 || res.isBlocked) {
    return { points: 0, isCapped: false };
  }

  // 1. 永豐 SPORT 卡階梯封頂:
  // 前 $5,000 享 7% (1% + 1% + 5% = 350 點)
  // $5,001 ~ $6,000 享 6% (1% + 5% = 60 點)
  // 超過 $6,000 享 1% 無上限
  if (res.cardId === 'sport' && res.rewardRate === 7.0) {
    if (amount <= 5000) {
      return { points: Math.round(amount * 0.07), isCapped: false };
    } else if (amount <= 6000) {
      const p = 5000 * 0.07 + (amount - 5000) * 0.06;
      return { points: Math.round(p), isCapped: true, capNote: '超額 NT$5,000，扣除運動加碼後享 6%' };
    } else {
      const p = 5000 * 0.07 + 1000 * 0.06 + (amount - 6000) * 0.01;
      return { points: Math.round(p), isCapped: true, capNote: '已達指定感應加碼 NT$6,000 封頂，超額降為 1%' };
    }
  }

  // 2. 永豐 DAWAY 卡新戶 / 舊戶 LINE Pay 階梯封頂:
  // 新戶: 前 $40,000 享 3% (加碼 2% 上限 800 點 + 基本 1% 400 點 = 1,200 點)，超額降為 1%
  if (res.cardId === 'daway' && res.rewardRate === 3.0) {
    if (amount <= 40000) {
      return { points: Math.round(amount * 0.03), isCapped: false };
    } else {
      const p = 40000 * 0.03 + (amount - 40000) * 0.01;
      return { points: Math.round(p), isCapped: true, capNote: '已達新戶加碼月刷 NT$40,000 封頂，超額降為 1%' };
    }
  }

  // 舊戶: 前 $60,000 享 1.5% (加碼 0.5% 上限 300 點)，超額降為 1%
  if (res.cardId === 'daway' && res.rewardRate === 1.5) {
    if (amount <= 60000) {
      return { points: Math.round(amount * 0.015), isCapped: false };
    } else {
      const p = 60000 * 0.015 + (amount - 60000) * 0.01;
      return { points: Math.round(p), isCapped: true, capNote: '已達舊戶加碼月刷 NT$60,000 封頂，超額降為 1%' };
    }
  }

  // 3. 台新超商門市單筆限額提醒
  if (res.cardId === 'gogo' && res.bestPaymentMethod.method === 'taishin_pay' && amount > 3000) {
    return {
      points: Math.round((amount * res.rewardRate) / 100),
      isCapped: true,
      capNote: '⚠️ 注意：超商門市台新Pay單筆限額 NT$3,000，超過請拆單'
    };
  }

  // 4. 無上限卡片 (國泰 CUBE & 台新 7+1大刷)
  const points = Math.round((amount * res.rewardRate) / 100);
  return { points, isCapped: false };
}

function calculateCubeReward(channelId: string, config: UserCardConfig): CardRewardResult {
  const level = config.cubeLevel || 2;
  const majorRate = level === 3 ? 3.3 : level === 2 ? 3.0 : 2.0;
  const majorRateLabel = `${majorRate.toFixed(1)}%`;
  let rate = 0.3; // 基礎回饋
  let isTargetScheme = false;
  let requiredSchemeName: string | undefined = undefined;
  let requiredSchemeTag: string | undefined = undefined;
  let details: string[] = ['基本回饋：0.3% 小樹點（無上限）'];
  let warning: string | undefined = undefined;
  let isBlocked = false;
  let bestPaymentLabel = '實體感應 / Apple Pay';
  let bestPaymentNote: string | undefined = '一般消費 0.3%';

  if (channelId === 'gas_cpc') {
    rate = 2.0;
    isTargetScheme = true;
    requiredSchemeName = '集精選';
    requiredSchemeTag = '方案：【集精選】';
    bestPaymentLabel = '💳 中油直營門市實體感應 / Apple Pay';
    bestPaymentNote = '切換至【集精選】方案（限直營站）；當天 23:59 前切換即可享 2.0% 小樹點無上限';
    details = [
      '【集精選方案】中油直營門市消費：2.0% 小樹點（無上限，一般0.3%+加碼1.7%）',
      '⚠️ 致命避坑：CUBE「集精選」嚴格排除中油加盟站（加盟門市僅享 0.3% 基本回饋）！'
    ];
  } else if (channelId === 'gas_formosa' || channelId === 'gas_smile') {
    rate = 2.0;
    isTargetScheme = true;
    requiredSchemeName = '台塑家';
    requiredSchemeTag = '方案：【台塑家】';
    bestPaymentLabel = channelId === 'gas_smile'
      ? '💳 實體感應 / Apple Pay / Google Pay'
      : '💳 實體感應 / Apple Pay / 台塑石油 Pay';
    bestPaymentNote = channelId === 'gas_smile'
      ? '切換至【台塑家】享 2.0% 小樹點無上限 + 汽油天天降價（⚠️ 速邁樂不適用台塑石油Pay與OPEN錢包）'
      : '切換至【台塑家】享 2.0% 小樹點無上限 + 汽油天天降價；可搭配台塑石油 Pay 累積 F 幣';
    details = [
      `【台塑家方案】${channelId === 'gas_smile' ? '統一速邁樂加油站（限本島）' : '福懋 / 台亞 / 台塑加油站'}：2.0% 小樹點（無上限）`,
      '天天享有汽油每公升降價優惠（自助加油降 1.2 元起，以站點現場公告為準）',
      channelId === 'gas_smile'
        ? '⚠️ 速邁樂特別提醒：不支援台塑石油 Pay，且切勿使用 OPEN 錢包或 icash Pay 掃碼付款（第三方電支會排除 2% 回饋）！'
        : '可搭配綁定「台塑石油 Pay」支付累積台塑 F 幣，享雙重優惠！'
    ];
  } else if (channelId === 'gas_national') {
    rate = 0.3;
    isTargetScheme = false;
    bestPaymentLabel = '實體感應 / 插卡';
    bestPaymentNote = '全國加油站非台塑體系，僅一般消費 0.3%';
    details = [
      '⚠️ 全國加油站「未列入」國泰 CUBE「集精選」或「台塑家」加碼名單',
      'CUBE 加油加碼僅限「中油直營店 (集精選 2.0%)」與「台塑體系/福懋/速邁樂 (台塑家 2%)」',
      '強烈建議改用永豐 SPORT（Apple Pay 感應 7%）或台新卡（LINE Pay 3.8%）！'
    ];
    warning = '⚠️ 全國加油站不在 CUBE 加碼名單中，僅 0.3%！建議改刷 SPORT (7%) 或台新 (3.8%)！';
  } else if (channelId === 'convenience_711' || channelId === 'convenience_family') {
    rate = 2.0;
    isTargetScheme = true;
    requiredSchemeName = '集精選';
    requiredSchemeTag = '方案：【集精選】';
    bestPaymentLabel = '📱 門市實體感應 / Apple Pay';
    bestPaymentNote = '切換至【集精選】方案享 2.0% 無上限（需於當天 23:59 前切換）';
    details = [
      '【集精選方案】7-11 / 全家實體感應：2.0% 小樹點（無上限，一般0.3%+指定加碼1.7%）',
      '⚠️ 必須切換至「集精選」方案！若非集精選，超商列為非一般消費直接 0% 排除！'
    ];
    if (channelId === 'convenience_family') {
      details.push('💡 11月專屬折抵券：國泰優惠APP領取【全家指定支付馬上折抵加碼 4% 券】，滿額折抵最高享 6.0%（單月上限100點）！');
    }
  } else if (channelId === 'convenience_hilife_ok') {
    rate = 0.0;
    isBlocked = true;
    bestPaymentLabel = '❌ 門市 0% 排除';
    bestPaymentNote = '萊爾富/OK 未列入集精選名單';
    details = [
      '⚠️ 萊爾富與 OK 超商「未列入」國泰 CUBE「集精選」指定加碼名單',
      '超商門市在國泰信用卡條款中為非一般消費小額排除通路，0% 回饋',
      '建議改用台新卡（切換【Pay著刷】出示「台新Pay」享 3.8%）！'
    ];
    warning = '⚠️ 萊爾富/OK 不在 CUBE 集精選加碼名單中，且為 0% 排除！請改用台新Pay (3.8%)！';
  } else if (channelId === 'supermarket_px') {
    rate = 2.0;
    isTargetScheme = true;
    requiredSchemeName = '集精選';
    requiredSchemeTag = '方案：【集精選】';
    bestPaymentLabel = '💳 全聯實體刷卡 / 全聯感應';
    bestPaymentNote = '切換至【集精選】方案享 2.0% 無上限';
    details = [
      '【集精選方案】全聯實體刷卡/感應：2.0% 小樹點（無上限，一般0.3%+加碼1.7%）',
      '⚠️ 必須切換至「集精選」！全聯在其他方案為非一般消費 0%！'
    ];
  } else if (channelId === 'supermarket_carrefour') {
    rate = 2.0;
    isTargetScheme = true;
    requiredSchemeName = '集精選';
    requiredSchemeTag = '方案：【集精選】';
    bestPaymentLabel = '💳 實體刷卡 / Apple Pay 感應';
    bestPaymentNote = '切換至【集精選】方案享 2.0% 無上限';
    details = ['【集精選方案】家樂福消費：2.0% 小樹點（無上限，一般0.3%+加碼1.7%）'];
  } else if (channelId === 'supermarket_lopia') {
    rate = 2.0;
    isTargetScheme = true;
    requiredSchemeName = '集精選';
    requiredSchemeTag = '方案：【集精選】';
    bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
    bestPaymentNote = '切換至【集精選】方案享 2.0% 無上限';
    details = [
      '【集精選方案】LOPIA 日系超市消費：2.0% 小樹點（無上限，一般0.3%+加碼1.7%）',
      '官方正式納入集精選名單，生鮮肉品採買享 2.0% 無上限！'
    ];
  } else if (channelId === 'supermarket_donki') {
    rate = 5.0;
    isTargetScheme = true;
    requiredSchemeName = '秋日遊';
    requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
    bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
    bestPaymentNote = '切換至【秋日遊】方案，唐吉訶德享 5.0% 小樹點（無上限）！';
    details = [
      '【秋日遊限定方案 (10/1~11/30)】台灣 DON DON DONKI 唐吉訶德：5.0% 小樹點（無上限）！',
      '涵蓋全台唐吉訶德門市，生鮮熟食與美妝日用通通享 5.0% 小樹點！',
      '💡 避雷提醒：唐吉訶德於非秋日遊活動期間為一般消費 0.3%，10/01~11/30 活動期間請務必於消費當天 23:59 前在 CUBE App 切換至【秋日遊】方案享 5%！'
    ];
  } else if (channelId === 'home_ikea') {
    rate = 2.0;
    isTargetScheme = true;
    requiredSchemeName = '集精選';
    requiredSchemeTag = '方案：【集精選】';
    bestPaymentLabel = '💳 門市實體刷卡 / 官網線上刷卡';
    bestPaymentNote = '切換至【集精選】方案享 2.0% 無上限';
    details = [
      '【集精選方案】IKEA 宜家家居全門市與官網：2.0% 小樹點（無上限，一般0.3%+加碼1.7%）',
      '涵蓋實體家具賣場、IKEA 餐廳用餐、官網線上購物'
    ];
  } else if (channelId === 'ev_charging_parking') {
    rate = 2.0;
    isTargetScheme = true;
    requiredSchemeName = '集精選';
    requiredSchemeTag = '方案：【集精選】';
    bestPaymentLabel = '📱 綁定各 App 自動扣款 / 現場感應';
    bestPaymentNote = '切換至【集精選】方案享 2.0% 無上限';
    details = [
      '【集精選方案】指定智慧出行享 2.0% 小樹點（無上限，一般0.3%+加碼1.7%）',
      '指定充電站：U-POWER、EVOASIS、EVALUE、TAIL特爾電力、iCharging',
      '指定智慧停車：車麻吉（不含加油）、uTagGo（不含月租）'
    ];
  } else if (channelId === 'food_delivery') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '樂饗購';
    requiredSchemeTag = '方案：【樂饗購】';
    bestPaymentLabel = '💻 線上刷卡 / Apple Pay';
    bestPaymentNote = '切換至【樂饗購】方案享 3.3% 小樹點無上限';
    details = ['【樂饗購方案】Uber Eats / foodpanda：3.3% 小樹點（無上限）'];
  } else if (
    channelId === 'dining_restaurant' ||
    channelId === 'dining_hotpot' ||
    channelId === 'dining_orangeshabu' ||
    channelId === 'dining_sushiro' ||
    channelId === 'dining_japanese_luxury' ||
    channelId === 'dining_japanese_chain' ||
    channelId === 'fashion_fast' ||
    channelId === 'store_hands' ||
    channelId === 'mall_mingyao_xpark' ||
    channelId === 'mall_sogo_dome' ||
    channelId === 'mall_mitsui_lalaport' ||
    channelId === 'drugstore_jp_med' ||
    channelId === 'fastfood_mos' ||
    channelId === 'fastfood_mcdonalds' ||
    channelId === 'fastfood_kfc' ||
    channelId === 'fastfood_pizzahut' ||
    channelId === 'drink_chill' ||
    channelId === 'department_store' ||
    channelId === 'drugstore_cosmetics'
  ) {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '樂饗購';
    requiredSchemeTag = '方案：【樂饗購】';
    bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
    bestPaymentNote = '切換至【樂饗購】方案享 3.3% 小樹點無上限';
    if (channelId === 'fastfood_mos') {
      rate = 3.5;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊】';
      bestPaymentNote = '切換至【秋日遊】方案享摩斯 3.5% 小樹點（無上限，高於樂饗購 3%）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】摩斯漢堡（APP+實體店）享 3.5% 小樹點（無上限）！',
        '支援門市感應、自助機與 MOS Order App 線上刷卡',
        '平常非活動期間切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 無上限'
      ];
    } else if (channelId === 'fastfood_mcdonalds') {
      details = [
        '【樂饗購方案】麥當勞官方認列餐飲：3.3% 小樹點（無上限）',
        '支援門市實體感應與麥當勞 APP 手機點餐'
      ];
    } else if (channelId === 'fastfood_kfc') {
      rate = 3.3;
      requiredSchemeName = '樂饗購';
      requiredSchemeTag = '方案：【樂饗購】';
      bestPaymentLabel = '💳 門市實體刷卡 / PK雙饗卡線上訂餐';
      bestPaymentNote = '切換至【樂饗購】方案享 3.3% 小樹點無上限';
      details = [
        '【樂饗購方案】肯德基切換【樂饗購】享 3.3% 小樹點（無上限）！',
        '支援門市櫃台/自助點餐機感應與 PK雙饗卡 APP 線上訂餐刷卡',
        '⚠️ 避雷警告：肯德基「未列入」秋日遊方案，切勿切換秋日遊，否則僅享 0.3%！'
      ];
    } else if (channelId === 'fastfood_pizzahut') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊】';
      bestPaymentLabel = '💳 門市實體刷卡 / 官網App線上刷卡';
      bestPaymentNote = '切換至【秋日遊】方案享必勝客 5.0% 小樹點無上限！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】必勝客切換【秋日遊】方案享 5.0% 小樹點（無上限）！',
        '支援門市櫃台/點餐機與必勝客官網 / PK雙饗卡 APP 線上訂餐',
        '⚠️ 排除項目：PK雙饗卡 App 購買「隨饗券」與「禮物卡」不適用秋日遊 5% 回饋',
        '平常非活動期間切換【樂饗購】享 3.3% 小樹點無上限'
      ];
    } else if (channelId === 'drink_chill') {
      details = [
        '【樂饗購方案】手搖茶飲與咖啡：3.3% 小樹點（無上限）',
        '💡 提示：若追求極致回饋，台新卡切換【Chill刷】可享狂暴 10%！'
      ];
    } else if (channelId === 'dining_orangeshabu') {
      rate = 8.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案享橘色涮涮屋 8.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系美食饗宴：8.0% 小樹點（無上限）！',
        '涵蓋橘色涮涮屋（一館/二館/台中館）、Extension 1 by 橘色全門市實體消費',
        '🔥 頂級日系美食最高 8.0% 小樹點無上限！秋日聚餐首選！',
        '平常非活動期間切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 無上限'
      ];
    } else if (channelId === 'dining_sushiro') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】爭鮮享 5.0% 小樹點！🎂 7月壽星切【慶生日】壽司郎享 10.0%！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】爭鮮迴轉壽司、爭鮮PLUS 享 5.0% 小樹點（無上限）！',
        '🎂 7月壽星神卡：生日當月切換【慶生日】方案，台灣壽司郎享狂暴 10.0% 小樹點無上限！',
        '平常日切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 小樹點無上限'
      ];
    } else if (channelId === 'dining_japanese_luxury') {
      rate = 8.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】初魚/梵燒肉/侍燒肉等享 8.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系美食饗宴：8.0% 小樹點（無上限）！',
        '涵蓋初魚鮨、初魚 鉄板料亭、梵燒肉、侍燒肉、作 天麩羅、濟安鮨、元一天婦羅、鳥苑、成蔵、雞湯桑、朝炭',
        '🔥 頂級日系美食最高 8.0% 小樹點無上限！秋日預約制名店首選！',
        '平常非活動期間切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 無上限'
      ];
    } else if (channelId === 'dining_japanese_chain') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】客美多/すき家/錢都享 5.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系美食饗宴：5.0% 小樹點（無上限）！',
        '涵蓋客美多咖啡 (Komeda\'s Coffee)、すき家 SUKIYA、錢都日式涮涮鍋',
        '⭐ 日系平價連鎖美饌 5.0% 小樹點無上限！',
        '平常非活動期間切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 無上限'
      ];
    } else if (channelId === 'fashion_fast') {
      rate = 3.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💻 官網網路商店 / 直營門市實體刷卡';
      bestPaymentNote = '切換至【秋日遊】UNIQLO與GU享 3.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系購物名店：3.0% 小樹點（無上限）！',
        '涵蓋 UNIQLO 網路商店/直營門市、GU 台灣網路商店',
        '⚠️ 百貨商場內 UNIQLO/GU 門市若使用品牌獨立收銀機台非百貨自營機台，可能不列入加碼，建議優先於官網網路商店或直營街邊店消費！'
      ];
    } else if (channelId === 'dining_hotpot') {
      if (config.cubeScheme === 'birthday') {
        rate = 10.0;
        requiredSchemeName = '慶生日';
        requiredSchemeTag = '方案：【慶生日 (壽星專屬)】';
        bestPaymentNote = '生日當月切換至【慶生日】方案享名店 10.0% 小樹點無上限！';
        details = [
          '【慶生日方案】詹記、屋馬、茶六、老井、老四川、鼎王享狂暴 10.0% 小樹點（無上限）！',
          '🎂 7月壽星專屬：生日當月到指定火鍋燒肉名店用餐直接拿 10%！'
        ];
      } else {
        details = [
          '【樂饗購方案】燒肉火鍋餐廳：3.3% 小樹點（無上限）',
          '🍁 10/1~11/30 秋日遊美食：橘色涮涮屋（一館/二館/台中館）、Extension 1 by橘色、梵燒肉、侍燒肉切【秋日遊】享 8.0%！錢都日式涮涮鍋享 5.0%！',
          '🎂 7月壽星神技：生日當月切換【慶生日】方案，屋馬、詹記、茶六、老井、老四川、鼎王享狂暴 10.0% 小樹點無上限！',
          '💡 提示：指定名店（詹記、屋馬、碳佐麻里）台新卡切換【Chill刷】可達 10%！'
        ];
      }
    } else if (channelId === 'store_hands') {
      rate = 8.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案，HANDS台隆手創館（南港LaLaport店）享 8.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系購物名店：8.0% 小樹點（無上限）！',
        '涵蓋 HANDS 台隆手創館（南港 LaLaport 店）門市實體消費',
        '🔥 日系生活雜貨最高 8.0% 小樹點無上限！秋日採購首選！'
      ];
    } else if (channelId === 'mall_mingyao_xpark') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 實體刷卡 / 官網線上刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案，明曜百貨、Xpark、UNITED ARROWS享 5.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系購物名店：5.0% 小樹點（無上限）！',
        '涵蓋台北明曜百貨、Xpark 都會型水生公園、UNITED ARROWS 官方購物網站',
        '⭐ 日系潮流選品與休閒娛樂享 5.0% 小樹點無上限！'
      ];
    } else if (channelId === 'mall_sogo_dome') {
      rate = 3.5;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 專櫃實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案，遠東SOGO（含Garden City大巨蛋）享 3.5% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系購物名店：3.5% 小樹點（無上限）！',
        '涵蓋遠東 SOGO 全台各館與 Garden City 台北大巨蛋商場',
        '🎂 7月壽星當月切換【慶生日】亦享 3.5% 小樹點無上限；平時切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3)'
      ];
    } else if (channelId === 'mall_mitsui_lalaport') {
      rate = 3.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 專櫃實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案，三井Outlet與LaLaport享 3.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系購物名店：3.0% 小樹點（無上限）！',
        '涵蓋 MITSUI OUTLET PARK（林口/台中港/台南）、Mitsui Shopping Park LaLaport（南港/台中）',
        '平常非活動期間切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 無上限'
      ];
    } else if (channelId === 'drugstore_jp_med') {
      rate = 3.5;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案，日藥本舖指定門市享 3.5% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系購物名店：3.5% 小樹點（無上限）！',
        '涵蓋日藥本舖全台指定門市實體消費',
        '平常非活動期間切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 無上限'
      ];
    } else if (channelId === 'department_store') {
      details = [
        '【樂饗購方案】全台指定百貨消費：3.3% 小樹點（無上限）',
        '涵蓋新光三越、微風廣場、遠東百貨、台北101、漢神百貨、京站、統一時代等',
        '🍁 10/1~11/30 秋日遊加碼日系名店：HANDS台隆手創館 8%、明曜/Xpark/UA 5%、遠東SOGO/大巨蛋 3.5%、三井Outlet/LaLaport 3%！',
        '🎂 7月慶生月：生日當月全台實體百貨專櫃切換【慶生日】享 3.5% 無上限！'
      ];
    } else if (channelId === 'drugstore_cosmetics') {
      details = [
        '【樂饗購方案】指定連鎖藥妝：3.3% 小樹點（無上限）',
        '涵蓋康是美、屈臣氏、寶雅 POYA、松本清、Tomod\'s、日藥本舖',
        '🍁 10/1~11/30 秋日遊：日藥本舖指定門市切【秋日遊】享 3.5% 小樹點！',
        '醫美節或大額保養品補貨首選，小樹點回饋無上限！'
      ];
    } else {
      if (config.cubeScheme === 'autumn') {
        rate = 8.0;
        requiredSchemeName = '秋日遊';
        requiredSchemeTag = '方案：【秋日遊】';
        bestPaymentNote = '切換至【秋日遊】橘色/初魚/侍燒肉等享 8%、爭鮮/客美多/すき家 5%！';
        details = [
          '【秋日遊限定方案 (10/1~11/30)】國內日系美食饗宴：',
          '🔥 8.0%：橘色涮涮屋（一館/二館/台中館）、Extension 1 by橘色、初魚鮨、初魚鉄板料亭、雞湯桑、朝炭、梵燒肉、侍燒肉、作 天麩羅、濟安鮨、元一天婦羅、鳥苑、成蔵',
          '⭐ 5.0%：爭鮮迴轉壽司、爭鮮PLUS、錢都日式涮涮鍋、客美多咖啡、すき家 SUKIYA、必勝客',
          '🍔 3.5%：摩斯漢堡（APP+實體店）'
        ];
      } else if (config.cubeScheme === 'birthday') {
        rate = 10.0;
        requiredSchemeName = '慶生日';
        requiredSchemeTag = '方案：【慶生日 (壽星專屬)】';
        bestPaymentNote = '生日當月切換至【慶生日】享名店 10.0% 小樹點無上限！';
        details = [
          '【慶生日方案】壽星指定名店（台灣壽司郎、龍都酒樓、新東南海鮮、JAI宅、青沐、嵩sung、Pastaio）享 10.0% 小樹點無上限！'
        ];
      } else {
        details = [
          '【樂饗購方案】國內餐飲實體消費：3.3% 小樹點（無上限）',
          '🍁 10/1~11/30 秋日遊：橘色/初魚/梵燒肉享 8.0%！爭鮮/客美多/すき家/錢都/必勝客享 5.0%！摩斯享 3.5%！',
          '🎂 7月壽星特權：生日當月切【慶生日】壽司郎、龍都酒樓、新東南海鮮、JAI宅享 10.0%！'
        ];
      }
    }
  } else if (
    channelId === 'online_shopee_momo' ||
    channelId === 'online_shopee' ||
    channelId === 'online_momo' ||
    channelId === 'online_pchome' ||
    channelId === 'online_coupang'
  ) {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '玩數位';
    requiredSchemeTag = '方案：【玩數位】';
    const mallName =
      channelId === 'online_shopee'
        ? '蝦皮購物'
        : channelId === 'online_momo'
          ? 'momo 購物網'
          : channelId === 'online_pchome'
            ? 'PChome 24h 購物'
            : channelId === 'online_coupang'
              ? '酷澎 Coupang'
              : '各大綜合電商';
    bestPaymentLabel = '💻 線上直接輸入卡號一次付清';
    bestPaymentNote = '切換至【玩數位】享 3.3% 小樹點無上限；⚠️ 勿分期、勿買儲值卡、勿走第三方支付';
    details = [
      `【玩數位方案】${mallName}消費：3.3% 小樹點（無上限）`,
      '✅ 官方指定加碼通路，大額採購不封頂！',
      '⚠️ 避坑提醒：必須「直接輸入卡號一次付清」；若辦理分期付款、購買儲值金/禮券，或走第三方支付（LINE Pay/街口），將降為 0.3%！'
    ];
  } else if (channelId === 'online_taobao') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '玩數位';
    requiredSchemeTag = '方案：【玩數位】';
    bestPaymentLabel = '💻 淘寶 App 線上刷卡一次付清';
    bestPaymentNote = '切換至【玩數位】享 3.3% 小樹點無上限';
    details = [
      '【玩數位方案】淘寶/天貓購物：3.3% 小樹點（無上限）',
      '淘寶 App 跨境刷卡享 3.3% 小樹點無上限，可抵扣 1.5% 跨境手續費！'
    ];
  } else if (channelId === 'streaming_media') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '玩數位';
    requiredSchemeTag = '方案：【玩數位】';
    bestPaymentLabel = '💻 線上刷卡設定續訂';
    bestPaymentNote = '切換至【玩數位】享 3.3% 小樹點無上限；💡 台新Chill刷最高享10%';
    details = [
      '【玩數位方案】指定串流娛樂：3.3% 小樹點（無上限）',
      '涵蓋 Netflix、Disney+、Spotify、YouTube Premium、Max 等',
      '💡 提示：若追求極致回饋，台新卡切換【Chill刷】可享狂暴 10%！'
    ];
  } else if (channelId === 'digital_stores') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '玩數位';
    requiredSchemeTag = '方案：【玩數位】';
    bestPaymentLabel = '📱 綁定 Apple ID 或 Google 帳戶線上扣款';
    bestPaymentNote = '切換至【玩數位】享 3.3% 小樹點無上限';
    details = [
      '【玩數位方案】Apple 媒體服務與 Google Play：3.3% 小樹點（無上限）',
      '涵蓋 App Store 手遊課金、Apple Music、iCloud、Apple One、Google Play',
      '⚠️ 避坑提醒：僅限線上數位內容/應用程式/雲端；Apple 實體店及官網購買硬體設備不列入！'
    ];
  } else if (channelId === 'ai_software') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '玩數位';
    requiredSchemeTag = '方案：【玩數位】';
    bestPaymentLabel = '💻 AI 工具官網線上刷卡';
    bestPaymentNote = '切換至【玩數位】享 3.3% 小樹點無上限';
    details = [
      '【玩數位方案】指定 AI 服務與軟體雲端：3.3% 小樹點（無上限）',
      '涵蓋 ChatGPT (OpenAI)、Claude、Cursor、Perplexity、Notion、Canva、Duolingo 等',
      '🔥 國泰官方指定加碼通路，大額/年繳訂閱回饋不封頂！'
    ];
  } else if (channelId === 'transit_rail') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🚄 高鐵官網 / T-EX App / 車站售票機實體感應';
    bestPaymentNote = '切換至【趣旅行】享高鐵 3.3% 小樹點無上限；⚠️ 台鐵僅 0.3%';
    details = [
      '【趣旅行方案】台灣高鐵購票：3.3% 小樹點（無上限）',
      '涵蓋高鐵官網、T-EX 行動購票 App、高鐵車站售票窗口與自動售票機',
      '⚠️ 重大地雷提醒：台鐵火車「不屬於」趣旅行加碼通路，刷台鐵僅享一般消費 0.3%！刷台鐵請改用台新卡（天天刷 3.3%~3.8%）！'
    ];
    warning = '⚠️ 僅「台灣高鐵」享 3.3%！「台鐵（火車）」不在加碼名單中，刷 CUBE 僅有 0.3%！';
  } else if (channelId === 'travel_airlines') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '✈️ 航空公司官網 / App 線上刷卡（務必一次付清）';
    bestPaymentNote = '切換至【趣旅行】享 3.3% 小樹點無上限；⚠️ 切勿辦理分期';
    details = [
      '【趣旅行方案】指定航空公司購票：3.3% 小樹點（無上限）',
      '涵蓋國籍航空（華航、長榮、星宇、台灣虎航、國泰航空）與外籍/廉航（日航、全日空、酷航、樂桃、捷星等）官網直購',
      '⚠️ 避坑提醒：機票結帳「切勿選擇分期付款」！分期（含 0 利率促銷）將直接被排除加碼降為 0.3% 一般消費！'
    ];
  } else if (channelId === 'travel_booking_ota') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🏨 訂房網 / Klook 線上信用卡結帳（選外幣 / 一次付清）';
    bestPaymentNote = '切換至【趣旅行】享 3.3% 小樹點無上限；可搭配國泰 Agoda 專屬折扣';
    details = [
      '【趣旅行方案】指定訂房與票券平台：3.3% 小樹點（無上限）',
      '涵蓋 Agoda、Booking.com、Trip.com、Airbnb、Hotels.com、Expedia、Klook、KKday 等',
      '🍁 10/1~11/30 秋日遊快閃：Klook 日本行程/交通享 5.0%、Hotels.com/Expedia 最高享 10% 小樹點！',
      '💡 疊加優惠：透過國泰專屬 Agoda 連結常享額外 7%~10% 現折優惠！',
      '⚠️ 避坑提醒：訂房請選擇線上預付與外幣計價，避開現場到店付款與 DCC 動態貨幣轉換；且切勿分期（分期降為 0.3%）！'
    ];
  } else if (channelId === 'travel_agencies') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🗺️ 旅行社官網或直營門市刷卡（務必一次付清）';
    bestPaymentNote = '切換至【趣旅行】享 3.3% 小樹點無上限；⚠️ 切勿辦理分期';
    details = [
      '【趣旅行方案】指定知名旅行社：3.3% 小樹點（無上限）',
      '涵蓋雄獅旅遊、可樂旅遊、易遊網 ezTravel、東南旅遊、五福旅遊、燦星旅遊、山富旅遊等直營通路',
      '🔥 大額團費首選：數萬至數十萬團費全額享 3.3% 小樹點，回饋完全不封頂！',
      '⚠️ 避坑提醒：切勿辦理 3 期 / 6 期等 0 利率分期付款！辦理分期直接降為 0.3%！'
    ];
  } else if (channelId === 'transit_taxi') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🚕 Uber / yoxi / 台灣大車隊 綁卡直刷或 Apple Pay';
    bestPaymentNote = '切換至【趣旅行】享 3.3% 小樹點無上限';
    details = [
      '【趣旅行方案】指定計程車與叫車：3.3% 小樹點（無上限）',
      '涵蓋 Uber、yoxi、台灣大車隊 (55688)、Grab 叫車服務',
      '💡 若搭乘台灣大車隊，車上實體機使用永豐 SPORT 感應最高享 7%（$6,000 封頂）！'
    ];
  } else if (channelId === 'transit_car_rental') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🚗 iRent App 綁卡 / 和運與格上門市實體刷卡';
    bestPaymentNote = '切換至【趣旅行】享 3.3% 小樹點無上限';
    details = [
      '【趣旅行方案】指定租車與共享運具：3.3% 小樹點（無上限）',
      '涵蓋 iRent、和運租車、格上租車',
      '⚠️ 注意：門市刷卡請勿分期，一次付清享 3.3% 無上限！'
    ];
  } else if (channelId === 'transit_japan_ic') {
    rate = majorRate;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行 / 秋日遊';
    requiredSchemeTag = '方案：【趣旅行 / 秋日遊】';
    bestPaymentLabel = '🍏 iPhone Apple 錢包直接線上加值';
    bestPaymentNote = `切換至【趣旅行】享 ${majorRateLabel} / 10/1~11/30 期間限定切【秋日遊】享 3%~8% 小樹點無上限`;
    details = [
      `【趣旅行方案】Apple 錢包加值日本交通卡：${majorRateLabel} 小樹點（無上限）`,
      '【秋日遊限定方案 (10/1~11/30)】Suica/ICOCA 交通卡加碼可達 3%~8% 小樹點！日本自由行交通神操作！',
      '涵蓋 Apple 錢包內的 Suica（西瓜卡）、PASMO、ICOCA 線上直接儲值',
      '💡 屬於日圓外幣線上交易（需 1.5% 手續費），扣除後仍倒賺！'
    ];
  } else if (channelId === 'travel_overseas') {
    rate = majorRate;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行 / 秋日遊';
    requiredSchemeTag = '方案：【趣旅行 / 秋日遊】';
    bestPaymentLabel = '✈️ 海外實體感應 / 插卡外幣消費（選當地貨幣）';
    bestPaymentNote = `切換至【趣旅行】享 ${majorRateLabel} / 日本實體切【秋日遊 (10/1~11/30)】最高 3%~8%`;
    details = [
      `【趣旅行方案】全球海外實體外幣消費：${majorRateLabel} 小樹點（無上限）`,
      '涵蓋海外當地餐廳、百貨精品、實體飯店，以及日本三大樂園（東京迪士尼、大阪環球影城、哈利波特影城）',
      '💡 日本當地精選名店建議切換【秋日遊 (10/1~11/30)】可享 3%~8% 更高回饋！',
      '⚠️ 避坑提醒：在國外刷卡請務必選擇「當地貨幣（日圓/韓元/美金等）」，避免被收取高達 4%~5% DCC 匯差！'
    ];
  }

  // 樂饗購 / 玩數位 / 趣旅行等主要權益：動態校正為使用者的 CUBE 等級 (Lv1: 2.0%, Lv2: 3.0%, Lv3: 3.3%)
  if (rate === 3.3) {
    rate = majorRate;
    details = details.map((d) => d.replace(/3\.3%/g, majorRateLabel));
    if (bestPaymentNote) {
      bestPaymentNote = bestPaymentNote.replace(/3\.3%/g, majorRateLabel);
    }
    if (warning) {
      warning = warning.replace(/3\.3%/g, majorRateLabel);
    }
  }

  if (isTargetScheme) {
    details.push(`💡 會員等級：當前以 CUBE Level ${level}（主要權益 ${majorRateLabel} / 集精選固定 2.0%）計算`);
  }

  return {
    cardId: 'cube',
    cardName: `國泰世華 CUBE 卡 (Lv${level})`,
    cardColor: 'from-amber-500 to-yellow-600',
    rewardRate: rate,
    rewardType: '小樹點',
    requiredSchemeName,
    requiredSchemeTag,
    bestPaymentMethod: {
      method: (
        channelId === 'food_delivery' ||
        channelId.startsWith('online') ||
        channelId === 'streaming_media' ||
        channelId === 'digital_stores' ||
        channelId === 'ai_software' ||
        channelId === 'travel_airlines' ||
        channelId === 'travel_booking_ota' ||
        channelId === 'transit_japan_ic'
      ) ? 'online' : 'physical',
      label: bestPaymentLabel,
      note: bestPaymentNote
    },
    details,
    capWarning: isTargetScheme ? '✅ 本通路回饋無上限！' : undefined,
    isSchemeDependent: true,
    warning,
    isBlocked
  };
}

function calculateTaishinReward(channelId: string, config: UserCardConfig): CardRewardResult {
  const isLinked = config.gogoRichartLinked;
  const baseRate = isLinked ? 0.5 : 0.3;

  // 1. 加油情境 (中油直營/加盟 / 全國)
  if (channelId === 'gas_cpc' || channelId === 'gas_national') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '天天刷 / Pay著刷',
      requiredSchemeTag: '方案：【天天刷 / Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 出示 LINE Pay / 中油Pay / 台新Pay 掃碼付款',
        note: '切換至【天天刷】或【Pay著刷】加油享 3.8%'
      },
      details: [
        `【天天刷 / Pay著刷】加油消費：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '需綁定 Richart / 台新帳戶自動扣繳',
        '中油（直營與加盟皆可）與全國加油站皆享 3.8%',
        '每期帳單精選加碼上限 1,000 點（折合月刷約 $30,303 封頂）'
      ],
      capWarning: '每期帳單加碼上限 1,000 點 (月刷約 $30,303 封頂)',
      isSchemeDependent: true
    };
  }

  // 1.1 福懋加油站 (台塑體系) - 台新天天刷僅限台亞直營，福懋未列入加碼
  if (channelId === 'gas_formosa') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: baseRate,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'physical',
        label: '實體感應 / 插卡',
        note: '福懋未列入天天刷指定加油名單，僅一般消費'
      },
      details: [
        `一般消費基本回饋：${baseRate}% 台新Point`,
        '⚠️ 台新「天天刷」加油加碼僅限中油直營、全國加油站、台亞直營店；福懋加油站不在天天刷加碼名單中！',
        '💡 建議改刷：永豐 SPORT（Apple Pay 感應 7%）或國泰 CUBE（【台塑家】2% + 汽油天天降價）！'
      ],
      warning: '⚠️ 福懋加油站不在台新天天刷加碼名單中，僅 0.3%~0.5%！建議改刷 SPORT (7%) 或 CUBE 台塑家 (2%+降價)！'
    };
  }

  // 1.2 速邁樂加油站 (統一精工) - 台新未列入指定名單
  if (channelId === 'gas_smile') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: baseRate,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'physical',
        label: '實體感應 / 插卡',
        note: '速邁樂未列入天天刷名單，僅一般消費'
      },
      details: [
        `一般消費基本回饋：${baseRate}% 台新Point`,
        '⚠️ 速邁樂加油中心未列入台新「天天刷」指定名單中，實體刷卡僅享基本回饋',
        '💡 建議改刷：永豐 SPORT（Apple Pay 感應 7% 首選）或國泰 CUBE（【台塑家】2% + 降價）！'
      ],
      warning: '⚠️ 速邁樂未列入台新天天刷加碼名單中，僅 0.3%~0.5%！建議改刷 SPORT (7%) 或 CUBE 台塑家 (2%+降價)！'
    };
  }

  // 2. 超商情境 (7-11 與 全家)
  if (channelId === 'convenience_711' || channelId === 'convenience_family') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷 / 天天刷',
      requiredSchemeTag: '方案：【Pay著刷 / 天天刷】',
      bestPaymentMethod: {
        method: 'taishin_pay',
        label: '📱 必須使用「台新Pay」掃碼結帳',
        note: '切換至【Pay著刷】或【天天刷】出示台新Pay！單筆限額 NT$3,000，實體感應直接 0%！'
      },
      details: [
        `【Pay著刷 / 天天刷】超商綁定「台新Pay」掃碼：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '超商門市單筆限額最高 NT$3,000',
        '需綁定 Richart / 台新帳戶自動扣繳',
        '⚠️ 實體卡感應或一般刷卡為 0% 排除！代收稅費、悠遊儲值不回饋'
      ],
      capWarning: '超商限台新Pay，單筆限額 NT$3,000',
      isSchemeDependent: true
    };
  }

  // 3. 萊爾富 / OK 超商
  if (channelId === 'convenience_hilife_ok') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷',
      requiredSchemeTag: '方案：【Pay著刷】',
      bestPaymentMethod: {
        method: 'taishin_pay',
        label: '📱 必須使用「台新Pay」掃碼結帳',
        note: '切換至【Pay著刷】四大超商通吃台新Pay 3.8%！'
      },
      details: [
        `【Pay著刷】四大超商綁台新Pay享 ${isLinked ? 3.8 : baseRate}% 台新Point`,
        '萊爾富與 OK 超商需切換至【Pay著刷】',
        '超商單筆上限 NT$3,000'
      ],
      capWarning: '超商限台新Pay，單筆限額 NT$3,000',
      isSchemeDependent: true
    };
  }

  // 4. 手搖飲 / 咖啡名店 (50嵐/得正/CAFE!N)
  if (channelId === 'drink_chill') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 10.0 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Chill刷',
      requiredSchemeTag: '方案：【Chill刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '📱 實體感應 / Apple Pay / LINE Pay 皆可',
        note: '【Chill刷神方案】指定手搖飲與咖啡享狂暴 10% 回饋！'
      },
      details: [
        `【Chill刷方案】50嵐、得正、CAFE!N、五桐號、龜記等享 ${isLinked ? 10 : baseRate}% 台新Point！`,
        '需綁定 Richart 自動扣繳'
      ],
      capWarning: 'Chill刷每月有指定加碼上限',
      isSchemeDependent: true
    };
  }

  // 5. 燒肉火鍋名店 (詹記/屋馬/碳佐麻里)
  if (channelId === 'dining_hotpot') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 10.0 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Chill刷',
      requiredSchemeTag: '方案：【Chill刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 實體刷卡或 Apple/Samsung Pay 感應',
        note: '【Chill刷名店】詹記、屋馬、碳佐麻里享 10%！'
      },
      details: [
        `【Chill刷方案】微醺聚會指定燒肉火鍋享 ${isLinked ? 10 : baseRate}% 台新Point！`,
        '需綁定 Richart 自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 5.1 橘色涮涮屋 / 頂級日系鍋物 (好饗刷 3.3%)
  if (channelId === 'dining_orangeshabu') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '好饗刷',
      requiredSchemeTag: '方案：【好饗刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡或 Apple/Samsung Pay 感應',
        note: '【好饗刷】橘色餐飲享 3.3%'
      },
      details: [
        `【好饗刷方案】橘色涮涮屋實體門市消費：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 5.2 壽司郎 / 爭鮮 (Pay著刷 3.8% / 好饗刷 3.3%)
  if (channelId === 'dining_sushiro') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷 / 好饗刷',
      requiredSchemeTag: '方案：【Pay著刷 / 好饗刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 出示 LINE Pay 條碼結帳享 3.8%；實體卡切【好饗刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%'
      },
      details: [
        `【Pay著刷】出示 LINE Pay 條碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【好饗刷】若走實體卡感應或插卡：${isLinked ? 3.3 : baseRate}% 台新Point`
      ],
      isSchemeDependent: true
    };
  }

  // 5.3 日系精緻料理 / 預約名店 (好饗刷 3.3%)
  if (channelId === 'dining_japanese_luxury') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '好饗刷',
      requiredSchemeTag: '方案：【好饗刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡或 Apple/Samsung Pay 感應',
        note: '【好饗刷】餐飲享 3.3%'
      },
      details: [
        `【好饗刷方案】日系高級名店實體消費：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '涵蓋初魚、梵燒肉、侍燒肉等日料餐廳'
      ],
      isSchemeDependent: true
    };
  }

  // 5.4 日系連鎖餐飲 (客美多咖啡 / すき家 / 錢都)
  if (channelId === 'dining_japanese_chain') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷 / 好饗刷',
      requiredSchemeTag: '方案：【Pay著刷 / 好饗刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 出示 LINE Pay 條碼結帳享 3.8%；實體卡切【好饗刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%'
      },
      details: [
        `【Pay著刷】門市出示 LINE Pay 條碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【好饗刷】若走實體卡感應或插卡：${isLinked ? 3.3 : baseRate}% 台新Point`
      ],
      isSchemeDependent: true
    };
  }

  // 5.5 快時尚服飾 (UNIQLO / GU)
  if (channelId === 'fashion_fast') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷 / 大筆刷',
      requiredSchemeTag: '方案：【Pay著刷 / 大筆刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市或官網出示 LINE Pay 付款享 3.8%；百貨專櫃機台切【大筆刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%'
      },
      details: [
        `【Pay著刷方案】UNIQLO / GU 支援 LINE Pay 結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '若於百貨館內且走百貨自營機台，切換【大筆刷】亦享 3.3%'
      ],
      isSchemeDependent: true
    };
  }

  // 6. 外送 (Uber Eats / foodpanda)
  if (channelId === 'food_delivery') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷',
      requiredSchemeTag: '方案：【Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 外送結帳選擇 LINE Pay 付款',
        note: '【Pay著刷】LINE Pay 享 3.8%'
      },
      details: [
        `【Pay著刷】外送選擇 LINE Pay 付款：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '若走卡號線上刷卡可切換【好饗刷】享 3.3%'
      ],
      isSchemeDependent: true
    };
  }

  // 6.5. 摩斯漢堡 MOS Burger
  if (channelId === 'fastfood_mos') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷',
      requiredSchemeTag: '方案：【Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市櫃台出示 LINE Pay 條碼結帳',
        note: '【Pay著刷】LINE Pay 享 3.8%（可避開百貨美食街門市餐飲排除）'
      },
      details: [
        `【Pay著刷】門市出示 LINE Pay 條碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '走 LINE Pay 掃碼可避開部分百貨商場門市餐飲排除；實體刷卡切【好饗刷】享 3.3%'
      ],
      isSchemeDependent: true
    };
  }

  // 6.6. 麥當勞 McDonald's
  if (channelId === 'fastfood_mcdonalds') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷',
      requiredSchemeTag: '方案：【Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市櫃台/自助機出示 LINE Pay 條碼結帳',
        note: '【Pay著刷】出示 LINE Pay 享 3.8%（破解小額支付 0% 地雷）'
      },
      details: [
        `【Pay著刷】出示 LINE Pay 條碼掃碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '🔥 走 LINE Pay 掃碼可成功繞過 NCCC 小額支付 0% 排除！',
        '⚠️ 千萬不要拿台新實體卡直接感應或插卡（直接 0% 排除）'
      ],
      isSchemeDependent: true
    };
  }

  // 6.7. 肯德基 KFC / 必勝客
  if (channelId === 'fastfood_kfc' || channelId === 'fastfood_pizzahut') {
    const brandName = channelId === 'fastfood_kfc' ? '肯德基' : '必勝客';
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷',
      requiredSchemeTag: '方案：【Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市或線上訂餐出示 LINE Pay 條碼結帳',
        note: '【Pay著刷】LINE Pay 享 3.8%'
      },
      details: [
        `【Pay著刷】出示 LINE Pay 條碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `支援${brandName}門市現場與 PK雙饗卡線上訂餐；實體感應切【好饗刷】享 3.3%`
      ],
      isSchemeDependent: true
    };
  }

  // 7. 蝦皮購物
  if (channelId === 'online_shopee') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '數趣刷',
      requiredSchemeTag: '方案：【數趣刷】',
      bestPaymentMethod: {
        method: 'online',
        label: '💻 線上刷卡直接輸卡號',
        note: '【數趣刷】蝦皮購物享 3.3%（蝦皮多數訂單不支援 LINE Pay）'
      },
      details: [
        `【數趣刷】蝦皮購物刷卡：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '⚠️ 蝦皮大部分訂單不支援 LINE Pay，切換【數趣刷】直接輸入卡號最划算！'
      ],
      isSchemeDependent: true
    };
  }

  // 7.5. momo / PChome / 酷澎
  if (channelId === 'online_momo' || channelId === 'online_pchome' || channelId === 'online_coupang') {
    const platformName = channelId === 'online_momo' ? 'momo 購物網' : channelId === 'online_pchome' ? 'PChome 24h' : '酷澎 Coupang';
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷',
      requiredSchemeTag: '方案：【Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 結帳付款方式選擇 LINE Pay',
        note: `【Pay著刷】${platformName} 走 LINE Pay 享 3.8%`
      },
      details: [
        `【Pay著刷】${platformName} 結帳選 LINE Pay：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `🔥 ${platformName} 支援 LINE Pay 結帳，享台新最高 3.8% 加碼！`,
        '💡 建議小額優先用台新走 LINE Pay 享 3.8%；超過 3 萬大額採購可改刷 CUBE 玩數位 3.3% 無上限！'
      ],
      capWarning: '每期帳單加碼上限 1,000 點 (月刷約 $30,303 封頂)',
      isSchemeDependent: true
    };
  }

  // 7.6. 綜合電商
  if (channelId === 'online_shopee_momo') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷',
      requiredSchemeTag: '方案：【Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 網購結帳選擇 LINE Pay 付款',
        note: '【Pay著刷】LINE Pay 享 3.8%（無 LINE Pay 時切【數趣刷】直接刷卡享 3.3%）'
      },
      details: [
        `【Pay著刷】若走 LINE Pay 結帳享 ${isLinked ? 3.8 : baseRate}% 台新Point`,
        '若電商不支援 LINE Pay，切換為【數趣刷】直接刷卡享 3.3%'
      ],
      isSchemeDependent: true
    };
  }

  // 7.7. 淘寶 / 天貓
  if (channelId === 'online_taobao') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '數趣刷',
      requiredSchemeTag: '方案：【數趣刷】',
      bestPaymentMethod: {
        method: 'online',
        label: '💻 淘寶 App 線上刷卡直接輸卡號',
        note: '【數趣刷】淘寶/天貓享 3.3%'
      },
      details: [
        `【數趣刷方案】淘寶天貓跨境購物：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 7.8. 串流影音 (Chill刷 10% 狂暴神卡)
  if (channelId === 'streaming_media') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 10.0 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Chill刷',
      requiredSchemeTag: '方案：【Chill刷】',
      bestPaymentMethod: {
        method: 'online',
        label: '💻 線上設定訂閱自動扣繳',
        note: '【Chill刷神卡】Netflix / Disney+ 享狂暴 10%！'
      },
      details: [
        `【Chill刷方案】Netflix、Disney+ 影音訂閱：${isLinked ? 10 : baseRate}% 台新Point！`,
        '涵蓋 Netflix、Disney+ 等指定串流娛樂',
        '每期帳單加碼上限 1,000 點（月刷 $11,111 封頂）',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      capWarning: '每期帳單加碼上限 1,000 點 (月刷 $11,111 封頂)',
      isSchemeDependent: true
    };
  }

  // 7.9. 數位商店 (App Store / Google Play)
  if (channelId === 'digital_stores') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '數趣刷',
      requiredSchemeTag: '方案：【數趣刷】',
      bestPaymentMethod: {
        method: 'online',
        label: '📱 綁定 Apple ID / Google 帳號線上扣款',
        note: '【數趣刷】App Store / Google Play 享 3.3%'
      },
      details: [
        `【數趣刷方案】數位商店與手遊課金：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '涵蓋 App Store、Apple 媒體服務、Google Play',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 7.10. AI 工具與軟體雲端 (ChatGPT / Cursor / Claude)
  if (channelId === 'ai_software') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '數趣刷',
      requiredSchemeTag: '方案：【數趣刷】',
      bestPaymentMethod: {
        method: 'online',
        label: '💻 AI 官網綁定線上刷卡直接扣繳',
        note: '【數趣刷】AI 服務與生產力軟體享 3.3%'
      },
      details: [
        `【數趣刷方案】AI 服務與線上軟體：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '涵蓋 ChatGPT、Claude、Cursor、Perplexity 等',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 8. 全聯門市 (排除)
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
      warning: '全聯直接刷台新卡為 0%！請改用國泰 CUBE 卡 (集精選 2.0%)！',
      isBlocked: true
    };
  }

  // 9. 萬家福 / 大全聯 (天天刷支援)
  if (channelId === 'supermarket_carrefour') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '天天刷',
      requiredSchemeTag: '方案：【天天刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 實體刷卡或 Apple/Samsung Pay 感應',
        note: '【天天刷】萬家福/大全聯指定量販 3.3%'
      },
      details: [`【天天刷】萬家福/大全聯等指定量販：${isLinked ? 3.3 : baseRate}% 台新Point`],
      isSchemeDependent: true
    };
  }

  // 9.1 唐吉訶德 (Pay著刷 3.8%)
  if (channelId === 'supermarket_donki') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷',
      requiredSchemeTag: '方案：【Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 DON DON DONKI 出示 LINE Pay 條碼結帳',
        note: '【Pay著刷】LINE Pay 享 3.8%'
      },
      details: [
        `【Pay著刷方案】唐吉訶德出示 LINE Pay 條碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 10. 高鐵與台鐵 (天天刷)
  if (channelId === 'transit_rail') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '天天刷',
      requiredSchemeTag: '方案：【天天刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '🚄 車站售票機/窗口感應或 App 線上扣款',
        note: '【天天刷】高鐵與台鐵通通享 3.3% 台新Point'
      },
      details: [
        `【天天刷方案】高鐵與台鐵火車購票：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '涵蓋台灣高鐵（官網/T-EX/售票機）與台鐵火車（官網/e-Booking/窗口）',
        '🔥 台新大勝 CUBE：CUBE 僅高鐵有 3.3%（台鐵僅 0.3%），台新卡高鐵、台鐵雙通吃！'
      ],
      isSchemeDependent: true
    };
  }

  // 10.1. 全球航空公司購票 (玩旅刷)
  if (channelId === 'travel_airlines') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '玩旅刷',
      requiredSchemeTag: '方案：【玩旅刷】',
      bestPaymentMethod: {
        method: 'online',
        label: '✈️ 航空公司官網線上刷卡',
        note: '【玩旅刷】指定航空公司 3.3%'
      },
      details: [
        `【玩旅刷方案】指定航空公司購票：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '涵蓋華航、長榮、星宇、台灣虎航、國泰航空、日本航空、ANA等航空公司官網直購'
      ],
      isSchemeDependent: true
    };
  }

  // 10.2. 訂房平台與行程票券 (玩旅刷 / Pay著刷)
  if (channelId === 'travel_booking_ota') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '玩旅刷 / Pay著刷',
      requiredSchemeTag: '方案：【玩旅刷 / Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '🏨 若支援 LINE Pay (如 Klook/KKday) 切【Pay著刷】3.8%；直刷切【玩旅刷】3.3%',
        note: 'Agoda/Booking 線上刷卡切換【玩旅刷】享 3.3%'
      },
      details: [
        `【Pay著刷方案】Klook / KKday 選擇 LINE Pay 掃碼：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【玩旅刷方案】Agoda / Booking.com / Trip.com 線上刷卡：${isLinked ? 3.3 : baseRate}% 台新Point`
      ],
      isSchemeDependent: true
    };
  }

  // 10.3. 知名旅行社 (玩旅刷)
  if (channelId === 'travel_agencies') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '玩旅刷',
      requiredSchemeTag: '方案：【玩旅刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '🗺️ 旅行社官網或實體門市刷卡',
        note: '【玩旅刷】雄獅/可樂/易遊網等享 3.3%'
      },
      details: [
        `【玩旅刷方案】指定知名旅行社：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '涵蓋雄獅旅遊、可樂旅遊、易遊網 ezTravel、東南旅遊等官網與門市消費'
      ],
      isSchemeDependent: true
    };
  }

  // 10.4. 計程車與叫車平台 (天天刷 / Pay著刷)
  if (channelId === 'transit_taxi') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '天天刷 / Pay著刷',
      requiredSchemeTag: '方案：【天天刷 / Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '🚕 出示 LINE Pay 條碼（台灣大車隊/LINE GO）享 3.8%；App 綁卡切【天天刷】3.3%',
        note: '台灣大車隊、yoxi、Uber 通通有加碼'
      },
      details: [
        `【Pay著刷方案】台灣大車隊 / LINE GO 出示 LINE Pay：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【天天刷方案】Uber / yoxi / 台灣大車隊 App 綁卡或刷卡：${isLinked ? 3.3 : baseRate}% 台新Point`
      ],
      isSchemeDependent: true
    };
  }

  // 10.5. 租車與共享交通 (天天刷)
  if (channelId === 'transit_car_rental') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '天天刷',
      requiredSchemeTag: '方案：【天天刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '🚗 iRent App 扣款或和運/格上門市刷卡',
        note: '【天天刷】指定租車交通出行 3.3%'
      },
      details: [
        `【天天刷方案】指定租車與共享運具：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '涵蓋 iRent、和運租車、格上租車'
      ],
      isSchemeDependent: true
    };
  }

  // 10.6. 日本交通卡儲值 (玩旅刷)
  if (channelId === 'transit_japan_ic') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '玩旅刷',
      requiredSchemeTag: '方案：【玩旅刷】',
      bestPaymentMethod: {
        method: 'online',
        label: '🍏 iPhone Apple 錢包加值日本交通卡',
        note: '【玩旅刷】海外外幣消費 3.3%'
      },
      details: [
        `【玩旅刷方案】Apple 錢包加值日圓交通卡：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '涵蓋 Suica、PASMO、ICOCA 外幣線上儲值'
      ],
      isSchemeDependent: true
    };
  }

  // 10.7. 海外實體
  if (channelId === 'travel_overseas') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '玩旅刷',
      requiredSchemeTag: '方案：【玩旅刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '✈️ 海外實體感應 / 插卡',
        note: '【玩旅刷】海外消費 3.3%'
      },
      details: [`【玩旅刷】海外實體與線上外幣消費：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`],
      isSchemeDependent: true
    };
  }

  // 11. 全台餐廳
  if (channelId === 'dining_restaurant') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '好饗刷',
      requiredSchemeTag: '方案：【好饗刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡或 Apple/Samsung Pay 感應',
        note: '【好饗刷】餐飲享 3.3%'
      },
      details: [`【好饗刷】全台餐飲消費：${isLinked ? 3.3 : baseRate}% 台新Point`],
      isSchemeDependent: true
    };
  }

  // 11.5. 全台指定百貨 (大筆刷支援)
  if (
    channelId === 'department_store' ||
    channelId === 'store_hands' ||
    channelId === 'mall_mingyao_xpark' ||
    channelId === 'mall_sogo_dome' ||
    channelId === 'mall_mitsui_lalaport'
  ) {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '大筆刷',
      requiredSchemeTag: '方案：【大筆刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 專櫃實體刷卡或 Apple/Samsung Pay 感應',
        note: '【大筆刷】新光三越/SOGO/明曜/微風/台北101等享 3.3%'
      },
      details: [
        `【大筆刷方案】指定百貨消費：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '涵蓋新光三越、遠東SOGO、微風、台北101、遠東百貨、明曜百貨等',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 11.6. 生活藥妝 (天天刷支援)
  if (channelId === 'drugstore_cosmetics' || channelId === 'drugstore_jp_med') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '天天刷',
      requiredSchemeTag: '方案：【天天刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡或 Apple/Samsung Pay 感應',
        note: '【天天刷】康是美/屈臣氏指定藥妝享 3.3%'
      },
      details: [
        `【天天刷方案】指定藥妝門市：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '涵蓋康是美、屈臣氏等連鎖藥妝',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 11.7. IKEA 宜家家居 (大筆刷支援)
  if (channelId === 'home_ikea') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '大筆刷',
      requiredSchemeTag: '方案：【大筆刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡/感應或官網刷卡',
        note: '【大筆刷】居家裝修（IKEA、特力屋）享 3.3%'
      },
      details: [
        `【大筆刷方案】IKEA 居家裝修：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '涵蓋 IKEA 門市、餐廳用餐與官網線上購物',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 11.8. LOPIA 日系超市
  if (channelId === 'supermarket_lopia') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '天天刷 / 大筆刷',
      requiredSchemeTag: '方案：【天天刷 / 大筆刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡或感應支付',
        note: '商場量販享 3.3%'
      },
      details: [
        `【天天刷/大筆刷】商場量販超市：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 11.9. 充電與智慧停車 (天天刷支援)
  if (channelId === 'ev_charging_parking') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.3 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '天天刷',
      requiredSchemeTag: '方案：【天天刷】',
      bestPaymentMethod: {
        method: 'online',
        label: '📱 綁定各 App 自動扣繳或充電掃碼',
        note: '【天天刷】加油充電與交通享 3.3%'
      },
      details: [
        `【天天刷方案】指定充電站與行車交通：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '涵蓋 U-POWER、EVOASIS、車麻吉等智慧出行',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 12. 摩曼頓與喬山運動器材 (Pay著刷 3.8% / 大筆刷 3.3%)
  if (channelId === 'store_momentum') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷 / 大筆刷',
      requiredSchemeTag: '方案：【Pay著刷 / 大筆刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 出示 LINE Pay 條碼享 3.8%；百貨專櫃機台切【大筆刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%'
      },
      details: [
        `【Pay著刷方案】門市結帳出示 LINE Pay 條碼：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【大筆刷方案】若於新光三越、SOGO、遠百等百貨專櫃走百貨機台：${isLinked ? 3.3 : baseRate}% 台新Point`
      ],
      isSchemeDependent: true
    };
  }

  // 13. 連鎖健身房 (假日刷 2.0% / 平日 0.5%)
  if (channelId === 'fitness_gym') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 2.0 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '假日刷',
      requiredSchemeTag: '方案：【假日刷】',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 週末至健身房現場刷卡享 2.0%；月費直接扣繳僅 0.5%',
        note: '【假日刷】週末現場刷卡享 2.0%'
      },
      details: [
        `【假日刷方案】週末至 World Gym / 健身工廠現場刷卡：${isLinked ? 2.0 : baseRate}% 台新Point`,
        `⚠️ 會籍月費提醒：若綁定信用卡定期定額每月自動扣繳，列為一般消費僅 ${baseRate}%！強烈推薦改用永豐 SPORT 卡扣繳享 7%！`
      ],
      isSchemeDependent: true
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
    channelId.startsWith('dining_') ||
    channelId.startsWith('mall_') ||
    channelId.startsWith('store_') ||
    channelId.startsWith('drugstore_') ||
    channelId === 'fashion_fast' ||
    channelId === 'fastfood_mos' ||
    channelId === 'fastfood_kfc' ||
    channelId === 'fastfood_pizzahut' ||
    channelId === 'drink_chill' ||
    channelId === 'supermarket_carrefour' ||
    channelId === 'supermarket_lopia' ||
    channelId === 'supermarket_donki' ||
    channelId === 'home_ikea' ||
    channelId === 'department_store' ||
    channelId === 'transit_car_rental' ||
    channelId === 'travel_overseas' ||
    channelId === 'store_momentum' ||
    channelId === 'fitness_gym'
  );

  if (channelId === 'store_momentum') {
    const rate = isCalorieMet && hasQuota ? 7.0 : (isCalorieMet ? 2.0 : 1.0);
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 實體卡直接刷 / 官網線上刷 / 手機 Apple Pay 感應通通享 7%',
        note: '官方直接特約通路！無腦過卡、官網結帳、手機感應通通穩拿 7%'
      },
      details: [
        `【官方特約裝備通路】摩曼頓 (Momentum)、喬山健康科技：${rate}% 豐點`,
        '🔥 官方直接特約：實體卡插卡、官網線上刷卡、Apple Pay 感應通通享 7.0%！',
        '每月消費滿 NT$6,000 封頂（可拿滿 350 豐點）'
      ],
      capWarning: rate === 7.0 ? '🔥 官方特約通路！實體卡/官網/感應通通 7%（$6,000 封頂）' : undefined,
      isSchemeDependent: false
    };
  }

  if (channelId === 'fitness_gym') {
    const rate = isCalorieMet && hasQuota ? 7.0 : (isCalorieMet ? 2.0 : 1.0);
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: '🏋️ 綁定信用卡扣繳月費 或 門市 Apple Pay 感應',
        note: '官方指定特約健身房！定期扣繳月費或現場感應通通享 7%（$6,000 封頂）'
      },
      details: [
        `【官方特約健身加碼】World Gym、健身工廠、BEING、Curves：${rate}% 豐點`,
        '🔥 最強特點：直接綁定信用卡每月自動扣繳會費（月費），只要運動達標一樣享 7.0% 加碼！',
        '每月消費滿 NT$6,000 封頂（可拿滿 350 豐點）'
      ],
      capWarning: rate === 7.0 ? '🔥 官方特約通路！會費月費扣繳享 7%（月刷 $6,000 封頂）' : undefined,
      isSchemeDependent: false
    };
  }

  if (channelId.startsWith('convenience_')) {
    const is711 = channelId === 'convenience_711';
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: 0.0,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: is711 ? '❌ 7-11 未合作刷卡且 0% 排除' : '❌ 超商小額支付 0% 排除',
        note: is711 ? '門市無法感應永豐卡' : '超商非一般消費無回饋'
      },
      details: [
        is711
          ? '7-ELEVEN 門市刷卡未與永豐銀行合作，實體卡與 Apple Pay 無法過卡（交易失敗）'
          : '全家等超商門市在銀行端屬於非一般消費/小額支付，永豐直接列為 0% 排除',
        '永豐 SPORT 卡的 Apple Pay 7% 指定加碼「不適用於任何超商」！',
        '建議改用台新卡（切【天天刷】出示「台新Pay」享 3.8%）或國泰 CUBE（【集精選】享 2.0%）！'
      ],
      warning: is711
        ? '⚠️ 7-11 無法刷永豐卡，且超商為 0% 排除！請改用台新Pay (3.8%) 或 CUBE 集精選 (2.0%)！'
        : '⚠️ 超商門市為永豐 0% 排除通路，SPORT 卡無 7% 回饋！請改用台新Pay (3.8%) 或 CUBE 集精選 (2.0%)！',
      isBlocked: true
    };
  }

  if (channelId === 'fastfood_mcdonalds') {
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: 0.0,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 麥當勞小額支付平台 0% 排除',
        note: '實體感應無回饋'
      },
      details: [
        '麥當勞屬於 NCCC 小額支付平台特約商店，永豐信用卡直接刷卡或感應為 0% 排除',
        '建議改用台新切換【Pay著刷】(LINE Pay 3.8%)、永豐 DAWAY (LINE Pay 3%) 或國泰 CUBE (樂饗購 3.3%)！'
      ],
      warning: '⚠️ 麥當勞走實體刷卡為小額支付 0% 排除！請改用 LINE Pay 或 CUBE 樂饗購！',
      isBlocked: true
    };
  }

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
      warning: '全聯消費不適用 SPORT 卡，請改刷 CUBE (集精選 2.0%)！',
      isBlocked: true
    };
  }

  if (channelId === 'transit_rail') {
    const rate = isCalorieMet && hasQuota ? 7.0 : (isCalorieMet ? 2.0 : 1.0);
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'apple_pay',
        label: '🚄 車站自動售票機或窗口 Apple Pay / Google Pay 感應購票',
        note: '機台感應享最高 7%（$6,000 封頂）；線上 App 購票僅 1%~2%'
      },
      details: [
        `車站機台/臨櫃使用 Apple Pay / Google Pay 感應：${rate}% 豐點`,
        '⚠️ 線上購票提醒：若使用高鐵 T-EX App 或台鐵官網線上刷卡，屬於線上交易無法享有感應 +5% 加碼，僅享 1%~2%！',
        '💡 想拿 7% 務必至車站實體機台或售票窗口使用手機感應付款！'
      ],
      capWarning: rate === 7.0 ? '🔥 每月消費 NT$6,000 內享 7%，超過後降為 1%~2%' : undefined,
      warning: rate < 7.0 ? '運動尚未達標或本月 $6,000 感應額度已滿' : undefined
    };
  }

  if (channelId === 'transit_taxi') {
    const rate = isCalorieMet && hasQuota ? 7.0 : (isCalorieMet ? 2.0 : 1.0);
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'apple_pay',
        label: '🚕 台灣大車隊 / yoxi 車上機台使用 Apple Pay / Google Pay 感應',
        note: '車上感應享最高 7%（$6,000 封頂）；Uber App 線上僅 1%~2%'
      },
      details: [
        `車內實體刷卡機使用 Apple Pay / Google Pay 感應：${rate}% 豐點`,
        '台灣大車隊、yoxi 車內均配備感應式刷卡機，達標享 7% 封頂',
        '⚠️ Uber App 為線上綁卡扣款，無感應加碼，僅享 1%~2%！'
      ],
      capWarning: rate === 7.0 ? '🔥 每月消費 NT$6,000 內享 7%，超過後降為 1%~2%' : undefined
    };
  }

  if (channelId === 'travel_airlines' || channelId === 'travel_booking_ota' || channelId === 'travel_agencies' || channelId === 'transit_japan_ic') {
    const onlineRate = isCalorieMet ? 2.0 : 1.0;
    const channelNames: Record<string, string> = {
      travel_airlines: '航空機票官網直購',
      travel_booking_ota: 'Agoda / Booking / Klook 訂房票券',
      travel_agencies: '雄獅 / 可樂 / 易遊網各大旅行社',
      transit_japan_ic: 'Apple 錢包日本交通卡加值'
    };
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: onlineRate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'online',
        label: '線上刷卡',
        note: '純線上扣款無法觸發感應 +5%'
      },
      details: [
        `${channelNames[channelId] || '本通路'}多為線上付款：僅享一般消費 ${onlineRate}% 豐點`,
        '無 Apple Pay / Google Pay 實體感應支付 +5% 加碼',
        '💡 建議改刷國泰 CUBE（趣旅行 3.3% 無上限）或台新卡（玩旅刷 3.3%）！'
      ],
      warning: '⚠️ 線上消費無法觸發 7% 感應加碼！機票/訂房/旅行社建議刷 CUBE (3.3%) 或台新 (3.3%)！'
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

  if (channelId.startsWith('convenience_')) {
    const is711 = channelId === 'convenience_711';
    const isFamily = channelId === 'convenience_family';
    let label = '❌ 超商小額支付 0% 排除';
    let note = '超商消費無回饋';
    let details = [
      '超商門市在永豐銀行信用卡條款中屬於非一般消費排除通路，0% 回饋',
      '永豐 DAWAY 卡之 LINE POINTS 加碼回饋不適用於超商！',
      '建議改用台新卡（出示「台新Pay」享 3.8%）或國泰 CUBE（集精選享 2.0%）！'
    ];
    if (is711) {
      label = '❌ 7-11 不支援永豐卡 LINE Pay';
      note = '未合作刷卡且扣款會失敗';
      details = [
        '【重大限制】7-11 門市的 LINE Pay 不開放綁定永豐信用卡付款（交易失敗）！',
        '門市實體刷卡亦未與永豐銀行合作，且超商列為 0% 排除！',
        '建議改用台新卡（台新Pay 3.8%）或國泰 CUBE（集精選 2.0%）！'
      ];
    } else if (isFamily) {
      label = '❌ 全家不支援永豐卡 LINE Pay';
      note = 'LINE Pay 無法扣款且實體 0%';
      details = [
        '【重大限制】全家便利商店 LINE Pay 不支援綁定永豐信用卡付款（交易失敗）！',
        '實體刷卡雖可過卡，但超商屬於非一般消費 0% 排除！',
        '建議改用台新卡（台新Pay 3.8%）或國泰 CUBE（集精選 2.0%）！'
      ];
    }

    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 0.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label,
        note
      },
      details,
      warning: is711
        ? '⚠️ 7-11 無法刷永豐 DAWAY 卡（LINE Pay 與實體皆不可）！請改用台新Pay (3.8%) 或 CUBE (2.0%)！'
        : isFamily
          ? '⚠️ 全家不支援永豐 LINE Pay，且實體為 0% 排除！請改用台新Pay (3.8%) 或 CUBE (2.0%)！'
          : '⚠️ 萊爾富/OK 超商為 0% 排除通路！請改用台新Pay (3.8%)！',
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

  if (channelId === 'fastfood_mos') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市櫃台/自助機出示 LINE Pay 條碼',
        note: '摩斯門市支援 LINE Pay 條碼'
      },
      details: [
        `摩斯門市出示 LINE Pay 支付：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ 若直接拿實體卡感應或插卡僅享 1% 一般消費'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'fastfood_mcdonalds') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市櫃台/自助機出示 LINE Pay 條碼',
        note: '走 LINE Pay 掃碼完美破解小額 0% 地雷'
      },
      details: [
        `麥當勞出示 LINE Pay 條碼：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '🔥 出示 LINE Pay 成功避開小額支付 0% 陷阱！',
        '⚠️ 千萬不要拿實體卡感應或插卡（實體直接 0%）'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'fastfood_kfc' || channelId === 'fastfood_pizzahut') {
    const brandName = channelId === 'fastfood_kfc' ? '肯德基' : '必勝客';
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市或線上訂餐出示 LINE Pay 條碼',
        note: `${brandName}/PK雙饗卡支援 LINE Pay`
      },
      details: [
        `${brandName}出示 LINE Pay 條碼：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ 純實體卡刷卡僅 1% 一般消費'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'food_delivery') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 外送結帳選擇 LINE Pay 付款',
        note: 'Uber Eats / foodpanda 結帳選 LINE Pay 享加碼'
      },
      details: [
        `外送結帳選擇 LINE Pay 支付：${lpRate}% LINE POINTS`,
        isNew ? '🔥 新戶加碼享 3%（加碼上限每期 800 點，月刷 NT$40,000 封頂）' : '舊戶享 1.5% LINE POINTS（加碼上限 300 點）',
        '⚠️ 若直接在 App 輸入卡號線上刷卡僅一般消費 1%'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'online_shopee') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 1.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'online',
        label: '❌ 蝦皮不支援 LINE Pay',
        note: '直接刷卡僅一般消費 1%'
      },
      details: [
        '蝦皮購物目前不支援 LINE Pay 付款，無法享有最高 3% LINE POINTS 加碼',
        '線上刷卡僅享基本回饋 1% LINE POINTS',
        '建議改用國泰 CUBE（玩數位 3.3%）或台新卡（數趣刷 3.3%）！'
      ],
      warning: '⚠️ 蝦皮不支援 LINE Pay，DAWAY 僅 1%！建議改刷 CUBE (3.3%) 或台新 (3.3%)！'
    };
  }

  if (channelId === 'online_momo' || channelId === 'online_pchome' || channelId === 'online_coupang') {
    const platformName = channelId === 'online_momo' ? 'momo 購物網' : channelId === 'online_pchome' ? 'PChome 24h' : '酷澎 Coupang';
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 結帳付款方式選擇 LINE Pay',
        note: '走 LINE Pay 享新戶 3% / 舊戶 1.5%'
      },
      details: [
        `${platformName} 結帳選擇 LINE Pay 支付：${lpRate}% LINE POINTS`,
        isNew ? '🔥 新戶加碼享 3%（加碼上限每期 800 點，月刷 NT$40,000 封頂）' : '舊戶享 1.5% LINE POINTS（加碼上限 300 點）',
        '⚠️ 若直接輸入卡號線上刷卡僅一般消費 1%'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'department_store') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 專櫃結帳出示 LINE Pay 條碼',
        note: '若專櫃支援 LINE Pay 享新戶 3% / 舊戶 1.5%'
      },
      details: [
        `百貨專櫃出示 LINE Pay 條碼支付：${lpRate}% LINE POINTS`,
        '⚠️ 若專櫃不支援 LINE Pay 走實體插卡僅 1% 一般消費',
        '建議改刷國泰 CUBE（樂饗購 3.3% 無上限）或台新（大筆刷 3.3%）！'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'drugstore_cosmetics') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市出示 LINE Pay 條碼付款',
        note: '康是美/屈臣氏/寶雅門市皆支援 LINE Pay'
      },
      details: [
        `藥妝門市出示 LINE Pay 條碼支付：${lpRate}% LINE POINTS`,
        isNew ? '🔥 新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ 純實體卡感應或插卡僅 1% 一般消費'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'home_ikea') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市結帳出示 LINE Pay 條碼',
        note: 'IKEA 門市支援 LINE Pay'
      },
      details: [
        `IKEA 出示 LINE Pay 條碼支付：${lpRate}% LINE POINTS`,
        isNew ? '🔥 新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ 純實體卡刷卡僅 1% 一般消費'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'supermarket_lopia') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 結帳出示 LINE Pay 條碼',
        note: '若機台支援 LINE Pay 享加碼'
      },
      details: [
        `LOPIA 出示 LINE Pay 條碼支付：${lpRate}% LINE POINTS`,
        '⚠️ 若走實體卡僅 1% 一般消費'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'ev_charging_parking') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 App 內結帳選擇 LINE Pay 支付',
        note: '車麻吉等 App 支援 LINE Pay'
      },
      details: [
        `智慧出行綁定 LINE Pay 支付：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '若走直接輸入卡號線上刷僅 1%'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'online_taobao') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 3.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'online',
        label: '💻 淘寶 App 線上刷卡直接輸卡號',
        note: '淘寶跨境海外消費享 3% LINE POINTS 無上限'
      },
      details: [
        '淘寶/天貓跨境海外交易：3.0% LINE POINTS（回饋無上限）',
        '海外外幣消費享 3% LINE POINTS，可抵扣 1.5% 跨境交易手續費！'
      ]
    };
  }

  if (channelId === 'ai_software') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 3.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'online',
        label: '💻 AI 官網綁定直接刷卡扣款',
        note: '美金外幣扣款享海外消費 3% LINE POINTS 無上限'
      },
      details: [
        '海外外幣線上扣款：3.0% LINE POINTS（回饋無上限）',
        'ChatGPT / Cursor / Claude 等美金計價服務，享海外 3% 回饋！'
      ]
    };
  }

  if (channelId === 'streaming_media') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 1.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'online',
        label: '💻 線上刷卡直接扣款',
        note: '一般消費 1%'
      },
      details: [
        '影音串流線上刷卡：1.0% LINE POINTS',
        '💡 建議改用台新卡（切換【Chill刷】享狂暴 10%）或國泰 CUBE（玩數位 3.3%）！'
      ],
      warning: 'DAWAY 刷串流僅 1%！建議改刷台新 Chill 刷 (10%) 或 CUBE 玩數位 (3.3%)！'
    };
  }

  if (channelId === 'digital_stores') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 1.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'online',
        label: '📱 綁定 Apple ID / Google 帳號線上扣款',
        note: '一般消費 1%'
      },
      details: [
        'App Store / Google Play 課金：1.0% LINE POINTS',
        '💡 建議改用國泰 CUBE（玩數位 3.3% 無上限）或台新（數趣刷 3.3%）！'
      ],
      warning: 'DAWAY 課金僅 1%！建議改刷 CUBE 玩數位 (3.3% 無上限)！'
    };
  }

  if (channelId.startsWith('gas_')) {
    const stationName =
      channelId === 'gas_formosa'
        ? '福懋 / 台塑加油站'
        : channelId === 'gas_smile'
          ? '速邁樂加油站'
          : channelId === 'gas_national'
            ? '全國加油站'
            : '中油加油站';
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 若加油站支援出示 LINE Pay 掃碼付款',
        note: '若支援 LINE Pay 享加碼；若實體插卡僅 1%'
      },
      details: [
        `${stationName}若支援 LINE Pay 支付：${lpRate}% LINE POINTS`,
        '⚠️ 若直接拿實體卡感應或插卡僅享一般消費 1%',
        '💡 加油最推薦改刷永豐 SPORT（Apple Pay 感應 7%）！'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'transit_rail') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '🚄 車站售票窗口/機台出示 LINE Pay 掃碼',
        note: '窗口掃 LINE Pay 享加碼；實體刷卡僅 1%'
      },
      details: [
        `車站臨櫃若支援出示 LINE Pay 條碼付款：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ 若使用實體卡插卡或線上 T-EX/官網刷卡僅享 1% 一般消費！'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'transit_taxi') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '🚕 叫車出示 LINE Pay 條碼（台灣大車隊/yoxi/LINE GO）',
        note: 'LINE Pay 結帳享加碼'
      },
      details: [
        `計程車結帳出示 LINE Pay 條碼：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ Uber App 為綁定信用卡扣款（不支援 LINE Pay 條碼），僅享 1% 一般消費'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'travel_booking_ota') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 3.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'online',
        label: '🏨 Klook/KKday 結帳選 LINE Pay 享 3%；Agoda/Booking 外幣扣款 3%',
        note: '海外外幣消費或 LINE Pay 享加碼'
      },
      details: [
        'Klook / KKday 結帳選擇 LINE Pay：新戶 3% / 舊戶 1.5% LINE POINTS',
        'Agoda / Booking.com / Trip.com 海外外幣扣款：3.0% LINE POINTS（回饋無上限）'
      ],
      capWarning: isNew ? '新戶 LINE Pay 加碼每期上限 800 點；外幣消費無上限' : undefined
    };
  }

  if (channelId === 'travel_airlines') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 3.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'online',
        label: '✈️ 外籍航空外幣購票享 3%；國內台幣官網僅 1%',
        note: '海外航司外幣扣款享 3% LINE POINTS 無上限'
      },
      details: [
        '國外航空公司（如樂桃、酷航、日航、阿聯酋等海外外幣扣款）：3.0% LINE POINTS（無上限）',
        '國內航空公司（華航、長榮、星宇台幣官網刷卡）：僅享一般消費 1% LINE POINTS',
        '💡 購買國籍航空機票強烈建議改刷國泰 CUBE（趣旅行 3.3% 無上限）！'
      ]
    };
  }

  if (channelId === 'travel_agencies' || channelId === 'transit_car_rental') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 1.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市或官網刷卡（僅一般消費 1%）',
        note: '若門市支援 LINE Pay 享新戶 3% / 舊戶 1.5%'
      },
      details: [
        '國內旅行社 / 租車一般消費：1.0% LINE POINTS',
        '若門市支援 LINE Pay 條碼結帳可享新戶 3% / 舊戶 1.5% 加碼',
        '💡 旅行社大額團費建議改刷國泰 CUBE（趣旅行 3.3% 無上限）！'
      ],
      warning: 'DAWAY 刷旅行社僅 1%！大額團費建議改刷 CUBE 趣旅行 (3.3% 無上限)！'
    };
  }

  if (channelId === 'transit_japan_ic') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 3.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'online',
        label: '🍏 iPhone Apple 錢包加值日本交通卡',
        note: '海外外幣線上扣款享 3% LINE POINTS 無上限'
      },
      details: [
        'Apple 錢包加值 Suica / PASMO / ICOCA：3.0% LINE POINTS（無上限）',
        '日圓外幣線上扣款認列海外消費，可抵扣 1.5% 交易手續費！'
      ]
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
