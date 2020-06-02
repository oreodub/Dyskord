import React from "react";
import {Route, Switch, Link} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
const App = () => (
    <div>
        <header>
            <h1>dyskord from app</h1>
        </header>
        {/* <Link to="/login">Login</Link> */}
        <GreetingContainer />

        <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
        
    </div>
);

export default App;