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


/*_____________________ASIDE_BUTTONS____________________*/

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
  });
})


const btns = document.querySelectorAll(".sidebar > a")
const windows = document.querySelectorAll("main>div:nth-child(n+3)")

function change_aside(link) {
    btns.forEach(function(x) {x.classList.remove('active')})
    link.classList.add('active')
}

function change_main_window(link) {
  const window_name = link.getAttribute('window_id');
  console.log(window_name)
  w = document.getElementsByClassName(window_name)[0]
  console.log(w)
  if (w.style.display == 'none') {
    windows.forEach(function(x) {x.style.display = 'none'})
    windows.forEach(function(x) {x.style.opacity = 0})
    w.style.display = 'flex'
    var op = 0
    while (op <= 1) {
      (function(op_){
        setTimeout(() => w.style.opacity = op_, 100 + 100 * op)
      })(op)
      op += 0.1
    }
  }  
}


btns.forEach(function(link) {
  link.addEventListener("click", function() {
    change_aside(link);
    change_main_window(link);
  })
});