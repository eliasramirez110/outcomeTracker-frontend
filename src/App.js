import React, { Fragment } from 'react';
import './App.css';
import EditJob from './components/EditJob';

//components
import InputJobs from "./components/InputJobs"
import ListJobs from "./components/ListJobs"

function App() {
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
