import React, { useState, useEffect } from "react";

const MinerDetails = ({ isConnected, userInfo, minerContract, decimals }) => {
  const [mineDuration, setMineDuration] = useState(0);
  const [isReadyToClaim, setIsReadyToClaim] = useState(false);
  const [currentMined, setCurrentMined] = useState(0);
  const minerTokenRate = 13; //13 percent minertoken rate

  let { miners, totalTokensMined, compoundCount, lastCompoundTime } = userInfo;
  miners = miners ? miners.toNumber() : 0;
  compoundCount = compoundCount ? compoundCount.toNumber() : 0;
  totalTokensMined = totalTokensMined
    ? totalTokensMined.div(decimals).toNumber()
    : 0;
  lastCompoundTime = lastCompoundTime ? lastCompoundTime.toNumber() : 0;

  const miningPower = miners ? (miners * minerTokenRate) / 100 : 0;
  const time = new Date().getTime() / 1000; // converting to epoch
  const dateDiff = time - lastCompoundTime;

  const mineToken = async() => {
    await minerContract.mineTokens().then(res => console.log(res)).catch(err => console.log(err))
  }
  const claimAndRestart = () => {
    mineToken()
  }

  useEffect(() => {
    if (isConnected) {
      getAndSetMineDuration();
    }
  });
  useEffect(() => {
    const tokensPerSecond = miningPower / mineDuration;
    if (mineDuration) {
      setCurrentMined(
        dateDiff > mineDuration
          ? tokensPerSecond * mineDuration
          : tokensPerSecond * dateDiff
      );
    }
    // console.log("Hours since last claim and restart == "+ (dateDiff/mineDuration))
    // console.log("Current unclaimed mines == "+ currentMined)
  });
  useEffect(() => {
    if (isConnected && dateDiff >= mineDuration) {
      setIsReadyToClaim(true);
    }
  }, [mineDuration, dateDiff, isConnected]);
  const getAndSetMineDuration = async () => {
    const duration = await minerContract.mineDuration();
    setMineDuration(duration.toNumber());
  };

  return (
    <div className="col-md-9 col-lg-6 mx-auto">
      <div className="card bg-primary text-light">
        <div className="card-body pb-5 px-4">
          <div className="text-center">
            <p className="h6 my-4">Current 24h VTK Mined</p>
            <p>
              <span className="display-5">{currentMined}</span> VTK
            </p>
            <p className="small">
              Mine until
              <br />
              <span className="small">00h : 00min : 00sec</span>
            </p>
            <button
              className="btn fw-light"
              disabled={isReadyToClaim ? "" : "disabled"}
              onClick={claimAndRestart}
            >
              Claim and Restart
            </button>
            <hr />
          </div>
          <div className="list-group">
            <div className="list-group-item mb-3 bg-transparent border-0 border-bottom d-flex justify-content-between small text-light ">
              <span>Claims Made</span>
              <span className="fw-bold">{compoundCount}</span>
            </div>
            <div className="list-group-item mb-3 bg-transparent border-0 border-bottom d-flex justify-content-between small text-light ">
              <span>Total Miners</span>
              <span className="fw-bold">{miners} Vesters</span>
            </div>
            <div className="list-group-item mb-3 bg-transparent border-0 border-bottom d-flex justify-content-between small text-light ">
              <span>Current Mining Power</span>
              <span className="fw-bold">{miningPower} VTK/hr</span>
            </div>
            <div className="list-group-item mb-3 bg-transparent border-0 border-bottom d-flex justify-content-between small text-light ">
              <span>Tokens Mined</span>
              <span className="fw-bold">{totalTokensMined} VTK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinerDetails;
