import React from 'react';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as ImIcons from 'react-icons/im';

export const SideBarData = [
    {
        title:'ADMIN',
        path :'/admin/',
        cName:'nav-text1',
        icon : <RiIcons.RiAdminFill />
    },
    {
        title:'SERVICE PROVIDERS',
        path :'/admin/serviceprov',
        cName:'nav-text1',
        icon : <BsIcons.BsFillBriefcaseFill />
    },
    {
        title:'STATS',
        path :'/admin/stats',
        cName:'nav-text1',
        icon : <ImIcons.ImStatsBars2 />
    }

];
