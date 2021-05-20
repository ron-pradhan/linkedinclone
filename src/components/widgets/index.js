import React from 'react'
import './Widget.css'

import Avatar from '@material-ui/core/Avatar';

function Widgets() {
    const recentItem = (topic) => (
        <div className="widget__recentItem">
            <span className="widget__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="widget__bar">
            <div className="widget__top">
                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHzaLLs4_8RAA/profile-displaybackgroundimage-shrink_200_800/0/1621045913258?e=1626912000&v=beta&t=NXCz5uRibA6lVpEpHufXKRgZXoP3vTAOHw-nZxqBnRc" alt="ronit" />
                <Avatar className="widget__avatar" src="https://qphs.fs.quoracdn.net/main-thumb-119430574-200-nutznivodnvmhxawwalbfoqdbriiwnrl.jpeg"/>
                <h2>Ronit Pradhan</h2>
                <h4>Front-End Web Developer</h4>
            </div>
            <div className="widget__stats">
                <div className="widget__stat">
                    <p>Who viewed your profile</p>
                    <p className="widget__statCount">43</p>
                </div>
                <div className="widget__stat">
                    <p>Connections</p>
                    <p className="widget__statCount">225</p>
                </div>
            </div>
            <div className="widget__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('frontend')}
            </div>
        </div>
    )
}

export default Widgets 
