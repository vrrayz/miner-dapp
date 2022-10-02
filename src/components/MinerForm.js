import React from "react";
import { useState } from "react";

const MinerForm = ({labelInfo, labelValue, labelUnit, inputId, buttonInfo, buttonDisable, approveStables}) => {
  const [value, setValue] = useState(0)
  const storeValue = (e) => {
    setValue(e.target.value)
  }
  const runFunction = () => {
    if(approveStables){
      approveStables(value)
    }
  }
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
        type="number"
        className="form-control mb-3"
        id={inputId}
        placeholder="0.00"
        value={value}
        onChange={storeValue}
      />
      <button className="btn fw-light px-3 px-md-5" disabled={buttonDisable && 'disabled'} onClick={runFunction}>{buttonInfo}</button>
    </div>
  );
};

export default MinerForm;
