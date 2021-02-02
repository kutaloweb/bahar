import React, {Component} from "react";
import {Switch, BrowserRouter as Router} from "react-router-dom";
import {authProtectedRoutes, publicRoutes} from "./routes/";
import AppRoute from "./routes/route";
import Layout from "./components/Layout";
import NonAuthLayout from "./components/NonAuthLayout";
import "./assets/scss/app.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <Switch>
                        {publicRoutes.map((route, idx) => (
                            <AppRoute
                                path={route.path}
                                layout={NonAuthLayout}
                                component={route.component}
                                key={idx}
                                isAuthProtected={false}
                            />
                        ))}

                        {authProtectedRoutes.map((route, idx) => (
                            <AppRoute
                                path={route.path}
                                layout={Layout}
                                component={route.component}
                                key={idx}
                                isAuthProtected={true}
                            />
                        ))}
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
