import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { color } from 'chart.js/helpers';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

let dmSans = new FontFace('dmSans', 'url(../../assets/fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf)')

document.fonts.add(dmSans);

dmSans.load();

    const BarData = {
        labels: ['Janeiro', 'Fevereiro', 'Março'],
        datasets: [
            {
                label: 'Lixo reciclável jogado no chão',
                data: [4000, 3200, 2200],
                backgroundColor: 'rgb(35, 86, 120)'
            },
            {
                label: 'Lixo não-reciclável jogado no chão',
                data: [2500, 1700, 1200],
                backgroundColor: 'rgb(87, 204, 152)'
            }
        ]

    }

    const options = {
        scales: {
            x: {
                ticks: {
                    color: "rgb(16, 42, 59)"
                },
                grid: {
                    color: "rgba(248, 250, 252, 0)"
                }
            },
            y: {
                ticks: {
                    color: "rgb(16, 42, 59)"
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
                        size: 12,
                        family: 'dmSans',
                        weight: 'normal',
                    }
                }
            }
        }
    };


export default function BarChart() {
    return <Bar data={BarData} options={options} />
}