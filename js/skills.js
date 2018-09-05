$(function() {
    let ctx = document.getElementById("myChart").getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ["HTML", "CSS", "JQuery", "Node.js", "JavaScript", "SQL"],
            datasets: [{
                data: [10, 9, 3, 6, 5, 4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(75, 12, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 0

            }]
        },
        options: {
            responsive: true,
            scale:{
                //Overlay : false,
                display:false

            },
            legend:{
                display:false,
                position:'top',
                labels:{
                    fontColor: 'black',
                    fontSize: 24,
                    fontFamily: "Gotham-ExtraLight",
                    boxWidth:25
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 100,
                    top: 5,
                    bottom: 0
                }
            },
            animation:{
                animateScale: true
            }

            //animation.animateRotate:false
        }
    });
});




