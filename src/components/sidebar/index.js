import React from 'react'
import './Sidebar.css'

import Avatar from '@material-ui/core/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHzaLLs4_8RAA/profile-displaybackgroundimage-shrink_200_800/0/1621045913258?e=1626912000&v=beta&t=NXCz5uRibA6lVpEpHufXKRgZXoP3vTAOHw-nZxqBnRc" alt="ronit" />
                <Avatar className="sidebar__avatar" src={user.profileURL}>{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statCount">43</p>
                </div>
                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className="sidebar__statCount">225</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('frontend')}
            </div>
        </div>
    )
}

export default Sidebar 
