import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Home from './HomePage/Home';
import HomeP from '../pages/HomeP';
import { ServiceProvider } from './ServiceProviderPage/serviceProvider';
import './allComp.css';

export class AllComp extends React.Component {

    render() {

        return <div>

            <ul className='allul'>
                <li className='allli'><Link to='/' >Home</Link></li>
                <li className='allli'><Link to='/serviceprovider'>Service Provider</Link></li>
                <li className='allli'><Link to='/service'>Service</Link></li>
                
            </ul>

            <Switch>

                <Route path= '/' component={Home} exact ></Route>
                <Route path='/serviceprovider' component={ServiceProvider} exact></Route>
                <Route path='/service' component={HomeP} exact></Route>
            </Switch>    
            
        </div>
    }
}