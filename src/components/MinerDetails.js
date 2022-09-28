import React from "react";

const MinerDetails = () => {
  return (
    <div className="col-md-9 col-lg-6 mx-auto">
      <div className="card bg-primary text-light">
        <div className="card-body pb-5 px-4">
          <div className="text-center">
            <p className="h6 my-4">Current 24h VTK Mined</p>
            <p>
              <span className="display-5">0</span> VTK
            </p>
            <p className="small">
              Mine until
              <br />
              <span className="small">00h : 00min : 00sec</span>
            </p>
            <button className="btn fw-light">Claim and Restart</button>
            <hr />
          </div>
          <div className="list-group">
            <div className="list-group-item mb-3 bg-transparent border-0 border-bottom d-flex justify-content-between small text-light ">
              <span>Claims Made</span>
              <span className="fw-bold">7</span>
            </div>
            <div className="list-group-item mb-3 bg-transparent border-0 border-bottom d-flex justify-content-between small text-light ">
              <span>Total Miners</span>
              <span className="fw-bold">1000 Vesters</span>
            </div>
            <div className="list-group-item mb-3 bg-transparent border-0 border-bottom d-flex justify-content-between small text-light ">
              <span>Current Mining Power</span>
              <span className="fw-bold">100 VTK/hr</span>
            </div>
            <div className="list-group-item mb-3 bg-transparent border-0 border-bottom d-flex justify-content-between small text-light ">
              <span>Tokens Mined</span>
              <span className="fw-bold">1000 VTK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinerDetails;