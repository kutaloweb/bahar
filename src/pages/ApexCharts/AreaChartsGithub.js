import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';
import {githubdata} from './data';

class AreaChartsGithub extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'commits',
                data: githubdata.series,
            }],
            options: {
                chart: {
                    id: 'chartyear',
                    type: 'area',
                    height: 160,
                    background: '#F6F8FA',
                    toolbar: {
                        show: false,
                        autoSelected: 'pan'
                    },
                    events: {
                        mounted: function (chart) {
                            var commitsEl = document.querySelector('.cmeta span.commits');
                            var commits = chart.getSeriesTotalXRange(chart.w.globals.minX, chart.w.globals.maxX)

                            commitsEl.innerHTML = commits
                        },
                        updated: function (chart) {
                            var commitsEl = document.querySelector('.cmeta span.commits');
                            var commits = chart.getSeriesTotalXRange(chart.w.globals.minX, chart.w.globals.maxX)

                            commitsEl.innerHTML = commits
                        }
                    }
                },
                colors: ['#FF7F00'],
                stroke: {
                    width: 0,
                    curve: 'smooth'
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: 1,
                    type: 'solid'
                },
                yaxis: {
                    show: false,
                    tickAmount: 3,
                },
                xaxis: {
                    type: 'datetime',
                }
            },

            seriesYears: [{
                name: 'commits',
                data: githubdata.series,
            }],
            optionsYears: {
                chart: {
                    height: 200,
                    type: 'area',
                    background: '#F6F8FA',
                    toolbar: {
                        autoSelected: 'selection',
                    },
                    brush: {
                        enabled: true,
                        target: 'chartyear'
                    },
                    selection: {
                        enabled: true,
                        xaxis: {
                            min: new Date('26 Jan 2014').getTime(),
                            max: new Date('29 Mar 2015').getTime()
                        }
                    },
                },
                colors: ['#7BD39A'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 0,
                    curve: 'smooth'
                },
                fill: {
                    opacity: 1,
                    type: 'solid'
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
            <div id="wrapper">
                <div id="chart-months">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={160}/>
                </div>

                <div className="github-style">
                    <div className="userdetails">
                        <span className="cmeta"><span className="commits"></span> commits</span>
                    </div>
                </div>
                <div id="chart-years">
                    <ReactApexChart options={this.state.optionsYears} series={this.state.seriesYears} type="area"
                                    height={200}/>
                </div>
            </div>
        );
    }
}

export default AreaChartsGithub;
