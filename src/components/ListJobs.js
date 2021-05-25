import React, { useEffect, useState } from "react";
import EditJob from "./EditJob"
import axios from 'axios'
import InputJobs from "./InputJobs"

const ListJobs = () => {

  const [jobs, setJobs] = useState([])
  const [shouldReloadJobs, setShouldReloadJobs] = useState(true)
  
  //delete jobs function
  const deleteJob = async (id) => {
    try {
      const deleteJob = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/jobs/${id}`, {
        method: "DELETE"
      });
      setShouldReloadJobs(true)
    } catch (error) {
      console.log(error.message)
    }
  }

//get jobs function
const getJobs = async () => {
  if(!shouldReloadJobs) {
    return
  }
  try {
  
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/jobs`,)
    
    setJobs(response.data.jobs)
    setShouldReloadJobs(false)
  } catch (err) {
    console.error(err.message)
  }
};

  useEffect(() => {
    getJobs()
  }, [shouldReloadJobs])

  useEffect(() => {
    console.log('response')
    getJobs()
  }, [])

  console.log(jobs)
  return (
    <div>
    <InputJobs setShouldReloadJobs={ setShouldReloadJobs }/>
  {/* //jobs list table */}
    <table className="table mt-5 text-center">
      <thead>
        <tr>
          <th>Job title</th>
          <th>Description</th>
          <th>Company Name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map(job => (
          <tr>
            <td>{job.jobtitle}</td>
            <td>{job.jobdescription}</td>
            <td>{job.companyname}</td>
            <td>{job.salary}</td>
            <td>Edit</td>
            <td><button className="btn btn-danger"onClick={()=>{
              deleteJob(job.id)

            }}>Delete</button></td>
          </tr>
        ))}
          </tbody>
      </table>
    </div>
);

}
export default ListJobs; 