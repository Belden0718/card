export type CardId = 'cube' | 'gogo' | 'sport' | 'daway';

export type CubeScheme = 
  | 'selected'   // 集精選
  | 'dining'     // 樂饗購
  | 'digital'    // 玩數位
  | 'travel'     // 趣旅行
  | 'kids'       // 童樂匯
  | 'finance';   // 來金網

export type TaishinScheme =
  | 'daily'      // 天天刷 (超商/加油/通勤/藥妝 3.8%)
  | 'big';       // 大筆刷 (百貨/Outlet/居家 3.8%)

export interface UserCardConfig {
  cubeScheme: CubeScheme;
  sportCalorieMet: boolean;       // 汗水不白流 7,000 大卡達標
  sportQuotaAvailable: boolean;   // AP/GP/SP 每月加碼額度尚未用盡
  dawayIsNewUser: boolean;        // 新戶 3% / 舊戶 1.5%
  gogoRichartLinked: boolean;     // 已綁定 Richart 自動扣繳 + 數位帳單
  taishinScheme: TaishinScheme;   // 台新權益方案 (天天刷 / 大筆刷)
}

export type PaymentMethod = 
  | 'apple_pay'      // Apple Pay 感應
  | 'google_pay'     // Google Pay 感應
  | 'samsung_pay'    // Samsung Pay 感應
  | 'garmin_pay'     // Garmin Pay 感應
  | 'taishin_pay'    // 台新Pay 掃碼
  | 'line_pay'       // LINE Pay 條碼
  | 'physical'       // 實體插卡/感應
  | 'online'         // 線上刷卡
  | 'open_wallet'    // OPEN 錢包
  | 'fami_pay';      // 全盈+PAY / FamiPay

export interface ScenarioChannel {
  id: string;
  name: string;
  category: 'gas' | 'convenience' | 'online' | 'food' | 'supermarket' | 'travel' | 'general';
  icon: string;
  description: string;
  pitfalls: string[]; // 踩坑避雷提醒
}

export interface CardRewardResult {
  cardId: CardId;
  cardName: string;
  cardColor: string;
  rewardRate: number; // e.g. 7.0 for 7%
  rewardType: string; // e.g. "豐點", "小樹點", "台新Point", "LINE POINTS"
  bestPaymentMethod: {
    method: PaymentMethod;
    label: string;
    note?: string;
  };
  details: string[]; // 回饋組成細節
  capWarning?: string; // 封頂上限提醒
  isSchemeDependent?: boolean; // 是否受方案影響
  schemeSuggestion?: {
    recommendedScheme: string;
    potentialRate: number;
    difference: number;
  };
  warning?: string; // 負面警告（例如超商 0%、無法使用該卡）
  isBlocked?: boolean; // 完全無法使用或直接0%
}
