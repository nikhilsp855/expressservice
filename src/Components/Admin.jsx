import React from 'react'
import { Switch,Route } from 'react-router';
import Home from '../pages/AdminPages/AdminHome';
import ServiceProviders from '../pages/AdminPages/AdminServiceProviders';
import Stats from '../pages/AdminPages/Stats';
import SideBar from './Admin/Sidebar/sidebar';

export class Admin extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            accessToken : this.props.location.state && this.props.location.state.accessToken
        }
    }

    render() {
    
        return (
        
            <div>
                <SideBar/>
                <Switch>
                    <Route exact path='/admin'>
                        <Home accessToken={this.state.accessToken}/>
                    </Route>
                    <Route path='/admin/serviceprov'>
                        <ServiceProviders accessToken={this.state.accessToken}/>
                    </Route>
                    <Route path='/admin/stats'>
                        <Stats accessToken={this.state.accessToken}/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
