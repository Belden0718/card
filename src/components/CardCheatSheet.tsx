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
                <span><strong>實體感應神卡</strong>：全台加油站、連鎖餐飲、量販超市（家樂福/大潤發/愛買）、生活門市（無印良品、誠品生活、小北百貨、大創、迪卡儂）出示 <strong>Apple Pay / Google Pay / Samsung Pay / Garmin Pay 4大感應支付</strong>，享最高 7%（月刷 $6,000 封頂）！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>官方指定通路 (免感應即享 7%)</strong>：<strong>健康生鮮</strong> (里仁、棉花田、聖德科斯)、<strong>電競娛樂</strong> (App Store、Google Play、Steam、PS Store、Switch)、<strong>運動健身</strong> (World Gym、健身工廠、Curves、摩曼頓)、<strong>醫藥保健</strong> (屈臣氏、康是美、寶雅、大樹藥局)。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                <span><strong>⚠️ 避雷排除</strong>：<strong>好市多 Costco</strong> (0% 刷不過)、<strong>四大超商</strong> (7-11不支援/全家0%排除)、<strong>全聯</strong> (0%)、<strong>麥當勞小額</strong> (0%)、<strong>保費</strong> (0%)、<strong>Apple 官網/直營店大額買 iPhone</strong> (超過 $6,000 封頂降為 1% 被嚴重稀釋，買空機首選台新大筆刷 3.3%)！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>門檻與上限</strong>：需運動達標（大咖 App / 汗水不白流 10,000 大卡或 Apple Watch 畫圈 10 次）且設定自動扣繳；+5% 指定加碼每月上限 300 點（折合月刷 NT$6,000 封頂），超過後降為 1%~2%。</span>
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
                <span><strong>🍹 Chill刷 (5%~10%)</strong>：手搖飲（50嵐/得正/UG）、燒肉火鍋酒吧（詹記/屋馬/海底撈/茶六/臺虎）狂享 <strong>10%</strong>！頂級Buffet（饗饗）、影音閱讀（Netflix/巴哈動畫瘋）、連鎖健身（健身工廠/World Gym/Anytime）享 <strong>5%</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>📱 Pay著刷 (2.3%~3.8%)</strong>：四大超商出示<strong>「台新Pay」掃碼</strong>享 <strong>3.8% 無上限</strong>（單筆上限 $3,000）！<strong>小北百貨</strong>、新光三越、IKEA 與全台 42 萬 TWQR 特店（美廉社、燦坤/全國3C、麥當勞）通殺 3.8%！日韓赴外使用<strong>「台新Pay+」</strong>享 3.8% + 免收 1.5% 手續費！LINE Pay 享基本 2.3%（APP 領券加碼達 3.8%）！支援全盈+PAY 2.3%！<strong>⚠️ 街口支付、全支付官方排除加碼（僅 0.3%~0.5%）！</strong></span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>⚡ 天天刷 (3.3%~3.8%)</strong>：中油直營/全國加油、<strong>高鐵台鐵雙通吃 3.3%（CUBE台鐵僅0.3%完勝！）</strong>、超商<strong>出示「台新Pay」享 3.8%</strong>（單筆上限$3,000，實體卡0%排除）、量販超市（<strong>大買家量販</strong>、家樂福/大全聯大潤發/唐吉訶德/美廉社 3.3%；⚠️ 愛買量販未列入天天刷僅 0.5%）、<strong>寶雅生活館與5大連鎖藥局（大樹/杏一/丁丁/佑全/健康人生 3.3% 無上限，CUBE僅0.3%完勝！）</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>🛍️ 大筆刷 (3.3%)</strong>：全台 15 大百貨（新光三越/遠百/SOGO/微風/101/巨城/誠品）、<strong>無印良品 (MUJI)</strong>、<strong>德誼數位/Studio A 蘋果專賣</strong>、Outlet（三井/華泰/SKM Park）、居家裝修（特力屋/宜得利/IKEA/HOLA）、快時尚（UNIQLO/GU/ZARA/NET）直刷享 <strong>3.3%</strong>！每期上限為「信用額度+30萬」，買高單價 iPhone 16 / MacBook 首選神卡！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>🍱 好饗刷 (3.3%)</strong>：全台餐飲（MCC 5811~5814、王品瘋Pay）、外送、<strong>搶演唱會門票（拓元/KKTIX/寬宏/年代/OPENTIX/FunNow）</strong>、<strong>連鎖 KTV（錢櫃/好樂迪/ONCOR/享溫馨）</strong>、<strong>8大指定星級飯店（晶華/萬豪/煙波/老爺/福華/漢來/君悅/寒沐）</strong>實體刷享 <strong>3.3% 無上限</strong>！CUBE 在售票與 KTV 僅 0.3%，好饗刷全面完勝！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>💻 數趣刷 (3.3%)</strong>：綜合網購電商（蝦皮/momo/PChome/酷澎/淘寶/Amazon/博客來）、<strong>線上課程（Hahow/知識衛星/AmazingTalker，CUBE僅0.3%完勝！）</strong>、電玩主機（Steam/PlayStation/Switch/MyCard/橘子）、AI工具（ChatGPT/Claude/Cursor/Notion）、App Store/Google Play 課金直刷享 <strong>3.3% 無上限</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>✈️ 玩旅刷 (3.3%)</strong>：全球指定航空（華航/長榮/星宇/虎航/日航）、訂房OTA（Agoda/Booking/Klook/KKday）、各大旅行社（雄獅/可樂/易遊網）、海外外幣消費、Apple錢包日圓交通卡加值享 <strong>3.3% 無上限</strong>！赴日韓支援特店出示「台新Pay+」享 <strong>3.8% + 免收 1.5% 境外手續費（實質 5.3%）</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-zinc-700 shrink-0 mt-0.5" />
                <span><strong>🎉 假日刷 (2.0% & 保費神卡)</strong>：國內週六、週日與國定放假日，不限通路享 <strong>2.0% 台新Point</strong>（加碼上限為額度+30萬）！<strong>大額保費神密技</strong>：於週六日手動線上刷卡繳各家壽險/產險保費，通通享 <strong>2.0%</strong>！CUBE 繳非國泰保費僅 0.3%，永豐全行保費 0% 排除，台新假日刷壓倒性稱霸！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>超大地雷</strong>：1. 在超商<strong>絕對不能拿實體卡感應或插卡（直接 0%）</strong>！必須出示「台新Pay」！2. <strong>好市多 Costco 0% 刷不過</strong>（僅限富邦聯名卡）！3. <strong>街口支付、全支付「排除加碼」（僅 0.3%~0.5%）</strong>！4. 百貨館內 <strong>Apple 直營店（101 / A13）</strong>為獨立刷卡機排除加碼（僅 0.3%~0.5%）！買 iPhone 請改至德誼/Studio A 享 3.3%！5. 專櫃辦「分期付款」直接排除 3.3% 加碼！</span>
              </li>
            </ul>
          </div>

          {/* 3. 國泰世華 CUBE 卡 */}
          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-amber-900 text-sm">國泰世華 CUBE 卡</span>
              <span className="text-xs font-black bg-amber-500 text-white px-2 py-0.5 rounded-full">
                指定 2%~3.3% 無上限 (Lv2 3.0%)
              </span>
            </div>
            <ul className="text-xs text-amber-950 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>靈活權益切換</strong>：每天可換一次（23:59前切換整天生效）。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>集精選 (固定 2.0%)</strong>：中油直營、指定充電、車麻吉/uTagGo、7-11、全家、全聯、家樂福、LOPIA、IKEA 回饋<strong>固定 2.0% 無上限</strong>（不分會員等級，一般0.3%+加碼1.7%）！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>樂饗購 (Lv2 3.0% / Lv3 3.3%) & 童樂匯</strong>：<strong>無印良品 (MUJI)</strong>、<strong>誠品生活/書店</strong>、各大百貨、餐廳、日韓藥妝享 <strong>3.0%~3.3% 無上限</strong>！新手爸媽切換<strong>【童樂匯 3.0%】</strong>享卡多摩、麗嬰房、媽媽餵專屬加碼！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>玩數位 & 趣旅行 (Lv2 3.0% / Lv3 3.3%)</strong>：蝦皮/momo/淘寶/串流、台灣高鐵、全球航空機票、Agoda/Booking/Klook、海外實體享 <strong>3.0%~3.3% 無上限</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>台塑家 (2%) & 全支付 (2%)</strong>：台塑/台亞/福懋/速邁樂加油站享 <strong>2% 小樹點無上限</strong> + 天天汽油每公升降價 1.2 元起！全支付 App 綁定 CUBE 卡於指定特約門市與全聯消費享 <strong>2% 無上限</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>🍁 秋日遊 (10/01~11/30 期間限定 3%~8%)</strong>：日本實體 3.5%、四大機場免稅 4%、Suica/ICOCA 交通卡 5%、IP名店（寶可夢/三麗鷗）與人氣店 5%！國內日系餐飲（<strong>壽司郎、摩斯漢堡、すき家、初魚、橘色涮涮屋</strong>）享狂暴 <strong>8%</strong>！SOGO百貨/明曜享 <strong>5%</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>🎂 慶生日 (7月壽星專屬 3.5%~10%)</strong>：生日當月切換！口碑名店聚餐（<strong>屋馬、詹記、茶六、老井、老四川、鼎王、壽司郎、龍都酒樓、新東南、JAI宅、法朋、興波咖啡</strong>）直接拿狂暴 <strong>10% 小樹點無上限</strong>！全台實體百貨專櫃享 <strong>3.5%</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>超大地雷 1</strong>：<strong>好市多 Costco 0% 刷不過</strong>（直接拒絕交易）！<strong>愛買量販 (a.mart)、小北百貨、迪卡儂/大創獨立店、Apple 101/A13 官方直營店</strong>均未列入加碼名單，刷 CUBE 僅享一般消費 <strong>0.3%</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>超大地雷 2</strong>：7-11、全家、全聯若「未切換至集精選」，直接列為 <strong>0% 排除</strong>！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>超大地雷 3</strong>：趣旅行<strong>僅限「高鐵」！「台鐵（火車）」不在加碼名單中（僅0.3%）</strong>；且機票/旅行社若辦「分期」直接降為 0.3%！</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>超大地雷 4</strong>：<strong>第三方行動支付（LINE Pay、街口支付）在絕大多數實體門市均被排除加碼，僅享 0.3% 基本回饋</strong>！如需刷行動支付請改切專屬【全支付 2%】方案，或換卡刷台新Pay/DAWAY！</span>
              </li>
            </ul>
          </div>

          {/* 4. 永豐 DAWAY 卡 */}
          <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sky-900 text-sm">永豐 DAWAY 卡</span>
              <span className="text-xs font-black bg-sky-600 text-white px-2 py-0.5 rounded-full">
                LINE Pay 3.0% / 2.0%
              </span>
            </div>
            <ul className="text-xs text-sky-950 space-y-1.5">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>LINE Pay 主力</strong>：全台實體生活門市（無印良品、誠品生活、小北百貨、大創、迪卡儂、婦幼生活）臨櫃出示 LINE Pay 條碼享新戶 <strong>3.0%</strong> / 舊戶 <strong>2.0%</strong> (基礎 0.5% + 加碼 1.5%)。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                <span><strong>上限注意</strong>：舊戶加碼 1.5% 每期上限 300 點（折合每月消費 NT$20,000 封頂）；新戶加碼每月滿 NT$40,000 封頂，超額後均降為 0.5% 無上限。</span>
              </li>
              <li className="flex items-start gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span><strong>超大地雷</strong>：<strong>好市多 Costco 0% 刷不過</strong>；<strong>7-ELEVEN 門市 LINE Pay 不支援永豐卡</strong>；<strong>Apple 官方直營店/官網不支援 LINE Pay（僅享一般 1.0%）</strong>！</span>
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
                <span className="text-right text-amber-300 font-semibold">⚠️ 舊戶月刷 $2萬 / 新戶 $4萬 封頂（超額降為 0.5%）</span>
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
