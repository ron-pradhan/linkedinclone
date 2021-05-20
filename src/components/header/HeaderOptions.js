import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './HeaderOptions.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice';

function HeaderOptions({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser)
    return (
        <div onClick ={onClick} className="headerOptions">
            {Icon && <Icon className="headerOptions__icon"/>}
            {avatar && (
            <Avatar className="headerOptions__avatar">{user?.email[0].toUpperCase()}</Avatar>)}
            <h3 className="headerOptions_title">{title}</h3>
        </div>
    )
}

export default HeaderOptions