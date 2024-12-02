import React from "react";
import "../styles/ReactAppWebsite.css"; // Link to your CSS file
import diagram from "../assets/reactdiagram.png"; // Replace with the correct path to the uploaded diagram

function ReactAppWebsite() {
  return (
    <div className="react-app-website">
      <h1 className="project-title">React App Personal Website</h1>

      {/* Links Section */}
      <div className="link-section">
        <a 
          href="https://github.com/donlopez/personal-web-app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="github-link"
        >
          View Project on GitHub
        </a>
        <a 
          href="https://lopezbio.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="website-link"
        >
          Visit Live Website
        </a>
      </div>

      <div className="content-wrapper">
        {/* Overview Section */}
        <section>
          <h2>Overview</h2>
          <p>
            This React App Personal Website serves as my online portfolio to showcase my projects, skills, and experience.
            It was developed using modern front-end technologies and hosted with robust AWS services for scalability and performance.
          </p>
        </section>

        {/* Architecture Diagram Section */}
        <section>
          <h2>Architecture Diagram</h2>
          <p>
            Below is the architecture diagram of the deployment process for this React App Website:
          </p>
          <div className="diagram-wrapper">
            <img 
              src={diagram} 
              alt="React App Personal Website Architecture" 
              className="architecture-diagram"
            />
          </div>
        </section>

        {/* Key Features Section */}
        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Fully responsive design for desktop and mobile devices.</li>
            <li>Continuous Integration with GitHub Actions for code quality and security checks.</li>
            <li>Continuous Deployment using AWS Amplify and CodePipeline.</li>
            <li>Domain management with AWS Route 53 for a custom domain name.</li>
          </ul>
        </section>

        {/* Deployment Process Section */}
        <section>
          <h2>Deployment Process</h2>
          <p>
            This React App is integrated with a robust CI/CD pipeline:
          </p>
          <ul>
            <li>GitHub Actions are triggered on every commit to ensure code quality using CodeQL for security checks.</li>
            <li>The app is deployed to AWS Amplify, which handles the build and deployment process automatically.</li>
            <li>DNS configuration and updates are managed using AWS Route 53.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ReactAppWebsite;
