import React from "react";
import ProjectItem from "../components/ProjectItem";
import { Link } from "react-router-dom";
import python from "../assets/python.jpeg"; 
import nodeapp from "../assets/nodeapp.jpeg";
import reactLogo from "../assets/webdeb.jpeg";  
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects </h1>
      
      <div className="projectList">
        <Link to="/projects/black-lion-project">
          <ProjectItem name="Black Lion Project" image={nodeapp} />
        </Link>
        <Link to="/projects/react-app-website">
          <ProjectItem name="React App Website" image={reactLogo} />
        </Link>
        <Link to="/projects/data-analysis">
          <ProjectItem name="Data Analysis" image={python} />
        </Link>
        
      </div>
    </div>
  );
}

export default Projects;
