// App.js

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import Home from './components/Home';
import Login from './components/Login';
import CameraDetails from './components/CameraDetails';
import SignUp from './components/SignUp';
import Sidebar from './components/Sidebar';
import { setToken } from './redux/userAuth/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('token');
    const username = Cookies.get('username');

    if (token) {
      dispatch(setToken({ username, token }));
    }
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cameras" element={<CameraDetails />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
