import React from 'react';
import { CustomerList } from './customerList';
import { Switch, Link, Route} from 'react-router-dom'
import  UpdateDetails  from './updateDetails';
import { TrendingItems } from './trendingItems';
import { Stats } from './stats';
import NewRequests from './NewRequests';


export class ServiceBody extends React.Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
          accessToken : this.props.accessToken,
        }
    }

    render() {

        console.log("In Service body render(), ",this.state.customerList);
        return <div className="container-fluid margintop30">
            <div className="row">

                <div className="col-md-12 container-fluid">

                    <div className="row">

                        <div className="col-md-4 greyBlackBackground">
                      
                            <h2><strong>Overview</strong></h2>
                            <div className='overEle'><Link to='/serviceprovider' id='active'>Customer</Link></div>
                            <div className='overEle'><Link to='/serviceprovider/updateDetails'>Update Details</Link></div>
                            <div className='overEle'><Link to='/serviceprovider/newrequests'>New Requests</Link></div>
                            <div className='overEle'><Link to='/serviceprovider/trendingItems'>Trending Items</Link></div>
                            <div className='overEle'><Link to='/serviceprovider/stats'>Stats</Link></div>
                        </div>

                        <div class="col-md-8">

                            <Switch>

                                <Route exact path='/serviceprovider'>
                                    <CustomerList accessToken={this.state.accessToken}/>
                                </Route>
                                <Route path='/serviceprovider/updateDetails'>
                                    <UpdateDetails accessToken={this.state.accessToken}/>
                                </Route>
                                <Route path='/serviceprovider/trendingItems' component={TrendingItems}></Route>
                                <Route path='/serviceprovider/newrequests'>
                                    <NewRequests accessToken={this.state.accessToken}/>
                                </Route>
                                <Route path='/serviceprovider/stats' component={Stats}></Route>

                            </Switch>
                            
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}