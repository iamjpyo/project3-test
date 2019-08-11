import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.0.0";
//import "./assets/css/blk-design-system-react.css";
import "./assets/demo/demo.css";

import Index from "./views/Index.jsx";
import LandingPage from "./views/examples/LandingPage.jsx";
import RegisterPage from "./views/examples/RegisterPage.jsx";
import ProfilePage from "./views/examples/ProfilePage.jsx";
import JPlanding from "./views/examples/landing.jsx";
import Reserve from "./views/examples/reserve.jsx"

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/components" render={props => <Index {...props} />} />
            <Route
                path="/landing-page"
                render={props => <LandingPage {...props} />}
            />
            <Route
                path="/register-page"
                render={props => <RegisterPage {...props} />}
            />
            <Route
                path="/profile-page"
                render={props => <ProfilePage {...props} />}
            />
            <Route
                path="/landing-jp"
                render={props => <JPlanding {...props} />}
            />
            <Route
                path="/reserve"
                render={props => <Reserve {...props} />}
            />
            <Redirect from="/" to="/components" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
