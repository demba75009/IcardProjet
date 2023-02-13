const accords = document.querySelector('#accords');
const prefere=document.getElementById('prefere');
const faussesNotes = document.querySelector('#Fausse-Note');
const justesse = document.querySelector('#Justesse');

const frequenceEtDuree = document.getElementById('frequenceEtDuree')


const prefereObserver = new IntersectionObserver(entry => {
  if (entry[0].isIntersecting) {
    //affichage du E en ajoutant une classe "visile", pour mieux paramétrer la transition avec du css

    prefere.classList.add('apparaitre')
    prefere.disconnect()
  }

}, { threshold: 0.5, rootMargin: "0px 0px 0px 0px" })
prefereObserver.observe(prefere)

const accordsObserver = new IntersectionObserver(entry => {
  if (entry[0].isIntersecting) {
    //affichage des accords en ajoutant une classe "visile", pour mieux paramétrer la transition avec du css

    accords.classList.add('apparaitre')
    accordsObserver.disconnect()
  }

}, { threshold: 0.5, rootMargin: "0px 0px 0px 0px" })
accordsObserver.observe(accords)


const justesseObserver = new IntersectionObserver(entry => {
  if (entry[0].isIntersecting) {
    //affichage de nouveau graphique dans la call back
    new Chart(justesse, {
      type: 'doughnut',
      data: {
        labels: false,//['Error', 'Good'],
        datasets: [{
          label: '# of Votes',
          data: [{ id: 'EM', nested: { value: 800 } }, { id: 'AM', nested: { value: 200 } }],
          backgroundColor: ['#d27266','#54525d'],
          borderRadius: [0,0],
          borderColor:'#54525d',
          borderWidth:8
        },
        {label: '# of Votes'}
        ],
      },
      options: {

        parsing: {
          key: 'nested.value'
        }
      }
    });

    justesseObserver.disconnect()
  }

}, { threshold: 0.7, rootMargin: "0px 0px -120px 0px" })
justesseObserver.observe(justesse)


const faussesNotesObserver = new IntersectionObserver(entry => {
  if (entry[0].isIntersecting) {
    //affichage de nouveau graphique dans la call back
    new Chart(faussesNotes, {
      type: 'doughnut',
      data: {
        labels: false,//['Error', 'Good'],
        datasets: [{
          label: '# of Votes',
          data: [{ id: 'EM', nested: { value: 700 } }, { id: 'AM', nested: { value: 300 } }],
          backgroundColor: ['#d27266','#54525d'],
          borderRadius: [0,0],
          borderColor:'#54525d',
          borderWidth:8
        },
        {label: '# of Votes'}
        ],
      },
      options: {

        parsing: {
          key: 'nested.value'
        }
      }
    });

    faussesNotesObserver.disconnect()
  }

}, { threshold: 1, rootMargin: "0px 0px -180px 0px" })
faussesNotesObserver.observe(faussesNotes)


const freqObserver = new IntersectionObserver(entry => {
  if (entry[0].isIntersecting) {
    //affichage de nouveau graphique dans la call back
    new Chart(frequenceEtDuree, {
      type: 'bar',
      data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'dec'],
        datasets: [{
          label: 'Fréquence',
          data: [456, 394, 242, 374, 286, 184, 324, 128, 94, 183, 320, 180],
          borderWidth: 0,
          borderRadius: 5,
          barThickness: 8,
          backgroundColor: '#EECFB4'
        }, {
          label: 'Durée',
          data: [250, 300, 220, 365, 260, 400, 420, 600, 500, 550, 400, 450],
          type: 'line',
          borderColor: '#9F4743',
          pointStyle: false,


        }
          // ,{
          //   label:'',
          //   data:[50, 100, 60, 140, 110, 260, 120, 200, 190, 210,150, 80],
          //   type:'line',
          //   fill:true,
          //   borderWidth: 0,
          //   backgroundColor:'#bcb7b1',
          //   pointStyle:false

          // }
        ]
      },
      options: {
        color: '#FDF0E5',
        backgroundColor: '#bcb7b1',
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: '#FDF0E5' },
            grid: { color: '#EECFB4' },
            border: { display: false }
          },

          x: {
            ticks: { color: '#FDF0E5' },
            grid: { display: false }
          }

        },
        plugins: { legend: { labels: { usePointStyle: true } } }
      }
    })


    freqObserver.disconnect()
  }

}, { threshold: 1, rootMargin: "0px 0px -180px 0px" })
freqObserver.observe(frequenceEtDuree)

