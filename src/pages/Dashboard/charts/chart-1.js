export default {
    type: 'area',
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
        colors: ['#4680ff'],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 2,
            opacity: 0.9,
            colors: '#4680ff',
            strokeColor: '#4680ff',
            strokeWidth: 2,
            hover: {
                size: 4,
            }
        },
        stroke: {
            curve: 'straight',
            width: 3,
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
                    formatter: (seriesName) => 'Visits:'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [90, 666, 415, 890, 631, 250, 441, 122, 362, 200, 540, 251, 99]
    }]
}