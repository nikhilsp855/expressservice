import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Home from './HomePage/Home';
import { ServiceProvider } from './ServiceProviderPage/serviceProvider';
import './allComp.css';

export class AllComp extends React.Component {

    render() {

        return <div>

            <ul className='allul'>
                <li className='allli'><Link to='/home' >Home</Link></li>
                <li className='allli'><Link to='/service'>Service Provider</Link></li>
                
            </ul>

            <Switch>

                <Route exact path='/home' component={Home}></Route>
                <Route path='/service' component={ServiceProvider}></Route>
                
            </Switch>
        </div>
    }
}