export interface FinancesContextType {
    data: any | null;
    loading: boolean;
    error: string | null;
    getFinancesData: () => Promise<void>;
}

export interface FinancesResponse {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}
