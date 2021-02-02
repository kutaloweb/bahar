import React, {Component} from "react";
import {
    Card,
    CardBody,
    Container,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import Breadcrumbs from '../../components/Breadcrumb';
import classnames from 'classnames';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                {title: "Reactstrap Components", link: "#"},
                {title: "Tabs", link: "#"},
            ],
            activeTab: '1',
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) this.setState({activeTab: tab})
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Tabs" breadcrumbItems={this.state.breadcrumbItems}/>
                        <Card>
                            <CardBody>
                                <h4 className="card-title mb-4">
                                    Tabs
                                </h4>
                                <Nav tabs>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '1'})}
                                            onClick={() => {
                                                this.toggle('1');
                                            }}
                                        >
                                            Tab1
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({active: this.state.activeTab === '2'})}
                                            onClick={() => {
                                                this.toggle('2');
                                            }}
                                        >
                                            More Tabs
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={this.state.activeTab}>
                                    <TabPane tabId="1">
                                        <h4 className="mt-3">Tab 1 Contents</h4>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <h4 className="mt-3">Tab 2 Contents</h4>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Tabs;
