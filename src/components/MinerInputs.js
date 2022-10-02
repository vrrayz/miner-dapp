import { BigNumber } from "ethers";
import React from "react";
import { useEffect, useState } from "react";
import { minerCA } from "../data/contractAbi";
import MinerForm from "./MinerForm";

const MinerInputs = ({ isConnected, stablesContract, userAddress,decimals, userInfo, minerContract, fetchAndSetUser }) => {
  const [stablesBalance, setStablesBalance] = useState(0);
  const [approvedBalance, setApprovedBalance] = useState(0);
  const zeroAddress = "0x0000000000000000000000000000000000000000"
  let {totalDeposit} = userInfo
  totalDeposit = totalDeposit ? totalDeposit.div(decimals).toNumber() : 0
  const getReferral =() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("ref");
  }
  const getUserStablesBalance = async () => {
    const balance = await stablesContract.balanceOf(userAddress);
    const approved = await stablesContract.allowance(userAddress,minerCA)
    setStablesBalance(balance.div(decimals).toNumber())
    setApprovedBalance(approved.div(decimals).toNumber())
  };
  const approveStables = async (amount) => {
    const nAmount = BigNumber.from(amount).mul(decimals).toString();
    await stablesContract.approve(minerCA,nAmount)
    approvalListener(nAmount)
  }
  
  const depositStables = async (amount) => {
    const nAmount = BigNumber.from(amount).mul(decimals).toString()
    let {referral} = userInfo
    if(totalDeposit === 0){
        referral = getReferral() ? getReferral() : zeroAddress
    }
    await minerContract.deposit(nAmount,referral)
    depositStablesListener(nAmount)
  }
  const depositStablesListener = (amount) => {
    stablesContract.on("Transfer", (userAddress,minerCA,amount) => {
        fetchAndSetUser()
    })
  }
  const approvalListener = (amount) => {
    stablesContract.on("Approval", (userAddress,minerCA,amount) => {
        getUserStablesBalance()
    })
  }
  useEffect(() => {
    if (isConnected) {
      getUserStablesBalance();
    }
  });
  return (
    <div className="col-md-9 col-lg-6 mx-auto mb-3">
      <div className="card bg-primary text-light rounded shadow">
        <div className="card-body pb-4">
          {/* <h5 className="card-title text-center my-4">Miner</h5> */}
          <div className="mx-md-5 mt-4">
            <MinerForm
              labelInfo="Amount approved"
              labelValue={approvedBalance}
              labelUnit="BUSD"
              inputId="approveInput"
              buttonInfo="Approve"
              approveStables = {approveStables}
              buttonDisable={isConnected ? false : true}
            />
            <MinerForm
              labelInfo="Total deposit"
              labelValue={totalDeposit}
              labelUnit="BUSD"
              inputId="depositInput"
              buttonInfo="Deposit"
              depositStables = {depositStables}
              buttonDisable={isConnected ? false : true}
            />
            <MinerForm
              labelInfo="Balance"
              labelValue={stablesBalance}
              labelUnit="BUSD"
              inputId="withdrawInput"
              buttonInfo="Withdraw"
              buttonDisable={isConnected ? false : true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinerInputs;
