import { BigNumber } from 'ethers';
import React from 'react'
import Row from './Row';
import UserDetailsCard from './UserDetailsCard';

const UserDetailsContainer = ({minerContract, userInfo}) => {
  let {totalTokensMined, totalDeposit,totalCompounded,referralBonus} = userInfo;
  const decimals = BigNumber.from(10).pow(18)
  totalTokensMined = totalTokensMined ? totalTokensMined.div(decimals).toNumber() : 0
  totalDeposit = totalDeposit ? totalDeposit.div(decimals).toNumber() : 0
  referralBonus = referralBonus ? referralBonus.div(decimals).toNumber() : 0
  const profit = totalCompounded ? totalCompounded.div(decimals).sub(totalDeposit).toNumber() : 0
  // console.log(userInfo["totalTokensMined"]);
  // console.log("mined == " + t);
  return (
    <div className="container mt-5 px-3">
        <Row>
            <UserDetailsCard title="Tokens Mined" value={totalTokensMined} unit="VTK"/>
            <UserDetailsCard title="Total Deposit" value={totalDeposit} unit="BUSD"/>
            <UserDetailsCard title="Profit" value={profit} unit="BUSD"/>
            <UserDetailsCard title="Referral Bonus" value={referralBonus} unit="BUSD"/>
        </Row>
    </div>
  )
}

export default UserDetailsContainer