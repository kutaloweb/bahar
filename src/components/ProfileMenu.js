import React, {Component} from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import avatar from '../assets/images/users/avatar.jpg';

class ProfileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prevState) => ({
            menu: !prevState.menu,
        }));
    }

    render() {
        let username = 'Admin';
        if (localStorage.getItem('authUser')) {
            const obj = JSON.parse(localStorage.getItem('authUser'));
            const uNm = obj.email.split('@')[0];
            username = uNm.charAt(0).toUpperCase() + uNm.slice(1);
        }

        return (
            <React.Fragment>
                <Dropdown
                    isOpen={this.state.menu}
                    toggle={this.toggle}
                    className="d-inline-block user-dropdown"
                >
                    <DropdownToggle
                        tag="button"
                        className="btn header-item"
                        id="page-header-user-dropdown"
                    >
                        <img
                            className="rounded-circle header-profile-user mr-1"
                            src={avatar}
                            alt="Header Avatar"
                        />
                        <span className="d-none d-xl-inline-block ml-1 text-transform">
                            {username}
                        </span>
                        <i className="fas fa-angle-down d-none ml-1 d-xl-inline-block"></i>
                   </DropdownToggle>
                   <DropdownMenu right>
                        <DropdownItem className="text-danger" href="/logout">
                            <span className="text-danger dropdown-menu-item"><i className="fas fa-sign-out-alt mb-1 mr-1"></i>
                                Logout
                            </span>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default ProfileMenu;
