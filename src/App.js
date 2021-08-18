import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './Firebase';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const authenticatedBody = () => (
    <div className="app-body">
      <SideBar />
      <Feed />
      <Widgets />
    </div>
  );

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : authenticatedBody()}
    </div>
  );
}

export default App;
