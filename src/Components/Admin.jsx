import React from 'react'
import { Switch,Route } from 'react-router';
import Home from '../pages/AdminPages/AdminHome';
import ServiceProviders from '../pages/AdminPages/AdminServiceProviders';
import Stats from '../pages/AdminPages/Stats';
import SideBar from './Admin/Sidebar/sidebar';

export default function Admin() {
    return (
        <div>
                <SideBar/>
                <Switch>
                    <Route exact path='/admin' component={Home} />
                    <Route path='/admin/serviceprov' component={ServiceProviders} />
                    <Route path='/admin/stats' component={Stats} />
                </Switch>
        </div>
    )
}
