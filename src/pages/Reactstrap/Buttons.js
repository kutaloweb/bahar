import React, {Component} from "react";
import {Button, Card, CardBody, Container} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Reactstrap Components", link: "#"},
                {title: "Buttons", link: "#"},
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Buttons" breadcrumbItems={this.state.breadcrumbItems}/>
                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Small</h4>
                                <Button color="primary" size="sm">primary</Button>
                                <Button color="secondary" size="sm">secondary</Button>
                                <Button color="success" size="sm">success</Button>
                                <Button color="info" size="sm">info</Button>
                                <Button color="warning" size="sm">warning</Button>
                                <Button color="danger" size="sm">danger</Button>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Buttons;
