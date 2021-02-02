import React, {Component} from "react";
import {
    Card,
    CardBody,
    Container,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';

class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Reactstrap Components", link: "#"},
                {title: "Modals", link: "#"},
            ],
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({modal: !this.state.modal})
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Modals" breadcrumbItems={this.state.breadcrumbItems}/>
                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">
                                   Modal
                                </h4>
                                <Button color="danger" onClick={this.toggle}>Launch</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Modals;
