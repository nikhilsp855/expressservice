import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Home from './HomePage/Home';
import HomeP from '../pages/HomeP';
import { ServiceProvider } from './ServiceProviderPage/serviceProvider';
import Admin from './Admin';
import Final from './Login_register/final';
import VerifyOtp from './Otp/verifyOtp';

import Booking from '../pages/Booking';

import Spfinal from './Login_register/spfinal';

export class AllComp extends React.Component {
constructor(){
    super();
        this.state={
            count: 0,
            pno: ''
    }
}

loadChangeafterOtp=(count)=>{
    this.setState({count:count})
    
}

getPhoneNumber=(pno)=>{
    this.setState({pno:pno})
}
    render() {

        return <div>
            <Switch>
                <Route path= '/verifyOtp'>
                    <VerifyOtp loadChangeafterOtp={this.loadChangeafterOtp} getPhoneNumber={this.getPhoneNumber}/>
                </Route>
                <Route exact path= '/' component={Home} exact ></Route>
                <Route path='/serviceprovider' component={ServiceProvider}></Route>
                <Route path='/service' component={HomeP}></Route>
                <Route path='/admin' component={Admin} ></Route>
                <Route path='/login'>
                    <Final count={this.state.count} pno={this.state.pno} />
                </Route>

                <Route path='/booking' component={Booking} exact></Route>
                <Route path='/splogin'>
                    <Spfinal count={this.state.count} pno={this.state.pno} />
                </Route>
            </Switch>    
            
        </div>
    }
}