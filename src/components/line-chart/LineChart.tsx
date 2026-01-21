import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

interface Props {
  prices: [number, number][];
}

export const LineChart = ({ prices }: Props) => {
  const data = {
    labels: prices.map(p =>
      new Date(p[0]).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Precio BTC (USD)",
        data: prices.map(p => p[1]),
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
