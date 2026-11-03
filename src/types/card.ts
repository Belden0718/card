export type CardId = 'cube' | 'gogo' | 'sport' | 'daway';

export type CubeScheme = 
  | 'selected'   // 集精選
  | 'dining'     // 樂饗購
  | 'digital'    // 玩數位
  | 'travel'     // 趣旅行
  | 'kids'       // 童樂匯
  | 'finance';   // 來金網

export interface UserCardConfig {
  cubeScheme: CubeScheme;
  sportCalorieMet: boolean;       // 汗水不白流 7,000 大卡達標
  sportQuotaAvailable: boolean;   // AP/GP 每月 $6,000 額度尚未用盡
  dawayIsNewUser: boolean;        // 新戶 3% / 舊戶 1.5%
  gogoRichartLinked: boolean;     // 已綁定 Richart 自動扣繳 + 數位帳單
}

export type PaymentMethod = 
  | 'apple_pay'      // Apple Pay 感應
  | 'google_pay'     // Google Pay 感應
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
  isSchemeDependent?: boolean; // 是否受 CUBE 方案影響
  schemeSuggestion?: {
    recommendedScheme: CubeScheme;
    potentialRate: number;
    difference: number;
  };
  warning?: string; // 負面警告（例如超商 0%、無法使用該卡）
  isBlocked?: boolean; // 完全無法使用或直接0%
}
