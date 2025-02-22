import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import profilePic from '../assets/ProfPic1.jpg';
import bannerImage from '../assets/matrixRec.jpeg';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home">
      <header>
        <div className="banner">
          <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
      </header>

      {/* Profile Picture with Click Event */}
      <div className="profile-picture-container">
        <img
          src={profilePic}
          alt="Julio Lopez"
          className="profile-picture"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Modal for Enlarged Profile Picture */}
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content">
            <img src={profilePic} alt="Julio Lopez Enlarged" />
          </div>
        </div>
      )}

      <div className="about">
        <h2>Julio Lopez</h2>
        <div className="prompt">
          <p>A cloud architect and data analyst with a blend of technical expertise and creative problem-solving.</p>
          <Link to="https://www.linkedin.com/in/julio-lopez-380937282/"><LinkedInIcon /></Link>
          <Link to="https://github.com/donlopez" target="_blank" rel="noopener noreferrer"><GitHubIcon /></Link>
          <Link to="https://twitter.com/dominicanking83" target="_blank" rel="noopener noreferrer"><TwitterIcon /></Link>
          <Link to="mailto:juliolopez9260@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
