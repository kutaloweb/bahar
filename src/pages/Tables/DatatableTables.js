import React, {Component} from "react";
import {MDBDataTable} from "mdbreact";
import {Card, CardBody, Container} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';
import data from './data';

class DatatableTables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Tables", link: "#"},
                {title: "Data Tables", link: "#"},
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Datatables" breadcrumbItems={this.state.breadcrumbItems}/>
                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Basic example</h4>
                                <MDBDataTable
                                    striped
                                    bordered
                                    responsive
                                    hover
                                    data={data}
                                    noBottomColumns={true}
                                />
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default DatatableTables;
