import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import home from '../pages/home/index'
import my from '../pages/my/index'
import policy from '../pages/policy/index'
import service from '../pages/service/index'
import policyDetail from '../pages/policy/detail'

function BasicRoute() {

    return (
        <Switch>
            <Route exact path="/" component={home}></Route>
            <Route path="/policy" component={policy}></Route>
            <Route exact path="/policy-detail" component={policyDetail}></Route>
            <Route exact path="/service" component={service}></Route>
            <Route exact path="/my" component={my}></Route>
            <Redirect to="/" />
        </Switch>
    )

}

export default BasicRoute;
