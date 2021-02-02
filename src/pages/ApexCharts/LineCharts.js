import React, {Component} from "react";
import LineChartsBasic from "./LineChartsBasic";
import LineChartsLabels from "./LineChartsLabels";
import LineChartsZoomable from "./LineChartsZoomable";
import LineChartsAnnotations from "./LineChartsAnnotations";
import LineChartsSynchronized from "./LineChartsSynchronized";
import LineChartsBrush from "./LineChartsBrush";
import LineChartsStepline from "./LineChartsStepline";
import LineChartsGradient from "./LineChartsGradient";
import LineChartsRealtime from "./LineChartsRealtime";
import LineChartsDashed from "./LineChartsDashed";
import {Container, Card, CardBody} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';

class LineCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Apexcharts", link: "#"},
                {title: "Line Charts", link: "#"},
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="Line Charts" breadcrumbItems={this.state.breadcrumbItems}/>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Basic</h4>
                                <LineChartsBasic/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">With Data Labels</h4>
                                <LineChartsLabels/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Zoomable Timeseries</h4>
                                <LineChartsZoomable/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">With Annotations</h4>
                                <LineChartsAnnotations/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Syncing</h4>
                                <LineChartsSynchronized/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Brush</h4>
                                <LineChartsBrush/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Stepline</h4>
                                <LineChartsStepline/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Gradient</h4>
                                <LineChartsGradient/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Realtime</h4>
                                <LineChartsRealtime/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Dashed</h4>
                                <LineChartsDashed/>
                            </CardBody>
                        </Card>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default LineCharts;
