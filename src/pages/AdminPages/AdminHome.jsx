import React, { Component } from 'react'
import './admin-pages.css'
//import SideBar from '../../Components/Admin/Sidebar/sidebar';
import Footer from '../../Components/Page2/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <SideBar/> */}
                <h1 className='title'>ADMIN</h1>
                <Footer/>
            </div>
        )
    }
}
