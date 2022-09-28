import React from 'react'
import Row from './Row';
import UserDetailsCard from './UserDetailsCard';

const UserDetailsContainer = () => {
  return (
    <div className="container mt-5 px-3">
        <Row>
            <UserDetailsCard title="Tokens Mined" value="10000" unit="VTK"/>
            <UserDetailsCard title="Total Deposit" value="0" unit="BUSD"/>
            <UserDetailsCard title="Profit" value="10" unit="BUSD"/>
            <UserDetailsCard title="Referral Bonus" value="10" unit="BUSD"/>
        </Row>
    </div>
  )
}

export default UserDetailsContainer