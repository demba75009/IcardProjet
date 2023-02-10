const ctx = document.querySelector('#myChart');

const ctx1 = document.querySelector('#Fausse-Note');
const ctx2 = document.querySelector('#Justesse');

const frequenceEtDuree= document.getElementById('frequenceEtDuree')

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

new Chart(frequenceEtDuree, {
  type: 'bar',
  data: {
    labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'dec'],
    datasets: [{
      label: '',
      data: [456, 394, 242, 374, 286, 184, 324, 128, 94, 183, 320, 180],
      borderWidth: 0,
      borderRadius:3,
      barThickness:6,
      backgroundColor: '#60798d'
    },{
      label:'none',
      data:[250, 300, 220, 365, 260, 400, 420, 600, 500, 550, 400, 450],
      type:'line',
      borderColor:'#9f72ff',
      pointStyle:false
    },{
      label:'',
      data:[50, 100, 60, 140, 110, 260, 120, 200, 190, 210,150, 80],
      type:'line',
      fill:true,
      borderWidth: 0,
      backgroundColor:'#bcb7b1',
      pointStyle:false

    }]
  },
  options: {
            // color: 'lightGreen'
      backgroundColor:'#bcb7b1',
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

}

)
