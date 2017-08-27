var elemP = document.getElementById('status1');
var w = elemP.clientWidth;
var h = elemP.clientHeight;
h = h - 4;

var labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
var data = [12, 19, 3, 5, 2, 3];
var bgColors = [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ];
var borderColors = [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ];

var elem = document.getElementById('myChart1');
elem.setAttribute("width", w);
elem.setAttribute("height", h);

var ctx = elem.getContext('2d');
var myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

elem = document.getElementById('myChart2');
elem.setAttribute("width", w);
elem.setAttribute("height", h);

ctx = elem.getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

elem = document.getElementById('myChart3');
elem.setAttribute("width", w);
elem.setAttribute("height", h);

ctx = elem.getContext('2d');
var myChart3 = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 1
        }],

    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

