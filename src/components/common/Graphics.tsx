import React, { useRef, useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {  Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { data as GraphicModel } from '../../utils/GraphicModel'; 
import { ChartJsTypes } from '../../types/ChartJsTypes';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphicsChartJs: React.FC<ChartJsTypes> = () => {
    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        return () => {
            if (chartContainerRef.current) {
                setIsMounted(true);
            }
        };
    }, []);

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                grid: {   //valores en el eje x
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Meses',
                    font: {
                        size: 20,
                    },
                    color: 'red'
                },
            },
            y: {
                beginAtZero: true, // valores en el eje y
                grid: {
                    color: '#e2e8f0',
                },
                title: {
                    display: true,
                    text: 'Dinero',
                    font: {
                        size: 20,
                    },
                    color: 'blue'
                },
                ticks: {
                    callback: function(value:any) {
                        return '$' + value;
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: true,  //para el label pricipal del grafico
                position: 'top' as const,
                labels: {
                    font: {
                        size: 14,
                    },
                    color: '#4a5568',
                },
            },
            tooltip: {
                enabled: true,  //para valores dentro de la grafica
                mode: 'index' as const, 
                intersect: false,
                callbacks: {
                    label: function(tooltipItem:any) {
                        return `$${tooltipItem.raw} gastos`;
                    },
                },
            },
        },
        elements: {
            line: {
                tension: 0.4,
                borderColor: '#3182ce',
                borderWidth: 2,
            },
            point: {
                radius: 6,
                backgroundColor: '#3182ce',
                hoverRadius: 7,
            },
        },
    };

    return (
        <div ref={chartContainerRef} className='h-96' >
            {isMounted && (
                <Line data={GraphicModel} options={options} />
            )}
        </div>
    );
};

export default GraphicsChartJs;
