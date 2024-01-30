// This component was created by Yaswanth Vasudevan (8830598)
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBattery,
  faToolbox,
  faShower,
  faWind,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import "./CustomerTips.css";

const CustomerTips = () => {
  return (
    <div className="customer-tips-section">
      <h2 className="tips-heading">Tips for Our Customers</h2>
      <div className="tips-container">
        <div className="tip-card">
          <div className="tip-card-inner">
            <div className="tip-card-front">
              <FontAwesomeIcon icon={faBattery} size="4x" />
              <h3>Battery Care</h3>
            </div>
            <div className="tip-card-back">
              <p>
                Keep your car's battery terminals clean and check the battery's
                charge level, especially in extreme temperatures.
              </p>
            </div>
          </div>
        </div>

        <div className="tip-card">
          <div className="tip-card-inner">
            <div className="tip-card-front">
              <FontAwesomeIcon icon={faToolbox} size="4x" />
              <h3>Tire Maintenance</h3>
            </div>
            <div className="tip-card-back">
              <p>
                Regularly check tire pressure and tread depth. Properly inflated
                tires ensure optimal fuel efficiency and safety.
              </p>
            </div>
          </div>
        </div>

        <div className="tip-card">
          <div className="tip-card-inner">
            <div className="tip-card-front">
              <FontAwesomeIcon icon={faShower} size="4x" />
              <h3>Regular Wash</h3>
            </div>
            <div className="tip-card-back">
              <p>
                Regular washing and waxing protect your car’s paint and reduce
                the risk of rust and corrosion.
              </p>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="tip-card">
          <div className="tip-card-inner">
            <div className="tip-card-front">
              <FontAwesomeIcon icon={faWind} size="4x" />
              <h3>Air Filter Replacement</h3>
            </div>
            <div className="tip-card-back">
              <p>
                A clean air filter improves engine performance and efficiency.
                Replace it once a year or as needed.
              </p>
            </div>
          </div>
        </div>

        {/*   */}
        <div className="tip-card">
          <div className="tip-card-inner">
            <div className="tip-card-front">
              <FontAwesomeIcon icon={faRoad} size="4x" />
              <h3>Alignment Check</h3>
            </div>
            <div className="tip-card-back">
              <p>
                Improper alignment can cause uneven tire wear and affect
                handling. Have your alignment checked annually.
              </p>
            </div>
          </div>
        </div>

        {/* Additional tips can follow the same structure */}
      </div>
    </div>
  );
};

export default CustomerTips;
