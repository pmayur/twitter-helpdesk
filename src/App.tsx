import React from 'react';
import {RootStateOrAny, useSelector} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.scss';
import Signin from './pages/login';
import Signup from './pages/signup';
import {UsersState} from './redux/users/states';
import {AppRoute} from './util/CommonUtil';

const App = () => {
    const {isAuthenticated}: UsersState = useSelector((state: RootStateOrAny) => state.users);

    return (
        <div className="app">
            <div className="app_body">
                <Switch>
                    <Route exact path={'/'}>
                        <Redirect to={isAuthenticated ? AppRoute.DASHBOARD : AppRoute.SIGNIN}></Redirect>
                    </Route>
                    <Route path={AppRoute.SIGNUP} component={Signup} />
                    <Route path={AppRoute.SIGNIN} component={Signin} />
                </Switch>
            </div>
        </div>
    );
};

export default App;
