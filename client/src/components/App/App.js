import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';

function setAuthToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getAuthToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {
  const [token, updateToken] = useState(getAuthToken());

  if (!token) {
    return <Login setToken={setAuthToken} />;
  }

  return (
    <Router> {/* Wrap your entire application with Router */}
      <div className="wrapper">
        <h1>Application</h1>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
