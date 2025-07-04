// src/pages/DMSProject.js
import React from "react";
import "../styles/DataAnalysis.css";  // reuse style if you like
import UMLImage from "../assets/UML_Latest.jpeg";
import FlowchartImage from "../assets/FlowChartFinal.svg";
import GUISampleImage from "../assets/GUI.png";

function DMSProject() {
  return (
    <div className="data-analysis">
      <h1 className="project-title">Data Management System (DMS JAVA)</h1>

      <div className="link-section">
        <div className="github-link-wrapper">
          <a
            href="https://github.com/donlopez/Data_Management_System"  
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View Source Code
          </a>
        </div>
      </div>

      <div className="content-wrapper">
        <section>
          <h2>Overview</h2>
          <p>
            This project is a Java-based console + JavaFX GUI application for managing small-package shipping orders, similar to e-commerce. It demonstrates robust object-oriented design, layered architecture, and thorough input validation.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Add, view, update, and delete shipping orders</li>
            <li>Input validation to block blanks, invalid names or numbers</li>
            <li>Weight and distance limits with real shipping rates</li>
            <li>Consistent and modern JavaFX GUI with a dark theme</li>
            <li>Clear error, warning, and confirmation messages</li>
          </ul>
        </section>

        <section>
          <h2>Layered Architecture</h2>
          <pre style={{ background: "#f4f4f4", padding: "1rem" }}>
{`UI Layer (JavaFX + console)
|
|-- Logic Layer (ShippingOrderManager)
|
|-- Data Layer (in-memory ArrayList<ShippingOrder>)`}
          </pre>
        </section>

        <section>
          <h2>UML Diagram</h2>
          <img
            src={UMLImage}
            alt="UML Diagram"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "1rem",
              boxShadow: "0 12px 20px rgba(0,0,0,0.4)",
              border: "2px solid black"
            }}
          />
        </section>

        <section>
          <h2>Test Flow Diagram</h2>
          <img
            src={FlowchartImage}
            alt="Test Flow Diagram"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "1rem",
              boxShadow: "0 12px 20px rgba(0,0,0,0.4)",
              border: "2px solid black"
            }}
          />
        </section>

        <section>
          <h2>Sample GUI Preview</h2>
          <img
            src={GUISampleImage}
            alt="JavaFX GUI Sample"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "1rem",
              boxShadow: "0 12px 20px rgba(0,0,0,0.4)",
              border: "2px solid black"
            }}
          />
        </section>

        <section>
          <h2>Future Enhancements</h2>
          <ul>
            <li>JDBC database integration for persistent storage</li>
            <li>Data validation before saving to SQL</li>
          </ul>
        </section>

        <section>
          <h2>Outcome</h2>
          <p>
            This project is designed to be a modern, user-friendly shipping order management system that can evolve with future integrations like JDBC and SQL. Each feature is built with clean code and test-driven methods to ensure quality and scalability.
          </p>
        </section>
      </div>
    </div>
  );
}

export default DMSProject;
