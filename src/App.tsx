import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
    const isAuthenticated = false;

    return (
        <div className="app">
            <div className="app_body">
                <Switch>
                    <Route exact path={'/'}>
                        <Redirect
                            to={isAuthenticated ? '/chat' : '/login'}
                        ></Redirect>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default App;
