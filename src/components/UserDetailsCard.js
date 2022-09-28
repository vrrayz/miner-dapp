import React from "react";

const UserDetailsCard = ({title,value,unit}) => {
  return (
      <div className="col-lg-3 col-md-6 mb-3">
        <div className="card bg-primary text-light">
          <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
            <p className="card-text py-3">
              <span className="h4">{value}</span> {unit}
            </p>
          </div>
        </div>
      </div>
  );
};

export default UserDetailsCard;
