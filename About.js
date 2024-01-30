import React from 'react';
import HeroImage from './HeroImage'; 
import './About.css';
import MeetOurTeam from './MeetOurTeam';
import FAQ from './FAQ';
import CustomerReviews from './CustomerReviews';

const About = () => {
  return (
    <div>
    
      <HeroImage /> 
      <MeetOurTeam/>
      <FAQ/>
      <CustomerReviews/>
      
    </div>
  );
};

export default About;
