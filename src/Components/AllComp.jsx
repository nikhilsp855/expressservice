import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Home from './HomePage/Home';
import HomeP from '../pages/HomeP';
import { ServiceProvider } from './ServiceProviderPage/serviceProvider';
import Admin from './Admin';
import Final from './Login_register/final';
import VerifyOtp from './Otp/verifyOtp';
export class AllComp extends React.Component {
constructor(){
    super();
        this.state={
            count: 0
    }
}

loadChangeafterOtp=(count)=>{
    this.setState({count:count})
    
}
    render() {

        return <div>
            <Switch>
                <Route path= '/verifyOtp'>
                    <VerifyOtp loadChangeafterOtp={this.loadChangeafterOtp}/>
                </Route>
                <Route exact path= '/' component={Home} exact ></Route>
                <Route path='/serviceprovider' component={ServiceProvider} exact></Route>
                <Route path='/service' component={HomeP} exact></Route>
                <Route path='/admin' component={Admin} ></Route>
                <Route path='/login'>
                    <Final count={this.state.count}/>
                </Route>
            </Switch>    
            
        </div>
    }
}