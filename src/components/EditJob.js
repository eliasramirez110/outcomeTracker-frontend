import React, { Fragment, useState } from "react";

const EditJob = ({ job }) => {
  
  return (
    <Fragment>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Edit
    </button>
    
    
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
    
          <div class="modal-header">
            <h4 class="modal-title">Edit Job</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
    
          <div class="modal-body">
            <input type='text' className="form-control"/>
          </div>
    
          <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Edit</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
    
        </div>
      </div>
    </div>
    </Fragment>
    )
};

export default EditJob
