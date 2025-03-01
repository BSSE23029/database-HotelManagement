'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RoomOccupancy() {
  const data = {
    labels: ['Occupied', 'Reserved', 'Available', 'Maintenance'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          '#3b82f6', // blue
          '#f59e0b', // amber
          '#10b981', // green
          '#ef4444', // red
        ],
        borderColor: [
          '#3b82f6',
          '#f59e0b',
          '#10b981',
          '#ef4444',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    cutout: '70%',
  };

  return (
    <div className="h-64">
      <Doughnut data={data} options={options} />
    </div>
  );
}