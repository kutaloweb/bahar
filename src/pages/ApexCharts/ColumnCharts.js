import React, {Component} from "react";
import ColumnChartsBasic from "./ColumnChartsBasic";
import ColumnChartsLabels from "./ColumnChartsLabels";
import ColumnChartsStacked from "./ColumnChartsStacked";
import ColumnChartsNegative from "./ColumnChartsNegative";
import ColumnChartsDistributed from "./ColumnChartsDistributed";
import {Container, Card, CardBody} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';

class ColumnCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Apexcharts", link: "#"},
                {title: "Column Charts", link: "#"},
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="Column Charts" breadcrumbItems={this.state.breadcrumbItems}/>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Basic</h4>
                                <ColumnChartsBasic/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">With Data Labels</h4>
                                <ColumnChartsLabels/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Stacked Columns</h4>
                                <ColumnChartsStacked/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">With Negative Values</h4>
                                <ColumnChartsNegative/>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Distributed Columns</h4>
                                <ColumnChartsDistributed/>
                            </CardBody>
                        </Card>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default ColumnCharts;
