import React, { Fragment, useState } from "react";

const InputJobs = (props) => {

  const [jobtitle , setJobtitle] = useState("")
  const [description , setDescription] = useState("")
  const [companyname, setCompanyname] = useState("")
  const [salary, setSalary] = useState("")
  

  const onsubmitForm = async(event) => {
    event.preventDefault();
    try {
      const body = {
        jobtitle,
        description,
        companyname,
        salary
      };
      const respone = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      props.setShouldReloadJobs(true)
      // console.log(respone)
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
  <Fragment>
    <h1 className="text-left mt-5">Outcomes Job tracker</h1>
    <h4 className="text-center mt-5">Enter jobs that you have applied to</h4>
    <h4 className="text-center"></h4>

    <form className="d-flex mt-5" onSubmit={onsubmitForm}>
      <input type="text" placeholder="Job title" className="form-control" value={jobtitle} onChange={e => setJobtitle(e.target.value)}/>

      <input type="text" placeholder="Description" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>

      <input type="text" placeholder="Company Name" className="form-control" value={companyname} onChange={e => setCompanyname(e.target.value)}/>

      <input type="text" placeholder="Salary - enter a number" className="form-control" value={salary} onChange={e => setSalary(e.target.value)}/>
{/* 
      <input type="date" placeholder="Date Submitted" className="form-control" value={} onChange={e => setDate(e.target.value)}/> */}

      <button className="btn btn-info">Add</button>
    </form>
  </Fragment>
  );
};

export default InputJobs;