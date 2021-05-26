import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css';
import EditJob from './components/EditJob';
import NavBar from './components/NavBar'

//components
import InputJobs from "./components/InputJobs"
import ListJobs from "./components/ListJobs"
import axios from 'axios';

function App() {
  const [user, setUser] = useState({})

    const fetchUser = () => {
      const userId = `${process.env.REACT_APP_BACKEND_URL}/user`
      if (userId) {
        axios.get(`${env.REACT_APP_BACKEND_URL}/users/verify`,)
      }
    }
  
    return ( 
      
   <Fragment>
     
     <div className="container">
      <ListJobs />
      <EditJob />
     </div>
     
   </Fragment>
  );
}

export default App;
