import React from "react";

const ApproveForm = () => {
  return (
    <div className="mb-3">
      <label
        htmlFor="approveInput"
        className="form-label d-flex justify-content-between"
      >
        <span className="small">Amount approved:</span>
        <span className="small">0 BUSD</span>
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id="approveInput"
        placeholder="0.00"
      />
      <button className="btn fw-light px-3 px-md-5">Approve</button>
    </div>
  );
};

export default ApproveForm;
