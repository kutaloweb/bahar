import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';

class BarChartsStacked extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [44, 55, 41, 64, 22, 43, 21]
            }, {
                data: [53, 32, 33, 52, 13, 44, 32]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 430
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
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
                    type="bar"
                    height={430}/>
            </React.Fragment>
        );
    }
}

export default BarChartsStacked;
