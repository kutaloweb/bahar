export default {
    type: 'area',
    height: 100,
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
        stroke: {
            curve: 'smooth',
            width: 2,
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
                    formatter: (seriesName) => 'Clients: '
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [0, 4567, 9980, 13440, 20007, 67880, 107890, 119080, 159880]
    }]
}