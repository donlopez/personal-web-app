import React from "react";
import "../styles/DataAnalysis.css";
import GraduationMapBlog from "../blogs/GraduationMapBlog";
import PBISampleImage from "../assets/dash.png";
import ModelViewImage from "../assets/modelview.png";

function DataAnalysis() {
  return (
    <div className="data-analysis">
      <h1 className="project-title">Graduation Rate Visualization</h1>

      {/* Link to Blog Map */}
      <div className="link-section">
        <div className="github-link-wrapper">
          <a
            href="https://github.com/donlopez/personal-web-app/blob/main/src/blogs/GraduationMapBlog.jsx"
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
            This project was inspired by my son, who is nearing college age. I
            wanted to build a real tool—not just advice—to help him and other
            students compare college graduation outcomes across the United
            States. This interactive project visualizes 4-year graduation rates
            for over 5,000 accredited institutions using a responsive and
            dynamic map.
          </p>
        </section>

        <section>
          <h2>Dataset</h2>
          <p>
            The data comes from the{" "}
            <a
              href="https://collegescorecard.ed.gov/data"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077cc", textDecoration: "underline" }}
            >
              U.S. Department of Education's College Scorecard database
            </a>
            . Fields include institution name, latitude, longitude, city, state, and graduation rates (C150_4). The map uses the most recent update available as of{" "}
            <strong>April 23, 2025</strong>.
          </p>
          <p>
            The raw file used was{" "}
            <code>Most-Recent-Cohorts-Institution.csv</code> and was cleaned
            into <code>cleaned_graduation_data.csv</code> for use in Power BI
            and the React app.
          </p>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <ul>
            <li><strong>Python / Pandas / Jupyter Notebook:</strong> for data exploration and cleaning</li>
            <li><strong>Power BI:</strong> for intermediate visualization and dashboard creation</li>
            <li><strong>React:</strong> as the frontend framework</li>
            <li><strong>React Leaflet + Marker Clustering:</strong> for the interactive map</li>
            <li><strong>PapaParse:</strong> to load and parse CSV client-side</li>
            <li><strong>Custom CSS Media Queries:</strong> for mobile responsiveness</li>
          </ul>
        </section>

        <section>
          <h2>Data Cleaning Process (Jupyter Notebook)</h2>
          <p>
            Using Python in a Jupyter Notebook, I filtered out rows missing
            coordinates or graduation rates and selected only 4-year
            institutions with valid data. Here's an example of the code:
          </p>
          <pre
            style={{
              background: "#f4f4f4",
              padding: "1rem",
              overflowX: "auto",
            }}
          >
{`import pandas as pd

# Load original dataset
df = pd.read_csv("Most-Recent-Cohorts-Institution.csv")

# Filter relevant columns
df_clean = df[[
    "INSTNM", "CITY", "STABBR", "LATITUDE", "LONGITUDE", "C150_4"
]]

# Drop missing values
df_clean = df_clean.dropna()

# Keep only valid numeric graduation rates
df_clean = df_clean[df_clean["C150_4"].apply(lambda x: str(x).replace('.', '', 1).isdigit())]

# Save cleaned version
df_clean.to_csv("cleaned_graduation_data.csv", index=False)`}
          </pre>
        </section>

        <section>
          <h2>Preparing for Visualization in Power BI</h2>
          <p>
            Once cleaned, the data was imported into Power BI along with other
            related tables. I performed additional ETL operations using Power
            Query, such as replacing "NA" and blanks with nulls, casting fields
            like <code>UNITID</code> to <code>Int64</code>, and converting{" "}
            <code>C150_4</code> to a number.
          </p>
          <p>
            In the <strong>Model View</strong>, I defined explicit
            one-to-many relationships using <code>UNITID</code> as the primary
            key. My main table was <code>collegescorecard_API</code>, connected
            to supporting tables like <code>Institution_Dim</code>,{" "}
            <code>Most-Recent-Cohorts-Institution_05192025</code>, and{" "}
            <code>FieldOfStudy_CSV</code>.
          </p>
          <img
            src={ModelViewImage}
            alt="Power BI Model View"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "1rem",
              boxShadow: "0 12px 20px rgba(0,0,0,0.4)",
              border: "2px solid black",
            }}
          />
          <p style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
            *Model View showing structured relationships across tables using
            UNITID as the common key*
          </p>

          <p>
            I then created a dashboard with slicers (State, City, Institution),
            a pie chart, KPIs, and formatted tables.
          </p>
          <ul>
            <li><strong>Pie Chart:</strong> Cost of attendance by institution grouped by state</li>
            <li><strong>Cards:</strong> Summarized totals for <code>FemaleCount</code>, <code>MaleCount</code>, <code>WhiteCount</code>, etc.</li>
            <li>
              <strong>Conditional Formatting:</strong> Applied to Graduation Rate:
              <ul>
                <li>≥ 80%: Green</li>
                <li>40–79%: Orange</li>
                <li>&lt; 40%: Red</li>
              </ul>
            </li>
            <li><strong>White Text Overlay:</strong> for better contrast on dark cells</li>
            <li><strong>3D Depth Effect:</strong> Drop shadows and bold borders on charts and cards</li>
          </ul>
          <img
            src={PBISampleImage}
            alt="Power BI Dashboard"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "1rem",
              boxShadow: "0 12px 20px rgba(0,0,0,0.4)",
              border: "2px solid black",
            }}
          />
          <p style={{ fontSize: "0.9rem", fontStyle: "italic" }}>
            *Dashboard preview showing cost, demographics, graduation success,
            and smart filtering*
          </p>
        </section>

        <section>
          <h2>Project Structure</h2>
          <ul>
            <li><strong>Data Handling:</strong> PapaParse parses local CSV into React state</li>
            <li><strong>Mapping:</strong> React Leaflet + MarkerClusterGroup renders and clusters points</li>
            <li><strong>Smart Search:</strong> Flexible search input using dynamic keyword matching</li>
            <li><strong>Tooltip and Legend:</strong> Color-coded markers and hover-to-reveal tooltips</li>
            <li><strong>Responsiveness:</strong> CSS media queries ensure mobile compatibility</li>
          </ul>
        </section>

        <section>
          <h2>Outcome and Future Plans</h2>
          <p>
            The result is a fully interactive React map that allows users to
            visually compare colleges by location and graduation success.
            Currently, this React-based map is published and accessible on the
            site.
          </p>
          <p>
            In the near future, I plan to:
            <ul>
              <li>Automate the ETL pipeline to refresh data from the College Scorecard API</li>
              <li>Enable Power BI scheduled refreshes to maintain live dashboards</li>
              <li>Embed the Power BI dashboard directly on this site as a public interactive report</li>
            </ul>
          </p>
        </section>
      </div>

      {/* Embedded Interactive Map */}
      <div style={{ marginTop: "3rem" }}>
        <GraduationMapBlog />
      </div>
    </div>
  );
}

export default DataAnalysis;
