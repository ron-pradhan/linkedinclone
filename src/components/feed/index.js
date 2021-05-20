import React, { useState, useEffect } from 'react'
import InputMulitimedia from './InputMulitimedia'
import Post from './Post'

import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import { db } from '../../firebase'
import firebase from 'firebase'

import './Feed.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function FeedPost() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])   

    const sendPost = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    return (
        <div className="feedbar">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={handleChange} type="text" placeholder="Start a post"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputMultimedia">
                    <InputMulitimedia Icon={ImageIcon} title="Photo" color="#70B5F9 " />
                    <InputMulitimedia Icon={YouTubeIcon} title="Video" color="#7FC15E" />
                    <InputMulitimedia Icon={EventNoteIcon} title="Event" color="#E7A33E" />
                    <InputMulitimedia Icon={CalendarViewDayIcon} title="Write article" color="#F5987E" />
                </div>
            </div>
            <div className="feed__post">
                {posts.map(({id, data: {name, description, message}}) => (
                    <Post
                    key={id}
                    name={name}
                    description = {description}
                    message = {message} />
                ))}
            </div>
        </div>
    )
}

export default FeedPost