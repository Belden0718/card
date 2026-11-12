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
  // 美食飲品與聚餐 (19 通路：綜合外送 -> 連鎖速食 -> 手搖咖啡 -> 日系名店 -> 人氣燒肉火鍋)
  // --- 1. 綜合餐飲與外送平台 (2) ---
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

  // --- 2. 連鎖速食 (5) ---
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
  {
    id: 'fastfood_kfc',
    name: '肯德基 KFC',
    category: 'food',
    icon: '🍗',
    description: '全台實體門市、自助點餐機、得來速、PK雙饗卡 APP / 官網線上訂餐（支援 LINE Pay / 信用卡 / 街口）',
    pitfalls: [
      '【⚠️ 致命小額地雷】肯德基實體門市櫃台與自助機全走 NCCC「小額支付平台」，千萬不要拿台新實體卡直接插卡，或拿永豐 SPORT 實體/Apple Pay 感應，會被銀行直接列為 0% 排除！',
      '【破解首選 LINE Pay 3.8%】門市或線上訂餐出示「LINE Pay 條碼掃碼」，台新切換【Pay著刷】享 3.8%！永豐 DAWAY 新戶享 3%！',
      '【⚠️ CUBE 切換樂饗購 3.3%】國泰 CUBE 有將肯德基納入餐飲加碼，門市刷卡或 PK App 線上切換【樂饗購】享 3.3% 小樹點無上限！注意：肯德基「未列入」秋日遊名單，切勿切換秋日遊，否則僅 0.3%！',
      '【PK App 三重疊加】先在 PK雙饗卡 App 輸入 5 碼優惠代碼折價，搭配線上刷 CUBE 3.3% 或 LINE Pay 3.8%，再賺 PK App 2.5% 紅利點數！'
    ]
  },
  {
    id: 'fastfood_burgerking',
    name: '漢堡王 Burger King',
    category: 'food',
    icon: '🍔',
    description: '全台實體門市、自助點餐機、官網線上預訂自取（支援 LINE Pay / 信用卡）',
    pitfalls: [
      '【⚠️ 實體刷卡小額 0% 地雷】漢堡王實體門市與自助點餐機多走 NCCC「小額支付平台」，千萬不要拿台新或永豐實體卡直接插卡或感應，直接被銀行列為 0% 排除！',
      '🔥【全場首選：台新 LINE Pay 3.8%】門市櫃台、點餐機或官網預訂出示「LINE Pay 條碼掃碼」，台新切換【Pay著刷】享最高 3.8% 台新Point！完美繞過小額限制！',
      '【永豐 DAWAY 3%】門市或官網結帳出示 LINE Pay 條碼，新戶享 3.0% / 舊戶享 1.5% LINE POINTS！',
      '⚠️【永豐 SPORT 0% 排除】永豐 SPORT 卡以 Apple Pay 感應走連鎖速食小額平台，直接被永豐列為 0% 排除，千萬別刷！',
      '⚠️【CUBE 卡門市僅 0.3% / 秋日遊無加碼】CUBE 卡未將漢堡王列入特約，門市直接刷卡僅一般消費 0.3%（秋日遊 8% 僅限日系摩斯，漢堡王沒有 8%）；若叫 Uber Eats / foodpanda 外送切【樂饗購】享 3.3%！',
      '💡【卡友優惠券疊加】臨櫃點餐可先出示台新官網「卡友專屬優惠券」（如特定品項買一送一），再掃 LINE Pay 結帳，折扣回饋雙賺！'
    ]
  },
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
  {
    id: 'fastfood_pizzahut',
    name: '必勝客 Pizza Hut',
    category: 'food',
    icon: '🍕',
    description: '全台實體門市、自助點餐機、PK雙饗卡 APP / 必勝客官網線上訂餐（支援 LINE Pay / 信用卡 / 街口）',
    pitfalls: [
      '【CUBE 秋日遊限定 5.0%】10/1~11/30 切換【秋日遊】方案，必勝客全通路刷卡享 5.0% 小樹點無上限（非活動期間切【樂饗購】享 3.3%）！',
      '【台新 3.8% 首選】出示 LINE Pay 條碼切換【Pay著刷】享 3.8%；門市實體刷卡或官網線上訂餐切【好饗刷】皆享 3.3% 無上限！',
      '【⚠️ 永豐 SPORT 門市 0% 排除】必勝客實體門市走小額支付為 0% 排除！僅限 iPhone 在 PK App 內點選 Apple Pay 線上訂餐有加碼，極易踩雷，強烈建議改刷 CUBE 秋日遊 5.0% 首選！',
      '【⚠️ 隨饗券排除】PK雙饗卡 App 購買「PK隨饗券」與「禮物卡」不適用秋日遊 5% 回饋！'
    ]
  },

  // --- 3. 手搖茶飲與咖啡輕食 (2) ---
  {
    id: 'drink_chill',
    name: '手搖飲 / 連鎖咖啡 (50嵐/得正/CAFE!N)',
    category: 'food',
    icon: '🍹',
    description: '日常續命飲品、得正、50嵐、五桐號、龜記、CAFE!N、可不可、迷客夏',
    pitfalls: [
      '【台新 Chill刷狂暴 10%】台新切換【Chill刷】，官方指定 50嵐、得正、龜記、五桐號、CAFE!N、可不可等享最高 10% 回饋！',
      '【CUBE 樂饗購 3.3%】國泰 CUBE 切換【樂饗購】，手搖飲料店享 3.3% 小樹點無上限！',
      '【⚠️ 永豐 SPORT 小額地雷】路邊手搖飲大多僅收現金或 LINE Pay；若有刷卡機亦多屬 NCCC 小額支付平台，永豐 SPORT 卡實體/Apple Pay 感應為 0% 排除，切勿使用！',
      '【DAWAY 3%】若店家支援 LINE Pay 條碼，永豐 DAWAY 綁定 LINE Pay 條碼新戶享 3% / 舊戶 1.5%！'
    ]
  },
  {
    id: 'dining_komeda',
    name: '客美多咖啡 Komeda\'s Coffee',
    category: 'food',
    icon: '☕',
    description: '全台客美多咖啡門市（支援 Apple Pay / LINE Pay / 實體信用卡）',
    pitfalls: [
      '【CUBE 秋日遊 5.0% 快閃】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，客美多咖啡享 5.0% 小樹點無上限！',
      '【CUBE 平常樂饗購 3.3%】平常非活動期間切換【樂饗購】享 3.3% 小樹點無上限！',
      '【台新雙方案 3.8%】門市出示 LINE Pay 條碼切【Pay著刷】享 3.8%；實體卡感應切【好饗刷】享 3.3%！',
      '【永豐 SPORT 7%】門市收銀機台支援 Apple Pay 感應付款，每月運動達標享最高 7%！'
    ]
  },

  // --- 4. 日系名店與日式料理 (4) ---
  {
    id: 'dining_sushiro',
    name: '台灣壽司郎 SUSHIRO',
    category: 'food',
    icon: '🍣',
    description: '全台壽司郎實體門市（支援 Apple Pay / LINE Pay / 信用卡）',
    pitfalls: [
      '【CUBE 慶生日 10% 壽星特權】生日當月切換【慶生日】方案，台灣壽司郎享狂暴 10.0% 小樹點無上限！',
      '【CUBE 平常樂饗購 3.3%】非壽星期間切換【樂饗購】享 3.3% 小樹點無上限！',
      '【⚠️ 避開秋日遊】台灣壽司郎「未列入」秋日遊 5% 加碼名單，切勿切換秋日遊，否則僅享一般回饋！',
      '【台新雙方案 3.8%】出示 LINE Pay 條碼切【Pay著刷】享 3.8%；實體卡感應切【好饗刷】享 3.3%！',
      '【永豐 SPORT 7%】門市獨立刷卡機非小額排除，使用 Apple Pay 感應每月運動達標享最高 7%！'
    ]
  },
  {
    id: 'dining_sushiexpress',
    name: '爭鮮餐飲 (爭鮮迴轉壽司/爭鮮PLUS/定食8)',
    category: 'food',
    icon: '🍣',
    description: '爭鮮迴轉壽司、爭鮮PLUS、定食8、MAGiC TOUCH（支援 Apple Pay / LINE Pay / 信用卡）',
    pitfalls: [
      '【CUBE 秋日遊限定 5.0%】10/01~11/30 期間限定：切換【秋日遊】方案，爭鮮全門市享 5.0% 小樹點無上限！單筆滿 $500 還送鮮魚味噌湯！',
      '【CUBE 平常樂饗購 3.3%】平常非活動期間切換【樂饗購】享 3.3% 小樹點無上限！',
      '【⚠️ 避開慶生日】爭鮮「未列入」慶生日 10% 名單，切勿切換慶生日（僅 0.3%）！',
      '【台新雙方案 3.8%】出示 LINE Pay 條碼切【Pay著刷】享 3.8%；實體卡感應切【好饗刷】享 3.3%！',
      '【永豐 SPORT 7%】門市支援 Apple Pay 感應，每月運動達標享最高 7% 豐點！'
    ]
  },
  {
    id: 'dining_sukiya',
    name: 'すき家 SUKIYA',
    category: 'food',
    icon: '🍚',
    description: '全台すき家牛丼門市（支援 Apple Pay / 實體信用卡；全門市現場不支援 LINE Pay）',
    pitfalls: [
      '【CUBE 秋日遊 5.0% 首選】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，すき家全通路享 5.0% 小樹點無上限！',
      '【⚠️ 致命地雷：全台不收 LINE Pay】台灣すき家實體門市「完全不支援 LINE Pay / 街口 / 電子支付」，請勿出示條碼，請直接刷實體卡或 Apple Pay！',
      '【⚠️ 部分舊門市只收現金】すき家多數門市已導入刷卡機，但少數老街邊店仍僅收現金，入座前請留意收銀台標示！',
      '【台新 好饗刷 3.3%】現場實體卡感應或 Apple Pay 結帳，切換【好饗刷】享 3.3%！',
      '【永豐 SPORT 7%】門市支援 Apple Pay 感應付款，每月運動達標享最高 7%！'
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

  // --- 5. 精品燒肉與人氣火鍋 (6) ---
  {
    id: 'dining_uma',
    name: '屋馬燒肉',
    category: 'food',
    icon: '🥩',
    description: '屋馬燒肉全門市（支援 Apple Pay / LINE Pay / 實體信用卡）',
    pitfalls: [
      '【台新 Chill刷 10% 首選】屋馬為台新 Chill刷官方名店，切換【Chill刷】享 10.0% 台新Point無上限！',
      '【CUBE 慶生月壽星 10%】屋馬為 CUBE 慶生月口碑名店，當月壽星切【慶生日】享狂暴 10.0% 小樹點無上限（非壽星切【樂饗購】享 3.3%）！',
      '【永豐 SPORT 7%】門市支援 Apple Pay 感應，每月運動達標享最高 7%！',
      '【支援 LINE Pay 3%】屋馬支援 LINE Pay 條碼結帳，永豐 DAWAY 新戶享 3% / 舊戶 1.5%！',
      '【⚠️ 百貨商場店排除】設於商場內之門市若走商場收單，不適用台新 Chill刷 10% 加碼，獨立街邊店最穩！'
    ]
  },
  {
    id: 'dining_tanzuomali',
    name: '碳佐麻里精品燒肉',
    category: 'food',
    icon: '🥩',
    description: '碳佐麻里精品燒肉全門市（支援 Apple Pay / LINE Pay / 實體信用卡）',
    pitfalls: [
      '【台新 Chill刷 10% 首選】碳佐麻里為官方指定名店，切換【Chill刷】享 10.0% 台新Point無上限！',
      '【🔥 台新卡友專屬肉品買一送一】點餐前主動出示台新卡，享人氣指定肉品買一送一！',
      '【⚠️ 避開 CUBE 慶生日】碳佐麻里「未列入」CUBE 慶生月名單，切慶生日僅 0.3%，請一律切【樂饗購】享 3.3%！',
      '【永豐 SPORT 7%】門市支援 Apple Pay 感應，每月運動達標享最高 7%！',
      '【支援 LINE Pay 3%】門市支援 LINE Pay 條碼結帳，永豐 DAWAY 新戶享 3%！'
    ]
  },
  {
    id: 'dining_zhanji',
    name: '詹記麻辣火鍋',
    category: 'food',
    icon: '🍲',
    description: '全台詹記麻辣火鍋門市（敦南店、西門大世界等，支援 Apple Pay / 實體信用卡；現場不收 LINE Pay）',
    pitfalls: [
      '【台新 Chill刷 10% 首選】詹記為官方指定名店，切換【Chill刷】享 10.0% 台新Point無上限！',
      '【⚠️ 致命地雷：不收 LINE Pay】詹記全門市現場「不支援 LINE Pay」，請務必直接刷實體卡或使用 Apple Pay 感應！',
      '【CUBE 慶生月壽星 10%】詹記為 CUBE 慶生月口碑名店，當月壽星切【慶生日】享狂暴 10.0% 小樹點無上限（非壽星切【樂饗購】享 3.3%）！',
      '【永豐 SPORT 7%】門市支援 Apple Pay 感應，每月運動達標享最高 7%！',
      '【⚠️ DAWAY 僅 1%】詹記現場不收 LINE Pay，永豐 DAWAY 實體刷僅 1% 一般消費！'
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
    id: 'dining_hotpot',
    name: '連鎖火鍋燒肉 (海底撈/茶六/乾杯/馬辣)',
    category: 'food',
    icon: '🍲',
    description: '熱門聚餐燒肉火鍋（海底撈、茶六燒肉堂、乾杯、胡同、馬辣、新馬辣、青花驕、和牛涮、肉多多、萬客什鍋、雞湯大叔）',
    pitfalls: [
      '【台新 Chill刷 10%】官方指定海底撈、茶六、萬客什鍋、雞湯大叔等切換【Chill刷】享 10.0% 台新Point！',
      '【CUBE 慶生月 10%】茶六、老井、老四川、鼎王壽星切【慶生日】享 10.0% 小樹點無上限！',
      '【CUBE 平常樂饗購 3.3%】全台餐飲實體刷卡切【樂饗購】享 3.3% 小樹點無上限！',
      '【永豐 SPORT 7%】門市收銀支援 Apple Pay 感應，每月運動達標享最高 7%！'
    ]
  },
  {
    id: 'dining_chientu',
    name: '錢都日式涮涮鍋',
    category: 'food',
    icon: '🍲',
    description: '全台錢都日式涮涮鍋（直營與加盟並存；極多街邊門市只收現金！）',
    pitfalls: [
      '【CUBE 秋日遊 5.0%】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，錢都享 5.0% 小樹點無上限（限支援刷卡之分店）！',
      '【⚠️ 致命地雷：極多街邊店只收現金】錢都加盟店眾多，許多傳統街邊分店「完全不收信用卡與行動支付」，盲刷會直接碰壁 0 回饋！',
      '【🔥 卡友破解神招：線上買即享券】若造訪門市只收現金，可用手機上 LINE 禮物或 Klook 線上刷 CUBE / 台新買「錢都即享券」，線上拿回饋再拿條碼給店員折抵！',
      '【台新 好饗刷 3.3%】在可刷卡之直營或商場門市，切換【好饗刷】實體刷卡享 3.3%！',
      '【永豐 SPORT 7%】在支援 Apple Pay 感應之門市，每月運動達標享最高 7%！'
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
    id: 'streaming_video',
    name: '影視追劇 (Netflix / Disney+)',
    category: 'online',
    icon: '🎬',
    description: 'Netflix、Disney+ 等線上影視串流（台新 Chill刷 10% 狂暴首選）',
    pitfalls: [
      '🔥【台新 Chill刷 10.0% 狂暴首選】台新卡切換【Chill刷】（官方指定追劇），Netflix 與 Disney+ 享 10.0% 台新Point！每期上限 1,000 點（月刷 $11,111 封頂）！',
      '【國泰 CUBE 3.3% 大額無上限】國泰 CUBE 切換【玩數位】享 3.3% 小樹點無上限！年繳大額訂閱無上限首選！',
      '【⚠️ 海外手續費 1.5% 說明】主機設於海外，帳單會收取 1.5% 國外交易服務費；台新 10% 扣除後仍淨賺 +8.5%，CUBE 3.3% 扣除後淨賺 +1.8%！',
      '⚠️【永豐 SPORT 7% 完全無效】線上定期定額扣繳無法使用 Apple Pay / Google Pay 感應結帳，SPORT 卡僅一般消費 1%~2%，千萬別刷！',
      '⚠️【永豐 DAWAY 僅 1%】線上扣繳無 LINE Pay 條碼可掃，永豐 DAWAY 僅一般消費 1%！',
      '💡【Max(HBO) 訂閱密技】若要訂閱 Max，強烈建議透過 iPhone (App Store) 或 Android (Google Play) 應用程式內購，切換 CUBE【玩數位】或台新【數趣刷】享 3.3%！若在 Max 官網直刷僅一般消費 0.3%！'
    ]
  },
  {
    id: 'streaming_music',
    name: '音樂與影音串流 (YouTube Premium / Spotify / KKBOX)',
    category: 'online',
    icon: '🎵',
    description: 'YouTube Premium、Spotify、KKBOX 等線上音樂與影音串流訂閱',
    pitfalls: [
      '👑【國泰 CUBE 3.3% 玩數位首選】國泰 CUBE 切換【玩數位】享 3.3% 小樹點無上限！大額與年繳訂閱無上限首選！',
      '⚠️【台新切換【數趣刷】3.3%（Chill刷僅 0.3% 慘死）】YouTube 與 Spotify「未列入」台新 Chill刷 10%！若切 Chill刷僅 0.3%~0.5%！台新卡請務必切換【數趣刷】享 3.3% 台新Point！',
      '【海外手續費 1.5%】Spotify 等海外平台會收取 1.5% 國外交易服務費，刷 3.3% 信用卡扣除後仍淨賺 +1.8%！',
      '⚠️【永豐 SPORT 7% 完全無效】線上定期扣繳無法使用 Apple Pay 感應，SPORT 僅 1%~2%！',
      '⚠️【永豐 DAWAY 僅 1%】線上直接扣繳無 LINE Pay 條碼，僅 1% LINE POINTS！'
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
  // 百貨家居與藥妝 (15 通路：百貨購物 -> 藥妝美妝 -> 流行服飾 -> 居家雜貨 -> 休閒育樂)
  // --- 1. 大型綜合百貨與商場購物中心 (4) ---
  {
    id: 'department_store',
    name: '全台指定綜合百貨 (新光三越/遠百/微風/台北101/漢神/京站)',
    category: 'department',
    icon: '🏬',
    description: '新光三越、遠東百貨、微風廣場、台北101、漢神百貨、京站、統一時代、美麗華等（⚠️ 遠東SOGO請見專屬 3.5% 通路）',
    pitfalls: [
      '【CUBE 週年慶/精品 3.3%】國泰 CUBE 切換【樂饗購】享 3.3% 小樹點無上限！大額消費不封頂！',
      '⚠️【遠東SOGO 專屬 3.5%】10/01~11/30 期間限定：遠東SOGO（含台北大巨蛋 Garden City）在 CUBE 卡為【秋日遊 3.5%】！請選「遠東SOGO百貨」專屬通路，比樂饗購 3.3% 還多 0.2%！',
      '【台新雙方案差異】京站、統一時代、美麗華櫃位支援 LINE Pay，出示 LINE Pay 切【Pay著刷】享 3.8%；新光三越、微風專櫃不收 LINE Pay，切【大筆刷】實體刷卡享 3.3%！',
      '⚠️【台北101 / A11 Apple 直營店 0.3% 慘死】館內 Apple Store 直營門市開立的是台灣蘋果獨立發票，直接排除百貨加碼，刷 CUBE 僅一般消費 0.3%！',
      '⚠️【店中店排除條款】館內之 UNIQLO、GU、ZARA、H&M、超市、影城非百貨自營發票，CUBE 卡明文排除 3.3% 加碼僅算 0.3%！',
      '【SPORT 7.0% 限額】若專櫃支援 Apple Pay 感應付款，SPORT 卡享最高 7.0% 豐點（每月限額 $6,000）！'
    ]
  },
  {
    id: 'mall_sogo_dome',
    name: '遠東SOGO百貨 / Garden City 大巨蛋 (SOGO各館)',
    category: 'department',
    icon: '🏬',
    description: '遠東SOGO各館 (忠孝/復興/敦化/天母/中壢/新竹/高雄) 與 Garden City 台北大巨蛋商場',
    pitfalls: [
      '【CUBE 秋日遊 3.5%】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，遠東 SOGO（含 Garden City 大巨蛋商場）享 3.5% 小樹點無上限！',
      '⚠️【大巨蛋球賽/演唱會搶票 0.3% 慘死】大巨蛋中職賽事、周杰倫/張惠妹等演唱會門票由「拓元售票/ibon」開立發票，完全不屬 SOGO 或商場，刷 CUBE 僅一般消費 0.3%！',
      '【大巨蛋潮美食公園餐飲】大巨蛋 14 家餐廳在台新卡認定為餐飲，切【好饗刷】享 3.3%；部分支援 LINE Pay 餐廳出示 LINE Pay 切【Pay著刷】享 3.8%！',
      '【CUBE 平常樂饗購 3%~3.3%】平常日切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3)；7月壽星切【慶生日】享 3.5%！',
      '⚠️【影城與快時尚排除】大巨蛋秀泰影城、SOGO 館內 UNIQLO/GU/ZARA/H&M 依 CUBE 條款排除加碼，僅 0.3%！',
      '【永豐 SPORT 7%】專櫃或餐廳支援 Apple Pay 感應付款享最高 7%（月刷 $6,000 封頂）！'
    ]
  },
  {
    id: 'mall_mitsui_lalaport',
    name: '三井 MITSUI OUTLET / Mitsui LaLaport',
    category: 'department',
    icon: '🛍️',
    description: 'MITSUI OUTLET PARK (林口/台中港/台南)、Mitsui Shopping Park LaLaport (南港/台中)',
    pitfalls: [
      '【CUBE 秋日遊 3.0%】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，三井 OUTLET 與 LaLaport 專櫃享 3.0% 小樹點無上限！',
      '⚠️【南港 LaLaport 店 台隆手創館 8% 特權】南港 LaLaport 館內之「HANDS 台隆手創館」在 CUBE 秋日遊獨享狂暴 8.0% 小樹點（比商場 3% 多整整 5%）！',
      '⚠️【台中 LaLaport 店 LOPIA 超市 0.3% 慘死地雷】館內 LOPIA 日系超市為獨立機台，切秋日遊只有 0.3%！必須切換【集精選】方案享 2.0%！',
      '⚠️【OUTLET 影城與快時尚排除】林口威秀影城、館內 UNIQLO/GU 等快時尚非商場自營，依 CUBE 條款排除加碼，僅 0.3%！',
      '🔥【永豐 SPORT 7.0% 首選】專櫃臨櫃使用 Apple Pay / Google Pay 感應結帳，運動達標享最高 7.0% 豐點（月刷 $6,000 封頂）全場最高！',
      '【台新 3.3%】台新切換【大筆刷】專櫃實體刷卡享 3.3% 台新Point無上限！',
      '💡【停車特權】中信 LaLaport / 三井 Outlet 聯名卡天天享免費停車最高 2 小時；刷 CUBE / 台新需依商場一般消費滿額門檻折抵。'
    ]
  },
  {
    id: 'mall_mingyao',
    name: '明曜百貨 (台北東區忠孝敦化)',
    category: 'department',
    icon: '🏬',
    description: '台北忠孝敦化捷運站旁明曜百貨（秋日遊 5.0% 小樹點無上限）',
    pitfalls: [
      '🔥【CUBE 秋日遊 5.0% 狂暴加碼】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，明曜百貨實體消費享 5.0% 小樹點（無上限）！',
      '⚠️【館內 UNIQLO / GU 獨立發票地雷】館內 B1~2F 的 UNIQLO 全球旗艦店與 GU 門市為獨立收銀機台，回饋為 UNIQLO 的 3.0%（平日僅 0.3%），非明曜百貨的 5.0%！',
      '【台新雙方案】實體刷卡切【大筆刷】享 3.3% 無上限；支援 LINE Pay 專櫃出示 LINE Pay 切【Pay著刷】享 3.8%！',
      '【永豐 SPORT 7.0%】實體櫃位使用 Apple Pay / Google Pay 感應結帳，運動達標享 7.0% 豐點（月刷 $6,000 封頂）！'
    ]
  },

  // --- 2. 連鎖藥妝與日系美妝 (2) ---
  {
    id: 'drugstore_cosmetics',
    name: '生活藥妝 (康是美/屈臣氏/寶雅/松本清)',
    category: 'department',
    icon: '💄',
    description: '康是美、屈臣氏、寶雅 POYA、松本清、Tomod\'s 等連鎖生活藥妝（⚠️ 日藥本舖請見專屬 3.5% 通路）',
    pitfalls: [
      '👑【永豐 SPORT 7% 首選】門市使用 Apple Pay / Google Pay 感應付款，達標享最高 7% 回饋（月刷 $6,000 封頂）全場最高！',
      '⚠️【國泰 CUBE 必須切【樂饗購】3.3%】大額醫美節採購切【樂饗購】享 3.3% 無上限！⚠️ 切勿切秋日遊（康是美/屈臣氏/寶雅切秋日遊只有 0.3% 慘死）！',
      '⚠️【日藥本舖 專屬 3.5%】10/01~11/30 日藥本舖切【秋日遊】享 3.5%（比樂饗購多0.2%），請改選「日藥本舖」專屬通路！',
      '【台新雙方案】門市出示 LINE Pay 切【Pay著刷】享 3.8%（每期上限 500 點）；實體刷卡切【天天刷】享 3.3% 無上限！',
      '⚠️【賣場/百貨店中櫃排除地雷】設於家樂福、愛買或百貨內之專櫃若由賣場開立發票，直接排除 3.3% 僅一般消費 0.3%！',
      '【永豐 DAWAY 3%】出示 LINE Pay 條碼結帳，新戶享 3% / 舊戶享 1.5% LINE POINTS。'
    ]
  },
  {
    id: 'drugstore_jp_med',
    name: '日藥本舖 (指定街邊門市) / 日系藥妝',
    category: 'department',
    icon: '💊',
    description: '日藥本舖全台獨立街邊實體門市（⚠️ 百貨商場/車站店中櫃排除，僅 0.3%）',
    pitfalls: [
      '🔥【何謂「指定門市」？】官方條款限「獨立街邊實體門市」！結帳機台開立「日藥本舖股份有限公司」獨立發票方符合資格！',
      '⚠️【商場店中店 0.3% 慘死地雷】設於百貨公司、家樂福商場、車站地下街（如微風北車）之日藥本舖專櫃，若非日藥自營機台，直接排除秋日遊加碼，僅 0.3%！',
      '⚠️【線上商城與外送排除】日藥本舖官方線上商城、蝦皮旗艦館、UberEats/foodpanda 外送通通排除 3.5%！',
      '【CUBE 秋日遊 3.5%】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，街邊獨立門市享 3.5% 小樹點無上限；平日切【樂饗購】享 3.0%~3.3%！',
      '【永豐 SPORT 7% 不挑店】實體門市臨櫃使用 Apple Pay 感應付款，達標享 7.0% 豐點（月刷 $6,000 封頂）全場最高！',
      '【台新雙方案】切【天天刷】實體感應享 3.3%；出示 LINE Pay 切【Pay著刷】享 3.8%！'
    ]
  },

  // --- 3. 流行服飾與快時尚 (5) ---
  {
    id: 'fashion_uniqlo_gu',
    name: 'UNIQLO / GU (優衣庫與極優)',
    category: 'department',
    icon: '👕',
    description: 'UNIQLO（網路商店/實體門市）、GU（台灣網路商店/實體門市）',
    pitfalls: [
      '【CUBE 秋日遊 3.0% 快閃】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，UNIQLO（網路商店/直營店）與 GU 台灣網路商店享 3.0% 小樹點無上限！',
      '【百貨店中櫃排除地雷】若在百貨館內專櫃門市消費，CUBE 卡條款明文排除快時尚品牌店中櫃（僅 0.3%），建議直營門市或切換秋日遊！',
      '【台新雙方案通吃】門市出示 LINE Pay 條碼切【Pay著刷】享 3.8%（每期上限 500 點）；實體刷卡切【大筆刷】享 3.3% 無上限！',
      '【永豐 SPORT 7.0% 首選】實體門市結帳使用 Apple Pay / Google Pay 感應付款，達標享最高 7.0% 豐點（月刷 $6,000 封頂）！'
    ]
  },
  {
    id: 'fashion_zara',
    name: 'ZARA (西班牙流行快時尚)',
    category: 'department',
    icon: '🧥',
    description: '全台 ZARA 實體門市、ZARA 官方網站線上購物',
    pitfalls: [
      '⚠️【CUBE 卡 0.3% 慘死】ZARA 未列入 CUBE 任何加碼方案！百貨條款明文排除 ZARA，就算開在百貨也只有 0.3%，千萬別刷！',
      '【台新大筆刷 3.3% 首選】台新大筆刷正面表列特約快時尚包含 ZARA，門市實體刷卡享 3.3% 台新Point無上限！',
      '⚠️【門市不支援 LINE Pay】ZARA 全台門市與官網皆「不收 LINE Pay」，無法使用台新 Pay著刷或永豐 DAWAY 3%！',
      '🔥【永豐 SPORT 7.0% 最高】門市臨櫃使用 Apple Pay 感應結帳，運動達標享最高 7.0% 豐點（月刷 $6,000 封頂）！'
    ]
  },
  {
    id: 'fashion_hm',
    name: 'H&M (瑞典流行快時尚)',
    category: 'department',
    icon: '👗',
    description: '全台 H&M 實體門市、H&M 線上購物',
    pitfalls: [
      '🔥【全場唯一神卡：永豐 SPORT 7.0%】H&M 同時被國泰 CUBE (0.3%) 與台新大筆刷 (0.3%~1%) 雙重排除！永豐 SPORT 卡以 Apple Pay 感應結帳是全台唯一能拿 7.0% 的神卡！',
      '⚠️【台新大筆刷排除 H&M】台新大筆刷指定快時尚名單僅有 UNIQLO/GU/ZARA/NET，並未包含 H&M，刷台新僅 0.3%~1.0% 一般消費！',
      '⚠️【CUBE 卡 0.3% 慘死】未列入任何 CUBE 方案，百貨店中櫃同樣被排除，刷 CUBE 只有 0.3%！',
      '⚠️【門市不支援 LINE Pay】H&M 門市現場不支援 LINE Pay 條碼付款！'
    ]
  },
  {
    id: 'fashion_net',
    name: 'NET (國民平價服飾)',
    category: 'department',
    icon: '👖',
    description: '全台 NET 實體門市、NET 線上商店',
    pitfalls: [
      '⚠️【CUBE 卡 0.3% 慘死】NET 未列入 CUBE 任何加碼方案，百貨店中櫃亦被排除，刷 CUBE 僅一般消費 0.3%！',
      '【台新雙重通吃 3.8% / 3.3%】NET 全門市支援 LINE Pay，出示 LINE Pay 切【Pay著刷】享 3.8%（月上限 500 點）；或直接實體刷卡切【大筆刷】享 3.3% 無上限！',
      '【永豐 SPORT 7.0%】實體門市使用 Apple Pay 感應付款，運動達標享 7.0% 豐點（月刷 $6,000 封頂）！',
      '【永豐 DAWAY 3.0%】門市出示 LINE Pay 條碼結帳，新戶享 3.0% / 舊戶享 1.5% LINE POINTS。'
    ]
  },
  {
    id: 'store_united_arrows',
    name: 'UNITED ARROWS (日系服飾時尚選品)',
    category: 'department',
    icon: '👔',
    description: 'UNITED ARROWS 台灣官方購物網站、微風南山/SOGO等實體專櫃',
    pitfalls: [
      '🔥【CUBE 秋日遊 5.0% 僅限官網】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】享 5.0% 小樹點（無上限），「僅限官方購物網站線上刷卡」！',
      '⚠️【百貨實體專櫃 0.3% 慘死地雷】若去微風、SOGO、新光三越實體專櫃買，發票由百貨開立，切【秋日遊】只有 0.3%！實體專櫃請切換【樂饗購】享 3.3%！',
      '【台新卡實體 3.3% vs 線上 0.3%】實體百貨專櫃刷實體切【大筆刷】享 3.3%；官網線上買未列入特約僅 0.3%~1.0%！',
      '【永豐 SPORT 7.0%】實體百貨專櫃臨櫃 Apple Pay 感應結帳享 7.0% 豐點；官網線上買無感應加碼僅 1%~2%。'
    ]
  },

  // --- 4. 居家生活與生活雜貨 (3) ---
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
    id: 'store_hands_nankang',
    name: 'HANDS 台隆手創館 (南港 LaLaport 旗艦店)',
    category: 'department',
    icon: '🛍️',
    description: '南港 LaLaport 旗艦店（全台唯一享有 CUBE 秋日遊 8.0% 小樹點無上限）',
    pitfalls: [
      '🔥【CUBE 秋日遊 8.0% 狂暴加碼】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】方案，南港 LaLaport 旗艦店獨享全台最高 8.0% 小樹點（無上限）！',
      '⚠️【全台唯一指定門市】注意！全台灣十幾家台隆手創館中「只有南港 LaLaport 這家店」有 8.0%，其他所有門市通通沒有 8%！',
      '【永豐 SPORT 7.0%】門市櫃台使用 Apple Pay / Google Pay 感應付款，達標享最高 7.0% 豐點（月刷 $6,000 封頂）！',
      '【台新 3.3%】門市實體刷卡切換【大筆刷】享 3.3% 台新Point無上限！'
    ]
  },
  {
    id: 'store_hands_general',
    name: 'HANDS 台隆手創館 (全台其他百貨門市)',
    category: 'department',
    icon: '🛍️',
    description: '微風本館、遠東SOGO復興、京站、板橋大遠百、台中大遠百、台中LaLaport等門市',
    pitfalls: [
      '⚠️【秋日遊 0.3% 慘死地雷】非南港門市切換【秋日遊】只有 0.3% 一般消費！千萬不要切秋日遊！',
      '🔥【首選冠軍改刷：永豐 SPORT 7.0%】其他門市臨櫃使用 Apple Pay 感應付款，達標享 7.0% 豐點（月刷 $6,000 封頂）全場最高！',
      '【CUBE 僅 3.0%~3.3%】若使用 CUBE 卡，請切換【樂饗購】方案（依附各大百貨專櫃發票享 3.0%~3.3%），切勿切秋日遊！',
      '【台新 3.3% / 3.8%】實體刷卡切【大筆刷】享 3.3%；若在京站等支援 LINE Pay 門市出示 LINE Pay 切【Pay著刷】享 3.8%！'
    ]
  },

  // --- 5. 休閒育樂與特色景點 (1) ---
  {
    id: 'spot_xpark',
    name: 'Xpark 都會型水生公園 (桃園青埔)',
    category: 'department',
    icon: '🐧',
    description: '桃園置地廣場 Xpark 水族館（現場票務櫃台與線上購票管道）',
    pitfalls: [
      '🔥【CUBE 秋日遊 5.0% 限現場購票】10/01~11/30 期間限定：國泰 CUBE 切換【秋日遊】，於 Xpark「現場售票處/自動售票機」實體刷卡享 5.0% 小樹點無上限！',
      '⚠️【線上購票 KKday / Klook 0.3% 慘死陷阱】若在 KKday 或 Klook 線上預購門票，切【秋日遊】只有 0.3%！線上買票請切換至【趣旅行】方案享 3.3%！',
      '⚠️【台新現場刷卡僅 0.3%~1.0%】Xpark 現場購票未列入台新任何方案加碼名單，實體刷台新僅一般消費 0.3%~1.0%！',
      '🔥【永豐 SPORT 7.0% 現場最神】現場售票機台使用 Apple Pay 感應結帳，運動達標享最高 7.0% 豐點首選！'
    ]
  },
  // 旅遊與交通出行 (趣旅行核心通路)
  {
    id: 'transit_thsr',
    name: '台灣高鐵 (THSR)',
    category: 'travel',
    icon: '🚄',
    description: '台灣高鐵（官網線上購票 / T-EX 行動購票 App / 各站自動售票機與售票窗口）',
    pitfalls: [
      '👑【CUBE 趣旅行 3.3% 無上限】國泰 CUBE 切換【趣旅行】方案，高鐵官網、T-EX App、車站售票機/臨櫃享 3.3% 小樹點無上限！大額購票首選！',
      '【台新 天天刷 3.3%】台新卡切換【天天刷】，高鐵購票（線上/實體）享 3.3% 台新Point無上限！',
      '🔥【永豐 SPORT 7.0% 車站感應首選】在車站自動售票機或售票窗口，使用 Apple Pay / Google Pay 感應結帳，達標享最高 7.0% 豐點（月刷 $6,000 封頂）！⚠️ 注意：線上 T-EX App 購票無法感應，僅 1%~2%！',
      '【永豐 DAWAY 3%】高鐵售票窗口出示 LINE Pay 條碼結帳，新戶享 3% / 舊戶 1.5% LINE POINTS。'
    ]
  },
  {
    id: 'transit_tra',
    name: '台灣鐵路 (台鐵火車 / TRA)',
    category: 'travel',
    icon: '🚆',
    description: '台鐵火車（台鐵官網線上訂票 / 台鐵 e-Booking App / 各站售票機與售票窗口）',
    pitfalls: [
      '⚠️【國泰 CUBE 0.3% 慘死大雷】國泰 CUBE【趣旅行】加碼「嚴格限定台灣高鐵」，台鐵「完全沒有列入加碼」！買台鐵票刷 CUBE 僅一般消費 0.3%，千萬別刷！',
      '👑【全場首選：台新 天天刷 3.3%】台新卡切換【天天刷】正面表列台灣鐵路，線上訂票或窗口實體刷卡通通享 3.3% 台新Point無上限！返鄉通勤第一神卡！',
      '🔥【永豐 SPORT 7.0% 車站感應最高】在車站售票機或售票窗口使用 Apple Pay / Google Pay 感應購票，達標享最高 7.0% 豐點（月刷 $6,000 封頂）！⚠️ 線上訂票無感應加碼僅 1%~2%！',
      '【永豐 DAWAY 3%】台鐵售票窗口若出示 LINE Pay 條碼結帳，新戶享 3% / 舊戶 1.5% LINE POINTS。'
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
    name: '國際訂房平台 (Agoda/Booking/Trip.com/Airbnb)',
    category: 'travel',
    icon: '🏨',
    description: 'Agoda、Booking.com、Trip.com、Airbnb、Hotels.com、Expedia 國外飯店線上預訂',
    pitfalls: [
      '👑【CUBE 3.3% 大額無上限首選】國泰 CUBE 切換【趣旅行】，線上預訂享 3.3% 小樹點無上限！透過國泰專屬 Agoda 連結常有額外 7%~10% 現折！',
      '⚠️【訂房三大致命地雷】1. ❌ 切勿選擇「到店付款」（現場飯店櫃台刷卡開立當地發票，加碼直接失效跌入 0.3%！務必選擇「線上全額預付」）；2. ❌ 避開 DCC 台幣陷阱（請選擇「外幣計價如日圓/美金」，選台幣會被加收手續費且匯率極差）；3. ❌ 切勿分期（分期取消 3.3% 降為 0.3%）！',
      '【台新 3.3% 直刷】台新卡切換【玩旅刷】，線上輸入卡號結帳享 3.3% 台新Point無上限！',
      '【DAWAY 3%】選擇外幣線上扣款，永豐 DAWAY 享海外消費 3.0% LINE POINTS 無上限！',
      '【避開永豐 SPORT】線上刷卡無法觸發感應 7%，僅一般消費 1%~2%。'
    ]
  },
  {
    id: 'travel_klook_kkday',
    name: '旅遊票券與體驗 (Klook 客路 / KKday)',
    category: 'travel',
    icon: '🎫',
    description: 'Klook、KKday 國內外景點門票、一日遊體驗、交通票券、行程預訂（支援 LINE Pay）',
    pitfalls: [
      '🔥【全場首選：台新 LINE Pay 3.8%】結帳付款方式選擇「LINE Pay」，台新切換【Pay著刷】享最高 3.8% 台新Point！比直接刷卡 3.3% 多賺 0.5%！',
      '【CUBE 3.3% 無上限】國泰 CUBE 切換【趣旅行】享 3.3% 小樹點無上限！特定快閃活動（如秋日遊日本行程）享 5.0%！',
      '【免 1.5% 海外手續費】Klook 與 KKday 為台灣在地營運主體，台幣結帳開立中華民國統一發票，免收 1.5% 境外交易手續費！',
      '【永豐 DAWAY 3%】結帳選擇 LINE Pay 付款，新戶享 3.0% / 舊戶 1.5% LINE POINTS。',
      '【永豐 SPORT 僅 1%~2%】App 線上結帳無法使用實體感應，無 7% 加碼。'
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
    id: 'transit_taxi_meter',
    name: '車內感應計程車 (台灣大車隊 55688 / yoxi)',
    category: 'travel',
    icon: '🚖',
    description: '台灣大車隊 55688、yoxi (和泰) 車內實體刷卡機感應、LINE Pay 條碼支付或車載設備付款',
    pitfalls: [
      '🔥【永豐 SPORT 7.0% 車內感應首選】台灣大車隊、yoxi 車內刷卡機支援 Apple Pay / Google Pay / Samsung Pay 感應，運動達標享 7.0% 豐點（月刷 $6,000 封頂）全場最高！',
      '【台新 3.8% LINE Pay 掃碼】車載螢幕若出示 LINE Pay 條碼付款，台新切換【Pay著刷】享 3.8% 台新Point！實體過卡切【天天刷】享 3.3%！',
      '【CUBE 3.3% 無上限】國泰 CUBE 切換【趣旅行】，台灣大車隊與 yoxi 享 3.3% 小樹點無上限！',
      '【永豐 DAWAY 3%】出示 LINE Pay 條碼結帳，新戶享 3% / 舊戶 1.5% LINE POINTS。'
    ]
  },
  {
    id: 'transit_taxi_app',
    name: 'App 網約叫車平台 (Uber / LINE GO / Grab 境外叫車)',
    category: 'travel',
    icon: '📱',
    description: 'Uber 網約車、LINE GO 線上叫車、Grab 東南亞境外叫車等 App 綁卡自動扣款',
    pitfalls: [
      '👑【國泰 CUBE 3.3% 首選 (無上限)】國泰 CUBE 切換【趣旅行】，Uber、Grab 綁卡扣款享 3.3% 小樹點無上限！⚠️ 注意：LINE GO 非特約僅 0.3%！',
      '【台新 3.8% LINE GO 神器】LINE GO 結帳選擇 LINE Pay 扣款，台新切換【Pay著刷】享 3.8%！Uber/Grab App 綁卡切【天天刷】享 3.3%！',
      '⚠️【永豐 SPORT 僅 1%~2% 避坑】Uber、LINE GO、Grab 均為 App 內線上扣款，無法使用實體感應，SPORT 卡無 +5% 加碼，僅享一般消費 1%~2%，切勿使用！',
      '【DAWAY 3% 海外叫車】Grab 為東南亞外幣交易享海外 3.0% LINE POINTS；LINE GO 綁 LINE Pay 享 3%（新戶）；Uber 綁卡僅 1%。'
    ]
  },
  {
    id: 'transit_car_rental',
    name: '租車與共享汽車 (和運租車 / 格上租車 / iRent)',
    category: 'travel',
    icon: '🚗',
    description: '和運租車、格上租車、iRent 共享汽車等自駕出行與短期租車服務',
    pitfalls: [
      '【CUBE 3.3% 首選】國泰 CUBE 切換【趣旅行】，指定租車（和運、格上、iRent）享 3.3% 小樹點無上限！',
      '【台新 3.3%】台新切換【天天刷】（交通出行租車）享 3.3% 台新Point！',
      '【永豐 SPORT 7% 限門市櫃檯】和運/格上實體門市臨櫃使用 Apple Pay / Google Pay 感應享 7%（$6,000 封頂）；iRent App 內扣款無感應加碼僅 1%~2%。',
      '【DAWAY】一般消費 1%（若門市支援 LINE Pay 享新戶 3%）。'
    ]
  },
  {
    id: 'transit_scooter_sharing',
    name: '共享機車 (GoShare / WeMo Scooter)',
    category: 'travel',
    icon: '🛵',
    description: 'GoShare、WeMo Scooter 共享電動機車租借與即時騎乘服務',
    pitfalls: [
      '👑【台新 3.8% LINE Pay 首選】GoShare / WeMo App 內選擇 LINE Pay 付款，台新切換【Pay著刷】享 3.8%！',
      '【永豐 DAWAY 3%】App 內綁定 LINE Pay 扣款，新戶享 3.0% LINE POINTS（舊戶 1.5%）無上限！',
      '💥【國泰 CUBE 避坑 0.3%】GoShare 與 WeMo 非國泰 CUBE【趣旅行】特約通路！刷 CUBE 僅一般消費 0.3%，強烈建議改刷台新或 DAWAY！',
      '⚠️【永豐 SPORT 僅 1%~2%】App 內自動扣款為線上交易，無實體感應 +5% 加碼，僅享一般消費 1%~2%，切勿使用！'
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
      '💥【避開永豐 SPORT 0%~1%】Apple 錢包線上儲值非實體感應，無法觸發 +5% 加碼，且電子票證多被列為 0% 排除，請勿刷 SPORT 卡！',
      '⚠️【防擋刷秘訣】台灣多數 VISA 卡在 Apple 錢包加值高機率被日方 3D 驗證擋刷，強烈建議綁定 Mastercard 或 JCB 卡別！'
    ]
  },
  {
    id: 'travel_overseas',
    name: '日韓與非歐盟海外實體 (日本/韓國/美加/東南亞/樂園現場)',
    category: 'travel',
    icon: '✈️',
    description: '日本、韓國、美國、東南亞等實體店面外幣消費、東京迪士尼/USJ園內現場刷卡（需扣 1.5% 國際手續費；歐洲實體請選歐洲專用通道）',
    pitfalls: [
      '【CUBE 趣旅行 / 日本賞 3%~3.5% 無上限】國泰 CUBE 切換【趣旅行】海外實體享 3.0%~3.3% 無上限；若去日本切換【日本賞】精選實體與名店高達 3.5%~8%！',
      '【永豐 SPORT 7% 限額 $6,000】國外實體店若支援 Apple Pay / Google Pay 感應，達標享最高 7% 豐點（月刷 $6,000 封頂），超過後換 CUBE！',
      '【台新 玩旅刷 3.3%】台新切換【玩旅刷】，日韓美加海外實體消費享 3.3% 台新Point！',
      '【永豐 DAWAY 3%】海外外幣實體消費最高享 3% LINE POINTS 無上限！',
      '【⚠️ 避開 DCC 雙幣陷阱】在國外刷卡若店員詢問「要刷台幣還是當地貨幣」，務必堅定回答「當地貨幣（日圓/韓元/美金等）」，避免被收取高達 4%~5% DCC 匯差！'
    ]
  },
  {
    id: 'travel_europe',
    name: '歐洲實體消費 (英法德義等歐盟門市 / 避開0%排除)',
    category: 'travel',
    icon: '🏰',
    description: '英國、法國、義大利、德國、西班牙、瑞士等歐洲實體店面、精品專櫃與飯店現場刷卡付款',
    pitfalls: [
      '👑【國泰 CUBE 3.3% 歐洲唯一神卡】國泰 CUBE 切換【趣旅行】，全球海外實體（含歐盟實體）享 3.3% 小樹點無上限！歐洲血拚買精品唯一首選！',
      '💥【台新 0% 歐盟排除大地雷】台新信用卡官方條款明文排除歐盟地區實體商店交易，刷台新直接 0% 回饋！',
      '💥【永豐 SPORT / DAWAY 0% 歐盟排除】永豐全行卡別在歐盟地區實體商店消費均不給予任何回饋（0% 排除），切勿在歐洲實體店刷永豐卡！',
      '⚠️【歐盟實體小常識】因歐盟交換費上限法規，台灣絕大多數銀行均將歐盟實體消費列為 0% 排除，出國歐洲請務必帶國泰 CUBE 卡！'
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
  } else if (channelId === 'fashion_zara' || channelId === 'fashion_hm' || channelId === 'fashion_net') {
    const brandName = channelId === 'fashion_zara' ? 'ZARA' : channelId === 'fashion_hm' ? 'H&M' : 'NET';
    rate = 0.3;
    isTargetScheme = false;
    requiredSchemeName = '一般消費';
    requiredSchemeTag = '方案：【一般消費 0.3%】';
    bestPaymentLabel = '💳 門市實體刷卡 (僅 0.3% 一般消費)';
    bestPaymentNote = `⚠️ ${brandName} 未列入 CUBE 任何加碼方案，僅 0.3% 一般消費！`;
    details = [
      `【0.3% 一般消費地雷】${brandName} 未列入國泰 CUBE 任何特約加碼方案！`,
      '⚠️ 百貨店中店排除條款：國泰 CUBE 條款明文規定，百貨館內之快時尚品牌專櫃（ZARA/H&M/NET/UNIQLO/GU）直接排除百貨回饋，僅算 0.3%！',
      channelId === 'fashion_hm'
        ? '🔥 強烈建議改用：永豐 SPORT 卡以 Apple Pay 感應結帳享 7.0% 豐點（全場唯一神卡救星）！'
        : channelId === 'fashion_zara'
          ? '💡 強烈建議改用：台新卡切【大筆刷】享 3.3% 無上限，或永豐 SPORT 卡 Apple Pay 享 7.0%！'
          : '💡 強烈建議改用：台新卡出示 LINE Pay 切【Pay著刷】享 3.8% 或切【大筆刷】享 3.3%！'
    ];
    warning = `⚠️ ${brandName} 刷 CUBE 僅 0.3% 慘死！百貨店中店亦被排除！`;
  } else if (channelId === 'fastfood_burgerking') {
    rate = 0.3;
    isTargetScheme = false;
    requiredSchemeName = '樂饗購';
    requiredSchemeTag = '方案：【樂饗購】(門市小額排除)';
    bestPaymentLabel = '💳 門市實體刷卡 (小額極易 0% 排除)';
    bestPaymentNote = '漢堡王門市走小額支付平台，CUBE 卡極高機率排除加碼僅 0%~0.3%！';
    details = [
      '⚠️ 門市小額地雷：漢堡王實體門市與自助點餐機多走 NCCC 小額支付平台，CUBE 卡未特別特約，直接刷卡僅一般消費 0.3%（甚至 0%）！',
      '💡 外送加碼解法：若透過 Uber Eats 或 foodpanda 外送平台訂購漢堡王，切換【樂饗購】享 3.3% 小樹點（無上限）！',
      '⚠️ 秋日遊避雷：CUBE「秋日遊」日系美饌 8% 僅限摩斯漢堡/壽司郎等日系名店，美式漢堡王「完全沒有」8% 加碼！',
      '🔥 門市現場首選：強烈建議改用台新卡出示 LINE Pay 切【Pay著刷】享 3.8% 或永豐 DAWAY 享 3%！'
    ];
    warning = '⚠️ 漢堡王門市走小額支付極易 0% 排除！建議改用台新 LINE Pay 3.8% 或外送叫餐！';
  } else if (
    channelId === 'dining_restaurant' ||
    channelId === 'dining_hotpot' ||
    channelId === 'dining_zhanji' ||
    channelId === 'dining_uma' ||
    channelId === 'dining_tanzuomali' ||
    channelId === 'dining_orangeshabu' ||
    channelId === 'dining_sushiro' ||
    channelId === 'dining_sushiexpress' ||
    channelId === 'dining_japanese_luxury' ||
    channelId === 'dining_komeda' ||
    channelId === 'dining_sukiya' ||
    channelId === 'dining_chientu' ||
    channelId === 'fashion_uniqlo_gu' ||
    channelId === 'store_hands_nankang' ||
    channelId === 'store_hands_general' ||
    channelId === 'mall_mingyao' ||
    channelId === 'spot_xpark' ||
    channelId === 'store_united_arrows' ||
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
      rate = 3.3;
      requiredSchemeName = '樂饗購';
      requiredSchemeTag = '方案：【樂饗購】(壽星切【慶生日】10%)';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【樂饗購】享 3.3% 小樹點無上限！🎂 生日當月切【慶生日】享狂暴 10.0%！';
      details = [
        '【樂饗購方案】台灣壽司郎實體門市：3.3% 小樹點（無上限）',
        '🎂 壽星神卡【慶生日方案】：生日當月切換【慶生日】方案，台灣壽司郎享狂暴 10.0% 小樹點無上限！',
        '⚠️ 避雷警告：台灣壽司郎「未列入」秋日遊 5% 名單，切勿切換秋日遊，否則僅享一般消費！',
        '支援門市實體插卡與 Apple Pay / Google Pay / Samsung Pay 感應付款'
      ];
    } else if (channelId === 'dining_sushiexpress') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案享爭鮮 5.0% 小樹點無上限！滿 $500 送鮮魚味噌湯！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】爭鮮迴轉壽司、爭鮮PLUS 享 5.0% 小樹點（無上限）！',
        '滿額加碼禮：單筆消費滿 NT$500 告知店員刷國泰卡，贈送鮮魚味噌湯一碗！',
        '平常非活動期間切換【樂饗購】享 3.3% 小樹點無上限',
        '⚠️ 避雷警告：爭鮮「未列入」慶生日 10% 名單，切勿切換慶生日！'
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
    } else if (channelId === 'dining_komeda') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】客美多咖啡享 5.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】客美多咖啡 (Komeda\'s Coffee) 享 5.0% 小樹點無上限！',
        '平常非活動期間切換【樂饗購】享 3.3% 小樹點無上限',
        '支援門市實體刷卡、Apple Pay 與 LINE Pay 結帳'
      ];
    } else if (channelId === 'dining_sukiya') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】すき家享 5.0% 小樹點（無上限）！⚠️ 門市不收 LINE Pay';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】すき家 SUKIYA 享 5.0% 小樹點無上限！',
        '⚠️ 致命地雷：全台門市現場「不收 LINE Pay」，請務必直接刷實體卡或 Apple Pay！',
        '⚠️ 留意部分少數老舊街邊分店僅收現金，入座前請先確認櫃台刷卡機台',
        '平常非活動期間切換【樂饗購】享 3.3% 小樹點無上限'
      ];
    } else if (channelId === 'dining_chientu') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / 📱 線上買即享券';
      bestPaymentNote = '切換至【秋日遊】錢都享 5.0% 小樹點！⚠️ 極多門市只收現金！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】錢都日式涮涮鍋享 5.0% 小樹點無上限！',
        '⚠️ 致命地雷：錢都極多傳統街邊加盟店「只收現金」！入座前請務必確認門市是否支援刷卡！',
        '🔥 卡友神破解：若門市只收現金，可用手機上 LINE 禮物 / Klook 線上刷 CUBE 卡買「錢都即享券」拿回饋，再拿條碼給店員折抵！',
        '平常非活動期間切換【樂饗購】享 3.3% 小樹點無上限'
      ];
    } else if (channelId === 'fashion_uniqlo_gu') {
      rate = 3.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💻 官網網路商店 / 直營門市實體刷卡';
      bestPaymentNote = '切換至【秋日遊】UNIQLO與GU享 3.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系購物名店：3.0% 小樹點（無上限）！',
        '涵蓋 UNIQLO 網路商店/直營門市、GU 台灣網路商店',
        '⚠️ 百貨店中櫃排除地雷：若在百貨館內專櫃門市消費，CUBE 卡條款明文排除快時尚品牌店中櫃（僅 0.3%），建議直營門市或切換秋日遊！'
      ];
    } else if (channelId === 'dining_zhanji') {
      if (config.cubeScheme === 'birthday') {
        rate = 10.0;
        requiredSchemeName = '慶生日';
        requiredSchemeTag = '方案：【慶生日 (壽星專屬)】';
        bestPaymentNote = '生日當月切換至【慶生日】享詹記 10.0% 小樹點無上限！';
        details = [
          '【慶生日方案】詹記麻辣火鍋為慶生月指定口碑名店，壽星享狂暴 10.0% 小樹點（無上限）！',
          '🎂 當月壽星必吃：生日當月到詹記聚餐直接拿 10%！'
        ];
      } else {
        details = [
          '【樂饗購方案】詹記麻辣火鍋實體門市：3.3% 小樹點（無上限）',
          '🎂 壽星特權：生日當月切換【慶生日】方案享狂暴 10.0% 小樹點無上限！',
          '⚠️ 門市付款提醒：詹記現場「不支援 LINE Pay」，請直接刷實體卡或 Apple Pay 感應！',
          '🔥 極致首選：台新卡切換【Chill刷】直接享 10.0% 台新Point無上限！'
        ];
      }
    } else if (channelId === 'dining_uma') {
      if (config.cubeScheme === 'birthday') {
        rate = 10.0;
        requiredSchemeName = '慶生日';
        requiredSchemeTag = '方案：【慶生日 (壽星專屬)】';
        bestPaymentNote = '生日當月切換至【慶生日】享屋馬 10.0% 小樹點無上限！';
        details = [
          '【慶生日方案】屋馬燒肉為慶生月指定口碑名店，壽星享狂暴 10.0% 小樹點（無上限）！',
          '🎂 當月壽星必吃：生日當月到屋馬燒肉聚餐直接拿 10%！'
        ];
      } else {
        details = [
          '【樂饗購方案】屋馬燒肉全門市：3.3% 小樹點（無上限）',
          '🎂 壽星特權：生日當月切換【慶生日】方案享狂暴 10.0% 小樹點無上限！',
          '🔥 極致首選：台新卡切換【Chill刷】直接享 10.0% 台新Point無上限！'
        ];
      }
    } else if (channelId === 'dining_tanzuomali') {
      details = [
        '【樂饗購方案】碳佐麻里精品燒肉：3.3% 小樹點（無上限）',
        '⚠️ 避雷警告：碳佐麻里「未列入」CUBE 慶生月名單，切慶生日僅 0.3%，請切換【樂饗購】享 3.3%！',
        '🔥 極致首選：台新卡切換【Chill刷】直接享 10.0% 台新Point無上限！點餐前出示再享肉品買一送一！'
      ];
    } else if (channelId === 'dining_hotpot') {
      if (config.cubeScheme === 'birthday') {
        rate = 10.0;
        requiredSchemeName = '慶生日';
        requiredSchemeTag = '方案：【慶生日 (壽星專屬)】';
        bestPaymentNote = '生日當月切換至【慶生日】方案享名店 10.0% 小樹點無上限！';
        details = [
          '【慶生日方案】茶六、老井、老四川、鼎王為慶生月指定名店，壽星享 10.0% 小樹點無上限！'
        ];
      } else {
        details = [
          '【樂饗購方案】全台連鎖燒肉火鍋：3.3% 小樹點（無上限）',
          '🎂 壽星特權：生日當月切換【慶生日】方案，茶六、老井、老四川、鼎王等享狂暴 10.0% 小樹點無上限！',
          '🔥 台新 Chill刷：海底撈、茶六、萬客什鍋、雞湯大叔切換【Chill刷】享 10.0% 首選！'
        ];
      }
    } else if (channelId === 'store_hands_nankang') {
      rate = 8.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案，HANDS台隆手創館（南港LaLaport旗艦店）獨享 8.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】南港 LaLaport 旗艦店獨家名店：8.0% 小樹點（無上限）！',
        '涵蓋 HANDS 台隆手創館（南港 LaLaport 旗艦店）門市實體消費',
        '🔥 全台唯一指定特約門市：全台灣十幾家台隆手創館中，僅此一家享 8.0% 狂暴加碼！',
        '⚠️ 避雷警告：全台其他台隆手創館門市（如微風/SOGO/京站/遠百等）切秋日遊只有 0.3%，請切換【樂饗購】享 3.3%！'
      ];
    } else if (channelId === 'store_hands_general') {
      rate = 3.3;
      requiredSchemeName = '樂饗購';
      requiredSchemeTag = '方案：【樂饗購】';
      bestPaymentLabel = '💳 專櫃實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【樂饗購】享 3.3% 小樹點；⚠️ 切勿切秋日遊（非南港門市僅 0.3%！）';
      details = [
        '【樂饗購方案】全台其他百貨門市（依附百貨專櫃統一發票）：3.3% 小樹點（無上限）',
        '涵蓋微風、SOGO、京站、板橋遠百、台中大遠百、台中LaLaport等百貨門市',
        '⚠️ 致命避坑地雷：8.0% 秋日遊加碼「僅限南港 LaLaport 店」！其他門市切【秋日遊】直接跌落 0.3% 一般消費！',
        '🔥 冠軍卡推薦：非南港門市請直接刷「永豐 SPORT 卡」（Apple Pay 感應 7.0%），大幅超越 CUBE 3.3%！'
      ];
    } else if (channelId === 'mall_mingyao') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 門市專櫃實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案，明曜百貨實體消費享 5.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系名店：5.0% 小樹點（無上限）！',
        '涵蓋台北忠孝東路明曜百貨實體消費',
        '⚠️ 館內 UNIQLO / GU 獨立發票地雷：B1~2F 的 UNIQLO 全球旗艦店與 GU 門市為獨立自營機台，回饋僅 3.0%（平日非秋日遊僅 0.3%），非明曜百貨的 5.0%！',
        '平常非活動期間切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 無上限'
      ];
    } else if (channelId === 'spot_xpark') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '🎫 Xpark 現場票務櫃台 / 現場售票機實體刷卡';
      bestPaymentNote = '切換至【秋日遊】方案，Xpark現場購票享 5.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系休閒名店：5.0% 小樹點（無上限）！',
        '涵蓋桃園青埔 Xpark 都會型水生公園「現場售票處 / 自動售票機」實體刷卡購票',
        '⚠️ 線上購票 0.3% 慘死陷阱：若透過 KKday 或 Klook 線上預約購票，切【秋日遊】只有 0.3%！線上買票請切換至【趣旅行】方案享 3.3%！',
        '平常非秋日遊期間現場刷卡僅享 0.3% 一般消費'
      ];
    } else if (channelId === 'store_united_arrows') {
      rate = 5.0;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💻 UNITED ARROWS 台灣官方購物網站線上刷卡';
      bestPaymentNote = '切換至【秋日遊】方案，官方購物網站享 5.0% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系購物名店：5.0% 小樹點（無上限）！',
        '涵蓋 UNITED ARROWS 台灣官方購物網站（線上刷卡一次付清）',
        '⚠️ 百貨專櫃 0.3% 慘死地雷：秋日遊 5.0%「僅限官網線上購物」！若去微風、SOGO、新光三越實體專櫃買，發票由百貨開立，切【秋日遊】只有 0.3%！實體專櫃請切換【樂饗購】享 3.3%！'
      ];
    } else if (channelId === 'mall_sogo_dome') {
      rate = 3.5;
      requiredSchemeName = '秋日遊';
      requiredSchemeTag = '方案：【秋日遊 (10/1~11/30)】';
      bestPaymentLabel = '💳 專櫃實體刷卡 / Apple Pay 感應';
      bestPaymentNote = '切換至【秋日遊】方案，遠東SOGO（含Garden City大巨蛋）享 3.5% 小樹點（無上限）！';
      details = [
        '【秋日遊限定方案 (10/1~11/30)】國內日系購物名店：3.5% 小樹點（無上限）！',
        '涵蓋遠東 SOGO 全台各館與 Garden City 台北大巨蛋商場實體消費',
        '⚠️ 致命避坑：大巨蛋中華職棒球賽、周杰倫/張惠妹等演唱會門票由「拓元售票/ibon」開立發票，完全不屬於商場，刷 CUBE 僅一般消費 0.3% 慘死！',
        '⚠️ 避坑提醒：大巨蛋秀泰影城、SOGO 館內快時尚（UNIQLO/GU/ZARA/H&M）依條款排除加碼，僅 0.3%！',
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
        '⚠️ 南港店特權：南港 LaLaport 館內「HANDS 台隆手創館」獨享狂暴 8.0% 小樹點無上限！',
        '⚠️ 台中店地雷：台中 LaLaport「LOPIA 超市」為獨立機台，切秋日遊僅 0.3%，必須切【集精選】方案享 2.0%！',
        '⚠️ 避坑提醒：林口威秀影城、館內 UNIQLO/GU 等快時尚非商場自營，依 CUBE 條款排除加碼，僅 0.3%！',
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
        '涵蓋日藥本舖全台「獨立街邊直營門市」實體消費（發票開立日藥本舖自營機台）',
        '⚠️ 「指定門市」排除陷阱：設立於百貨公司、家樂福量販店、車站地下街（如微風北車）之商場櫃位，若非日藥自營機台，直接排除 3.5%，僅 0.3% 一般消費！',
        '⚠️ 官網線上商城與外送（UberEats/foodpanda）不適用 3.5% 加碼！',
        '平常非活動期間切換【樂饗購】享 3.0% (Lv2) ~ 3.3% (Lv3) 無上限'
      ];
    } else if (channelId === 'department_store') {
      details = [
        '【樂饗購方案】全台指定百貨消費：3.3% 小樹點（無上限）',
        '涵蓋新光三越、微風廣場、遠東百貨、台北101、漢神百貨、京站、統一時代等',
        '🍁 10/1~11/30 秋日遊獨家加碼：遠東SOGO與大巨蛋請切換【秋日遊】享 3.5%（多0.2%），明曜百貨享 5.0%！',
        '⚠️ 避雷警告：台北101與新光三越A11的 Apple Store 直營門市發票為蘋果自開，直接排除百貨加碼，僅 0.3%！',
        '⚠️ 避雷警告：館內快時尚（UNIQLO/GU/ZARA/H&M/NET）、超市、影城發票非百貨自營，直接排除 3.3%！',
        '🎂 7月慶生月：生日當月全台實體百貨專櫃切換【慶生日】享 3.5% 無上限！'
      ];
    } else if (channelId === 'drugstore_cosmetics') {
      details = [
        '【樂饗購方案】指定連鎖藥妝：3.3% 小樹點（無上限）',
        '涵蓋康是美、屈臣氏、寶雅 POYA、松本清、Tomod\'s 連鎖藥妝門市',
        '⚠️ 切方案避坑警告：康是美、屈臣氏、寶雅「未列入秋日遊名單」，切【秋日遊】只有 0.3%！請務必切換【樂饗購】享 3.3%！',
        '🍁 日藥本舖提醒：日藥本舖請切換【秋日遊】享 3.5% 小樹點（比樂饗購多 0.2%）！',
        '⚠️ 賣場店中店避坑：設於家樂福、愛買或百貨公司內的藥妝專櫃，若非品牌自營機台，直接排除 3.3%，僅 0.3%！',
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
  } else if (channelId === 'streaming_video') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '玩數位';
    requiredSchemeTag = '方案：【玩數位】';
    bestPaymentLabel = '💻 線上刷卡設定續訂';
    bestPaymentNote = '切換至【玩數位】享 3.3% 小樹點無上限；🔥 台新Chill刷享10%最高';
    details = [
      '【玩數位方案】Netflix、Disney+ 影視訂閱：3.3% 小樹點（無上限）',
      '涵蓋 Netflix、Disney+ 等指定影視串流',
      '🔥 提示：若追求極致回饋，台新卡切換【Chill刷】可享狂暴 10.0%！'
    ];
  } else if (channelId === 'streaming_music') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '玩數位';
    requiredSchemeTag = '方案：【玩數位】';
    bestPaymentLabel = '💻 線上刷卡設定續訂';
    bestPaymentNote = '切換至【玩數位】享 3.3% 小樹點無上限；全場最高無上限首選！';
    details = [
      '【玩數位方案】YouTube、Spotify、KKBOX：3.3% 小樹點（無上限）',
      '涵蓋 YouTube (含 Premium)、Spotify、KKBOX 等指定音樂與影音串流',
      '⚠️ 避坑提醒：Spotify 與 YouTube「未列入」台新 10%，CUBE 切換【玩數位】3.3% 為最佳首選！'
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
  } else if (channelId === 'transit_thsr') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🚄 高鐵官網 / T-EX App / 車站售票機';
    bestPaymentNote = '切換至【趣旅行】享高鐵 3.3% 小樹點無上限！';
    details = [
      '【趣旅行方案】台灣高鐵購票：3.3% 小樹點（無上限）',
      '涵蓋高鐵官網、T-EX 行動購票 App、高鐵各站售票窗口與自動售票機',
      '💡 車站現場購票若使用 Apple Pay 感應，永豐 SPORT 卡達標最高可拿 7.0%！'
    ];
  } else if (channelId === 'transit_tra') {
    rate = 0.3;
    isTargetScheme = false;
    requiredSchemeName = '一般消費';
    requiredSchemeTag = '非趣旅行特約';
    bestPaymentLabel = '💳 僅一般消費 0.3%';
    bestPaymentNote = '⚠️ 台鐵未列入趣旅行加碼！請改刷台新天天刷 3.3%！';
    details = [
      '【非加碼通路】台鐵火車未列入國泰 CUBE 卡任何方案加碼名單',
      '刷卡僅享一般消費 0.3% 小樹點',
      '🔥 強烈建議改刷：台新卡切換【天天刷】享 3.3% 無上限，或永豐 SPORT 車站感應 7%！'
    ];
    warning = '⚠️ 台鐵未列入 CUBE 趣旅行特約！刷 CUBE 僅有 0.3%，請改刷台新天天刷 3.3%！';
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
    bestPaymentLabel = '🏨 訂房網線上刷卡（選外幣 / 一次付清）';
    bestPaymentNote = '切換至【趣旅行】享 3.3% 小樹點無上限；可搭配國泰 Agoda 專屬現折';
    details = [
      '【趣旅行方案】指定國際訂房平台：3.3% 小樹點（無上限）',
      '涵蓋 Agoda、Booking.com、Trip.com、Airbnb、Hotels.com、Expedia 等',
      '💡 疊加優惠：透過國泰專屬 Agoda 連結常享額外 7%~10% 現折優惠！',
      '⚠️ 避坑提醒：訂房請選線上預付與當地外幣計價，避開現場到店付款與 DCC 動態貨幣轉換；且切勿分期（分期降為 0.3%）！'
    ];
  } else if (channelId === 'travel_klook_kkday') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🎫 Klook / KKday 線上信用卡結帳';
    bestPaymentNote = '切換至【趣旅行】享 3.3% 小樹點無上限；🔥 台新LINE Pay最高3.8%';
    details = [
      '【趣旅行方案】Klook、KKday 體驗票券：3.3% 小樹點（無上限）',
      '涵蓋景點門票、一日遊體驗行程、交通票券等',
      '🍁 秋日遊快閃：Klook 日本行程/交通享加碼 5.0% 小樹點！',
      '🔥 提示：若追求極致回饋，台新卡選擇 LINE Pay 結帳切【Pay著刷】享 3.8% 更高！'
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
  } else if (channelId === 'transit_taxi_meter') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🚖 台灣大車隊 / yoxi 車內刷卡或 Apple/Google/Samsung Pay 感應';
    bestPaymentNote = '切換至【趣旅行】享 3.3% 小樹點無上限；但首推永豐 SPORT 車內感應 7%';
    details = [
      '【趣旅行方案】指定計程車：3.3% 小樹點（無上限）',
      '涵蓋台灣大車隊 (55688)、yoxi 車內刷卡與 App 扣款',
      '🔥 強烈推薦：車內實體刷卡機改用永豐 SPORT 卡使用 Apple Pay / Google Pay / Samsung Pay 感應享最高 7.0% 豐點！'
    ];
  } else if (channelId === 'transit_taxi_app') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '📱 Uber / Grab App 綁卡扣款切【趣旅行】3.3% / LINE GO 刷台新 LINE Pay 3.8%';
    bestPaymentNote = 'Uber、Grab 切換至【趣旅行】享 3.3% 小樹點無上限；⚠️ LINE GO 非特約僅 0.3%';
    details = [
      '【趣旅行方案】指定叫車 App：Uber、Grab 綁卡線上扣款享 3.3% 小樹點（無上限）',
      '💥 避坑地雷：LINE GO 非 CUBE 特約通路！刷 CUBE 僅一般消費 0.3%，搭 LINE GO 請改刷台新【Pay著刷】綁 LINE Pay (3.8%)！',
      '⚠️ 避坑提醒：永豐 SPORT 卡在 Uber/LINE GO 等 App 內扣款無感應加碼，僅享 1%~2%，請勿刷 SPORT 卡！'
    ];
  } else if (channelId === 'transit_car_rental') {
    rate = 3.3;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🚗 和運與格上門市實體刷卡 / iRent App 綁卡';
    bestPaymentNote = '切換至【趣旅行】享 3.3% 小樹點無上限';
    details = [
      '【趣旅行方案】指定租車與共享汽車：3.3% 小樹點（無上限）',
      '涵蓋和運租車、格上租車、iRent 共享汽車',
      '⚠️ 注意：門市刷卡請勿分期，一次付清享 3.3% 無上限！'
    ];
  } else if (channelId === 'transit_scooter_sharing') {
    rate = 0.3;
    isTargetScheme = false;
    bestPaymentLabel = '❌ 國泰 CUBE 非特約通路（僅 0.3%）';
    bestPaymentNote = '⚠️ GoShare / WeMo 非趣旅行特約，刷 CUBE 僅享一般消費 0.3%';
    details = [
      '💥 避坑地雷：GoShare 與 WeMo Scooter 均非國泰 CUBE 卡【趣旅行】或任何方案之指定特約！',
      '刷 CUBE 卡僅享一般消費 0.3% 小樹點，極易踩雷！',
      '💡 強烈推薦改刷：台新卡切換【Pay著刷】綁 LINE Pay (3.8%)，或永豐 DAWAY 綁 LINE Pay (3.0%)！'
    ];
    warning = '⚠️ GoShare 與 WeMo 非 CUBE 特約通路，僅享 0.3%！強烈建議改用台新 Pay著刷 (3.8%) 或 DAWAY (3%)！';
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
      `【趣旅行方案】日韓美加海外實體外幣消費：${majorRateLabel} 小樹點（無上限）`,
      '涵蓋海外當地餐廳、百貨精品、實體飯店，以及日本三大樂園（東京迪士尼、大阪環球影城、哈利波特影城）',
      '💡 日本當地精選名店建議切換【秋日遊 (10/1~11/30)】可享 3%~8% 更高回饋！',
      '⚠️ 避坑提醒：在國外刷卡請務必選擇「當地貨幣（日圓/韓元/美金等）」，避免被收取高達 4%~5% DCC 匯差！'
    ];
  } else if (channelId === 'travel_europe') {
    rate = majorRate;
    isTargetScheme = true;
    requiredSchemeName = '趣旅行';
    requiredSchemeTag = '方案：【趣旅行】';
    bestPaymentLabel = '🏰 歐洲實體感應 / 插卡消費（選當地歐元/英鎊）';
    bestPaymentNote = `切換至【趣旅行】享 ${majorRateLabel} 小樹點無上限（未排除歐盟唯一神卡！）`;
    details = [
      `【趣旅行方案】歐洲實體外幣消費：${majorRateLabel} 小樹點（無上限）`,
      '👑 全場唯一活口：國泰 CUBE 卡未排除歐盟地區實體商店交易，出國歐洲買精品專櫃、百貨、餐廳退稅首選！',
      '⚠️ 避坑提醒：在歐洲刷卡務必選擇「當地貨幣（歐元/英鎊/瑞士法郎）」，避免被收取高達 4%~5% DCC 匯差！'
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
        channelId === 'streaming_video' ||
        channelId === 'streaming_music' ||
        channelId === 'digital_stores' ||
        channelId === 'ai_software' ||
        channelId === 'travel_airlines' ||
        channelId === 'travel_booking_ota' ||
        channelId === 'travel_klook_kkday' ||
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

  // 5. 詹記麻辣火鍋
  if (channelId === 'dining_zhanji') {
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
        label: '💳 門市現場實體刷卡或 Apple/Samsung Pay 感應',
        note: '【Chill刷官方名店】詹記全門市享 10%！⚠️ 現場不支援 LINE Pay'
      },
      details: [
        `【Chill刷方案】詹記麻辣火鍋：享 ${isLinked ? 10 : baseRate}% 台新Point（無上限）！`,
        '⚠️ 支付限制提醒：詹記全門市現場「不支援 LINE Pay」，請務必直接刷實體卡或用 Apple Pay 感應！',
        '⚠️ 百貨商場排除提醒：若設於新光三越等商場內且走商場收單，不適用 10% 加碼，獨立街邊店最穩！'
      ],
      warning: '⚠️ 詹記全門市現場不收 LINE Pay！請直接刷實體卡或使用 Apple Pay 感應！',
      isSchemeDependent: true
    };
  }

  // 5.1 屋馬燒肉
  if (channelId === 'dining_uma') {
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
        label: '💳 門市實體刷卡、Apple Pay 感應或出示 LINE Pay',
        note: '【Chill刷官方名店】屋馬全門市享 10%！'
      },
      details: [
        `【Chill刷方案】屋馬燒肉全門市：享 ${isLinked ? 10 : baseRate}% 台新Point（無上限）！`,
        '支援門市實體刷卡、Apple Pay、LINE Pay 條碼多元付款',
        '⚠️ 百貨商場排除提醒：若門市走百貨商場收單，不適用 10% 加碼，獨立街邊店最穩！'
      ],
      isSchemeDependent: true
    };
  }

  // 5.2 碳佐麻里精品燒肉
  if (channelId === 'dining_tanzuomali') {
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
        label: '💳 門市實體刷卡、Apple Pay 或 LINE Pay',
        note: '【Chill刷官方名店】碳佐麻里享 10%！🔥 點餐前出示享肉品買一送一'
      },
      details: [
        `【Chill刷方案】碳佐麻里精品燒肉：享 ${isLinked ? 10 : baseRate}% 台新Point（無上限）！`,
        '🔥 專屬卡友福利：點餐前主動出示台新卡，享人氣指定肉品買一送一！',
        '支援門市實體刷卡、Apple Pay、LINE Pay 條碼結帳'
      ],
      isSchemeDependent: true
    };
  }

  // 5.3 連鎖火鍋燒肉 (海底撈/茶六/乾杯/馬辣)
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
        label: '💳 門市實體刷卡或 Apple/Samsung Pay 感應',
        note: '【Chill刷 10%】指定熱門連鎖火鍋燒肉享 10%！'
      },
      details: [
        `【Chill刷方案】海底撈、茶六、萬客什鍋、雞湯大叔等官方名店：享 ${isLinked ? 10 : baseRate}% 台新Point！`,
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
  if (channelId === 'dining_sushiro' || channelId === 'dining_sushiexpress') {
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
        label: '📱 出示 LINE Pay 條碼享 3.8%；💳 實體卡切【好饗刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（需領券）；【好饗刷】實體刷卡享 3.3%'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 出示 LINE Pay 條碼結帳',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，上限 500 點'
        },
        {
          schemeName: '好饗刷',
          schemeTag: '方案：【好饗刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 門市實體卡感應 / 插卡',
          paymentMethod: 'physical',
          note: '餐飲實體消費 3.3% 無上限'
        }
      ],
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

  // 5.4 客美多咖啡
  if (channelId === 'dining_komeda') {
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
        label: '📱 出示 LINE Pay 條碼享 3.8%；💳 實體卡切【好饗刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（需領券）；【好饗刷】實體刷卡享 3.3%'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 出示 LINE Pay 條碼結帳',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，上限 500 點'
        },
        {
          schemeName: '好饗刷',
          schemeTag: '方案：【好饗刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 門市實體卡感應 / 插卡',
          paymentMethod: 'physical',
          note: '餐飲實體消費 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷】門市出示 LINE Pay 條碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【好饗刷】若走實體卡感應或插卡：${isLinked ? 3.3 : baseRate}% 台新Point`
      ],
      isSchemeDependent: true
    };
  }

  // 5.5 すき家 SUKIYA
  if (channelId === 'dining_sukiya') {
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
        label: '💳 門市實體卡刷卡或 Apple/Samsung Pay 感應',
        note: '【好饗刷】餐飲 3.3%！⚠️ 現場完全不支援 LINE Pay'
      },
      details: [
        `【好饗刷方案】すき家實體刷卡或手機感應：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '⚠️ 致命地雷提醒：台灣すき家實體門市「完全不收 LINE Pay」，請直接刷實體卡或 Apple Pay！',
        '⚠️ 留意少數老舊街邊分店僅收現金，入座前請先確認'
      ],
      warning: '⚠️ すき家現場完全不收 LINE Pay！請直接刷實體卡或 Apple Pay 感應！',
      isSchemeDependent: true
    };
  }

  // 5.6 錢都日式涮涮鍋
  if (channelId === 'dining_chientu') {
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
        label: '💳 可刷卡門市實體刷 / 📱 線上買即享券',
        note: '【好饗刷】餐飲 3.3%！⚠️ 留意極多街邊店只收現金'
      },
      details: [
        `【好饗刷方案】可刷卡門市實體刷卡：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '⚠️ 致命地雷提醒：錢都加盟店眾多，許多傳統街邊分店「只收現金」！',
        '🔥 卡友神招：若門市只收現金，可線上於 LINE 禮物或 Klook 刷卡買即享券折抵！'
      ],
      warning: '⚠️ 錢都極多加盟分店只收現金！若門市不收刷卡，可線上買即享券折抵！',
      isSchemeDependent: true
    };
  }

  // 5.7 快時尚服飾：UNIQLO / GU (優衣庫與極優)
  if (channelId === 'fashion_uniqlo_gu') {
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
        label: '📱 出示 LINE Pay 條碼享 3.8%；實體刷卡切【大筆刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（需領券）；【大筆刷】實體刷卡享 3.3%'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 門市或官網出示 LINE Pay 條碼',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，上限 500 點'
        },
        {
          schemeName: '大筆刷',
          schemeTag: '方案：【大筆刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 百貨專櫃/直營門市實體刷卡',
          paymentMethod: 'physical',
          note: '快時尚實體消費 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷方案】UNIQLO / GU 支援 LINE Pay 結帳：${isLinked ? 3.8 : baseRate}% 台新Point（需領券，每期上限 500 點）`,
        `【大筆刷方案】門市實體刷卡結帳：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`
      ],
      isSchemeDependent: true
    };
  }

  // 5.8 快時尚服飾：ZARA (正面表列大筆刷 3.3% / 門市不收 LINE Pay)
  if (channelId === 'fashion_zara') {
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
        label: '💳 門市實體刷卡或 Apple Pay 切【大筆刷】享 3.3%',
        note: 'ZARA 正面表列特約快時尚！享 3.3% 台新Point無上限'
      },
      schemeBranches: [
        {
          schemeName: '大筆刷',
          schemeTag: '方案：【大筆刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 門市實體刷卡 / 官網線上刷卡',
          paymentMethod: 'physical',
          note: 'ZARA 實體/官網刷卡享 3.3% 無上限'
        }
      ],
      details: [
        `【大筆刷方案】ZARA 官方正面表列特約：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '⚠️ 門市支付限制：ZARA 全台門市與官網「不支援 LINE Pay」，無法使用【Pay著刷】方案！',
        '🔥 若追求更高回饋：永豐 SPORT 卡臨櫃 Apple Pay 感應享狂暴 7.0% 豐點！'
      ],
      isSchemeDependent: true
    };
  }

  // 5.9 快時尚服飾：H&M (⚠️ 台新大筆刷未列入 / 門市不收 LINE Pay / 僅一般消費 0.3%~1.0%)
  if (channelId === 'fashion_hm') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: baseRate,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡僅一般消費',
        note: 'H&M 未列入大筆刷指定名單，且不支援 LINE Pay'
      },
      details: [
        `一般消費基本回饋：${baseRate}% 台新Point`,
        '⚠️ 排除警告：台新【大筆刷】指定快時尚僅表列 UNIQLO、GU、ZARA、NET，未包含 H&M！',
        '⚠️ 門市支付限制：H&M 門市不支援 LINE Pay，無法使用【Pay著刷】！',
        '🔥 強烈建議改用：永豐 SPORT 卡以 Apple Pay 感應結帳享 7.0% 豐點（全場唯一救星神卡）！'
      ],
      warning: '⚠️ H&M 未列入台新大筆刷加碼名單，僅 0.3%~1.0%！強烈建議改刷 SPORT 卡 (Apple Pay 7%)！'
    };
  }

  // 5.10 快時尚服飾：NET (雙重支援：LINE Pay 3.8% / 大筆刷 3.3%)
  if (channelId === 'fashion_net') {
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
        label: '📱 出示 LINE Pay 條碼享 3.8%；實體刷卡切【大筆刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（需領券）；【大筆刷】實體刷卡享 3.3%'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 門市出示 LINE Pay 條碼',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，上限 500 點'
        },
        {
          schemeName: '大筆刷',
          schemeTag: '方案：【大筆刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 門市實體刷卡結帳',
          paymentMethod: 'physical',
          note: 'NET 正面表列實體 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷方案】NET 門市出示 LINE Pay 條碼：${isLinked ? 3.8 : baseRate}% 台新Point（需領券，每期上限 500 點）`,
        `【大筆刷方案】NET 門市實體刷卡結帳：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`
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
      requiredSchemeName: 'Pay著刷 / 好饗刷',
      requiredSchemeTag: '方案：【Pay著刷 / 好饗刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 結帳選 LINE Pay 享 3.8%；線上刷卡切【好饗刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（需領券）；【好饗刷】線上刷卡享 3.3%'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 外送結帳選擇 LINE Pay 付款',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，上限 500 點'
        },
        {
          schemeName: '好饗刷',
          schemeTag: '方案：【好饗刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💻 App 綁定卡號線上直刷',
          paymentMethod: 'online',
          note: '外送官方認列加碼 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷】外送選擇 LINE Pay 付款：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【好饗刷】外送 App 綁卡直接線上刷：${isLinked ? 3.3 : baseRate}% 台新Point`
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
      requiredSchemeName: 'Pay著刷 / 好饗刷',
      requiredSchemeTag: '方案：【Pay著刷 / 好饗刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 出示 LINE Pay 條碼享 3.8%；💳 實體刷卡切【好饗刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（避開美食街排除）；【好饗刷】實體感應享 3.3%'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 門市櫃台出示 LINE Pay 條碼',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，可避開美食街門市餐飲排除'
        },
        {
          schemeName: '好饗刷',
          schemeTag: '方案：【好饗刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 門市實體卡感應 / 刷卡',
          paymentMethod: 'physical',
          note: '獨立門市餐飲 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷】門市出示 LINE Pay 條碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【好饗刷】走實體卡感應或插卡：${isLinked ? 3.3 : baseRate}% 台新Point`
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

  // 6.7. 肯德基 KFC
  if (channelId === 'fastfood_kfc') {
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
        note: '【Pay著刷】LINE Pay 享 3.8%（破解小額支付 0% 地雷）'
      },
      details: [
        `【Pay著刷】出示 LINE Pay 條碼掃碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '🔥 走 LINE Pay 掃碼可成功繞過肯德基門市 NCCC 小額支付 0% 排除！',
        '⚠️ 致命地雷：台新「好饗刷」官方條文明確排除連鎖速食小額，千萬勿拿實體卡直接感應/插卡（直接 0% 排除）'
      ],
      warning: '⚠️ 肯德基實體刷卡走小額支付 0% 排除！請務必出示 LINE Pay 條碼掃碼結帳！',
      isSchemeDependent: true
    };
  }

  // 6.8. 必勝客 Pizza Hut
  if (channelId === 'fastfood_pizzahut') {
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
        label: '📱 出示 LINE Pay 享 3.8%；門市實體刷卡/官網訂餐切【好饗刷】享 3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（需領券）；【好饗刷】門市現場實體刷卡與官網App線上訂餐皆享 3.3% 無上限'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 門市現場或官網出示 LINE Pay 條碼',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，上限 500 點'
        },
        {
          schemeName: '好饗刷',
          schemeTag: '方案：【好饗刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 門市現場實體刷卡 / 💻 官網 App 線上訂餐',
          paymentMethod: 'physical',
          note: '門市現場實體刷卡與官網線上直刷皆享 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷】出示 LINE Pay 條碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point（需每月領券加碼）`,
        `【好饗刷】門市現場實體刷卡或官網線上直刷：${isLinked ? 3.3 : baseRate}% 台新Point（餐飲 3.3% 無上限）`
      ],
      isSchemeDependent: true
    };
  }

  // 6.9. 漢堡王 Burger King
  if (channelId === 'fastfood_burgerking') {
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
        label: '📱 門市櫃台/官網線上訂餐出示 LINE Pay 條碼結帳',
        note: '【Pay著刷】出示 LINE Pay 享 3.8%（破解小額支付 0% 地雷）'
      },
      details: [
        `【Pay著刷】出示 LINE Pay 條碼掃碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point（月上限 500 點）`,
        '🔥 走 LINE Pay 掃碼可成功繞過漢堡王門市 NCCC 小額支付 0% 排除！',
        '⚠️ 致命地雷：台新「好饗刷」官方條文明確排除連鎖速食小額，千萬勿拿實體卡直接插卡或感應（直接 0% 排除）',
        '💡 雙重優惠：臨櫃點餐可先出示台新官網「卡友專屬優惠券」（如特定品項買一送一），再掃 LINE Pay 結帳！'
      ],
      warning: '⚠️ 漢堡王實體刷卡走小額支付 0% 排除！請務必出示 LINE Pay 條碼掃碼結帳！',
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
      requiredSchemeName: 'Pay著刷 / 數趣刷',
      requiredSchemeTag: '方案：【Pay著刷 / 數趣刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 結帳選 LINE Pay 享 3.8%；直刷卡號切【數趣刷】3.3%',
        note: `【Pay著刷】${platformName} 走 LINE Pay 享 3.8%`
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 結帳選擇 LINE Pay 付款',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，上限 500 點'
        },
        {
          schemeName: '數趣刷',
          schemeTag: '方案：【數趣刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💻 線上直接輸入卡號一次付清',
          paymentMethod: 'online',
          note: '指定電商直接刷卡 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷】${platformName} 結帳選 LINE Pay：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【數趣刷】線上刷卡直接輸卡號一次付清：${isLinked ? 3.3 : baseRate}% 台新Point`,
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
      requiredSchemeName: 'Pay著刷 / 數趣刷',
      requiredSchemeTag: '方案：【Pay著刷 / 數趣刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 網購結帳選 LINE Pay 享 3.8%；直刷卡號切【數趣刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（無 LINE Pay 時切【數趣刷】直接刷卡享 3.3%）'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 結帳選擇 LINE Pay 付款',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，上限 500 點'
        },
        {
          schemeName: '數趣刷',
          schemeTag: '方案：【數趣刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💻 線上直接輸入卡號一次付清',
          paymentMethod: 'online',
          note: '網購直接刷卡 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷】若走 LINE Pay 結帳享 ${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【數趣刷】若直接輸入卡號刷卡結帳享 ${isLinked ? 3.3 : baseRate}% 台新Point`
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

  // 7.8. 影視追劇 (Chill刷 10% 狂暴神卡)
  if (channelId === 'streaming_video') {
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

  // 7.8b. 音樂與影音串流 (數趣刷 3.3% / ⚠️ Chill刷僅0.3%~0.5%)
  if (channelId === 'streaming_music') {
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
        label: '💻 線上設定訂閱自動扣繳',
        note: '【數趣刷】YouTube Premium / Spotify / KKBOX 享 3.3%'
      },
      details: [
        `【數趣刷方案】YouTube Premium、Spotify、KKBOX：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '涵蓋 YouTube (含 Premium)、Spotify、KKBOX 等指定音樂影音串流',
        '⚠️ 致命避雷：Spotify 與 YouTube「未列入」Chill刷 10%，切 Chill刷僅 0.3%~0.5%！請切換【數趣刷】享 3.3%！',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
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

  // 10. 台灣高鐵與台鐵 (天天刷 3.3%)
  if (channelId === 'transit_thsr' || channelId === 'transit_tra') {
    const isThsr = channelId === 'transit_thsr';
    const name = isThsr ? '台灣高鐵' : '台灣鐵路 (台鐵)';
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
        label: `${isThsr ? '🚄' : '🚆'} 車站售票機/窗口感應或 App 線上扣款`,
        note: `【天天刷】${name}享 3.3% 台新Point（無上限）`
      },
      details: [
        `【天天刷方案】${name}購票：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        isThsr
          ? '涵蓋高鐵官網、T-EX 行動購票 App、高鐵各站自動售票機與窗口'
          : '涵蓋台鐵官網、台鐵 e-Booking App、台鐵各站自動售票機與窗口',
        !isThsr ? '🔥 台新完勝 CUBE：國泰 CUBE 刷台鐵僅 0.3%，台新卡切天天刷享 3.3% 穩賺！' : '需綁定 Richart / 台新帳戶自動扣繳'
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

  // 10.2. 國際訂房平台 (玩旅刷 3.3%)
  if (channelId === 'travel_booking_ota') {
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
        label: '🏨 線上刷卡輸入卡號一次付清',
        note: '【玩旅刷】Agoda / Booking.com 享 3.3%'
      },
      details: [
        `【玩旅刷方案】Agoda、Booking.com、Trip.com 線上刷卡：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '涵蓋 Agoda、Booking.com、Trip.com、Airbnb、Hotels.com、Expedia 等各大訂房網',
        '⚠️ 避坑提醒：訂房請選「線上預付」與外幣計價，到店付款若非特約機台可能無加碼！',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 10.2b. 旅遊票券與體驗 (Pay著刷 3.8% 首選)
  if (channelId === 'travel_klook_kkday') {
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
        note: '【Pay著刷】Klook / KKday 享最高 3.8%（直刷享 3.3%）'
      },
      details: [
        `【Pay著刷方案】Klook、KKday 結帳選擇 LINE Pay 掃碼：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '🔥 首選 LINE Pay：出示 LINE Pay 條碼享 3.8%，比直接輸入卡號切玩旅刷 (3.3%) 多賺 0.5%！',
        '需綁定 Richart / 台新帳戶自動扣繳'
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

  // 10.4. 車內感應計程車 (天天刷 / Pay著刷)
  if (channelId === 'transit_taxi_meter') {
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
        label: '🚖 車載出示 LINE Pay 條碼享 3.8%；車內實體機刷卡切【天天刷】3.3%',
        note: '台灣大車隊、yoxi 均有加碼'
      },
      details: [
        `【Pay著刷方案】車載螢幕出示 LINE Pay 付款：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【天天刷方案】車內實體刷卡機過卡或 App 扣款：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '💡 若車內實體機支援感應，首推永豐 SPORT 卡享最高 7%！'
      ],
      isSchemeDependent: true
    };
  }

  // 10.5. App 網約叫車 (天天刷 / Pay著刷)
  if (channelId === 'transit_taxi_app') {
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
        label: '📱 LINE GO 選擇 LINE Pay 享 3.8%；Uber / Grab App 綁卡切【天天刷】3.3%',
        note: 'LINE GO 首選台新 LINE Pay 3.8%'
      },
      details: [
        `【Pay著刷方案】LINE GO 叫車選擇 LINE Pay 支付：${isLinked ? 3.8 : baseRate}% 台新Point（避開 CUBE 僅 0.3% 地雷）`,
        `【天天刷方案】Uber / Grab App 綁卡直接扣款：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '⚠️ 避坑提醒：Uber / Grab / LINE GO 均為線上扣款，永豐 SPORT 卡僅 1%~2%，切勿使用 SPORT 卡！'
      ],
      isSchemeDependent: true
    };
  }

  // 10.5. 租車與共享汽車 (天天刷)
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
        label: '🚗 和運/格上門市刷卡或 iRent App 扣款',
        note: '【天天刷】指定租車交通出行 3.3%'
      },
      details: [
        `【天天刷方案】指定租車與共享汽車：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '涵蓋和運租車、格上租車、iRent 共享汽車'
      ],
      isSchemeDependent: true
    };
  }

  // 10.5.1 共享機車 (Pay著刷 / LINE Pay)
  if (channelId === 'transit_scooter_sharing') {
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
        label: '📱 GoShare / WeMo App 內選擇 LINE Pay 扣款',
        note: '【Pay著刷】綁定 LINE Pay 享 3.8%（需領券加碼）'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 App 內選擇 LINE Pay 扣款',
          paymentMethod: 'line_pay',
          note: '【Pay著刷】享 3.8%（每期上限 500~1,000 點）'
        },
        {
          schemeName: '天天刷',
          schemeTag: '方案：【天天刷】',
          rewardRate: baseRate,
          paymentLabel: '💳 App 內直接輸入卡號扣款',
          paymentMethod: 'online',
          note: '非天天刷特約名單，僅一般消費 0.5%'
        }
      ],
      details: [
        `【Pay著刷方案】GoShare 與 WeMo App 內選用 LINE Pay 支付：${isLinked ? 3.8 : baseRate}% 台新Point`,
        '需綁定 Richart / 台新帳戶自動扣繳',
        '⚠️ 避坑提醒：若直接在 App 內綁定信用卡卡號自動扣款，未列入天天刷特約名單，僅享一般消費基本回饋！務必優先使用 LINE Pay 支付！'
      ],
      capWarning: '每期帳單加碼上限 1,000 點 (月刷約 $30,303 封頂)',
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

  // 10.7. 日韓美加海外實體
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
        label: '✈️ 海外實體感應 / 插卡（日韓美加等非歐盟）',
        note: '【玩旅刷】海外消費 3.3%'
      },
      details: [`【玩旅刷】日韓美加海外實體外幣消費：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`],
      isSchemeDependent: true
    };
  }

  // 10.8. 歐洲實體 (歐盟排除 0%)
  if (channelId === 'travel_europe') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: 0.0,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 歐盟地區實體商店 0% 排除',
        note: '台新信用卡官方條款排除歐盟實體'
      },
      details: [
        '⚠️ 台新銀行信用卡官方條款明文排除「歐盟地區實體商店交易」，回饋為 0% 排除！',
        '💡 唯一解法：在歐洲實體店請務必改刷國泰 CUBE 卡（切換【趣旅行】享 3.3% 小樹點無上限）！'
      ],
      warning: '⚠️ 台新信用卡排除歐盟實體交易（0% 回饋）！歐洲實體門市請務必改刷國泰 CUBE 卡 (3.3%)！',
      isBlocked: true
    };
  }

  // 11. 全台餐廳
  if (channelId === 'dining_restaurant') {
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
        label: '📱 若支援 LINE Pay 享 3.8%；實體刷卡切【好饗刷】3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（需領券）；【好饗刷】實體刷卡享 3.3%'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 若店家支援 LINE Pay 條碼',
          paymentMethod: 'line_pay',
          note: '需每月領券加碼，上限 500 點'
        },
        {
          schemeName: '好饗刷',
          schemeTag: '方案：【好饗刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 門市實體感應 / 插卡',
          paymentMethod: 'physical',
          note: '全台合法登記餐飲 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷】若店家支援 LINE Pay 條碼結帳：${isLinked ? 3.8 : baseRate}% 台新Point`,
        `【好饗刷】全台餐飲實體消費：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`
      ],
      isSchemeDependent: true
    };
  }

  // 11.5. 全台指定綜合百貨 (大筆刷 3.3% / 京站時代支援 Pay著刷 3.8%)
  if (channelId === 'department_store') {
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
        label: '📱 京站/時代/美麗華出示 LINE Pay 享 3.8%；新光/微風/101實體刷切【大筆刷】享 3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（需領券，上限500點）；【大筆刷】實體刷卡 3.3% 無上限'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 京站/統一時代/美麗華出示 LINE Pay 條碼',
          paymentMethod: 'line_pay',
          note: '支援 LINE Pay 之專櫃享 3.8%（每期上限 500 點）'
        },
        {
          schemeName: '大筆刷',
          schemeTag: '方案：【大筆刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 新光三越/遠百/SOGO/微風/台北101實體刷卡',
          paymentMethod: 'physical',
          note: '全台各大百貨專櫃實體刷卡 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷方案】支援 LINE Pay 之專櫃（京站/時代/美麗華等）：${isLinked ? 3.8 : baseRate}% 台新Point（每期上限 500 點）`,
        `【大筆刷方案】全台各大百貨專櫃實體刷卡（新光三越/遠百/SOGO/微風/101等）：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 11.5.1 專屬購物商場 (大筆刷支援)
  if (
    channelId === 'store_hands_nankang' ||
    channelId === 'store_hands_general' ||
    channelId === 'mall_mingyao' ||
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
        note: '【大筆刷】商場專櫃消費享 3.3%'
      },
      details: [
        `【大筆刷方案】指定商場消費：${isLinked ? 3.3 : baseRate}% 台新Point`,
        '涵蓋明曜百貨、三井Outlet/LaLaport、台隆手創館等',
        '需綁定 Richart / 台新帳戶自動扣繳'
      ],
      isSchemeDependent: true
    };
  }

  // 11.5.1.1 遠東SOGO百貨 / Garden City 大巨蛋
  if (channelId === 'mall_sogo_dome') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: '大筆刷 / Pay著刷',
      requiredSchemeTag: '方案：【大筆刷 / Pay著刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 大巨蛋支援餐廳出示 LINE Pay 享 3.8%；SOGO專櫃實體刷切【大筆刷】享 3.3%',
        note: '大巨蛋潮美食公園部分餐廳支援 LINE Pay 3.8%；SOGO專櫃實體刷切【大筆刷】3.3%'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 大巨蛋潮美食公園支援餐廳出示 LINE Pay',
          paymentMethod: 'line_pay',
          note: '支援 LINE Pay 之餐飲門市享 3.8%（每期上限 500 點）'
        },
        {
          schemeName: '大筆刷',
          schemeTag: '方案：【大筆刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 SOGO百貨各館專櫃實體刷卡',
          paymentMethod: 'physical',
          note: '全台 SOGO 各館專櫃實體刷卡 3.3% 無上限'
        }
      ],
      details: [
        `【大筆刷方案】遠東 SOGO 全台各館專櫃實體刷卡：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        `【Pay著刷方案】大巨蛋潮美食公園支援 LINE Pay 之餐廳：${isLinked ? 3.8 : baseRate}% 台新Point（每期上限 500 點）`,
        '⚠️ 避坑提醒：大巨蛋棒球賽事/演唱會門票（拓元售票）為一般消費 0.3%~1.0%！'
      ],
      isSchemeDependent: true
    };
  }

  // 11.5.2 Xpark 都會型水生公園 (台新現場購票無加碼)
  if (channelId === 'spot_xpark') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: baseRate,
      rewardType: '台新Point',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 現場實體購票僅一般消費',
        note: 'Xpark 現場票務未列入台新指定加碼'
      },
      details: [
        `一般消費基本回饋：${baseRate}% 台新Point`,
        '⚠️ 排除提醒：Xpark 現場售票處未列入台新任何方案加碼名單，實體刷卡僅享基本回饋！',
        '🔥 強烈建議改用：國泰 CUBE 卡切【秋日遊】享 5.0% 首選，或永豐 SPORT 卡 Apple Pay 享 7.0%！'
      ],
      warning: '⚠️ Xpark 現場刷台新僅 0.3%~1.0%！建議改刷 CUBE 秋日遊 (5.0%) 或 SPORT (7.0%)！'
    };
  }

  // 11.5.3 UNITED ARROWS (官網線上無加碼 / 百貨實體享大筆刷 3.3%)
  if (channelId === 'store_united_arrows') {
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
        label: '💳 百貨實體專櫃切【大筆刷】3.3%；官網線上買僅一般消費',
        note: '百貨實體專櫃刷實體享 3.3% 大筆刷；官方購物網站線上刷卡無加碼'
      },
      schemeBranches: [
        {
          schemeName: '大筆刷',
          schemeTag: '方案：【大筆刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 微風/SOGO等百貨專櫃實體刷卡',
          paymentMethod: 'physical',
          note: '實體專櫃依附百貨享 3.3% 無上限'
        }
      ],
      details: [
        `【大筆刷方案】微風、SOGO 等實體百貨專櫃實體刷卡：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
        '⚠️ 官網線上購物提醒：UNITED ARROWS 官方網站線上刷卡未列入加碼，僅享一般消費基本回饋！',
        '🔥 線上購物請改用：國泰 CUBE 卡切換【秋日遊】享 5.0% 小樹點無上限！'
      ],
      isSchemeDependent: true
    };
  }

  // 11.6. 生活藥妝 (天天刷 3.3% / Pay著刷 LINE Pay 3.8%)
  if (channelId === 'drugstore_cosmetics' || channelId === 'drugstore_jp_med') {
    return {
      cardId: 'gogo',
      cardName: '台新卡 (Richart / @GoGo)',
      cardColor: 'from-zinc-800 to-neutral-950',
      rewardRate: isLinked ? 3.8 : baseRate,
      rewardType: '台新Point',
      requiredSchemeName: 'Pay著刷 / 天天刷',
      requiredSchemeTag: '方案：【Pay著刷 / 天天刷】',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 出示 LINE Pay 條碼享 3.8%；實體刷卡切【天天刷】享 3.3%',
        note: '【Pay著刷】LINE Pay 享 3.8%（需領券，上限500點）；【天天刷】實體刷卡 3.3% 無上限'
      },
      schemeBranches: [
        {
          schemeName: 'Pay著刷',
          schemeTag: '方案：【Pay著刷】',
          rewardRate: isLinked ? 3.8 : baseRate,
          paymentLabel: '📱 門市櫃台出示 LINE Pay 條碼',
          paymentMethod: 'line_pay',
          note: '門市出示 LINE Pay 條碼享 3.8%（每期上限 500 點）'
        },
        {
          schemeName: '天天刷',
          schemeTag: '方案：【天天刷】',
          rewardRate: isLinked ? 3.3 : baseRate,
          paymentLabel: '💳 門市實體刷卡 / 實體感應',
          paymentMethod: 'physical',
          note: '連鎖藥妝門市實體感應享 3.3% 無上限'
        }
      ],
      details: [
        `【Pay著刷方案】門市出示 LINE Pay 條碼結帳（康是美/屈臣氏/寶雅等）：${isLinked ? 3.8 : baseRate}% 台新Point（需領券，每期上限 500 點）`,
        `【天天刷方案】門市實體刷卡/感應：${isLinked ? 3.3 : baseRate}% 台新Point（無上限）`,
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
    channelId.startsWith('fashion_') ||
    channelId.startsWith('spot_') ||
    channelId === 'fastfood_mos' ||
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

  if (channelId === 'store_united_arrows') {
    const rate = isCalorieMet && hasQuota ? 7.0 : (isCalorieMet ? 2.0 : 1.0);
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'apple_pay',
        label: '📱 百貨實體專櫃使用 Apple Pay / Google Pay 感應付款享 7.0%',
        note: '實體專櫃感應享最高 7.0% 豐點；官網線上買無 Apple Pay 加碼僅 1%~2%'
      },
      details: [
        `【實體專櫃行動支付】微風/SOGO等實體專櫃使用 Apple Pay 感應：${rate}% 豐點`,
        '⚠️ 官網線上購物提醒：UNITED ARROWS 官方購物網站線上刷卡無感應加碼，僅享一般消費 1%~2%！',
        '💡 官網線上購物首選：國泰 CUBE 卡切換【秋日遊】享 5.0% 小樹點無上限！'
      ],
      capWarning: rate === 7.0 ? '實體專櫃感應享 7%（$6,000 封頂）' : undefined,
      isSchemeDependent: false
    };
  }

  if (channelId === 'fashion_hm') {
    const rate = isCalorieMet && hasQuota ? 7.0 : (isCalorieMet ? 2.0 : 1.0);
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'apple_pay',
        label: '📱 門市臨櫃使用 Apple Pay / Google Pay 感應結帳',
        note: 'H&M 全場唯一救星神卡！嗶手機感應享最高 7.0% 豐點！'
      },
      details: [
        `【全場唯一神卡】H&M 門市臨櫃使用行動支付感應：${rate}% 豐點`,
        '🔥 救星神招：H&M 同時被國泰 CUBE (0.3%) 與台新大筆刷 (0.3%~1%) 雙重排除！永豐 SPORT 是全台唯一能拿 7.0% 的神卡！',
        '每月消費滿 NT$6,000 封頂（可拿滿 350 豐點）'
      ],
      capWarning: rate === 7.0 ? '🔥 H&M 唯一神卡！Apple Pay 感應 7%（$6,000 封頂）' : undefined,
      isSchemeDependent: false
    };
  }

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
        '麥當勞門市與點餐機屬於 NCCC 小額支付平台特約商店，永豐信用卡直接刷卡或 Apple Pay 感應為 0% 排除',
        '建議改用台新切換【Pay著刷】(LINE Pay 3.8%)、永豐 DAWAY (LINE Pay 3%) 或國泰 CUBE (樂饗購 3.3%)！'
      ],
      warning: '⚠️ 麥當勞走實體感應為小額支付 0% 排除！請改用 LINE Pay 或 CUBE 樂饗購！',
      isBlocked: true
    };
  }

  if (channelId === 'fastfood_kfc') {
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: 0.0,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 肯德基小額支付平台 0% 排除',
        note: '門市實體感應無回饋'
      },
      details: [
        '肯德基實體門市與自助點餐機屬於 NCCC 連鎖速食小額支付平台',
        '永豐銀行條款明文排除連鎖速食小額平台，實體刷卡或 Apple Pay 感應為 0% 排除',
        '建議改用台新切換【Pay著刷】(LINE Pay 3.8%)、永豐 DAWAY (LINE Pay 3%) 或國泰 CUBE (樂饗購 3.3%)！'
      ],
      warning: '⚠️ 肯德基走實體機台為小額支付 0% 排除！請改用 LINE Pay 或 CUBE 樂饗購！',
      isBlocked: true
    };
  }

  if (channelId === 'fastfood_pizzahut') {
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: 0.0,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 必勝客門市小額支付 0% 排除',
        note: '門市現場感應或實體刷卡無回饋'
      },
      details: [
        '必勝客實體門市機台多屬 NCCC 小額速食平台，門市現場感應或實體刷卡為 0% 排除',
        '官網線上訂餐若手動輸入 16 碼卡號，無 5% 感應加碼，僅享一般消費 1%~2%',
        '💡 唯一特例：僅 iPhone 用戶在 PK雙饗卡 App 內點選【Apple Pay】線上結帳方享 5% 加碼（最高 7%），但因門市現場 100% 排除，極易踩雷，不推薦作為主力卡',
        '🔥 強烈推薦改刷：國泰 CUBE 卡（切【秋日遊】全通路 5.0% 無上限首選）或台新（LINE Pay 3.8%）！'
      ],
      warning: '⚠️ 必勝客門市走小額支付 0% 排除！強烈建議改刷 CUBE 秋日遊 5.0%！',
      isBlocked: true
    };
  }

  if (channelId === 'fastfood_burgerking') {
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: 0.0,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 漢堡王小額支付平台 0% 排除',
        note: '門市實體感應無回饋'
      },
      details: [
        '漢堡王實體門市與自助點餐機屬於 NCCC 連鎖速食小額支付平台',
        '永豐銀行條款明文排除連鎖速食小額平台，實體刷卡或 Apple Pay 感應為 0% 排除',
        '建議改用台新切換【Pay著刷】(LINE Pay 3.8%) 或永豐 DAWAY (LINE Pay 3.0%)！'
      ],
      warning: '⚠️ 漢堡王走實體機台為小額支付 0% 排除！請改用 LINE Pay 掃碼！',
      isBlocked: true
    };
  }

  if (channelId === 'drink_chill') {
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: 0.0,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 手搖飲小額支付多數 0% 排除',
        note: '大多無 Apple Pay 機台且走小額平台'
      },
      details: [
        '50嵐、得正、龜記等路邊手搖飲大多無 Apple Pay 機台，有刷卡機亦多屬 NCCC 小額平台',
        '永豐信用卡條款明確排除連鎖飲料小額支付，實體感應無回饋（0% 排除）',
        '💡 建議改用：台新卡（切換【Chill刷】享狂暴 10.0% 首選）或永豐 DAWAY（LINE Pay 3%）！'
      ],
      warning: '⚠️ 手搖飲多為小額支付 0% 排除！請改用台新 Chill刷 (10%) 或 LINE Pay！',
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

  if (channelId === 'transit_thsr' || channelId === 'transit_tra') {
    const isThsr = channelId === 'transit_thsr';
    const name = isThsr ? '高鐵' : '台鐵';
    const rate = isCalorieMet && hasQuota ? 7.0 : (isCalorieMet ? 2.0 : 1.0);
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'apple_pay',
        label: `${isThsr ? '🚄' : '🚆'} 車站自動售票機或窗口 Apple Pay / Google Pay 感應購票`,
        note: '機台感應享最高 7%（$6,000 封頂）；線上 App 購票僅 1%~2%'
      },
      details: [
        `車站機台/臨櫃使用 Apple Pay / Google Pay 感應：${rate}% 豐點`,
        `⚠️ 線上購票提醒：若使用${isThsr ? '高鐵 T-EX App' : '台鐵官網/App'}線上刷卡，屬於線上交易無感應加碼，僅享 1%~2%！`,
        `💡 想拿 7% 務必至${name}車站實體機台或售票窗口使用手機感應付款！`
      ],
      capWarning: rate === 7.0 ? '🔥 每月消費 NT$6,000 內享 7%，超過後降為 1%~2%' : undefined,
      warning: rate < 7.0 ? '運動尚未達標或本月 $6,000 感應額度已滿' : undefined
    };
  }

  if (channelId === 'transit_taxi_meter') {
    const rate = isCalorieMet && hasQuota ? 7.0 : (isCalorieMet ? 2.0 : 1.0);
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'apple_pay',
        label: '🚖 台灣大車隊 / yoxi 車上機台使用 Apple Pay / Google Pay / Samsung Pay 感應',
        note: '車上實體機感應享最高 7.0% 豐點（$6,000 封頂）'
      },
      details: [
        `車內實體刷卡機使用 Apple Pay / Google Pay / Samsung Pay 感應：${rate}% 豐點`,
        '台灣大車隊 55688、yoxi 車內均配備感應式刷卡機，運動達標享 7% 封頂',
        '💡 下車請主動向司機說明要使用手機感應支付嗶卡！'
      ],
      capWarning: rate === 7.0 ? '🔥 每月消費 NT$6,000 內享 7%，超過後降為 1%~2%' : undefined
    };
  }

  if (channelId === 'transit_taxi_app') {
    const rate = isCalorieMet ? 2.0 : 1.0;
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'online',
        label: '📱 App 線上自動扣款（無實體感應加碼，僅 1%~2%）',
        note: '⚠️ 線上 App 扣款無 +5% 感應加碼，強烈建議改刷國泰 CUBE (3.3%) 或台新 (3.8%)'
      },
      details: [
        `App 內線上自動扣款：${rate}% 豐點（僅一般消費 1%~2%）`,
        '💥 避坑警示：Uber、LINE GO、Grab 均為 App 線上結帳，無法使用手機臨櫃感應，無法享有 +5% 感應加碼！',
        '👑 最佳替代：請改用國泰 CUBE 卡【趣旅行】3.3% 無上限，或台新卡 3.3%~3.8%！'
      ],
      warning: '線上 App 扣款不適用實體感應支付加碼，回饋大幅縮水！'
    };
  }

  if (channelId === 'transit_scooter_sharing') {
    const rate = isCalorieMet ? 2.0 : 1.0;
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: rate,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'online',
        label: '📱 App 線上自動扣款（無實體感應加碼，僅 1%~2%）',
        note: '⚠️ 線上 App 扣款無 +5% 感應加碼，強烈建議改刷台新 Pay著刷 (3.8%) 或 DAWAY (3%)'
      },
      details: [
        `App 內線上自動扣款：${rate}% 豐點（僅一般消費 1%~2%）`,
        '💥 避坑警示：GoShare 與 WeMo Scooter 均為 App 線上自動扣款，無法使用實體感應，無法享有 +5% 感應加碼！',
        '👑 最佳替代：請改用台新卡【Pay著刷】綁 LINE Pay (3.8%)，或永豐 DAWAY 綁 LINE Pay (3.0%)！'
      ],
      warning: '線上 App 扣款不適用實體感應支付加碼，回饋大幅縮水！'
    };
  }

  if (channelId === 'travel_europe') {
    return {
      cardId: 'sport',
      cardName: '永豐銀行 SPORT 卡',
      cardColor: 'from-emerald-600 to-teal-700',
      rewardRate: 0.0,
      rewardType: '豐點',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 歐盟地區實體商店 0% 排除',
        note: '永豐信用卡官方條款排除歐盟實體'
      },
      details: [
        '⚠️ 永豐銀行官方條款明文排除「歐盟地區實體商店交易（含 Apple Pay 感應）」，回饋為 0% 排除！',
        '💡 唯一解法：在歐洲實體店請務必改刷國泰 CUBE 卡（切換【趣旅行】享 3.3% 小樹點無上限）！'
      ],
      warning: '⚠️ 永豐信用卡排除歐盟實體交易（0% 回饋）！歐洲實體門市請務必改刷國泰 CUBE 卡 (3.3%)！',
      isBlocked: true
    };
  }

  if (channelId === 'travel_airlines' || channelId === 'travel_booking_ota' || channelId === 'travel_klook_kkday' || channelId === 'travel_agencies' || channelId === 'transit_japan_ic') {
    const onlineRate = isCalorieMet ? 2.0 : 1.0;
    const channelNames: Record<string, string> = {
      travel_airlines: '航空機票官網直購',
      travel_booking_ota: 'Agoda / Booking 國際訂房',
      travel_klook_kkday: 'Klook / KKday 旅遊體驗票券',
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

  // 詹記麻辣火鍋：現場不支援 LINE Pay，實體僅 1%
  if (channelId === 'dining_zhanji') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 1.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡僅 1% 一般消費',
        note: '詹記現場不支援 LINE Pay 條碼'
      },
      details: [
        '詹記麻辣火鍋全門市現場「不支援 LINE Pay」條碼結帳',
        '實體刷卡僅享一般消費 1% LINE POINTS',
        '💡 強烈建議改刷：台新卡切換【Chill刷】享 10.0% 台新Point無上限首選！'
      ],
      warning: '⚠️ 詹記現場不收 LINE Pay！DAWAY 實體刷僅 1%！'
    };
  }

  // すき家 SUKIYA：現場不支援 LINE Pay，實體僅 1%
  if (channelId === 'dining_sukiya') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 1.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡僅 1% 一般消費',
        note: 'すき家現場不支援 LINE Pay 條碼'
      },
      details: [
        '台灣すき家實體門市現場「不支援 LINE Pay」條碼付款',
        '實體刷卡僅享一般消費 1% LINE POINTS',
        '💡 強烈建議改刷：國泰 CUBE 卡切【秋日遊】享 5.0% 首選！'
      ],
      warning: '⚠️ すき家現場不收 LINE Pay！DAWAY 實體刷僅 1%！'
    };
  }

  // 快時尚 ZARA / H&M：現場與官網不支援 LINE Pay，純實體僅 1%
  if (channelId === 'fashion_zara' || channelId === 'fashion_hm') {
    const brandName = channelId === 'fashion_zara' ? 'ZARA' : 'H&M';
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 1.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'physical',
        label: '💳 門市實體刷卡僅 1% 一般消費',
        note: `${brandName} 現場與官網皆不支援 LINE Pay 條碼`
      },
      details: [
        `${brandName} 全台門市與官網「不支援 LINE Pay」條碼付款`,
        '實體刷卡僅享一般消費 1% LINE POINTS',
        channelId === 'fashion_hm'
          ? '🔥 強烈建議改刷：永豐 SPORT 卡以 Apple Pay 感應結帳享 7.0% 豐點首選（唯一神卡）！'
          : '💡 強烈建議改刷：台新卡切換【大筆刷】享 3.3% 或永豐 SPORT 卡 Apple Pay 享 7.0% 首選！'
      ],
      warning: `⚠️ ${brandName} 現場不收 LINE Pay！DAWAY 實體刷僅 1%！`
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

  if (channelId === 'fastfood_kfc') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市櫃台/自助機出示 LINE Pay 條碼',
        note: '肯德基支援 LINE Pay 條碼'
      },
      details: [
        `肯德基出示 LINE Pay 條碼：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '🔥 出示 LINE Pay 掃碼成功繞過肯德基門市小額支付 0% 排除！',
        '⚠️ 實體卡直接感應或插卡走小額支付為 0% 排除，切勿使用實體卡！'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'fastfood_pizzahut') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市或線上訂餐出示 LINE Pay 條碼',
        note: '必勝客支援 LINE Pay 結帳'
      },
      details: [
        `必勝客出示 LINE Pay 條碼：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ 純實體卡在門市刷卡多為小額排除或僅 1% 一般消費'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'fastfood_burgerking') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 門市櫃台/官網線上點餐出示 LINE Pay 條碼',
        note: '漢堡王支援 LINE Pay 條碼'
      },
      details: [
        `漢堡王出示 LINE Pay 條碼：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '🔥 出示 LINE Pay 掃碼成功繞過漢堡王門市小額支付 0% 排除！',
        '⚠️ 實體卡直接感應或插卡走小額支付為 0% 排除，切勿使用實體卡！'
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

  if (channelId === 'streaming_video' || channelId === 'streaming_music') {
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
        '串流訂閱線上刷卡：1.0% LINE POINTS',
        channelId === 'streaming_video'
          ? '🔥 強烈建議改用台新卡（切換【Chill刷】享狂暴 10.0%）或國泰 CUBE（玩數位 3.3%）！'
          : '👑 強烈建議改用國泰 CUBE（切換【玩數位】享 3.3% 無上限）或台新（數趣刷 3.3%）！'
      ],
      warning: 'DAWAY 刷串流線上扣繳僅 1%！'
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

  if (channelId === 'transit_thsr' || channelId === 'transit_tra') {
    const isThsr = channelId === 'transit_thsr';
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: `${isThsr ? '🚄' : '🚆'} 車站售票窗口/機台出示 LINE Pay 掃碼`,
        note: '窗口掃 LINE Pay 享加碼；實體刷卡僅 1%'
      },
      details: [
        `車站臨櫃若支援出示 LINE Pay 條碼付款：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        `⚠️ 若使用實體卡插卡或線上${isThsr ? '高鐵 T-EX' : '台鐵官網'}刷卡僅享 1% 一般消費！`
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'transit_taxi_meter') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '🚖 叫車出示 LINE Pay 條碼（台灣大車隊/yoxi）',
        note: 'LINE Pay 結帳享加碼'
      },
      details: [
        `計程車結帳出示 LINE Pay 條碼：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ 若使用實體卡過卡僅享 1% 一般消費'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
    };
  }

  if (channelId === 'transit_taxi_app') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 LINE GO 綁定 LINE Pay 享 3% / Grab 海外 3% / Uber 線上僅 1%',
        note: 'LINE GO 支援 LINE Pay 享加碼；Grab 海外享 3%'
      },
      details: [
        `LINE GO 叫車使用 LINE Pay 扣款：${lpRate}% LINE POINTS`,
        'Grab 東南亞外幣叫車：3.0% LINE POINTS（海外消費無上限）',
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
        label: '🏨 線上刷卡（選外幣結帳享 3%）',
        note: '海外外幣消費享 3% LINE POINTS 無上限'
      },
      details: [
        'Agoda / Booking.com / Trip.com / Airbnb 海外外幣扣款：3.0% LINE POINTS（回饋無上限）',
        '⚠️ 避坑提醒：請務必選擇外幣計價（如日幣/美金）結帳扣款；若選擇台幣扣款僅享一般消費 1%！'
      ],
      capWarning: '✅ 海外外幣消費回饋無上限！'
    };
  }

  if (channelId === 'travel_klook_kkday') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 結帳選擇 LINE Pay 條碼付款',
        note: 'Klook / KKday 支援 LINE Pay 享加碼'
      },
      details: [
        `Klook / KKday 結帳選擇 LINE Pay：${lpRate}% LINE POINTS`,
        isNew ? '新戶加碼享 3%（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ 若直接在網頁輸入卡號線上刷卡，僅享一般消費 1%！'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
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

  if (channelId === 'transit_scooter_sharing') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: lpRate,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'line_pay',
        label: '📱 GoShare / WeMo App 內選擇 LINE Pay 扣款',
        note: isNew ? '新戶綁 LINE Pay 享 3.0%' : '舊戶綁 LINE Pay 享 1.5%'
      },
      details: [
        `GoShare / WeMo App 內綁定 LINE Pay 付款：${lpRate}% LINE POINTS`,
        isNew ? '新戶享 3.0% LINE POINTS（加碼上限每期 800 點）' : '舊戶享 1.5% LINE POINTS',
        '⚠️ 避坑提醒：若直接在 App 內輸入信用卡 16 碼卡號線上扣款，不適用 LINE Pay 加碼，僅享一般消費 1%！'
      ],
      capWarning: isNew ? '新戶加碼每期上限 800 點' : undefined
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
        label: '海外實體刷卡（日韓美加等非歐盟）',
        note: '海外消費 3% 回饋'
      },
      details: ['日韓美加海外外幣實體消費享 3% LINE POINTS 無上限']
    };
  }

  if (channelId === 'travel_europe') {
    return {
      cardId: 'daway',
      cardName: '永豐銀行 DAWAY 卡',
      cardColor: 'from-sky-500 to-blue-600',
      rewardRate: 0.0,
      rewardType: 'LINE POINTS',
      bestPaymentMethod: {
        method: 'physical',
        label: '❌ 歐盟地區實體商店 0% 排除',
        note: '永豐全卡別官方條款排除歐盟實體'
      },
      details: [
        '⚠️ 永豐銀行官方條款明文排除「歐盟地區實體商店交易」，回饋為 0% 排除！',
        '💡 唯一解法：在歐洲實體店請務必改刷國泰 CUBE 卡（切換【趣旅行】享 3.3% 小樹點無上限）！'
      ],
      warning: '⚠️ 永豐 DAWAY 排除歐盟實體交易（0% 回饋）！歐洲實體門市請務必改刷國泰 CUBE 卡 (3.3%)！',
      isBlocked: true
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
