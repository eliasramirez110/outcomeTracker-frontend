import React, { Fragment, useState } from "react";

const InputJobs = (props) => {

  const [description , setDescription] = useState("")

  const onsubmitForm = async(event) => {
    event.preventDefault();
    try {
      const body = {description};
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
    <h1 className="text-center mt-5">Outcomes Job tracker</h1>
    <form className="d-flex mt-5" onSubmit={onsubmitForm}>
      <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
      <button className="btn btn-info">Add</button>
    </form>
  </Fragment>
  );
};

export default InputJobs;