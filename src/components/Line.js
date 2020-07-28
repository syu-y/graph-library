import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'],
  datasets: [
    {
      labels: '',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'square',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#eee',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3.0, 3.03, 3.02, 2.99, 3.0, 3.05, 3.08],
    },
  ],
};

const LineExample = () => {
  return (
    <div>
      <h2>Line Example</h2>
      <Line data={data} width={300} height={100} />
    </div>
  );
};

export default LineExample;
