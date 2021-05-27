import React, { Fragment, useState } from "react";

const InputJobs = (props) => {

  const [jobtitle , setJobtitle] = useState("")
  const [description , setDescription] = useState("")
  const [companyname, setCompanyname] = useState("")
  const [salary, setSalary] = useState("")
  const [submitDate, setSubmitDate] = useState("")
  const [contactInfo, setContactInfo] = useState("")
  

  const onsubmitForm = async(event) => {
    event.preventDefault();
    try {
      const body = {
        jobtitle,
        description,
        companyname,
        salary,
        submitDate,
        contactInfo
      };
      const respone = await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization:localStorage.getItem('userId') },
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
      <div className="w-50 mr-2">
      <input type="text" placeholder="Job title" className="form-control m-2" value={jobtitle} onChange={e => setJobtitle(e.target.value)}/>
    
      <input type="text" placeholder="Description" className="form-control m-2" value={description} onChange={e => setDescription(e.target.value)}/>

      <input type="text" placeholder="Company Name" className="form-control m-2" value={companyname} onChange={e => setCompanyname(e.target.value)}/>

    </div>
    
    <div className="w-50 mr-2">
      <input type="text" placeholder="Salary - enter a number" className="form-control m-2" value={salary} onChange={e => setSalary(e.target.value)}/>

      <input type="date" placeholder="Date Submitted" className="form-control m-2" value={submitDate} onChange={e => setSubmitDate(e.target.value)}/>

      <input type="text" placeholder="Employer contact Info" className="form-control m-2" value={contactInfo} onChange={e => setContactInfo(e.target.value)}/>
    </div>

      <button className="btn btn-info m-2">Add</button>
    </form>
  </Fragment>
  );
};

export default InputJobs;