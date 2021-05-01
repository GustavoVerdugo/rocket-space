import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Rockets / Cohetes',
    path: '/rockets',
    icon: <FaIcons.FaRocket />,
    cName: 'nav-text'
  },
  {
    title: 'Launches / Lanzamientos',
    path: '/launches',
    icon: <AiIcons.AiFillRocket />,
    cName: 'nav-text'
  },
];