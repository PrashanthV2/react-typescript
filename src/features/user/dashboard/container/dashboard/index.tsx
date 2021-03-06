import React, { useState } from "react";
import "../../../../../shared/components/styling/styles.css";
import current_acc from "../../../../../assets/imgs/current_acc.svg";
import payroll from "../../../../../assets/imgs/payroll.svg";
import payments from "../../../../../assets/imgs/payments.svg";
import wallet from "../../../../../assets/imgs/wallet.png";
import investments from "../../../../../assets/imgs/investments.svg";
import tax_payment from "../../../../../assets/imgs/tax_payments.svg";
import loans from "../../../../../assets/imgs/loans.svg";
import { Rating } from "../rating";
import { Header } from "../../../../../core/components/navbar";
import { Summary } from "../summary";


export const Dashboard = () => {
  const [currentAccountRate, setCurrentAccountRate] = useState(0);
  const [payrollRate, setPayrollRate] = useState(0);
  const [paymentRate, setPaymentRate] = useState(0);

  const handlePayrollRating = (i: any) => {
    setPayrollRate(i + 1);
    alert("Rating is captured");
  };
  const handleCurrentAccRating = (i: any) => {
    setCurrentAccountRate(i + 1);
    alert("Rating is captured");
  };
  const handlePaymentRating = (i: any) => {
    setPaymentRate(i + 1);
    alert("Rating is captured");
  };
  return (
    <>
      <div className="dashboard">
        <Header/>
      </div>
      <Summary/>

      <div className="current-services">
        <h5>Current Services</h5>
        <div className="info">
          <li>
            <span>
              <img src={current_acc} alt="current-account" className="myBtn" />
            </span>{" "}
            <br /> <p>Current Account</p>
            <span>
              <label style={{ paddingRight: 10 }}>Rating: </label>
              <Rating
                rating={currentAccountRate}
                onClick={handleCurrentAccRating}
                style={{ cursor: "pointer" }}
              />
            </span>
          </li>
          <li>
            <span>
              <img src={payroll} alt="current-account" className="myBtn" />
            </span>{" "}
            <br /> <p>Payroll</p>
            <span>
              <label style={{ paddingRight: 10 }}>Rating: </label>
              <Rating
                rating={payrollRate}
                onClick={handlePayrollRating}
                style={{ cursor: "pointer" }}
              />
            </span>
          </li>
          <li>
            <span>
              <img src={payments} alt="current-account" className="myBtn" />
            </span>{" "}
            <br /> <p>Payments</p>
            <span>
              <label style={{ paddingRight: 10 }}>Rating: </label>
              <Rating
                rating={paymentRate}
                onClick={handlePaymentRating}
                style={{ cursor: "pointer" }}
              />
            </span>
          </li>
        </div>
      </div>      
      <div className="current-services">
        <h5>Available Services</h5>
        <div className="info">
          <li>
            <span>
              <img src={wallet} alt="current-account" />
            </span>{" "}
            <br /> <p>Wallet</p>
          </li>
          <li>
            <span>
              <img src={investments} alt="current-account" />
            </span>{" "}
            <br /> <p>Investments</p>
          </li>
          <li>
            <span>
              <img src={tax_payment} alt="current-account" />
            </span>{" "}
            <br /> <p>Tax Payment</p>
          </li>
          <li>
            <span>
              <img src={loans} alt="current-account" />
            </span>{" "}
            <br /> <p>Loans</p>
          </li>
        </div>
      </div>
      <footer className="footer">?? 2021 Micro Bank</footer>
    </>
  );
};
