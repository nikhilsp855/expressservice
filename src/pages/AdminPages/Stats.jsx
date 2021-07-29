import React, { Component } from 'react';
import Barchart from '../../Components/Admin/Stats/Barchart';
import Linechart from '../../Components/Admin/Stats/Linechart';
import Piechart from '../../Components/Admin/Stats/Piechart';
import './admin-pages.css';
// import SideBar from '../../Components/Admin/Sidebar/sidebar';
import Footer from '../../Components/Page2/Footer';

export default class Stats extends Component {
    render() {
        return (
            <div id='stats-style'>
                <h1 className="title">Stats</h1>
                <h2 className="chart-title">Bar Chart</h2>
                <Barchart/>
                <h2 className="chart-title">Line Chart</h2>
                <Linechart/>
                <h2 className="chart-title">Pie Chart</h2>
                <Piechart/>
                <Footer/>
            </div>
        )
    }
}
