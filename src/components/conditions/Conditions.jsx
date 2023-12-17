import React from 'react'
import './conditions.css'
import map from './map.png'
function Conditions() {
    return (
      <div className="Conditions">
        <div className="ConditionsBox ConditionsBox1">
          <h1>our focus areas</h1>
          <ul>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Executive Search
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Food & Beverage
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Front Office
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Spa & Wellness
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Housekeeping
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Sales & Marketing
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              HR & Administration
            </li>
            <li>
              <i className="bi bi-check-circle-fill"></i>
              Events & Banquets
            </li>
          </ul>
        </div>
        <div className="ConditionsBox ConditionsBox2">
          <h1>GLOBAL TALENT POOL</h1>
          <img className="globeMap" src={map} alt="globe map" />
          <span>
            Eastern and Western Europe, Central and South Asia, Latin America,
            and Africa.
          </span>
        </div>
        <div className="ConditionsBox ConditionsBox3">
          <div className="ConditionsBoxText">
          <h1>VALUE WE BRING</h1>
            <span>
              <b>Handpicked Candidates: </b>
              Access to carefully evaluated candidates who align with your
              criteria. <br />
            </span>
            <span>
              <b>Streamlined Interview Process: </b>Administrative assistance in
              organizing and managing online interviews. <br />
            </span>
            <span>
              <b>Effective Communication: </b>
              Clear and timely updates throughout the recruitment journey.{" "}
              <br />
            </span>
            <span>
              <b>Guidance in Visa Issuance: </b>
              Comprehensive support and information during the visa issuance
              process. <br />
            </span>
            <span>
              <b>Personal Account Manager: </b>A dedicated account manager to
              ensure your recruitment needs are met. <br />
            </span>
          </div>
          <div className="ConditionsBox3Links">
            <div>
              <i className="bi bi-telegram"></i>
            </div>
            <div>
              <i className="bi bi-youtube"></i>
            </div>
            <div>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Conditions
