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
	responsive: true,
  maintainAspectRatio: false,
	},
});