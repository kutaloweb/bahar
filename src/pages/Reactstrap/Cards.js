import React, {Component} from "react";
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, CardImg, Col, Row
} from 'reactstrap';
import Breadcrumbs from '../../components/Breadcrumb';
import cardImg from '../../assets/images/318x180.svg';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Reactstrap Components", link: "#"},
                {title: "Cards", link: "#"},
            ],
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Cards" breadcrumbItems={this.state.breadcrumbItems}/>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col xl={6}>
                                        <h4 className="card-title mb-4">Header and Footer</h4>
                                        <Card>
                                            <CardHeader>Header</CardHeader>
                                            <CardBody>
                                                <CardTitle tag="h5">Special Title Treatment</CardTitle>
                                                <CardText>With supporting text below as a natural lead-in to additional
                                                    content.</CardText>
                                                <Button>Go somewhere</Button>
                                            </CardBody>
                                            <CardFooter>Footer</CardFooter>
                                        </Card>
                                    </Col>
                                    <Col xl={6}>
                                        <h4 className="card-title mb-4">Image caps</h4>
                                        <Card>
                                            <CardImg top width="100%" src={cardImg} alt="Card image cap"/>
                                            <CardBody>
                                                <CardTitle tag="h5">Card Title</CardTitle>
                                                <CardText>This is a wider card with supporting text below as a natural
                                                    lead-in to additional content. This content is a little bit
                                                    longer.</CardText>
                                                <CardText>
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Cards;
