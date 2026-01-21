import { useEffect, useState } from "react";
import { useFinances } from "../../providers/FinancesProvider";
import LineChart from "../../components/line-chart/LineChart";
import Card from "../../components/card";

const Finances: React.FC = () => {

    const [prices, setPrices] = useState(undefined);
    const {getFinancesData} = useFinances();

    useEffect(()=> {
        const fetchData = async()=> {
            return getFinancesData().then((response)=> {
                console.log("Response", response)
                setPrices(response.prices);
            })
        }
        fetchData();
    }, []);

    return(
        <div className="grid">
            {prices && (
                <>
                <Card>
                    <LineChart
                        prices={prices}
                    ></LineChart>
                </Card>
                <Card>
                    <LineChart
                        prices={prices}
                    ></LineChart>
                </Card>
                <Card>
                    <LineChart
                        prices={prices}
                    ></LineChart>
                </Card>
                <Card>
                    <LineChart
                        prices={prices}
                    ></LineChart>
                </Card>
                <Card>
                    <LineChart
                        prices={prices}
                    ></LineChart>
                </Card>
                </>
                
                
            )}
        </div>
    );

}

export default Finances;