const ctx = document.querySelector('#myChart');

const ctx1 = document.querySelector('#Fausse-Note');
const ctx2 = document.querySelector('#Justesse');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['A', 'EM'],
    datasets: [{
      label: '%echec',
      data: [{id: 'EM', nested: {value: 1500}}, {id: 'AM', nested: {value: 500}}]
    }]
  },
  options: {
    parsing: {
        key: 'nested.value'
      }
  }
});

new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Error', 'Good'],
    datasets: [{
      label: '# of Votes',
      data: [{id: 'EM', nested: {value: 500}}, {id: 'AM', nested: {value: 500}}]
    }]
  },
  options: {
    parsing: {
        key: 'nested.value'
      }
  }
});

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Erreur', 'Good'],
    datasets: [{
      label: '# of Votes',
      data: [{id: 'EM', nested: {value: 500}}, {id: 'AM', nested: {value: 1000}}]
    }]
  },
  options: {
    parsing: {
        key: 'nested.value'
      }
  }
});