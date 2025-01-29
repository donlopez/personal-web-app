import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';

function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></Link>
          <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></Link>
          <Link to="https://twitter.com/dominicanking83" target="_blank" rel="noopener noreferrer"><TwitterIcon /></Link>
          <Link to="https://www.linkedin.com/in/julio-lopez-380937282/"><LinkedInIcon /></Link>
          <Link to="https://github.com/donlopez" target="_blank" rel="noopener noreferrer"><GitHubIcon /></Link>
          <Link to="mailto: juliolopez9260@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></Link>
        </div>
        <p> &copy; 2025 Don Lopez Inc </p>
      </div>
    )
  }
  
  export default Footer;
