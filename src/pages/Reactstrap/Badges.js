import React, {Component} from "react";
import {Badge, Card, CardBody, Container} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';

class Badges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Reactstrap Components", link: "#"},
                {title: "Badges", link: "#"},
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Badges" breadcrumbItems={this.state.breadcrumbItems}/>
                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Contextual variations</h4>
                                <Badge color="primary">Primary</Badge>
                                <Badge color="secondary">Secondary</Badge>
                                <Badge color="success">Success</Badge>
                                <Badge color="danger">Danger</Badge>
                                <Badge color="warning">Warning</Badge>
                                <Badge color="info">Info</Badge>
                                <Badge color="light">Light</Badge>
                                <Badge color="dark">Dark</Badge>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
