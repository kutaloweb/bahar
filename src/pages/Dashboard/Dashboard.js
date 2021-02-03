import React, {Component} from 'react';
import {Card, CardBody, CardFooter, Col, Container, Row} from 'reactstrap';
import Breadcrumbs from '../../components/Breadcrumb';
import ReactApexChart from "react-apexcharts";
import chart1 from './charts/chart-1';
import chart2 from "./charts/chart-2";
import chart3 from './charts/chart-3';
import chart4 from './charts/chart-4';
import chart5 from './charts/chart-5';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: 'Bahar', link: '#'},
                {title: 'Dashboard', link: '#'},
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs
                            title="Dashboard"
                            breadcrumbItems={this.state.breadcrumbItems}
                        />
                        <Row>
                            <Col xl={4}>
                                <Card>
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <Col>
                                                <h3>1297</h3>
                                                <h6 className="text-muted m-b-0">Visits Today</h6>
                                            </Col>
                                            <Col>
                                                <ReactApexChart {...chart1} />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card>
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <Col>
                                                <h3>6544</h3>
                                                <h6 className="text-muted m-b-0">New Orders</h6>
                                            </Col>
                                            <Col>
                                                <ReactApexChart {...chart2} />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4}>
                                <Card>
                                    <CardBody>
                                        <Row className="align-items-center">
                                            <Col>
                                                <h3>$1625</h3>
                                                <h6 className="text-muted m-b-0">Income</h6>
                                            </Col>
                                            <Col>
                                                <ReactApexChart {...chart3} />
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6}>
                                <Card>
                                    <CardBody className='pb-0'>
                                        <h2 className="m-0">3907</h2>
                                        <p>Support Requests</p>
                                    </CardBody>
                                    <CardBody className='p-0'>
                                        <ReactApexChart {...chart4} />
                                    </CardBody>
                                    <CardFooter className='bg-primary text-white'>
                                        <Row className='text-center'>
                                            <Col>
                                                <h4 className="m-0 text-white">10</h4>
                                                <span>Open</span>
                                            </Col>
                                            <Col>
                                                <h4 className="m-0 text-white">3897</h4>
                                                <span>Solved</span>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card>
                                    <CardBody className='pb-0'>
                                        <h2 className="m-0">159880</h2>
                                        <p>Clients</p>
                                    </CardBody>
                                    <CardBody className='p-0'>
                                        <ReactApexChart {...chart5} />
                                    </CardBody>
                                    <CardFooter className='bg-primary text-white'>
                                        <Row className='text-center'>
                                            <Col>
                                                <h4 className="m-0 text-white">22%</h4>
                                                <span>Conversion rate</span>
                                            </Col>
                                            <Col>
                                                <h4 className="m-0 text-white">3897</h4>
                                                <span>Active</span>
                                            </Col>
                                        </Row>
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
