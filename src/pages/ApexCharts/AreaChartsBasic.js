import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';
import {series} from "./data";

class AreaChartsBasic extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "STOCK ABC",
                data: series.monthDataSeries1.prices
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 350,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },

                title: {
                    text: 'Fundamental Analysis of Stocks',
                    align: 'left'
                },
                labels: series.monthDataSeries1.dates,
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    opposite: true
                },
                legend: {
                    horizontalAlign: 'left'
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
                    type="area"
                    height={350}/>
            </React.Fragment>
        );
    }
}

export default AreaChartsBasic;
