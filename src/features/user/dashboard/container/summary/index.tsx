import React from "react";
import "../../../../../shared/components/styling/styles.css";
import { Link } from "react-router-dom";


export const Summary = () => {
  return (
    <>
      <div className="dashboard">
        <p>Dashboard</p>
      </div>
      <div className="tabs">
        <div className="summary">
          <p>Summary</p>
        </div>
        <div className="details">
          <p>
            <Link to="/details">Details</Link>
          </p>
        </div>
      </div>

      <div className="summary-details">
        <p>Summary</p>
        <div className="mob-info">
          <li>Account No: 6723654</li>
          <li className="income-bg">
            Income <span>$20,00,000</span>
          </li>
          <li className="spends-bg">
            Spends <span>$11,00,000</span>
          </li>
        </div>

        <div className="sum-info">
          <li>
            <span>Account Number</span> <br /> <p>6723654</p>
          </li>
          <li>
            <span>Income</span> <br /> <p>$20,00,000</p>
          </li>
          <li>
            <span>Spends</span> <br /> <p>$11,00,000</p>
          </li>
        </div>
      </div>

      <div className="services-heading">
        <h3>
          Services<span>Micro bank services for you</span>
        </h3>
      </div>
    </>
  );
};
