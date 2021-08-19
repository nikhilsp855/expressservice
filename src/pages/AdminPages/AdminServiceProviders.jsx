import React, { Component } from 'react'
import './admin-pages.css'
import Footer from '../../Components/Page2/Footer'
import { ServiceFilter } from '../../Components/Admin/ServiceFilter/ServiceFilter';
import NewSps from '../../Components/Admin/NewSP/NewSps';
import { FilterTiltShiftSharp } from '@material-ui/icons';


export default class ServiceProviders extends Component {

    constructor(props) {

        super(props);
        this.serviceFilterRef = React.createRef();
    }

    rerenderServiceFilter(){

        this.serviceFilterRef.current.reFetch();
    }

    render() {
        return (
            <div>
                <h1 className='card card-header'>ServiceProviders</h1>
                <div>
                    {//<h2 className='card card-header'>Accept Deny Service providers</h2>
                        }
                    <div className='accept-deny'>
                        <NewSps accessToken={this.props.accessToken} rerenderServiceFilter={this.rerenderServiceFilter.bind(this)}/>
                    </div>
                </div>
                <div>
                    <b className='card card-header'>Search for a Service Provider</b>
                    <ServiceFilter accessToken={this.props.accessToken} ref={this.serviceFilterRef}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

