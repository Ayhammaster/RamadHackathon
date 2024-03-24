import React from 'react';
import './about.css';

import Ayham from '/Images/Team/ayham.jpeg'
import Abdullah from '/Images/Team/abdullah.jpeg'
import Ibrahim from '/Images/Team/ibrahim.jpg'

const TeamMember = ({ name, image, linkedin, email, github, linkedin_handle, githubHandle }) => {
  return (
    <div className="team-member">
      <img className="team-member-image" src={image} alt={name} />
      <div className="team-member-details">
        <h2>{name}</h2>
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        <p>LinkedIn: <a href={linkedin}>{linkedin_handle}</a></p>
        <p>GitHub: <a href={github}>{githubHandle}</a></p>
      </div>
    </div>
  );
};

const Team = () => {
  const teamData = [
    {
      name: 'Ayham Ahmad',
      image: Ayham,
      linkedin: 'https://www.linkedin.com/in/ayham-ahmad-2787bb1b3/',
      linkedin_handle: 'ayham-ahmad-2787bb1b3',
      email: 'ayham@ayhamahmad.com',
      github: 'https://github.com/Ayhammaster/',
      githubHandle: 'Ayhammaster'
    },
    {
      name: 'Abdulla Sadoun',
      image: Abdullah,
      linkedin: 'https://www.linkedin.com/in/abdullasadoun',
      linkedin_handle: 'abdullasadoun',
      email: 'Abdullah.Sadoun@dal.ca',
      github: 'https://github.com/abdullasadoun',
      githubHandle: 'abdullasadoun'
    },
    {
        name: 'Ibrahim Abu Eita',
        image: Ibrahim,
        linkedin: 'https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/',
        linkedin_handle: 'ibrahim-abu-eita-0b2490206',
        email: 'ebrahimaboeita990@gmail.com',
        github: 'https://github.com/ibrahim99035/',
        githubHandle: 'ibrahim99035'
    }
  ];

  return (
    <div className="team">
      {teamData.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};

export default Team;