import React, {Component} from 'react';
import {
    Form,
    Input,
    Button,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import NotificationDropdown from "./NotificationDropdown";
import ProfileMenu from './ProfileMenu';
import logoLight from '../assets/images/logo-light.png';
import logoDark from '../assets/images/logo-dark.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
            isSocialPf: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch = () => {
        this.setState({isSearch: !this.state.isSearch});
    }

    toggleMenu() {
        this.props.toggleMenuCallback();
    }

    render() {
        return (
            <React.Fragment>
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box">
                                <Link to="#" className="logo logo-dark">
                                      <span className="logo-sm">
                                          <img src={logoDark} alt="" height="22"/>
                                      </span>
                                      <span className="logo-lg">
                                          <img src={logoDark} alt="" height="50"/>
                                      </span>
                                </Link>
                                <Link to="#" className="logo logo-light">
                                      <span className="logo-sm">
                                          <img src={logoLight} alt="" height="22"/>
                                      </span>
                                      <span className="logo-lg">
                                          <img src={logoLight} alt="" height="50"/>
                                      </span>
                                </Link>
                            </div>

                            <Button
                                size="sm"
                                color="none"
                                type="button"
                                onClick={this.toggleMenu}
                                className="px-3 font-size-24 header-item"
                                id="vertical-menu-btn"
                            >
                                <i className="fas fa-bars"></i>
                            </Button>

                            <Form className="app-search d-none d-lg-block">
                                <div className="position-relative">
                                    <Input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                    />
                                    <span className="fas fa-search"></span>
                                </div>
                            </Form>
                        </div>
                        <div className="d-flex">
                            <NotificationDropdown/>
                            <ProfileMenu/>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default Header;
