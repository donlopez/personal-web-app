// src/pages/DMSProject.js

import React from "react";
import "../styles/DataAnalysis.css";
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
            This project is a Java-based console + JavaFX GUI application for managing small-package shipping orders, similar to an e-commerce shipping system. It demonstrates robust object-oriented design, layered architecture, and thorough input validation.
          </p>
        </section>

        <section>
          <h2>Features</h2>
          <ul>
            <li>Add, view, update, and delete shipping orders</li>
            <li>Input validation for names, weights, distances</li>
            <li>Weight and distance limits with realistic rates</li>
            <li>JavaFX GUI with dark theme inspired by OBS</li>
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
          <h2>Phase 1 – Logic and Input Validation</h2>
          <p>
            Phase 1 focused on building the core shipping order logic with validation rules for weights, distances, and customer names. It ensures that incorrect data is rejected, with helpful prompts to guide the user.
          </p>
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/bs4cxrPENHM"
              title="Phase 1 Logic Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section>
          <h2>Phase 2 – JUnit Testing</h2>
          <p>
            In this phase, JUnit tests were created to systematically verify the business logic from Phase 1. Tests included boundary cases, error messages, and valid data paths to confirm the ShippingOrderManager works as expected.
          </p>
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/42L02K4EYRU"
              title="Phase 2 JUnit Testing Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section>
          <h2>Phase 3 – JavaFX GUI Integration</h2>
          <p>
            The JavaFX GUI was built on top of the existing logic, providing a modern dark-themed interface inspired by OBS. The GUI includes a TableView with formatted shipping data, validation dialogs, and interactive elements.
          </p>
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
          <div className="video-container" style={{ marginTop: "1rem" }}>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/EZ-ITMU57j8"
              title="Phase 3 JavaFX GUI Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section>
          <h2>Future Enhancements</h2>
          <ul>
            <li>JDBC database integration for persistent storage</li>
            <li>Validation before saving to SQL</li>
            <li>Additional reporting features</li>
          </ul>
        </section>

        <section>
          <h2>Outcome</h2>
          <p>
            This project is a modern, user-friendly shipping order management system that can be expanded in the future to connect with a real database, using its clean, layered architecture and test-driven methods.
          </p>
        </section>
      </div>
    </div>
  );
}

export default DMSProject;
