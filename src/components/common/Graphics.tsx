import React, { useRef, useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { data as GraphicModel } from '../../utils/GraphicModel'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphicsChartJs: React.FC = () => {
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
                grid: {
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
                beginAtZero: true,
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
                display: true,
                position: 'top' as const,  // Especificar el tipo literal
                labels: {
                    font: {
                        size: 14,
                    },
                    color: '#4a5568',
                },
            },
            tooltip: {
                enabled: true,
                mode: 'index' as const,  // Especificar el tipo literal
                intersect: false,
                callbacks: {
                    label: function(tooltipItem:any) {
                        return `$${tooltipItem.raw}`;
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
