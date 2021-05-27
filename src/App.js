import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

import EditJob from './components/EditJob';
import NavBar from './components/NavBar'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles"
import { lightTheme, darkTheme } from "./components/Themes"
import './App.css';

//components
import InputJobs from "./components/InputJobs"
import ListJobs from "./components/ListJobs"
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  //dark and light mode
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const [user, setUser] = useState({})

    // const fetchUser = () => {
    //   const userId = `${process.env.REACT_APP_BACKEND_URL}/user`
    //   if (userId) {
    //     axios.get(`${env.REACT_APP_BACKEND_URL}/users/verify`,)
      
    
  
    return ( 
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
        <GlobalStyles/>
   <Fragment>
     
     <div className="container">
     <NavBar className="m-5" user={ user } setUser={setUser}/>
       <button className="btn rounded float-right"onClick={themeToggler}>Switch Theme</button>
      
      <Route path="/jobs" render={()=> {
        if(user.id){
          return <ListJobs />
        } else {
          return <Redirect to="/login"/>
        }
        
      }}/>

      <Route path="/login" render={()=> {
        if(!user.id){
          return <Login setUser={setUser} />
        } else {
          return <Redirect to="/jobs" />
        }
        
      }}/>

      <Route path="/signup" render={()=> {
        if(!user.id){
          return  <Signup setUser={setUser}/> 
        } else {
          return <Redirect to="/jobs" />
        }
        
      }}/>
      
      
      <EditJob />
      
       
     </div>
    
     
     
   </Fragment>
   </>
     </ThemeProvider>
  );
}

export default App;
