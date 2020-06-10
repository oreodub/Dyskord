import React from "react";
import {Route, Switch, Link} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={SplashContainer} />
            <ProtectedRoute path ="/servers" component={HomeContainer} />
        </Switch>
        
    </div>
);

export default App;