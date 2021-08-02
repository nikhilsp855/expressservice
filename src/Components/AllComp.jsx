import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Home from './HomePage/Home';
import HomeP from '../pages/HomeP';
import { ServiceProvider } from './ServiceProviderPage/serviceProvider';
import Admin from './Admin';
import Final from './Login_register/final';
import Spfinal from './Login_register/spfinal';

export class AllComp extends React.Component {

    render() {

        return <div>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/serviceprovider'>Service Provider</Link>
                </li>
                <li>
                    <Link to='/service'>Service</Link>
                </li>
                <li>
                    <Link to='/admin'>Admin</Link>
                </li>
                <li>
                    <Link to='/customerlogin'>Customer Login & Register</Link>
                </li>
                <li>
                    <Link to='/serviceproviderlogin'>Service Provider Login & Register</Link>
                </li>
                
            </ul>
            <Switch>
                <Route exact path= '/' component={Home} exact ></Route>
                <Route path='/serviceprovider' component={ServiceProvider} exact></Route>
                <Route path='/service' component={HomeP} exact></Route>
                <Route path='/admin' component={Admin} ></Route>
                <Route path='/customerlogin' component={Final} ></Route>
                <Route path='/serviceproviderlogin' component={Spfinal} ></Route>

            </Switch>    
            
        </div>
    }
}