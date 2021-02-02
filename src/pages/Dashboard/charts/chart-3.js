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
        colors: ['#ff5252'],
        fill: {
            type: 'solid',
            opacity: 0,
        },
        markers: {
            size: 2,
            opacity: 0.9,
            colors: '#ff5252',
            strokeColor: '#ff5252',
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
                    formatter: (seriesName) => 'Income:'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [978, 6656, 4156, 8923, 6376, 2599, 4422, 1233, 3656, 2050, 5409, 2590, 999]
    }]
}