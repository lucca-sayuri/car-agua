import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
//Y: da pra usar dados que vem de uma API mas mo trabalho
ChartJS.register(ArcElement, Tooltip, Legend); //Y:eu nao tinha comentado aqui?... Tree-Shaking

const Pidata = {
    labels: ['Com Acesso à água', 'Acesso Precário à água', 'Sem Acesso à água'],
    datasets: [
        {
            label: 'Número de habitantes',
            data: [125115, 29201, 15969],
            backgroundColor: [
                'rgba(35, 86, 120,0.8)',
                'rgba(87, 204, 152,0.8)',
                'rgba(55, 163, 165,0.8)'
            ],
            borderColor: [
                'rgba(35, 86, 120,1)',
                'rgba(87, 204, 152,1)',
                'rgba(55, 163, 165,1)'
            ],
            borderWidth: 1,
        }
    ]
};

const Bardata = {
    
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

export default function PiChart() {
    return <Pie data={Pidata} options={options} />;
}
