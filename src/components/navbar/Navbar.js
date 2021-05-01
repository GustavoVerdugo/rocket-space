import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#242424' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <div className='menu-icon'>
              {sidebar ? <BiIcons.BiMenuAltLeft onClick={showSidebar}/> : <BiIcons.BiMenuAltRight onClick={showSidebar}/>}
            </div>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                    {sidebar ? 
                    <Link to={item.path}>
                        <i>{item.icon}</i>
                    </Link> : 
                    <Link to={item.path}>
                        <i>{item.icon}</i>
                        <span>{item.title}</span>
                    </Link>}
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;