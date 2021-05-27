import React, { Fragment } from 'react';
// import { Redirect, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css';
import EditJob from './components/EditJob';
import NavBar from './components/NavBar'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles"
import { lightTheme, darkTheme } from "./components/Themes"

//components
import InputJobs from "./components/InputJobs"
import ListJobs from "./components/ListJobs"
import axios from 'axios';

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
       <button className="btn rounded float-right"onClick={themeToggler}>Switch Theme</button>
      
      <ListJobs />
      <EditJob />
       
     </div>
    
     
     
   </Fragment>
   </>
     </ThemeProvider>
  );
}

export default App;
