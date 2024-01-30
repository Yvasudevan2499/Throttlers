// This component was created by Yaswanth Vasudevan (8830598)
import React from "react";
import HeroSlider from "./HeroSlider";
import ServicesOverview from "./ServicesOverview";
import RepairServicesDetail from "./RepairServicesDetail";
import CustomerTips from "./CustomerTips";
import Promotions from "./Promotions";
import AppointmentBooking from "./AppointmentBooking";

const Home = () => {
  return (
    <div>
      
      <HeroSlider />
      <ServicesOverview />
      <RepairServicesDetail />
      <CustomerTips />
      <Promotions />
      <AppointmentBooking />
      
    </div>
  );
};

export default Home;
