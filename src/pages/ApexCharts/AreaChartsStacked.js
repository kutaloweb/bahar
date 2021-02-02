import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';
import {generateDayWiseTimeSeries} from './data';

class AreaChartsStacked extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'South',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 60
                    })
                },
                {
                    name: 'North',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 20
                    })
                },
                {
                    name: 'Central',
                    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                        min: 10,
                        max: 15
                    })
                }
            ],
            options: {
                chart: {
                    type: 'area',
                    height: 350,
                    stacked: true,
                    events: {
                        selection: function (chart, e) {
                            console.log(new Date(e.xaxis.min))
                        }
                    },
                },
                colors: ['#008FFB', '#00E396', '#CED4DC'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
            },
        }
    }

    render() {
        return (
            <React.Fragment>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    height={350}/>
            </React.Fragment>
        );
    }
}

export default AreaChartsStacked;
