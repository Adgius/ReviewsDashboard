/*_____________________rating-source_gp-score____________________*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min) / 100; // The maximum is inclusive and the minimum is inclusive
}

const generateArray = (length) => (
  [...new Array(length)].map(() => getRandomIntInclusive(400, 500))
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
const rating_source_gp_score_setup = {
  labels: x,
  datasets: [
    {
      label: 'Summary rating',
      data: generateArray(x.length),
    }
  ]
}
new Chart(rating_source_gp_score, {
  type: 'line',
  data: rating_source_gp_score_setup,
  options: {
  responsive: true,
  maintainAspectRatio: false,
  },
});