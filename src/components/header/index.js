import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationIcon from '@material-ui/icons/NotificationImportant';
import ChatIcon from '@material-ui/icons/Chat';
import StorageIcon from '@material-ui/icons/Storage';
import { useDispatch } from 'react-redux';
import HeaderOptions from './HeaderOptions';
import { auth } from '../../firebase'
import { logout } from '../../features/userSlice';

function Header() {
    const dispatch = useDispatch()
    const logoutApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header">
            <div className ="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="linkedin-logo"/>
                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className ='header__middle'>
                <HeaderOptions title="Home" Icon={HomeIcon}/>
                <HeaderOptions title="My Network" Icon={SupervisorAccountIcon}/>
                <HeaderOptions title="Jobs" Icon={BusinessCenterIcon}/>
                <HeaderOptions title="Messaging" Icon={ChatIcon}/>
                <HeaderOptions title="Notification" Icon={NotificationIcon}/>
                <HeaderOptions avatar="https://qphs.fs.quoracdn.net/main-thumb-119430574-200-nutznivodnvmhxawwalbfoqdbriiwnrl.jpeg" title="Me"
                onClick={logoutApp}/>
                
            </div>
            <div className="header__right">
                <HeaderOptions title="Work" Icon={StorageIcon}/>
                
            </div>
        </div>
    )
}

export default Header
