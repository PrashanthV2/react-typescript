import React, { useState } from "react";
import "../CSS/styles.css";
import micro_bank from "./imgs/micro_bank.svg";
import bell from "./imgs/bell.png";
import arrow from "./imgs/down_arrow.svg";
import current_acc from "./imgs/current_acc.svg";
import payroll from "./imgs/payroll.svg";
import payments from "./imgs/payments.svg";
import c1 from "./imgs/c1.svg";
import c2 from "./imgs/c2.svg";
import c3 from "./imgs/c3.svg";
import a1 from "./imgs/a1.svg";
import a2 from "./imgs/a2.svg";
import a3 from "./imgs/a3.svg";
import a4 from "./imgs/a4.svg";
import wallet from "./imgs/wallet.png";
import investments from "./imgs/investments.svg";
import tax_payment from "./imgs/tax_payments.svg";
import loans from "./imgs/loans.svg";
import { Rating } from "./Rating";

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
        <nav className="nav-bar">
          <div className="mob-nav">
            <li className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </li>
            <li className="header-mobile">Micro Bank</li>
            <li className="mob-logout">Logout</li>
          </div>
          <div className="nav-list">
            <div className="nav-logo">
              <img src={micro_bank} alt="micro_bank" />
            </div>
            <div className="nav-items">
              <li>
                <img src={bell} alt="bell" />
              </li>
              <li>
                <a href="login.html" id="user-name">
                  PV
                </a>
              </li>
              <li>
                <img src={arrow} alt="arrow" />
              </li>
            </div>
          </div>
        </nav>
      </div>
      <div className="dashboard">
        <p>Dashboard</p>
      </div>
      <div className="tabs">
        <div className="summary">
          <p>Summary</p>
        </div>
        <div className="details">
          <p>
            <a href="details.html">Details</a>
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
      <div className="mobile-services-heading">
        <p>Services</p>
        <span>Micro bank services for you</span>
      </div>

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
      <div className="mobile-current-services">
        <p>Current Services</p>
        <div className="mobile-info">
          <li>
            <span>
              <img src={c1} alt="current-account" />
            </span>{" "}
            <br /> <p>Current Account</p>
          </li>
          <li>
            <span>
              <img src={c2} alt="current-account" />
            </span>{" "}
            <br /> <p>Payroll</p>
          </li>
          <li>
            <span>
              <img src={c3} alt="current-account" />
            </span>{" "}
            <br /> <p>Payments</p>
          </li>
        </div>
      </div>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h4>Give your rating here</h4>
          <div id="status"></div>
          <form id="ratingForm">
            <fieldset className="rating">
              <legend>Please rate:</legend>
              <input type="radio" id="star5" name="rating" value="5" />
              <label title="Excellent!">5 stars</label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label title="Pretty good">4 stars</label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label title="Good">3 stars</label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label title="Bad">2 stars</label>
              <input type="radio" id="star1" name="rating" value="1" />
              <label title="Very Bad">1 star</label>
            </fieldset>
            <div className="clearfix"></div>
            <button className="rating-submit clearfix">Submit</button>
          </form>
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

      <div className="mobile-available-services">
        <p>Available Services</p>
        <div className="available-info">
          <li>
            <span>
              <img src={a1} alt="current-account" />
            </span>{" "}
            <br /> <p>Wallet</p>
          </li>
          <li>
            <span>
              <img src={a2} alt="current-account" />
            </span>{" "}
            <br /> <p>Investments</p>
          </li>
          <li>
            <span>
              <img src={a3} alt="current-account" />
            </span>{" "}
            <br /> <p>Tax Payment</p>
          </li>
          <li>
            <span>
              <img src={a4} alt="current-account" />
            </span>{" "}
            <br /> <p>Loans</p>
          </li>
        </div>
      </div>

      <footer className="footer">© 2021 Micro Bank</footer>
    </>
  );
};
