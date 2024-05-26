import React from 'react'
import './Sidbar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimeLineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BarChartIcon from '@mui/icons-material/BarChart'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import FlagIcon from '@mui/icons-material/Flag';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';

import {Link} from 'react-router-dom'

export default function Sidbar() {
  return (
    <div className="sidbar">
        <div className="sidbarwrapper">
            <div className="sidbarmenu">
                <h3 className="sidbartittle">dashboard</h3>
                <ul className='siodbarlist'>
                    <Link to='/home' className='link'>
                    <li className='sidbarlistitem '>
                        <LineStyleIcon className='sidebaricon'/> 
                        Home
                    </li>
                    </Link>
                    <li className='sidbarlistitem'>
                        <TimeLineIcon className='sidebaricon'/>
                        Analytics 
                    </li>
                    <li className='sidbarlistitem'>
                        <TrendingUpIcon className='sidebaricon'/> 
                        sales
                    </li>
                    <li className='sidbarlistitem'>
                        <BusinessCenterOutlinedIcon className='sidebaricon'/> 
                        Manage
                    </li>
                </ul>
            </div>
            <div className="sidbarmenu">
                <h3 className="sidbartittle">quick menu</h3>
                <ul className='siodbarlist'>
                    <Link to='/user' className='link'>
                    <li className='sidbarlistitem'>
                        <PermIdentityIcon className='sidebaricon'/> 
                        Users
                    </li>
                    </Link>
                    <Link to='/newuser' className='link'>
                    <li className='sidbarlistitem'>
                        <PersonAddAltIcon className='sidebaricon'/>
                        New user 
                    </li>
                    </Link>
                    <Link to='/products' className='link'>
                    <li className='sidbarlistitem'>
                        <ProductionQuantityLimitsIcon className='sidebaricon'/> 
                        Products
                    </li>
                    </Link>
                    <li className='sidbarlistitem'>
                        <BarChartIcon className='sidebaricon'/> 
                        Transaction
                    </li>       
                    <li className='sidbarlistitem'>
                        <FlagIcon className='sidebaricon'/> 
                        report
                    </li>
                </ul>
            </div>
            <div className="sidbarmenu">
                <h3 className="sidbartittle">Notifications</h3>
                <ul className='siodbarlist'>
                    <li className='sidbarlistitem '>
                        <MailOutlineIcon className='sidebaricon'/> 
                        Mail
                    </li>
                    <li className='sidbarlistitem'>
                        <DynamicFeedIcon className='sidebaricon'/>
                            Feedback 
                    </li>
                    <li className='sidbarlistitem'>
                        <ChatBubbleOutlineIcon className='sidebaricon'/> 
                        Massages
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
