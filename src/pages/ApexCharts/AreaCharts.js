import React, {Component} from "react";
import AreaChartsBasic from "./AreaChartsBasic";
import AreaChartsSpline from "./AreaChartsSpline";
import AreaChartsDatetime from "./AreaChartsDatetime";
import AreaChartsNegative from "./AreaChartsNegative";
import AreaChartsGithub from "./AreaChartsGithub";
import AreaChartsStacked from "./AreaChartsStacked";
import AreaChartsMissing from "./AreaChartsMissing";
import {Container, Card, CardBody} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';

class AreaCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Apexcharts", link: "#"},
                {title: "Area Charts", link: "#"},
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="Area Charts" breadcrumbItems={this.state.breadcrumbItems}/>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Basic</h4>
                                <AreaChartsBasic/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Spline</h4>
                                <AreaChartsSpline/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Datetime X-Axis</h4>
                                <AreaChartsDatetime/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Negative</h4>
                                <AreaChartsNegative/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Github Style</h4>
                                <AreaChartsGithub/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Stacked</h4>
                                <AreaChartsStacked/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4"> Missing / Null values</h4>
                                <AreaChartsMissing/>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default AreaCharts;
