import React, { Component } from 'react'
import './admin-pages.css'
import Footer from '../../Components/Page2/Footer'
import ServiceFilter from '../../Components/Admin/ServiceFilter/ServiceFilter'


export default class ServiceProviders extends Component {
    render() {
        return (
            <div>
                <h1 className='title'>ServiceProviders</h1>
                <h2>Accept Deny Service providers</h2>
                <div className='accept-deny'></div>
                <b>Search for a Service Provider</b>
                <ServiceFilter/>
                <Footer/>
            </div>
        )
    }
}

