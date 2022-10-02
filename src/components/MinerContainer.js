import React from "react";
import Row from "./Row";
import MinerInputs from "./MinerInputs";
import MinerDetails from "./MinerDetails";

const MinerContainer = ({
  decimals,
  isConnected,
  stablesContract,
  userAddress,
  userInfo,
  minerContract,
  fetchAndSetUser,
}) => {
  return (
    <div className="container mt-5 px-3">
      <Row>
        <MinerInputs
          decimals={decimals}
          isConnected={isConnected}
          stablesContract={stablesContract}
          userAddress={userAddress}
          userInfo={userInfo}
          minerContract={minerContract}
          fetchAndSetUser={fetchAndSetUser}
        />
        <MinerDetails isConnected={isConnected} />
      </Row>
    </div>
  );
};

export default MinerContainer;
