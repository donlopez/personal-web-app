import React from "react";
import "../styles/BlackLionProject.css";
import diagram from "../assets/Event_Planner_Diagram.png";

function BlackLionProject() {
  return (
    <div className="black-lion-project">
      <h1 className="project-title">Black Lion IT Capstone Project</h1>

      {/* Prominent Links Section */}
      <div className="link-section">
        <div className="github-link-wrapper">
          <a 
            href="https://github.com/donlopez/BlackLion2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-link"
          >
            View Project on GitHub
          </a>
        </div>
        <div className="website-link-wrapper">
          <a 
            href="http://eventplanner.lopezbio.com/" 
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
            The <strong>Black Lion Project</strong> is an IT capstone project developed as part of a college course, 
            focused on backend development and cloud deployment. This project handles data management, 
            database connectivity, and efficient deployment practices using AWS services.
          </p>
        </section>

        <section>
          <h2>Architecture Diagram</h2>
          <p>The following diagram showcases the architecture of the Event Planner application:</p>
          <div className="diagram-wrapper">
            <img 
              src={diagram} 
              alt="Black Lion IT Capstone Project Architecture" 
              className="architecture-diagram"
            />
          </div>
        </section>

        <section>
          <h2>Project Goal</h2>
          <ul>
            <li>Create, edit, and manage events.</li>
            <li>Track guest lists and assign event locations.</li>
            <li>Organize various event-related activities.</li>
          </ul>
        </section>

        <section>
        <h2>Project Structure</h2>
        <p>
          This project uses a <strong>Node.js</strong> application deployed on an <strong>AWS EC2 instance</strong> (Kali Linux). The backend interacts with a <strong>MySQL database</strong> hosted on <strong>Amazon RDS</strong> to ensure 
          reliability and security for data storage and access. <strong>AWS CodePipeline</strong> is used to automate the deployment process.
        </p>
      </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li><strong>Compute Group:</strong> Node.js app with PM2 and Nginx for process management and reverse proxy.</li>
            <li><strong>Storage Group:</strong> S3 bucket for storing static assets.</li>
            <li><strong>Security Group:</strong> IAM roles and AWS Secrets Manager for secure resource access.</li>
            <li><strong>Database Group:</strong> Amazon RDS (MySQL) for data storage.</li>
            <li><strong>Monitoring Group:</strong> AWS CloudWatch for capturing logs.</li>
            <li><strong>Networking Group:</strong> AWS VPC and subnets for secure and efficient networking.</li>
            <li><strong>CI/CD Integration:</strong> GitHub repository with AWS CodePipeline for automated deployment.</li>
          </ul>
        </section>

        <section>
        <h2>Future Enhancements</h2>
        <ul>
          <li>Integrating a real-time notification system for event updates.</li>
          <li>Adding advanced analytics and reporting features.</li>
          <li>Expanding logging and monitoring for additional metrics with AWS CloudWatch.</li>
        </ul>
      </section>

      <section>
        <h2>How to Deploy</h2>
        <ol>
          <li>Clone the repository: <code>git clone https://github.com/donlopez/BlackLion2</code></li>
          <li>Install dependencies with <code>npm install</code>.</li>
          <li>Set up AWS resources (EC2, RDS, S3, IAM roles, and Secrets Manager).</li>
          <li>Run the application using PM2: <code>pm2 start server.js</code>.</li>
          <li>Monitor logs with AWS CloudWatch or <code>pm2 logs</code>.</li>
          <li>Use AWS CodePipeline for CI/CD integration.</li>
        </ol>
      </section>
      </div>
    </div>
  );
}

export default BlackLionProject;