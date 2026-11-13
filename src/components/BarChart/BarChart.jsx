import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarData = {
    labels: ['Janeiro', 'Fevereiro', 'Março'], 
    datasets: [
        {
            label: 'Lixo reciclável jogado no chão',
            data: [4000, 3200, 2200],
            backgroundColor: 'rgba(35, 86, 120,0.8)'
         },
        {
            label: 'Lixo não-reciclável jogado no chão',
            data: [2500, 1700, 1200],
            backgroundColor: 'rgba(87, 204, 152,0.8)'
        }
    ]

}

const options = {
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
    return<Bar data={BarData} options={options}/>
}