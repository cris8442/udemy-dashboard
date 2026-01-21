import { useEffect } from "react";
import { useFinances } from "../../providers/FinancesProvider";

const Finances: React.FC = () => {

    const {getFinancesData} = useFinances();

    useEffect(()=> {
        getFinancesData();
    }, []);

    return(
        <></>
    );

}

export default Finances;