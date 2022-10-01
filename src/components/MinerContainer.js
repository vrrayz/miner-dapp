import React from "react";
import Row from "./Row";
import MinerInputs from "./MinerInputs";
import MinerDetails from "./MinerDetails";

const MinerContainer = ({isConnected}) => {
  return (
    <div className="container mt-5 px-3">
      <Row>
        <MinerInputs isConnected={isConnected} />
        <MinerDetails isConnected={isConnected} />
      </Row>
    </div>
  );
};

export default MinerContainer;
