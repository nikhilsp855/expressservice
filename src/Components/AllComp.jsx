import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Home from './HomePage/Home';
import HomeP from '../pages/HomeP';
import { ServiceProvider } from './ServiceProviderPage/serviceProvider';

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
            </ul>
            <Switch>

                <Route exact path= '/' component={Home} exact ></Route>
                <Route path='/serviceprovider' component={ServiceProvider} exact></Route>
                <Route path='/service' component={HomeP} exact></Route>
            </Switch>    
            
        </div>
    }
}