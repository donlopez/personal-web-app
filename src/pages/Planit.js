import React from "react";
import "../styles/Planit.css"; // Add relevant styles for this new page
import architectureDiagram from "../assets/planitdiagram.png"; // Import the architecture diagram

function Planit() {
  return (
    <div className="planit">
      <h1 className="project-title">Event Planner App Using React (Planit)</h1>

      {/* Prominent Links Section */}
      <div className="link-section">
        <div className="github-link-wrapper">
          <a
            href="https://github.com/donlopez/planit"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Project on GitHub
          </a>
        </div>
        <div className="website-link-wrapper">
          <a
            href="https://www.eventplanner.lopezbio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="website-link"
          >
            Visit Deployed App
          </a>
        </div>
      </div>

      <div className="content-wrapper">
        <section>
          <h2>Overview</h2>
          <p>
            The <strong>Event Planner App (Planit)</strong> is a full-stack React application developed as part of a capstone project to manage and plan events. It integrates AWS services such as RDS, Cognito, Amplify, Lambda, API Gateway, and CloudWatch, aiming to optimize costs while providing a scalable solution for managing event data and user authentication.
          </p>
        </section>

        {/* Added Architecture Diagram section */}
        <section>
          <h2>Architecture Diagram</h2>
          <p>The following diagram showcases the architecture of the Event Planner application:</p>
          <div className="diagram-wrapper">
            <img 
              src={architectureDiagram} 
              alt="Event Planner App Architecture" 
              className="architecture-diagram"
            />
          </div>
        </section>

        <section>
          <h2>Project Goal</h2>
          <ul>
            <li>Create, edit, and manage events with ease.</li>
            <li>Track guest lists and assign event locations.</li>
            <li>Provide seamless user authentication and authorization using AWS Cognito.</li>
            <li>Utilize AWS Lambda and API Gateway to handle serverless backend operations.</li>
          </ul>
        </section>

        <section>
          <h2>Project Architecture</h2>
          <p>
            This app uses a React frontend deployed with AWS Amplify. The backend services such as data storage and user authentication are managed through AWS RDS (MySQL), AWS Cognito, and other AWS services, ensuring a reliable and cost-effective architecture.
          </p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li><strong>Frontend:</strong> Built with React for a responsive user experience.</li>
            <li><strong>User Authentication:</strong> AWS Cognito for secure user login and registration.</li>
            <li><strong>Backend:</strong> Serverless functions powered by AWS Lambda, API Gateway for RESTful endpoints.</li>
            <li><strong>Database:</strong> Amazon RDS for secure and scalable data storage.</li>
            <li><strong>Monitoring:</strong> AWS CloudWatch for tracking and logging activities.</li>
            <li><strong>DNS Management:</strong> Route 53 for custom domain management.</li>
          </ul>
        </section>

        <section>
          <h2>How to Deploy</h2>
          <ol>
            <li>Clone the repository: <code>git clone https://github.com/donlopez/planit</code></li>
            <li>Set up AWS Amplify for frontend hosting.</li>
            <li>Configure AWS services: RDS, Cognito, Lambda, API Gateway, and CloudWatch.</li>
            <li>Deploy the frontend with Amplify and connect it to the backend services.</li>
            <li>Monitor logs and performance with AWS CloudWatch.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Planit;
