import React, {Component} from 'react';
import MetisMenu from 'metismenujs';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Badge} from "reactstrap";

class SidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (this.props.type !== prevProps.type) {
                this.initMenu();
            }
        }
    }

    initMenu() {
        new MetisMenu('#side-menu');
        let matchingMenuItem = null;
        let ul = document.getElementById('side-menu');
        let items = ul.getElementsByTagName('a');
        for (let i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = (item) => {
        item.classList.add('active');
        const parent = item.parentElement;
        if (parent) {
            parent.classList.add('mm-active');
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add('mm-show');
                const parent3 = parent2.parentElement;
                if (parent3) {
                    parent3.classList.add('mm-active');
                    parent3.childNodes[0].classList.add('mm-active');
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add('mm-active');
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div id="sidebar-menu">
                    <ul className="metismenu list-unstyled" id="side-menu">
                        <li className="menu-title">Menu</li>
                        <li>
                            <Link to="/#">
                                <i className="fas fa-home"></i>
                                <Badge color="success" className="float-right badge-menu">8</Badge>
                                <span className="ml-1">Dashboard</span>
                            </Link>
                        </li>
                        <li className="menu-title">Components</li>
                        <li>
                            <Link to="/#" className="has-arrow">
                                <i className="fab fa-react"></i>
                                <span className="ml-1">Reactstrap</span>
                            </Link>
                            <ul className="sub-menu" aria-expanded="false">
                                <li>
                                    <Link to="reactstrap-alerts">Alerts</Link>
                                </li>
                                <li>
                                    <Link to="reactstrap-badges">Badges</Link>
                                </li>
                                <li>
                                    <Link to="reactstrap-buttons">Buttons</Link>
                                </li>
                                <li>
                                    <Link to="reactstrap-cards">Cards</Link>
                                </li>
                                <li>
                                    <Link to="reactstrap-forms">Forms</Link>
                                </li>
                                <li>
                                    <Link to="reactstrap-modals">Modals</Link>
                                </li>
                                <li>
                                    <Link to="reactstrap-tabs">Tabs</Link>
                                </li>
                                <li>
                                    <a href="https://reactstrap.github.io/components/" target="_blank"
                                       rel="noopener noreferrer">
                                        More <i className="fas fa-external-link-alt" style={{fontSize: '13px'}}></i>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/#" className="has-arrow waves-effect">
                                <i className="fas fa-chart-bar"></i>
                                <span className="ml-1">ApexCharts</span>
                            </Link>
                            <ul className="sub-menu" aria-expanded="false">
                                <li>
                                    <Link to="charts-line">Line Charts</Link>
                                </li>
                                <li>
                                    <Link to="charts-area">Area Charts</Link>
                                </li>
                                <li>
                                    <Link to="charts-column">Column Charts</Link>
                                </li>
                                <li>
                                    <Link to="charts-bar">Bar Charts</Link>
                                </li>
                                <li>
                                    <a href="https://apexcharts.com/react-chart-demos/" target="_blank"
                                       rel="noopener noreferrer">
                                        More <i className="fas fa-external-link-alt" style={{fontSize: '13px'}}></i>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link to="react-datatables">
                                <i className="fas fa-grip-horizontal"></i>
                                <Badge color="danger" className="float-right badge-menu">7</Badge>
                                <span className="ml-1">React Datatables</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="font-awesome-icons">
                                <i className="fas fa-icons"></i>
                                <span className="ml-1">Font Awesome 5</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(SidebarMenu);
