// src/pages/DMSProject.js

import React from "react";
import "../styles/DataAnalysis.css";
import UMLImage from "../assets/UML_Latest.jpeg";
import FlowchartImage from "../assets/FlowChartFinal.svg";
import GUISampleImage from "../assets/GUI.png";
import UMLLatestFinal from "../assets/UMLLatestDiagram.png";

function DMSProject() {
  return (
    <div className="data-analysis">
      <h1 className="project-title">📦 Data Management System (Shipping Orders)</h1>

      <div className="content-wrapper">
        {/* Demo video (wrapped like old videos) */}
        <section>
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/0Lbw0n8BEXo"
              title="DMS Project Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Source Code link directly under video */}
        <div className="link-section" style={{ marginTop: "0.5rem" }}>
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

        {/* Overview */}
        <section>
          <h2>Overview</h2>
          <p>
            A <strong>Java-based console + JavaFX GUI application</strong> to manage small-package
            shipping orders (e.g., e-commerce or Amazon-style workflows). This project emphasizes{" "}
            <strong>object-oriented design</strong>, a <strong>layered architecture</strong>, and
            strong <strong>input validation</strong>.
          </p>
        </section>

        {/* SDLC */}
        <section>
          <h2>🔁 Software Development Life Cycle (SDLC)</h2>

          <h3>📋 1. Requirement Plan</h3>
          <p>Defines the goals and features of the system before development begins.</p>
          <ul>
            <li><strong>Functional Requirements:</strong></li>
            <ul>
              <li>Create, read, update, delete (CRUD) shipping orders</li>
              <li>Automatically calculate shipping cost based on weight and distance</li>
              <li>Accept input via console and GUI</li>
              <li>Validate user input and prevent invalid states</li>
            </ul>
            <li><strong>Non-Functional Requirements:</strong></li>
            <ul>
              <li>Platform-independent (Java)</li>
              <li>Input validation and error handling</li>
              <li>Modular, testable, and scalable design</li>
              <li>GUI with a user-friendly, modern interface</li>
            </ul>
            <li><strong>Core Data Attributes:</strong></li>
            <ul>
              <li><code>orderId</code>: Unique identifier</li>
              <li><code>customerName</code>: String (alphabetic only)</li>
              <li><code>shipperName</code>: String (alphabetic only)</li>
              <li><code>weightInPounds</code>: Double (0.1–150 lbs)</li>
              <li><code>distanceInMiles</code>: Integer (1–3000 miles)</li>
              <li><code>shippingCost</code>: Auto-calculated</li>
            </ul>
          </ul>

          <h3>🏗️ 2. Implementation Plan</h3>
          <ul>
            <li><strong>Architecture:</strong> Layered structure separating UI, business logic, and data; GUI uses JavaFX with FXML; final phase includes JDBC/MySQL database connection.</li>
            <li><strong>Technology Stack:</strong> Java 17, JavaFX (FXML), MySQL, JUnit.</li>
            <li><strong>Layer Evolution:</strong> Phase 1: Console CLI → Phase 2: Encapsulated business logic → Phase 3: JavaFX GUI → Phase 4: SQL backend (JDBC).</li>
          </ul>

          <h3>🧪 3. Software Testing Plan</h3>
          <ul>
            <li><strong>Approach:</strong> Test-Driven Development (TDD); unit tests created before logic implementation.</li>
            <li><strong>Focus Areas:</strong> CRUD correctness, edge validations (max weight/distance), malformed inputs.</li>
            <li><strong>Tools:</strong> JUnit for unit & boundary tests; manual GUI testing for user interaction.</li>
          </ul>
        </section>

        {/* Features */}
        <section>
          <h2>🚀 Features</h2>
          <ul>
            <li>Create, view, update, and delete shipping orders</li>
            <li>Real-time input validation (no blanks, invalid names, or bad numbers)</li>
            <li>Robust error handling with meaningful feedback</li>
            <li>Weight range enforced: 0.1–150 lbs</li>
            <li>Distance limit enforced: up to 3000 miles</li>
            <li>Smart shipping cost calculation using realistic rates</li>
            <li>Clean, dark-themed JavaFX interface inspired by OBS Studio</li>
            <li>Clear visual indicators for success, warnings, and errors</li>
          </ul>
        </section>

        {/* Layered Architecture */}
        <section>
          <h2>📐 Layered Architecture</h2>
          <pre style={{ background: "#f4f4f4", padding: "1rem", whiteSpace: "pre-wrap" }}>
{`├── UI Layer (Console → JavaFX GUI)
├── Logic Layer (ShippingOrderManager.java)
└── Data Layer (ArrayList → SQL via JDBC)`}
          </pre>
        </section>

        {/* ✅ UI / Logic / Data Layer subsections */}
        <section>
          <h3>✅ UI Layer</h3>
          <ul>
            <li>JavaFX GUI with an OBS-inspired dark theme</li>
            <li>Command-line fallback with <code>Scanner</code> + <code>System.out</code></li>
            <li>Full CRUD buttons and TableView display</li>
            <li>Alert dialogs for validation and confirmations</li>
          </ul>

          <h3>✅ Logic Layer</h3>
          <ul>
            <li>Centralized in <code>ShippingOrderManager</code></li>
            <li>Handles all business rules and CRUD operations</li>
          </ul>

          <h3>✅ Data Layer</h3>
          <ul>
            <li>In-memory <code>ArrayList&lt;ShippingOrder&gt;</code> storage</li>
            <li>Easily swappable for JDBC-based SQL backend</li>
          </ul>
        </section>

        {/* UML, Flow, GUI */}
        <section>
          <h2>📊 UML Diagram</h2>
          <p>Class structure and relationships:</p>
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
          <h2>🗺️ Test Flow Diagram (Flowchart)</h2>
          <p>Full test/validation logic shown here:</p>
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
          <h2>🖼️ Sample GUI Preview</h2>
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

        {/* JavaFX Setup */}
        <section>
          <h2>⚙️ JavaFX Setup Instructions</h2>
          <ol>
            <li>
              Download JavaFX SDK:{" "}
              <a href="https://gluonhq.com/products/javafx" target="_blank" rel="noreferrer">
                gluonhq.com/products/javafx
              </a>
            </li>
            <li>Extract the SDK</li>
            <li>
              In IntelliJ: <em>File → Project Structure → Libraries</em> → add all <code>.jar</code> files from the{" "}
              <code>lib</code> folder
            </li>
            <li>
              <em>Run → Edit Configurations</em> → VM options:
              <pre style={{ background: "#f4f4f4", padding: "0.75rem" }}>
{`--module-path <your_path_here>/lib --add-modules javafx.controls,javafx.fxml`}
              </pre>
              <em>(Replace &lt;your_path_here&gt; with your JavaFX SDK path. If you don't see VM options, click “Modify Options → Add VM options”.)</em>
            </li>
          </ol>
        </section>

        {/* Input Validation Examples */}
        <section>
          <h2>🧠 Input Validation Examples</h2>
          <ul>
            <li><strong>Names</strong>: Alphabetic only, max 30 characters</li>
            <li><strong>Weight</strong>: Between <code>0.1</code> and <code>150</code> lbs</li>
            <li><strong>Distance</strong>: Between <code>1</code> and <code>3000</code> miles</li>
            <li><strong>Blank/invalid entries</strong> trigger warnings</li>
            <li><strong>Bad IDs</strong> trigger clear error messages</li>
          </ul>
        </section>

        {/* Phase 4 database */}
        <section>
          <h2>✅ Phase 4 – Adding a Database</h2>
          <p>JDBC support is live! The app now persists data to MySQL:</p>
          <ul>
            <li>JDBC driver added</li>
            <li><code>MainController.java</code> prompts for DB login</li>
            <li>UI displays connection errors cleanly</li>
            <li>Seamless JavaFX ↔ SQL communication</li>
            <li>Modular backend ready for future data sources</li>
          </ul>
        </section>

        {/* Final UML (post phase 4) */}
        <section>
          <h2>📊 UML Diagram (Final – Post Phase 4)</h2>
          <p>This updated UML diagram reflects the complete system after Phase 4, including:</p>
          <ul>
            <li>Full database integration via <code>DBConnectionManager</code> and <code>DatabaseHelper</code></li>
            <li>JavaFX interface logic in <code>MainController</code> and <code>LoginView</code></li>
            <li>Business logic encapsulated in <code>ShippingOrderManager</code></li>
            <li>Console fallback with <code>ConsoleMain</code></li>
            <li>Unit tests for both individual orders and the manager class</li>
            <li>Entity relationships: <code>Customer</code>, <code>Shipper</code>, and <code>ShippingOrder</code></li>
          </ul>
          <img
            src={UMLLatestFinal}
            alt="Final UML Diagram (Post Phase 4)"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "1rem",
              boxShadow: "0 12px 20px rgba(0,0,0,0.4)",
              border: "2px solid black"
            }}
          />
        </section>

        {/* Future Enhancements */}
        <section>
          <h2>🔮 Future Enhancements</h2>
          <ul>
            <li>Search, filter, and sort orders by customer, shipper, weight, etc.</li>
            <li>Export data to CSV or PDF</li>
            <li>Role-based login with sessions</li>
            <li>Admin dashboard with visual metrics</li>
          </ul>
        </section>

        {/* Latest Updates near end */}
        <section>
          <h2>📝 Latest Updates</h2>
          <ul>
            <li>✅ Phase 1: Business logic + validation complete</li>
            <li>✅ Phase 2: All core methods tested via JUnit</li>
            <li>✅ Phase 3: Full-featured JavaFX UI implemented</li>
            <li>🎨 Enhanced styling with shadows and effects</li>
            <li>🏁 Finalized JDBC integration for live data handling</li>
            <li>✅ Phase 4: Database integration completed (MySQL via JDBC)</li>
          </ul>
        </section>

        {/* Author LAST */}
        <section>
          <h2>👨‍💻 Author</h2>
          <p>
            <strong>Julio Lopez</strong> —{" "}
            <a
              href="https://www.linkedin.com/in/julio-lopez-380937282/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default DMSProject;
