import React,{useState} from 'react';
import { SideBarData } from './sidebarData';
import './sidebar.css';
import { IconContext } from 'react-icons/lib';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function SideBar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  
    return (
      <>
        <IconContext.Provider value={{ color: 'white' }}>
          <header className='navbar1'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            
            <li><img style={{height:50}} src="/images/logo1.png" alt="logo"/></li>
            {/* Seperator */}
            <li style={{width:2000}}></li>       
            <li><Link style={{ float:'right' }} className='menu-bars' to='/'>HOME</Link></li>
            <li><Link style={{ float:'right' }} className='menu-bars' to='/login'>LOGOUT</Link></li>
          </header>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <FaIcons.FaArrowCircleLeft />
                </Link>
              </li>
              {SideBarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
}




