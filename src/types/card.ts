export type CardId = 'cube' | 'gogo' | 'sport' | 'daway';

export type CubeScheme = 
  | 'selected'   // 集精選 (中油直營/超商/全聯/家樂福/IKEA 固定 2%)
  | 'travel'     // 趣旅行 (海外實體/高鐵/機票/訂房 3%)
  | 'dining'     // 樂饗購 (餐廳/外送/百貨 3%)
  | 'digital'    // 玩數位 (網購電商/串流/AI 3%)
  | 'formosa'    // 台塑家 (台塑/台亞/福懋/速邁樂 2% + 汽油天天降價)
  | 'pxpay'      // 全支付 (綁定全支付享 2% 無上限)
  | 'autumn'     // 秋日遊 (10/01~11/30 期間限定 3%~8%)
  | 'birthday'   // 慶生日 (當月壽星精選餐飲/百貨 3.5%~10%)
  | 'japan'      // 日本賞 (Suica/免稅店加碼 3.5%~8%)
  | 'kids'       // 童樂匯 (婦幼育兒/遊樂園 3%)
  | 'finance';   // 來金網 (保費/理財 3%)

export type TaishinScheme =
  | 'daily'      // 天天刷 (超商/加油/通勤/藥妝 3.3%~3.8%)
  | 'pay'        // Pay著刷 (台新Pay 3.8% 全超商通殺 / LINE Pay)
  | 'chill'      // Chill刷 (手搖/火鍋/追劇串流 最高 10%)
  | 'dining'     // 好饗刷 (外送/餐飲/娛樂 3.3%)
  | 'digital'    // 數趣刷 (網購/線上影音/AI 3.3%)
  | 'travel'     // 玩旅刷 (海外/機票/訂房 3.3%)
  | 'big'        // 大筆刷 (百貨/Outlet/裝修 3.3%)
  | 'holiday';   // 假日刷 (節假日不限通路 2.0%)

export interface UserCardConfig {
  cubeScheme: CubeScheme;
  cubeLevel?: 1 | 2 | 3;          // CUBE 會員等級: Lv1(2%) | Lv2(3.0% 預設) | Lv3(3.3% 財管)
  sportCalorieMet: boolean;       // 汗水不白流 7,000 大卡達標
  sportQuotaAvailable: boolean;   // AP/GP/SP 每月加碼額度尚未用盡
  dawayIsNewUser: boolean;        // 新戶 3% / 舊戶 1.5%
  gogoRichartLinked: boolean;     // 已綁定 Richart 自動扣繳 + 數位帳單
  taishinScheme: TaishinScheme;   // 台新完整 7+1 權益自選方案
  ownedCards?: Record<CardId, boolean>; // 我持有的卡片開關（未持有者不推薦為 No.1）
}

export type PaymentMethod = 
  | 'apple_pay'      // Apple Pay 感應
  | 'google_pay'     // Google Pay 感應
  | 'samsung_pay'    // Samsung Pay 感應
  | 'garmin_pay'     // Garmin Pay 感應
  | 'taishin_pay'    // 台新Pay 掃碼
  | 'line_pay'       // LINE Pay 條碼
  | 'jko_pay'        // 街口支付 條碼
  | 'px_pay'         // 全支付 / PX Pay 條碼
  | 'taiwan_pay'     // 台灣Pay / TWQR 共通條碼
  | 'physical'       // 實體插卡/感應
  | 'online'         // 線上刷卡
  | 'open_wallet'    // OPEN 錢包
  | 'fami_pay';      // 全盈+PAY / FamiPay

export interface ScenarioChannel {
  id: string;
  name: string;
  category: 'gas' | 'convenience' | 'online' | 'food' | 'supermarket' | 'department' | 'travel' | 'drink' | 'general';
  icon: string;
  description: string;
  pitfalls: string[]; // 踩坑避雷提醒
}

export interface CapInfo {
  isUnlimited: boolean;           // 是否無上限
  monthlySpendCap?: number;       // 每月消費封頂上限 (NT$)
  pointCap?: number;              // 每月回饋點數上限
  perTxCap?: number;              // 單筆消費限額 (NT$)
  capNote: string;                // 易懂說明 (例如: "每月消費滿 NT$6,000 封頂", "回饋無上限")
}

export interface SchemeBranch {
  schemeName: string;          // 例如: "Pay著刷"
  schemeTag?: string;          // 例如: "方案：【Pay著刷】"
  rewardRate: number;          // 例如: 3.8
  rewardType?: string;         // 例如: "台新Point"
  paymentLabel: string;        // 例如: "出示 LINE Pay 條碼"
  paymentMethod: PaymentMethod;
  note?: string;               // 例如: "需每月領券加碼"
  capNote?: string;            // 例如: "加碼上限 500 點"
}

export interface CardRewardResult {
  cardId: CardId;
  cardName: string;
  cardColor: string;
  rewardRate: number; // e.g. 7.0 for 7%
  rewardType: string; // e.g. "豐點", "小樹點", "台新Point", "LINE POINTS"
  requiredSchemeName?: string; // 最佳方案名稱，如 "玩數位"、"集精選"、"Pay著刷"
  requiredSchemeTag?: string;  // 易讀方案標籤，如 "切換【玩數位】"、"切換【Pay著刷】"
  bestPaymentMethod: {
    method: PaymentMethod;
    label: string;
    note?: string;
  };
  details: string[]; // 回饋組成細節
  capInfo?: CapInfo; // 完整封頂與上限機制
  capWarning?: string; // 封頂上限提示標籤
  isSchemeDependent?: boolean; // 是否受方案影響
  schemeBranches?: SchemeBranch[]; // 方案 B：卡片內部並列之多方案/多途徑分支
  schemeSuggestion?: {
    cardName: string;
    schemeType: 'cube' | 'taishin';
    recommendedScheme: string;
    recommendedSchemeKey: string;
    potentialRate: number;
    difference: number;
  };
  warning?: string; // 負面警告（例如超商 0%、無法使用該卡）
  isBlocked?: boolean; // 完全無法使用或直接0%
}
