import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: [
    'ozaki25',
    'ozaki26',
    'ozaki27',
    'ozaki28',
    'ozaki29',
    'ozaki30',
    'ozaki31',
  ],
  datasets: [
    {
      label: 'Qiita',
      backgroundColor: 'rgba(99,255,99,0.2)',
      borderColor: 'rgba(99,255,99,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(99,255,99,0.4)',
      hoverBorderColor: 'rgba(99,255,99,1)',
      data: [14, 39, 27, 4, 11, 31, 40],
    },
    {
      label: 'Github',
      backgroundColor: 'rgba(200,200,200,0.2)',
      borderColor: 'rgba(200,200,200,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(200,200,200,0.4)',
      hoverBorderColor: 'rgba(200,200,200,1)',
      data: [5, 30, 10, 21, 66, 35, 29],
    },
    {
      label: 'Connpass',
      backgroundColor: 'rgba(255,80,80,0.2)',
      borderColor: 'rgba(255,80,80,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,80,80,0.4)',
      hoverBorderColor: 'rgba(255,80,80,1)',
      data: [22, 15, 32, 5, 9, 21, 1],
    },
    {
      label: 'Slack',
      backgroundColor: 'rgba(74,22,75,0.2)',
      borderColor: 'rgba(74,22,75,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(74,22,75,0.4)',
      hoverBorderColor: 'rgba(74,22,75,1)',
      data: [2, 9, 4, 2, 12, 1, 10],
    },
  ],
};

const options = {
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
};

const BarExample = () => {
  return (
    <div>
      <h2>Horizontal Bar Example</h2>
      <HorizontalBar data={data} options={options} width={300} height={100} />
    </div>
  );
};

export default BarExample;
