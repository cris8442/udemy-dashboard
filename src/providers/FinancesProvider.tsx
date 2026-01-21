import {createContext, useContext, useEffect, useState} from 'react';
import type { FinancesContextType } from '../classes/finances-context-type';
import type { ProviderProps } from '../classes/provider-props';
import { FinancesApi } from '../api/finances.api';


const FinancesContext = createContext<FinancesContextType | undefined>(undefined);

export const FinancesProvider = ({ children }: ProviderProps) => {

    const [data, setData] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getFinancesData = async () => {
        try{

            setLoading(true);
            setError(null);
            const response = await FinancesApi.getFinances();
            setData(response);
        }catch(err: any) {
            setError("Error loading finances");
        }finally{
            setLoading(false);
        }
    }

    return (
        <FinancesContext.Provider
            value={{
                data,
                loading,
                error,
                getFinancesData,
            }}
        >
            {children}
        </FinancesContext.Provider>
    )
}

export const useFinances = () => useContext(FinancesContext);