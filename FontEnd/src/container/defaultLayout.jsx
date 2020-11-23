import React, { Component } from "react";
import Header from "./header";
import HeaderContainer from '../redux/containers/HeaderContainer';
import Footer from "./footer";
import { Route, Switch } from "react-router-dom";
import Routes from "../Routes/routes";
class DefaultLayout extends Component {
    state = {};
    render() {
        return (
            <div>
                <HeaderContainer />
                <Switch>
                    {Routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                component={route.component} />
                        ): null;
                    })}
                </Switch>
                <Footer/>
            </div>
        );
    }
}
export default DefaultLayout;