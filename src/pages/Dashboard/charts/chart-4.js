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
        colors: ['#4680ff'],
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
                    formatter: (seriesName) => 'Tickets:'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [0, 208, 109, 458, 304, 554, 204, 309, 10]
    }]
}