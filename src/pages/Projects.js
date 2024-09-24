import React from "react";
import ProjectItem from "../components/ProjectItem";
import { Link } from "react-router-dom";
import server from "../assets/server.jpeg";
import python from "../assets/python.jpeg";
import android from "../assets/android.jpg";  
import reactLogo from "../assets/webdeb.jpeg";  
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects </h1>
      <h1 style={{ color: "red" }}> (Missing context... Coming soon..) </h1>
      <div className="projectList">
        <Link to="/projects/cloud-solutions">
          <ProjectItem name="Cloud Solutions" image={server} />
        </Link>
        <Link to="/projects/data-analysis">
          <ProjectItem name="Data Analysis" image={python} />
        </Link>
        <Link to="/projects/android-app">
          <ProjectItem name="Android App" image={android} />
        </Link>
        <Link to="/projects/react-app-website">
          <ProjectItem name="React App Website" image={reactLogo} />
        </Link>
      </div>
    </div>
  );
}

export default Projects;
