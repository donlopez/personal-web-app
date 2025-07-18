import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
//import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';
import xIcon from '../assets/XIcon.png';

function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></Link>
          <Link to="https://www.instagram.com/jc3sarlopez/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></Link>
          <a href="https://twitter.com/dominicanking83" target="_blank" rel="noopener noreferrer">
            <img src={xIcon} alt="X / Twitter" className="footer-x-icon" />
          </a>
          <Link to="https://www.linkedin.com/in/julio-lopez-380937282/"><LinkedInIcon /></Link>
          <Link to="https://github.com/donlopez" target="_blank" rel="noopener noreferrer"><GitHubIcon /></Link>
          <Link to="mailto: juliolopez9260@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></Link>
        </div>
        <p> &copy; Copyright 2025 Julio Lopez. All rights reserved. </p>
      </div>
    )
  }
  
  export default Footer;
