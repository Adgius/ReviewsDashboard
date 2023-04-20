/*_____________________SUMMARY_SCORE____________________*/

x = new Array('2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04',
             '2023-01-05', '2023-01-06', '2023-01-07', '2023-01-08',
             '2023-01-09', '2023-01-10', '2023-01-11', '2023-01-12',
             '2023-01-13', '2023-01-14', '2023-01-15', '2023-01-16',
             '2023-01-17', '2023-01-18', '2023-01-19', '2023-01-20',
             '2023-01-21', '2023-01-22', '2023-01-23', '2023-01-24',
             '2023-01-25', '2023-01-26', '2023-01-27', '2023-01-28',
             '2023-01-29', '2023-01-30', '2023-01-31', '2023-02-01',
             '2023-02-02', '2023-02-03', '2023-02-04', '2023-02-05',
             '2023-02-06', '2023-02-07', '2023-02-08', '2023-02-09',
             '2023-02-10', '2023-02-11', '2023-02-12', '2023-02-13',
             '2023-02-14', '2023-02-15', '2023-02-16', '2023-02-17',
             '2023-02-18', '2023-02-19', '2023-02-20', '2023-02-21',
             '2023-02-22', '2023-02-23', '2023-02-24')

const rating_total = document.getElementById('rating_total');
const Summary_rating_setup = {
	labels: x,
	datasets: [
	  {
	    label: 'Summary rating',
	    data: [4.47,4.79,4.64,4.66,4.56,4.57,4.51,4.59,4.45,4.36,4.73,4.49,4.52,4.56,4.4,4.51,4.45,4.57,4.54,4.55,4.58,4.55,4.65,4.63,4.57,4.77,4.66,4.62,4.51,4.54,4.48,4.54,4.74,4.78,4.78,4.62,4.57,4.68,4.47,4.56,4.54,4.67,4.59,4.6,4.58,4.78,4.52,4.52,4.55,4.65,4.52,4.62,4.46,4.65,4.66]
	  }
	]
}
new Chart(rating_total, {
	type: 'line',
	data: Summary_rating_setup,
	options: {
	responsive: true,
  maintainAspectRatio: false,
	},
});


/*_____________________NEGATIVE_SCORE____________________*/

const neg_total = document.getElementById('neg_total');
const neg_total_setup = {
  labels: x,
  datasets: [
    {
      label: 'Positive',
      data: [4.47,4.79,4.64,4.66,4.56,4.57,4.51,4.59,4.45,4.36,4.73,4.49,4.52,4.56,4.4,4.51,4.45,4.57,4.54,4.55,4.58,4.55,4.65,4.63,4.57,4.77,4.66,4.62,4.51,4.54,4.48,4.54,4.74,4.78,4.78,4.62,4.57,4.68,4.47,4.56,4.54,4.67,4.59,4.6,4.58,4.78,4.52,4.52,4.55,4.65,4.52,4.62,4.46,4.65,4.66],
      borderColor: 'rgba(87, 252, 86, 0.9)',
      backgroundColor: 'rgba(87, 252, 86, 0.5)',
      fill: true
    },
    {
      label: 'Negative',
      data: Array(x.length).fill(5),
      borderColor: 'rgba(252, 76, 76, 0.9)',
      backgroundColor: 'rgba(252, 76, 76, 0.5)',
      fill: '-1',
      pointRadius: 0,
    }
  ]
}

new Chart(neg_total, {
  type: 'line',
  data: neg_total_setup,
  options: {
  responsive: true,
  maintainAspectRatio: false,
  },
});


/*_____________________NEGATIVE_PIE___________________*/

const neg_score = document.getElementById('neg_score');
const neg_score_setup = {
	labels: ['Positive', 'Negative'],
	datasets: [
	  {
	    label: 'Summary rating',
	    data: [64, 36],
      backgroundColor: [
        'rgba(50, 205, 50, 0.7)',
        'rgba(220, 20, 60, 0.7)']
	  }
	]
}
new Chart(neg_score, {
	type: 'doughnut',
	data: neg_score_setup,
	options: {
    plugins: {
      legend: {display: false}
    },
    responsive: true,
    maintainAspectRatio: false,
	},
});


/*_____________________AVG_SCORE_BAR___________________*/

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


/*_____________________rating-source_gp-score____________________*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min) / 100; // The maximum is inclusive and the minimum is inclusive
}

const generateArray = (length, min, max) => (
  [...new Array(length)].map(() => getRandomIntInclusive(min * 100, max * 100))
);

x = new Array('2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04',
             '2023-01-05', '2023-01-06', '2023-01-07', '2023-01-08',
             '2023-01-09', '2023-01-10', '2023-01-11', '2023-01-12',
             '2023-01-13', '2023-01-14', '2023-01-15', '2023-01-16',
             '2023-01-17', '2023-01-18', '2023-01-19', '2023-01-20',
             '2023-01-21', '2023-01-22', '2023-01-23', '2023-01-24',
             '2023-01-25', '2023-01-26', '2023-01-27', '2023-01-28',
             '2023-01-29', '2023-01-30', '2023-01-31', '2023-02-01',
             '2023-02-02', '2023-02-03', '2023-02-04', '2023-02-05',
             '2023-02-06', '2023-02-07', '2023-02-08', '2023-02-09',
             '2023-02-10', '2023-02-11', '2023-02-12', '2023-02-13',
             '2023-02-14', '2023-02-15', '2023-02-16', '2023-02-17',
             '2023-02-18', '2023-02-19', '2023-02-20', '2023-02-21',
             '2023-02-22', '2023-02-23', '2023-02-24')

const rating_source_gp_score = document.getElementById('rating-source_gp-score');
var rating_source_gp_score_grad = rating_source_gp_score.getContext('2d').createLinearGradient(0, 150, 0, 0);
rating_source_gp_score_grad.addColorStop(1, "rgba(242, 176, 89, 1)");
rating_source_gp_score_grad.addColorStop(0, "rgba(242, 176, 89, 0)");

const rating_source_gp_score_setup = {
  labels: x,
  datasets: [
    {
      label: 'Google Play average score',
      data: generateArray(x.length, 4, 5),
      pointStyle: false,
      tension: 0.5,
      fill: true,
      borderColor: "rgba(242, 176, 89, 1)",
      backgroundColor: rating_source_gp_score_grad,
    }
  ]
}
new Chart(rating_source_gp_score, {
  type: 'line',
  data: rating_source_gp_score_setup,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats:{day: 'MMM dd'}
        },
        ticks: {maxTicksLimit: 5},
        grid: {display: false},
      },
    },
    plugins: {
      legend: {display: false}
    },  
  responsive: true,
  maintainAspectRatio: false,
  },
});


/*_____________________rating-source_gp-count____________________*/
const rating_source_gp_count = document.getElementById('rating-source_gp-count');
var rating_source_gp_count_grad = rating_source_gp_count.getContext('2d').createLinearGradient(0, 150, 0, 0);
rating_source_gp_count_grad.addColorStop(1, "rgba(227, 138, 20, 1)");
rating_source_gp_count_grad.addColorStop(0, "rgba(227, 138, 20, 0)");

const rating_source_gp_count_setup = {
  labels: x,
  datasets: [
    {
      label: 'Google Play review counts',
      data: generateArray(x.length, 50, 200),
      pointStyle: false,
      tension: 0.5,
      fill: true,
      borderColor: "rgba(227, 138, 20, 1)",
      backgroundColor: rating_source_gp_score_grad,
    }
  ]
}
new Chart(rating_source_gp_count, {
  type: 'line',
  data: rating_source_gp_count_setup,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats:{day: 'MMM dd'}
        },
        ticks: {maxTicksLimit: 5},
        grid: {display: false},
      },
    },
    plugins: {
      legend: {display: false}
    },
  responsive: true,
  maintainAspectRatio: false,
  },
});


/*_____________________rating-source_as-score____________________*/
const rating_source_as_score = document.getElementById('rating-source_as-score');
var rating_source_as_score_grad = rating_source_as_score.getContext('2d').createLinearGradient(0, 150, 0, 0);
rating_source_as_score_grad.addColorStop(1, "rgba(116, 109, 252, 1)");
rating_source_as_score_grad.addColorStop(0, "rgba(116, 109, 252, 0)");

const rating_source_as_score_setup = {
  labels: x,
  datasets: [
    {
      label: 'None',
      data: generateArray(x.length, 4, 5),
      pointStyle: false,
      tension: 0.5,
      fill: true,
      borderColor: "rgba(116, 109, 252, 1)",
      backgroundColor: rating_source_as_score_grad,
    }
  ]
}
new Chart(rating_source_as_score, {
  type: 'line',
  data: rating_source_as_score_setup,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats:{day: 'MMM dd'}
        },
        ticks: {maxTicksLimit: 5},
        grid: {display: false},
      },
    },
    plugins: {
      legend: {display: false}
    },
  responsive: true,
  maintainAspectRatio: false,
  },
});


/*_____________________rating-source_as-count____________________*/
const rating_source_as_count = document.getElementById('rating-source_as-count');
var rating_source_as_count_grad = rating_source_as_count.getContext('2d').createLinearGradient(0, 150, 0, 0);
rating_source_as_count_grad.addColorStop(1, "rgba(62, 55, 195, 1)");
rating_source_as_count_grad.addColorStop(0, "rgba(29, 17, 245, 0)");

const rating_source_as_count_setup = {
  labels: x,
  datasets: [
    {
      label: 'None',
      data: generateArray(x.length, 50, 200),
      pointStyle: false,
      tension: 0.5,
      fill: true,
      borderColor: "rgba(62, 55, 195, 1)",
      backgroundColor: rating_source_as_score_grad,
    }
  ]
}
new Chart(rating_source_as_count, {
  type: 'line',
  data: rating_source_as_count_setup,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats:{day: 'MMM dd'}
        },
        ticks: {maxTicksLimit: 5},
        grid: {display: false},
      },
    },
    plugins: {
      legend: {display: false}
    },
  responsive: true,
  maintainAspectRatio: false,
  },
});

/*_____________________rating-source_ya-score____________________*/
const rating_source_ya_score = document.getElementById('rating-source_ya-score');
var rating_source_ya_score_grad = rating_source_ya_score.getContext('2d').createLinearGradient(0, 150, 0, 0);
rating_source_ya_score_grad.addColorStop(1, "rgba(234, 222, 10, 1)");
rating_source_ya_score_grad.addColorStop(0, "rgba(234, 222, 10, 0)");

const rating_source_ya_score_setup = {
  labels: x,
  datasets: [
    {
      label: 'None',
      data: generateArray(x.length, 4, 5),
      pointStyle: false,
      tension: 0.5,
      fill: true,
      borderColor: "rgba(208, 198, 121, 1)",
      backgroundColor: rating_source_ya_score_grad,
    }
  ]
}
new Chart(rating_source_ya_score, {
  type: 'line',
  data: rating_source_ya_score_setup,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats:{day: 'MMM dd'}
        },
        ticks: {maxTicksLimit: 5},
        grid: {display: false},
      },
    },
    plugins: {
      legend: {display: false}
    },
  responsive: true,
  maintainAspectRatio: false,
  },
});


/*_____________________rating-source_ya-count____________________*/
const rating_source_ya_count = document.getElementById('rating-source_ya-count');
var rating_source_ya_count_grad = rating_source_as_count.getContext('2d').createLinearGradient(0, 150, 0, 0);
rating_source_ya_count_grad.addColorStop(1, "rgba(234, 222, 10, 1)");
rating_source_ya_count_grad.addColorStop(0, "rgba(234, 222, 10, 0)");

const rating_source_ya_count_setup = {
  labels: x,
  datasets: [
    {
      label: 'None',
      data: generateArray(x.length, 50, 200),
      pointStyle: false,
      tension: 0.5,
      fill: true,
      borderColor: "rgba(174, 172, 139, 1)",
      backgroundColor: rating_source_ya_score_grad,
    }
  ]
}
new Chart(rating_source_ya_count, {
  type: 'line',
  data: rating_source_ya_count_setup,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats:{day: 'MMM dd'}
        },
        ticks: {maxTicksLimit: 5},
        grid: {display: false},
      },
    },
    plugins: {
      legend: {display: false}
    },
  responsive: true,
  maintainAspectRatio: false,
  },
});


/*_____________________rating-source_ga-score____________________*/
const rating_source_ga_score = document.getElementById('rating-source_ga-score');
var rating_source_ga_score_grad = rating_source_ga_score.getContext('2d').createLinearGradient(0, 150, 0, 0);
rating_source_ga_score_grad.addColorStop(1, "rgba(142, 236, 5, 1)");
rating_source_ga_score_grad.addColorStop(0, "rgba(142, 236, 5, 0)");

const rating_source_ga_score_setup = {
  labels: x,
  datasets: [
    {
      label: 'None',
      data: generateArray(x.length, 4, 5),
      pointStyle: false,
      tension: 0.5,
      fill: true,
      borderColor: "rgba(181, 219, 126, 1)",
      backgroundColor: rating_source_ga_score_grad,
    }
  ]
}
new Chart(rating_source_ga_score, {
  type: 'line',
  data: rating_source_ga_score_setup,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats:{day: 'MMM dd'}
        },
        ticks: {maxTicksLimit: 5},
        grid: {display: false},
      },
    },
    plugins: {
      legend: {display: false}
    },
  responsive: true,
  maintainAspectRatio: false,
  },
});


/*_____________________rating-source_ya-count____________________*/
const rating_source_ga_count = document.getElementById('rating-source_ga-count');
var rating_source_ga_count_grad = rating_source_ga_count.getContext('2d').createLinearGradient(0, 150, 0, 0);
rating_source_ga_count_grad.addColorStop(1, "rgba(142, 236, 5, 1)");
rating_source_ga_count_grad.addColorStop(0, "rgba(142, 236, 5, 0)");

const rating_source_ga_count_setup = {
  labels: x,
  datasets: [
    {
      label: 'None',
      data: generateArray(x.length, 50, 200),
      pointStyle: false,
      tension: 0.5,
      fill: true,
      borderColor: "rgba(107, 159, 32, 1)",
      backgroundColor: rating_source_ga_score_grad,
    }
  ]
}
new Chart(rating_source_ga_count, {
  type: 'line',
  data: rating_source_ga_count_setup,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          displayFormats:{day: 'MMM dd'}
        },
        ticks: {maxTicksLimit: 5},
        grid: {display: false},
      },
    },
    plugins: {
      legend: {display: false}
    },
  responsive: true,
  maintainAspectRatio: false,
  },
});