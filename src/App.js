import React, { Fragment } from 'react';
import './App.css';

//components
import InputJobs from "./components/InputJobs"
import ListJobs from "./components/ListJobs"

function App() {
  return (
   <Fragment>
     <div className="container">
      <InputJobs />
      <ListJobs />
     </div>
     
   </Fragment>
  );
}

export default App;
