import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';

class ColumnChartsDistributed extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [21, 22, 10, 28, 16, 21, 13, 30]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function(chart, w, e) {
                            // console.log(chart, w, e)
                        }
                    }
                },
                colors: [
                    "rgba(0, 143, 251, 0.85)",
                    "rgba(0, 227, 150, 0.85)",
                    "rgba(254, 176, 25, 0.85)",
                    "rgba(255, 69, 96, 0.85)",
                    "rgba(119, 93, 208, 0.85)",
                    "rgba(84, 110, 122, 0.85)",
                    "rgba(38, 166, 154, 0.85)",
                    "rgba(209, 12, 232, 0.85)"
                ],
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: [
                        ['John', 'Doe'],
                        ['Joe', 'Smith'],
                        ['Jake', 'Williams'],
                        'Amber',
                        ['Peter', 'Brown'],
                        ['Mary', 'Evans'],
                        ['David', 'Wilson'],
                        ['Lily', 'Roberts'],
                    ],
                    labels: {
                        style: {
                            colors: [
                                "rgba(0, 143, 251, 0.85)",
                                "rgba(0, 227, 150, 0.85)",
                                "rgba(254, 176, 25, 0.85)",
                                "rgba(255, 69, 96, 0.85)",
                                "rgba(119, 93, 208, 0.85)",
                                "rgba(84, 110, 122, 0.85)",
                                "rgba(38, 166, 154, 0.85)",
                                "rgba(209, 12, 232, 0.85)"
                            ],
                            fontSize: '12px'
                        }
                    }
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
                    type="bar"
                    height={350}/>
            </React.Fragment>
        );
    }
}

export default ColumnChartsDistributed;
