var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Tuberculosis (TB)", "Diabetes", "Diarrhea", "Cardiovascular diseases (CVDs)", "Elephantiasis", "COVID-19" ,"Stroke", "Alzheimer's","Cancer"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "#fc257e",
        "#DDF584"
      ],
      hoverOffset: 10,
      data: [413,402,391,333,298,20,49,105,259],
    }],
    //center: ['75%', '50%']
  }
  
});
