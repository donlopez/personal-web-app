import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import profilePic from '../assets/ProfPic1.jpg';
import bannerImage from '../assets/matrixRec.jpeg';

function Home() {
  return (
    <div className="home">
    <header>
      <div className="banner">
        <img src={bannerImage} alt="Banner" className="banner-image" />
      </div>
    </header>

    <div className="profile-picture-container">
      <Link to="/profile">  
        <img src={profilePic} alt="Julio Lopez" className="profile-picture" />
      </Link>
    </div>

      <div className="about">  
      <h2> Julio Lopez </h2>
      <div className="prompt"> 
        <p> A cloud architect and data analyst with a blend of technical expertise and creative problem-solving. </p>
        <Link to="https://www.linkedin.com/in/julio-lopez-380937282/"><LinkedInIcon /></Link>
        <Link to="https://github.com/donlopez" target="_blank" rel="noopener noreferrer"><GitHubIcon /></Link>
        <Link to="https://twitter.com/dominicanking83" target="_blank" rel="noopener noreferrer"><TwitterIcon /></Link>
        <Link to="mailto: juliolopez9260@gmail.com" target="_blank" rel="noopener noreferrer"><EmailIcon /></Link>
      </div>
      </div>
      <div className="skills">
  <h1> Skills </h1>
  <ol className="list">
    <li className="item">
      <h2> Front-End </h2>
      <span> 
        ReactJS, HTML, CSS, React Native, NPM, Bootstrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
      </span>
    </li>
    <li className="item">
      <h2> Back-End </h2>
      <span> 
        NodeJS, Java Spring, Express, MySQL, Ejs, Docker, AWS (DynamoDB, S3, Lambda, API Gateway, RDS, Route 53, EC2, CodePipeline, CloudFormation, Elastic Container Service) 
      </span>
    </li>
    <li className="item">
      <h2> Languages </h2>
      <span>
        JavaScript, Java, Python, C#, C, C++, TypeScript, SQL, Bash, PowerShell, JSON, Markdown
      </span>
    </li>
    <li className="item">
      <h2> DevOps & Tools </h2>
      <span> 
        Git, GitHub, Visual Studio Code, Terraform, Nginx, AWS Amplify, PyTest
      </span>
    </li>
    <li className="item">
      <h2> Data Science & Visualization </h2>
      <span> 
        Tableau, NumPy, Pandas, Matplotlib, Seaborn, Jupyter Notebook
      </span>
    </li>
  </ol>
</div>

    </div>
  )
}

export default Home