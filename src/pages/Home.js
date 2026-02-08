import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import profilePic from '../assets/ProfileWeb.png';
import bannerImage from '../assets/matrixRec.jpeg';
import xIcon from '../assets/XIcon.png';
import phoenixLogo from '../assets/Phoenix.png';
import '../styles/Home.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <div className="home">
        {/* Banner */}
        <header>
          <div className="banner">
            <img src={bannerImage} alt="Banner" className="banner-image" />
          </div>
        </header>

        {/* Profile picture */}
        <div className="profile-picture-container">
          <img
              src={profilePic}
              alt="Julio Lopez"
              className="profile-picture"
              onClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* Modal for enlarged profile */}
        {isModalOpen && (
            <div className="modal" onClick={() => setIsModalOpen(false)}>
              <div className="modal-content">
                <img src={profilePic} alt="Julio Lopez Enlarged" />
              </div>
            </div>
        )}

        {/* About + Signature Wrapper */}
        <div className="about">
          <div className="about-card">
            <div className="prompt">
              <p>Data Analyst and Software Developer focused on business-ready solutions.</p>
              <p>
                Work centers on designing well-normalized databases for faster queries and strong data integrity,
                transforming complex datasets into clear visualizations, and building RESTful applications end to end.
                I connect front-end experiences for web and mobile to backend services and databases using JDBC and modern
                API patterns, adapting to the technology stack required to get results.
              </p>
              <p>
                Experience also includes SSO integrations with Active Directory and Amazon Cognito, supporting deployments across AWS and Azure environments.
              </p>
            </div>

            {/* Signature (inside same card) */}
            <div className="signature-wrap">
              <div className="signature-card">
                <div className="signature-left">
                  <img src={phoenixLogo} alt="Phoenix Logo" className="signature-logo" />
                  <div className="signature-copyright">© Julio Lopez</div>
                </div>

                <div className="signature-divider" />

                <div className="signature-right">
                  <div className="signature-name">Julio Lopez</div>
                  <div className="signature-title">Technology Solutions Consultant</div>

                  <a className="signature-link" href="mailto:jlopez@teklyra.com">jlopez@teklyra.com</a>
                  <a className="signature-link" href="https://www.lopezbio.com" target="_blank" rel="noopener noreferrer">
                    www.lopezbio.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linktree-style Social Banner */}
        <div className="linktree-banner">
          <a
              href="https://www.linkedin.com/in/julio-lopez-380937282/"
              className="linktree-item"
              target="_blank"
              rel="noopener noreferrer"
          >
            <div className="linktree-inner" style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <div className="linktree-icon">
                <LinkedInIcon style={{ fontSize: "60px" }} />
              </div>
              <div className="linktree-text" style={{ textAlign: "center", flex: 1 }}>LinkedIn</div>
            </div>
          </a>

          <a
              href="https://github.com/donlopez"
              target="_blank"
              rel="noopener noreferrer"
              className="linktree-item"
          >
            <div className="linktree-inner" style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <div className="linktree-icon">
                <GitHubIcon style={{ fontSize: "60px" }} />
              </div>
              <div className="linktree-text" style={{ textAlign: "center", flex: 1 }}>GitHub</div>
            </div>
          </a>

          <a
              href="https://twitter.com/dominicanking83"
              target="_blank"
              rel="noopener noreferrer"
              className="linktree-item"
          >
            <div className="linktree-inner" style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <div className="linktree-icon">
                <img src={xIcon} alt="X / Twitter" className="x-icon" style={{ width: "50px", height: "50px" }} />
              </div>
              <div className="linktree-text" style={{ textAlign: "center", flex: 1 }}>X / Twitter</div>
            </div>
          </a>

          <a
              href="mailto:jlopez@teklyra.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linktree-item"
          >
            <div className="linktree-inner" style={{ display: "flex", alignItems: "center", width: "100%" }}>
              <div className="linktree-icon">
                <EmailIcon style={{ fontSize: "60px" }} />
              </div>
              <div className="linktree-text" style={{ textAlign: "center", flex: 1 }}>Email</div>
            </div>
          </a>
        </div>
      </div>
  );
}

export default Home;
