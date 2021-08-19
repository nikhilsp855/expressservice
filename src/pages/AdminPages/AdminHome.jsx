import React, { Component } from 'react'
import './admin-pages.css'
import { ServiceFilter } from '../../Components/Admin/ServiceFilter/ServiceFilter';
import Footer from '../../Components/Page2/Footer';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className='card card-header '>ADMIN</h1>
                <b>Search for a Customer</b>
                <ServiceFilter accessToken={this.props.accessToken}/>
                <Footer/>
            </div>
        )
    }
}
