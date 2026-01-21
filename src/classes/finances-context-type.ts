export interface FinancesContextType {
    data: any | null;
    loading: boolean;
    error: string | null;
    getFinancesData: () => Promise<void>;
}