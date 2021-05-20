import React from 'react'
import './Post.css'

import Avatar from '@material-ui/core/Avatar';
import InputMulitimedia from './InputMulitimedia';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

function Post({name, description, message}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar">{name[0].toUpperCase()}</Avatar>
                <div className="post__info">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__footer">
                <InputMulitimedia Icon={ThumbUpIcon} title="Like"/>
                <InputMulitimedia Icon={CommentRoundedIcon} title="Comment"/>
                <InputMulitimedia Icon={ShareRoundedIcon} title="Share"/>
                <InputMulitimedia Icon={SendRoundedIcon} title="Send"/>
            </div>
        </div>
    )
}

export default Post
