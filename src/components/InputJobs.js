import React, { Fragment, useState } from "react";

const InputJobs = () => {

  const [description , setDescription] = useState("")

  const onsubmitForm = async() => {
    Event.preventDefault();
    try {
      const body = {description};
      const respone = await fetch("http://localhost:5000/jobslist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      // console.log(respone)
      window.location = "/";
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
  <Fragment>
    <h1 className="text-center mt-5">Outcomes Job tracker</h1>
    <form className="d-flex mt-5" onSubmit={onsubmitForm}>
      <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
      <button className="btn btn-info">Add</button>
    </form>
  </Fragment>
  );
};

export default InputJobs;