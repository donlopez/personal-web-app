import React from "react";
import ProjectItem from "../components/ProjectItem";
import server from "../assets/server.jpeg";
import python from "../assets/python.jpeg";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects </h1>
      <div className="projectList">
        <ProjectItem name="Cloud Solutions" image={server}/>
        <ProjectItem name="Data Analisys" image={python}/>
      </div>
    </div>
  );
}

export default Projects;