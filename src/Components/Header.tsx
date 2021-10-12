import React from 'react'
import micro_bank from "./imgs/micro_bank.svg";
import bell from "./imgs/bell.png";
import arrow from "./imgs/down_arrow.svg";
import { Link } from 'react-router-dom';



export const Header = () => {

   
    return (
      <>
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
                <Link to="/" id="user-name">
                  PV
                </Link>
              </li>
              <li>
                <img src={arrow} alt="arrow" />
              </li>
            </div>
          </div>
        </nav>
      </>
    );
}
