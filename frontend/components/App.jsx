import React from "react";
import {Route, Switch, Link} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SplashContainer from './splash/splash_container'

const App = () => (
    <div>
        <header>
            <h1>dyskord from app</h1>
        </header>


        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={SplashContainer} />
        </Switch>
        
    </div>
);

export default App;