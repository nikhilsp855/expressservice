import React, { Component } from 'react'
import './admin-pages.css'
import Footer from '../../Components/Page2/Footer'
//import SideBar from '../../Components/Admin/Sidebar/sidebar';


export default class ServiceProviders extends Component {
    render() {
        return (
            <div>
                {/* <SideBar/> */}
                <h1 className='title'>ServiceProviders</h1>
                <h2>Accept Deny Service providers</h2>
                <Footer/>
            </div>
        )
    }
}

