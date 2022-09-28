import React from "react";
import Row from "./Row";
import MinerForm from "./MinerForm";

const MinerContainer = () => {
  return (
    <div className="container mt-5 px-3">
      <Row>
        <div className="col-md-9 col-lg-6 mx-auto mb-3">
          <div className="card bg-primary text-light rounded shadow">
            <div className="card-body">
              <h5 className="card-title text-center my-4">Miner</h5>
              <div className="mx-md-5">
                <MinerForm labelInfo="Amount approved" labelValue={0} labelUnit="BUSD" inputId="approveInput" buttonInfo="Approve" />
                <MinerForm labelInfo="Total deposit" labelValue={0} labelUnit="BUSD" inputId="approveInput" buttonInfo="Deposit" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-lg-6 mx-auto">
          <div className="card bg-primary text-light">
            <div className="card-body">
              <h5 className="card-title text-center">Miner</h5>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default MinerContainer;
