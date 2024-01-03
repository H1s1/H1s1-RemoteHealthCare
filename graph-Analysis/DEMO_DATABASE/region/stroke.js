// Tuberculosis (TB)
var ctx1 = document.getElementById("myChart1").getContext('2d');

var myChart1 = new Chart(ctx1, {
  type: 'pie',
  data: {
    labels: ["Chhattisgarh", "Madhya Pradesh", "Jammu & Kashmir", "Goa", "Orrisa", "Uttar Pradesh" ,"Gujrat"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      hoverOffset: 10,
      data: [9,2,4,14,7,9,4],
    }],
  }
});

