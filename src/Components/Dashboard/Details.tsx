import React from 'react'
import { Header } from '../Navbar/Header'
import { Link } from 'react-router-dom'
import redeye from "../imgs/red_eye.svg"
import download from "../imgs/download.svg"
import "../CSS/styles.css"

export const Details = () => {
    return (
      <>
        <Header />
        <div className="dashboard">
          <p>Dashboard</p>
        </div>
        <div className="tabs">
          <div className="summary-tab">
            <p>
              <Link to="/dashboard">Summary</Link>
            </p>
          </div>
          <div className="details-tab">
            <p>Details</p>
          </div>
        </div>

        <div className="transaction-container">
          <div className="details-heading">
            <li>Transaction ID</li>
            <li>Date</li>
            <li>Amount</li>
            <li>Status</li>
            <li>Action</li>
          </div>
          <div className="details-data">
            <li>2011002039111</li>
            <li>22-09-2021</li>
            <li>1,780</li>
            <li className="approved">Approved</li>
            <li>
              <img src={redeye} alt="redeye" />
              <img src={download} alt="download" />
            </li>
          </div>
          <div className="details-data">
            <li>2011002039112</li>
            <li>19-09-2021</li>
            <li>1,890</li>
            <li className="approved">Approved</li>
            <li>
              <img src={redeye} alt="redeye" />
              <img src={download} alt="download" />
            </li>
          </div>
          <div className="details-data">
            <li>2011002039113</li>
            <li>20-08-2021</li>
            <li>5,500</li>
            <li className="rejected">Rejected</li>
            <li>
              <img src={redeye} alt="redeye" />
              <img src={download} alt="download" />
            </li>
          </div>
          <div className="details-data">
            <li>2011002039114</li>
            <li>12-07-2021</li>
            <li>2,590</li>
            <li className="approved">Approved</li>
            <li>
              <img src={redeye} alt="redeye" />
              <img src={download} alt="download" />
            </li>
          </div>
          <div className="details-data">
            <li>2011002039113</li>
            <li>08-07-2021</li>
            <li>2,800</li>
            <li className="rejected">Rejected</li>
            <li>
              <img src={redeye} alt="redeye" />
              <img src={download} alt="download" />
            </li>
          </div>
        </div>
      </>
    );
}
