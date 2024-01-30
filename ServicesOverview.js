// This component was created by Yaswanth Vasudevan (8830598)
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faTools,
  faOilCan,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./ServicesOverview.css";

const ServicesOverview = () => {
  return (
    <div className="services-section">
      <h2 className="services-heading">Services We Offer</h2>
      <div className="services-container">
        <div className="service-card">
          <FontAwesomeIcon icon={faCar} size="2x" className="white-icon" />
          <h3>Car Sales</h3>
          <p>
            Find your perfect car from our wide range of affordable vehicles.
          </p>
        </div>

        <div className="service-card">
          <FontAwesomeIcon icon={faTools} size="2x" className="white-icon" />
          <h3>Repairs</h3>
          <p>Expert repair services from minor fixes to major overhauls.</p>
        </div>

        <div className="service-card">
          <FontAwesomeIcon icon={faOilCan} size="2x" className="white-icon" />
          <h3>Maintenance</h3>
          <p>Regular maintenance to keep your car running smoothly.</p>
        </div>

        <div className="service-card">
          <FontAwesomeIcon icon={faStar} size="2x" className="white-icon" />
          <h3>Specialty Services</h3>
          <p>Custom solutions for your unique automotive needs.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesOverview;
