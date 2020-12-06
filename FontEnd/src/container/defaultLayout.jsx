import React, { Component } from "react";
import HeaderContainer from '../redux/containers/HeaderContainer';
import Footer from "./footer";
import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "../Routes/privateRoutes";
import PublicRoutes from "../Routes/publicRoutes";
import Cookies from "js-cookie";
import ProductService from "../services/ProductService";
class DefaultLayout extends Component {
    state = {};
    componentDidMount(){
        ProductService.listProduct().then(res => {
            console.log(res.data.products)
            this.props.onLoadProductFromApi(res.data.products)
        })
    }
    render() {
        return (
            <div>
                <HeaderContainer />
                {Cookies.get('expireAuth') ===undefined ?
                    <Switch>
                        {PublicRoutes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    auth={route.auth}
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    component={route.component} />
                            ) : null;
                        })}
                    </Switch> :
                    <Switch>
                        {PrivateRoutes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    auth={route.auth}
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    component={route.component}
                                    />
                            ) : null;
                        })}
                    </Switch>
                }
                <Footer />
            </div>
        );
    }
}
export default DefaultLayout;