import React from 'react';
import { CustomerList } from './customerList';
import { Switch, Link, Route} from 'react-router-dom'
import { UpdateDetails } from './updateDetails';
import { TrendingItems } from './trendingItems';
import { Stats } from './stats';

export class ServiceBody extends React.Component {
    

    render() {

        return <div className="container-fluid margintop30">
            <div className="row">

                <div className="col-md-12 container-fluid">

                    <div className="row">

                        <div className="col-md-4 greyBlackBackground">
                      
                            <h2><strong>Overview</strong></h2>
                            <div className='overEle'><Link to='/service' id='active'>Customer</Link></div>
                            <div className='overEle'><Link to='/service/updateDetails'>Update Details</Link></div>
                            <div className='overEle'><Link to='/service/trendingItems'>Trending Items</Link></div>
                            <div className='overEle'><Link to='/service/stats'>Stats</Link></div>
                        </div>

                        <div class="col-md-8">

                            <Switch>

                                <Route exact path='/service' component={CustomerList}></Route>
                                <Route path='/service/updateDetails' component={UpdateDetails}></Route>
                                <Route path='/service/trendingItems' component={TrendingItems}></Route>
                                <Route path='/service/stats' component={Stats}></Route>

                            </Switch>
                            
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}