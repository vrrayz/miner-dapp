import React from 'react'
import Row from './Row';
import UserDetailsCard from './UserDetailsCard';

const UserDetailsContainer = () => {
  return (
    <div className="container mt-5 px-3">
        <Row>
            <UserDetailsCard title="Current Deposit" value="10" unit="BUSD"/>
            <UserDetailsCard title="Current Deposit" value="10" unit="BUSD"/>
            <UserDetailsCard title="Current Deposit" value="10" unit="BUSD"/>
            <UserDetailsCard title="Current Deposit" value="10" unit="BUSD"/>
        </Row>
    </div>
  )
}

export default UserDetailsContainer