import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';
import {generateDayWiseTimeSeries} from "./data";

class LineChartsBrush extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: generateDayWiseTimeSeries(new Date("11 Jun 2017").getTime(), 115, {
                    min: 30,
                    max: 90,
                })
            }],
            options: {
                chart: {
                    id: 'chart2',
                    type: 'line',
                    height: 230,
                    toolbar: {
                        autoSelected: 'pan',
                        show: false
                    }
                },
                colors: ['#546E7A'],
                stroke: {
                    width: 3
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: 1,
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                }
            },

            seriesLine: [{
                data: generateDayWiseTimeSeries(new Date("11 Jun 2017").getTime(), 115, {
                    min: 30,
                    max: 90,
                })
            }],
            optionsLine: {
                chart: {
                    id: 'chart1',
                    height: 130,
                    type: 'area',
                    brush:{
                        target: 'chart2',
                        enabled: true
                    },
                    selection: {
                        enabled: true,
                        xaxis: {
                            min: new Date('19 Jun 2017').getTime(),
                            max: new Date('14 Aug 2017').getTime()
                        }
                    },
                },
                colors: ['#008FFB'],
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.91,
                        opacityTo: 0.1,
                    }
                },
                xaxis: {
                    type: 'datetime',
                    tooltip: {
                        enabled: false
                    }
                },
                yaxis: {
                    tickAmount: 2
                }
            },
        }
    }

    render() {
        return (
            <React.Fragment>
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height={230}/>
                <ReactApexChart
                    options={this.state.optionsLine}
                    series={this.state.seriesLine}
                    type="area"
                    height={130}/>
            </React.Fragment>
        );
    }
}

export default LineChartsBrush;
