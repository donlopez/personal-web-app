import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import profilePic from '../assets/ProfPic1.jpg';
import bannerImage from '../assets/matrixRec.jpeg';

// Blog components
import CloudComputing from '../blogs/CloudComputing';
import FrameworkComparison from '../blogs/FrameworkComparison';
import AwsLambda from '../blogs/AwsLambda';
import CloudJobPrep from '../blogs/CloudJobPrep';

const blogPosts = [
  {
    title: "Preparing for Cloud Jobs",
    path: "cloud-job-prep"
  },
  {
    title: "Breaking into Cloud Computing",
    path: "cloud-computing"
  },
  {
    title: "React vs Angular vs Vue",
    path: "framework-comparison"
  },
  {
    title: "Mastering AWS Lambda",
    path: "aws-lambda"
  }
];

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { blogId } = useParams();
  const navigate = useNavigate();

  const blogComponents = {
    "cloud-job-prep": <CloudJobPrep />,
    "cloud-computing": <CloudComputing />,
    "framework-comparison": <FrameworkComparison />,
    "aws-lambda": <AwsLambda />
  };

  const selectedPath = blogId || "cloud-job-prep";
  const selectedBlogComponent = blogComponents[selectedPath];

  return (
    <div className="home">
      <header>
        <div className="banner">
          <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
      </header>

      {/* Profile Picture */}
      <div className="profile-picture-container">
        <img
          src={profilePic}
          alt="Julio Lopez"
          className="profile-picture"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content">
            <img src={profilePic} alt="Julio Lopez Enlarged" />
          </div>
        </div>
      )}

      {/* About */}
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

      {/* Blog Section */}
      <div className="blog-section">
        {/* Title row with hamburger */}
        <div className="blog-header-row">
          <h1>Blogs</h1>
          <button className="blog-toggle-button" onClick={() => setMenuOpen(true)}>
            ☰
          </button>
        </div>

        <div className="blog-container">
          {/* Sidebar menu */}
          <div className={`blog-menu ${menuOpen ? 'open' : ''}`}>
            <button className="blog-close-button" onClick={() => setMenuOpen(false)}>✕</button>
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`blog-title ${selectedPath === post.path ? 'active' : ''}`}
                onClick={() => {
                  navigate(`/blog/${post.path}`);
                  setMenuOpen(false);
                }}
              >
                {post.title}
              </div>
            ))}
          </div>

          {/* Blog content */}
          <div className="blog-content">
            {selectedBlogComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
