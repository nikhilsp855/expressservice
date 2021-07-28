import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Home from './HomePage/Home';
import HomeP from '../pages/HomeP';
import { ServiceProvider } from './ServiceProviderPage/serviceProvider';
import './allComp.css';

export class AllComp extends React.Component {

    render() {

        return <div>

            <Switch>

                <Route path= '/' component={Home} exact ></Route>
                <Route path='/serviceprovider' component={ServiceProvider} exact></Route>
                <Route path='/service' component={HomeP} exact></Route>
            </Switch>    
            
        </div>
    }
}