import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import profilePic from '../assets/ProfileWeb.png';
import bannerImage from '../assets/matrixRec.jpeg';
import xIcon from '../assets/XIcon.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
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

      {/* About Section */}
      <div className="about">
        <div className="prompt">
          <p>Hello, my name is Julio Lopez—welcome to my portfolio site!</p>
          <p>
            Here you’ll find an overview of my work, experience, and passion for
            cloud architecture and technology. To learn more about my background
            and skills, check out the Projects or Experience sections. For thoughts
            on cloud computing, tech trends, and hands-on training, visit the
            "Blogs" section above.
          </p>
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
          href="https://www.youtube.com/@juliolopez9663"
          target="_blank"
          rel="noopener noreferrer"
          className="linktree-item"
        >
          <div className="linktree-inner" style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div className="linktree-icon">
              <YouTubeIcon style={{ fontSize: "60px", color: "#000000" }} />
            </div>
            <div className="linktree-text" style={{ textAlign: "center", flex: 1 }}>YouTube</div>
          </div>
        </a>
        <a
          href="mailto:juliolopez9260@gmail.com"
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
