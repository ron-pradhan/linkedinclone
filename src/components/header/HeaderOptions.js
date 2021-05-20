import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './HeaderOptions.css'

function HeaderOptions({avatar, Icon, title, onClick}) {
    return (
        <div onClick ={onClick} className="headerOptions">
            {Icon && <Icon className="headerOptions__icon"/>}
            {avatar && (<Avatar className="headerOptions__icon" src={avatar}/>)}
            <h3 className="headerOptions_title">{title}</h3>
        </div>
    )
}

export default HeaderOptions