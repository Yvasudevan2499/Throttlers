// This component was created by Yaswanth Vasudevan (8830598)
import React from 'react';
import './MeetOurTeam.css'; // Importing CSS for styling (create this CSS file)
import teamMember1 from '../Images/Sara.jpg'; 
import teamMember2 from '../Images/mike.jpg';
import teamMember3 from '../Images/diana.jpg';
import teamMember4 from '../Images/sales.jpg';

const teamMembers = [
  {
    name: 'Sara Johnson',
    position: 'CEO',
    bio: "Sara Johnson is the visionary leader behind Throttlers. With over 15 years of experience in the automotive industry, she brings a wealth of knowledge and innovation to the table. Sara is passionate about delivering top-notch service and ensuring that every customer's experience is exceptional.",
    image: teamMember1,
  },
  {
    name: 'Mike Williams',
    position: 'Mechanic',
    bio: 'Mike Williams is our skilled and dedicated mechanic. With a keen eye for detail and a passion for fixing cars, Mike ensures that every vehicle that comes through our garage leaves in top condition. He is committed to providing the best service possible.',
    image: teamMember2,
  },
  {
    name: 'David Anderson',
    position: 'Sales Team Head',
    bio: 'David Anderson leads our sales team with enthusiasm and expertise. He has a knack for understanding our customers\' needs and finding the perfect vehicles to meet them. David\'s friendly and approachable demeanor makes him a trusted advisor for car buyers.',
    image: teamMember3,
  },
  {
    name: 'Diana Miller',
    position: 'HR Manager',
    bio: 'Diana Miller is the backbone of our human resources department. She ensures that our team is motivated, well-trained, and happy. Diana believes that a great work environment is essential for success and works tirelessly to create a positive workplace culture.',
    image: teamMember4,
  },
];
const TeamCard = ({ name, position, bio, image }) => {
  return (
    <div className="team-card">
      <div className="card-front">
        <img src={image} alt={name} />
      </div>
      <div className="card-back">
        <h3>{name}</h3>
        <p>{position}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

const MeetOurTeam = () => {
  return (
    <section className="meet-our-team">
      <h2>Meet Our Team</h2>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
