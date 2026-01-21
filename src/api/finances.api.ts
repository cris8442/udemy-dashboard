const API_BASE_URL = `https://api.coingecko.com/api/v3/`;

export const FinancesApi = {
    getFinances: async () => {
        const response = await fetch(
        `${API_BASE_URL}coins/ethereum/market_chart?vs_currency=eur&days=30`
        );

        if (!response.ok) {
        throw new Error("Error fetching finances");
        }

        return response.json();
    }
}