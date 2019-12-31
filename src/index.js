/**
 * Created by ever on 2019/12/9.
 */
import React from "react";
import ReactDom from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from "redux-thunk";
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './index.scss'
import reducers from "./reducer";
import './config'

import Login from "./container/login/login";
import Register from "./container/register/register";
import AuthRoute from "./component/authroute/authroute";
import BossInfo from "./container/bossInfo/bossInfo";
import GeniusInfo from "./container/geniusInfo/geniusInfo";
import Dashboard from "./component/dashboard/dashboard";

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDom.render(
    (
        <Provider store={store}>
            <Router>
                <div>
                    <AuthRoute></AuthRoute>
                    <Switch>
                        <Route path='/bossInfo' component={BossInfo}/>
                        <Route path='/geniusInfo' component={GeniusInfo}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route component={Dashboard}/>
                    </Switch>
                    {/*<Redirect path='/' to='/login'/>*/}
                </div>
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)