import { useEffect } from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import FeedPost from './components/feed'
import Widgets from './components/widgets'
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'
import Login from './components/login'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

import './App.css';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName
          })
        )
      } else {
        dispatch(logout())
      }
    })
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (
          <div className="app__body">
            <Sidebar />
            <FeedPost/>
            <Widgets/>
          </div>
        )
      }
    </div>
  );
}
export default App;