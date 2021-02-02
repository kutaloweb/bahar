import React from "react";
import {Row, Col, Container} from "reactstrap";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            © {new Date().getFullYear()} Bahar Dashboard. All rights reserved.
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-right d-none d-sm-block">
                                Made with React.js and <i className="fas fa-heart text-danger"></i> by Alexey Kutalo
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
