import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';
import {generateDayWiseTimeSeries} from './data';

class LineChartsSynchronized extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "fb",
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                    min: 10,
                    max: 30
                })
            }],
            options: {
                chart: {
                    id: 'fb',
                    group: 'social',
                    type: 'line',
                    height: 160
                },
                colors: ['#008FFB'],
                yaxis: {
                    labels: {
                        minWidth: 40
                    }
                },
                xaxis: {
                    type: 'datetime',
                },
            },

            seriesLine2: [{
                name: "tw",
                data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                    min: 10,
                    max: 30
                })
            }],
            optionsLine2: {
                chart: {
                    id: 'tw',
                    group: 'social',
                    type: 'line',
                    height: 160
                },
                colors: ['#546E7A'],
                yaxis: {
                    labels: {
                        minWidth: 40
                    }
                },
                xaxis: {
                    type: 'datetime',
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
                    type="line"
                    height={160}/>
                <ReactApexChart
                    options={this.state.optionsLine2}
                    series={this.state.seriesLine2}
                    type="line"
                    height={160}/>
            </React.Fragment>
        );
    }
}

export default LineChartsSynchronized;
