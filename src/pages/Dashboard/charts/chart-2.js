export default {
    type: 'bar',
    height: 40,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#9ccc65'],
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => 'Orders:'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [257, 669, 419, 890, 630, 250, 442, 123, 364, 94, 544, 254, 669, 410, 890, 631]
    }]
}