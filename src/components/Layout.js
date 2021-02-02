import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftSideBarType: "default",
        };
        this.toggleMenuCallback = this.toggleMenuCallback.bind(this);
    }

    capitalizeFirstLetter = string => {
        return string
            .replace(/-/g, ' ')
            .replace('/', '')
            .replace(/\b\w/g, l => l.toUpperCase())
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        let currentage = this.capitalizeFirstLetter(this.props.location.pathname);
        document.title = currentage + " | Bahar";
    }

    toggleMenuCallback = () => {
        if (this.state.leftSideBarType === "default") {
            this.setState({leftSideBarType: "condensed"});
            document.body.classList.add('vertical-collpsed');
        } else if (this.state.leftSideBarType === "condensed") {
            this.setState({leftSideBarType: "default"});
            document.body.classList.remove('vertical-collpsed');
        }
    };

    render() {
        return (
            <React.Fragment>
                <div id="layout-wrapper">
                    <Header toggleMenuCallback={this.toggleMenuCallback}/>
                    <Sidebar type={this.state.leftSideBarType}/>
                    <div className="main-content">
                        {this.props.children}
                        <Footer/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(Layout);
