import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Dropdown, DropdownToggle, DropdownMenu, Row, Col, Media} from "reactstrap";
import SimpleBar from "simplebar-react";
import avatar from "../assets/images/users/avatar.jpg";

class NotificationDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {
        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block">
                    <DropdownToggle tag="button" className="btn header-item noti-icon"
                                    id="page-header-notifications-dropdown">
                        <i className="far fa-bell"></i>
                        <span className="noti-dot"></span>
                    </DropdownToggle>
                    <DropdownMenu right className="dropdown-menu-lg p-0"
                                  aria-labelledby="page-header-notifications-dropdown">
                        <div className="p-3">
                            <Row className="align-items-center">
                                <Col>
                                    <h6 className="m-0 text-center">Notifications</h6>
                                </Col>
                            </Row>
                        </div>
                        <SimpleBar style={{maxHeight: "230px"}}>
                            <Link to="#" className="text-reset dropdown-menu-item">
                                <Media>
                                    <img src={avatar} className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                    <Media body>
                                        <h6 className="mt-0 mb-1">Jessica Harbour</h6>
                                        <div className="font-size-12 text-muted">
                                            <p className="mb-1">Why not use this awesome dashboard?</p>
                                            <p className="mb-0"><i className="far fa-clock"></i> 1 hours ago</p>
                                        </div>
                                    </Media>
                                </Media>
                            </Link>
                            <Link to="#" className="text-reset dropdown-menu-item">
                                <Media>
                                    <img src={avatar} className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                    <Media body>
                                        <h6 className="mt-0 mb-1">Jessica Harbour</h6>
                                        <div className="font-size-12 text-muted">
                                            <p className="mb-1">Why not use this awesome dashboard?</p>
                                            <p className="mb-0"><i className="far fa-clock"></i> 2 hours ago</p>
                                        </div>
                                    </Media>
                                </Media>
                            </Link>
                            <Link to="#" className="text-reset dropdown-menu-item">
                                <Media>
                                    <img src={avatar} className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                    <Media body>
                                        <h6 className="mt-0 mb-1">Jessica Harbour</h6>
                                        <div className="font-size-12 text-muted">
                                            <p className="mb-1">Why not use this awesome dashboard?</p>
                                            <p className="mb-0"><i className="far fa-clock"></i> 3 hours ago</p>
                                        </div>
                                    </Media>
                                </Media>
                            </Link>
                        </SimpleBar>
                        <div className="p-2 border-top">
                            <Link to="#" className="btn btn-sm btn-link font-size-14 btn-block text-center">
                                <i className="fas fa-arrow-alt-circle-right mr-1"></i> View More
                            </Link>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default NotificationDropdown;
