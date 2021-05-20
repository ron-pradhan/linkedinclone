import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { auth } from '../../firebase'
import { login } from '../../features/userSlice'

import './login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName
                })
            ) 
        }).catch(error => alert(error)) 
    }

    const handleRegister = () => {
        if(!name) {
            return alert('Please enter Full Name')
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name
                }))
            })
        }).catch((error) => alert(error))
    }

    return (
        <div className="login">
            <img src="https://www.onrec.com/sites/onrec/directory/files/Linkedin-Logo.png" alt="linked-in signup"/>
            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" type="text"/>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={e => setPassword(e.target.value)}  placeholder="Password" type="password"/>
                <button type="submit" onClick={handleLogin}>Sign In</button>
            </form>
            <p>Not a member? {" "}
                <span className="login__register" onClick={handleRegister}>Register Now</span>
            </p>
        </div>
    )
}

export default Login