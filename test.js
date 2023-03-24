const avg_score = document.getElementById('avg_score');
const avg_score_setup = {
  labels: '1',
  datasets: [
    {
      label: '1',
      data: [2000],
      backgroundColor: 'rgba(220, 20, 60, 0.7)',
      borderRadius: [
        {topLeft: 1000, topRight: 0, bottomLeft: 1000, bottomRight: 0},
      ],
      borderSkipped: false,
    },
    {
      label: '2',
      data: [700],
      backgroundColor: 'rgba(219, 93, 21, 0.7)',
    },
    {
      label: '3',
      data: [1300],
      backgroundColor: 'rgba(219, 207, 21, 0.7)',
      borderRadius: [
        { topLeft: 10000, topRight: 0, bottomLeft: 0, bottomRight: 0},
      ]
    },
    {
      label: '4',
      data: [1700],
      backgroundColor: 'rgba(117, 219, 21, 0.7)',
    },
    {
      label: '5',
      data: [10000],
      backgroundColor: 'rgba(50, 205, 50, 0.7)',
      borderRadius: 1000,
    },
  ]
}
new Chart(avg_score, {
  type: 'bar',
  data: avg_score_setup,
  options: {
    plugins: {
      legend: {display: false}
    },
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {stacked: true,
          display: false},
      y: {stacked: true,
          display: false},
    },
  }
}
);