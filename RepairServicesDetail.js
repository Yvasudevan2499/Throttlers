// This component was created by Yaswanth Vasudevan (8830598)
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faMicrochip, faCogs, faCarSide } from '@fortawesome/free-solid-svg-icons';
import './RepairServicesDetail.css';

const RepairServicesDetail = () => {
  return (
    <div className="repair-services-section">
      <h2 className="services-heading">Detailed Repair Services that we provide </h2>
      <div className="services-container">
        <div className="service-shape">
          <FontAwesomeIcon icon={faWrench} size="3x"  className="white-icon" />
          <h3>Regular Maintenance</h3>
          <p>Comprehensive maintenance services to ensure your car's longevity.</p>
        </div>

        <div className="service-shape">
          <FontAwesomeIcon icon={faMicrochip} size="3x"  className="white-icon" />
          <h3>Diagnostics</h3>
          <p>State-of-the-art diagnostics to accurately identify any issues.</p>
        </div>

        <div className="service-shape">
          <FontAwesomeIcon icon={faCogs} size="3x" className="white-icon" />
          <h3>Mechanical Repairs</h3>
          <p>High-quality mechanical repairs from experienced technicians.</p>
        </div>

        <div className="service-shape">
          <FontAwesomeIcon icon={faCarSide} size="3x" className="white-icon" />
          <h3>Bodywork</h3>
          <p>Professional bodywork services to restore your car's appearance.</p>
        </div>
      </div>
    </div>
  );
};

export default RepairServicesDetail;
