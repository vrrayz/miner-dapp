import React from "react";

const ApproveForm = ({labelInfo, labelValue, labelUnit, inputId, buttonInfo}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="approveInput"
        className="form-label d-flex justify-content-between"
      >
        <span className="small">{labelInfo}:</span>
        <span className="small">{labelValue} {labelUnit}</span>
      </label>
      <input
        type="text"
        className="form-control mb-3"
        id={inputId}
        placeholder="0.00"
      />
      <button className="btn fw-light px-3 px-md-5">{buttonInfo}</button>
    </div>
  );
};

export default ApproveForm;
