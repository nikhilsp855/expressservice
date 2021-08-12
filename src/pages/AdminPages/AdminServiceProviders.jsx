import React, { Component } from 'react'
import './admin-pages.css'
import Footer from '../../Components/Page2/Footer'
import ServiceFilter from '../../Components/Admin/ServiceFilter/ServiceFilter';
import NewSps from '../../Components/Admin/NewSP/NewSps';


export default class ServiceProviders extends Component {
    render() {
        return (
            <div>
                <h1 className='card card-header'>ServiceProviders</h1>
                <h2 className='card card-header'>Accept Deny Service providers</h2>
                <div className='accept-deny'><NewSps/></div>
                <b className='card card-header'>Search for a Service Provider</b>
                <ServiceFilter/>
                <Footer/>
            </div>
        )
    }
}

