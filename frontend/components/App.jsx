import React from "react";
import {Route, Switch, Link} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
const App = () => (
    <div>
        <header>
            <h1>dyskord from app</h1>
        </header>
        <Link to="/login">Login</Link>

        <Route path="/login" component={LogInFormContainer} />
        <Route path="/signup" component={SignUpFormContainer} />
        
    </div>
);

export default App;