import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import PublicIcon from '@mui/icons-material/Public';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topleft">
          <span className="logo">payam</span>
        </div>
        <div className="topright">
          <div className="topbariconcontainer">
          <NotificationsIcon/>
            <span className="badge">
              2
            </span>
          </div>
          <div className="topbariconcontainer">
            <PublicIcon/>
          </div>
          <div className="topbariconcontainer">
            <SettingsIcon/>
          </div>
          <div className="topbariconcontainer">
            <AccountCircleIcon/>
          </div>

        </div>
      </div>
    </div>
  )
}
