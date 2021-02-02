import React, {Component} from "react";
import {Alert, Card, CardBody, Container} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';

class Alerts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Reactstrap Components", link: "#"},
                {title: "Alerts", link: "#"},
            ],
            visiblePrimary: true,
            visibleSecondary: true,
            visibleSuccess: true,
            visibleDanger: true,
            visibleWarning: true,
            visibleInfo: true,
            visibleLight: true,
            visibleDark: true,
        };
        this.onDismissPrimary = this.onDismissPrimary.bind(this);
        this.onDismissSecondary = this.onDismissSecondary.bind(this);
        this.onDismissSuccess = this.onDismissSuccess.bind(this);
        this.onDismissDanger = this.onDismissDanger.bind(this);
        this.onDismissWarning = this.onDismissWarning.bind(this);
        this.onDismissInfo = this.onDismissInfo.bind(this);
        this.onDismissLight = this.onDismissLight.bind(this);
        this.onDismissDark = this.onDismissDark.bind(this);
    }

    onDismissPrimary() {
        this.setState({visiblePrimary: false})
    }

    onDismissSecondary() {
        this.setState({visibleSecondary: false})
    }

    onDismissSuccess() {
        this.setState({visibleSuccess: false})
    }

    onDismissDanger() {
        this.setState({visibleDanger: false})
    }

    onDismissWarning() {
        this.setState({visibleWarning: false})
    }

    onDismissInfo() {
        this.setState({visibleInfo: false})
    }

    onDismissLight() {
        this.setState({visibleLight: false})
    }

    onDismissDark() {
        this.setState({visibleDark: false})
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Alerts" breadcrumbItems={this.state.breadcrumbItems}/>
                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">Dismissing</h4>
                                <Alert color="primary" isOpen={this.state.visiblePrimary}
                                       toggle={this.onDismissPrimary}>
                                    This is a primary alert — check it out!
                                </Alert>
                                <Alert color="secondary" isOpen={this.state.visibleSecondary}
                                       toggle={this.onDismissSecondary}>
                                    This is a secondary alert — check it out!
                                </Alert>
                                <Alert color="success" isOpen={this.state.visibleSuccess}
                                       toggle={this.onDismissSuccess}>
                                    This is a success alert — check it out!
                                </Alert>
                                <Alert color="danger" isOpen={this.state.visibleDanger} toggle={this.onDismissDanger}>
                                    This is a danger alert — check it out!
                                </Alert>
                                <Alert color="warning" isOpen={this.state.visibleWarning}
                                       toggle={this.onDismissWarning}>
                                    This is a warning alert — check it out!
                                </Alert>
                                <Alert color="info" isOpen={this.state.visibleInfo} toggle={this.onDismissInfo}>
                                    This is a info alert — check it out!
                                </Alert>
                                <Alert color="light" isOpen={this.state.visibleLight} toggle={this.onDismissLight}>
                                    This is a light alert — check it out!
                                </Alert>
                                <Alert color="dark" isOpen={this.state.visibleDark} toggle={this.onDismissDark}>
                                    This is a dark alert — check it out!
                                </Alert>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Alerts;
