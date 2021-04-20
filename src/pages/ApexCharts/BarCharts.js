import React, {Component} from "react";
import BarChartsBasic from "./BarChartsBasic";
import BarChartsGrouped from "./BarChartsGrouped";
import BarChartsStacked from "./BarChartsStacked";
import BarChartsNegative from "./BarChartsNegative";
import {Container, Card, CardBody} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';

class AreaCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Apexcharts", link: "#"},
                {title: "Bar Charts", link: "#"},
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="Bar Charts" breadcrumbItems={this.state.breadcrumbItems}/>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Basic</h4>
                                <BarChartsBasic/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Grouped</h4>
                                <BarChartsGrouped/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Stacked Bar</h4>
                                <BarChartsStacked/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">With Negative Values</h4>
                                <BarChartsNegative/>
                            </CardBody>
                        </Card>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default AreaCharts;
