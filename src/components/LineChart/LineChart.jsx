import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineData = {
    labels: ['2021','2022','2023','2024', '2025'],
    datasets: [ {
        label: 'Receita',
        data: [8, 18,20, 33, 36],
        borderColor: "rgba(35, 86, 120, 1)",
        tension: 0.25
    }
    ]
}

const options = {
    scales: {
        x: {
            ticks: {
                color: "rgb(16 42 59)"
            },
            grid: {
                color: "rgba(248, 250, 252, 0)"
            }
        },
        y: {
            ticks: {
                color: "rgb(16 42 59)"
            },
            grid: {
                color: "rgba(16, 42, 59, 0.6)"
            }
        }
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: 'white',
                font: {
                    size: 14,
                }
            }
        }
    }
};

export default function BarChart() {
    return <Line options={options} data={LineData}/>
}