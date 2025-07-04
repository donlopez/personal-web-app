import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.css";
import gradRateBanner from "../assets/GradRate.png";
import lambdaBanner from "../assets/Lambda.png";
import cloudCompBanner from "../assets/Cloud_Comp.png";
import cloudJobBanner from "../assets/Cloud_Job.png";
import frameworkCompBanner from "../assets/FrameworkComp.png";

function Blogs() {
  return (
    <div className="projects">
      <h1> My Blogs </h1>
      <div className="projectList">

        <Link to="/blogs/us-graduation-rate">
          <div className="projectItem">
            <div
              style={{
                backgroundImage: `url(${gradRateBanner})`,
              }}
              className="bgImage"
            />
            <h1>US Graduation Rate</h1>
          </div>
        </Link>

        <Link to="/blogs/aws-lambda">
          <div className="projectItem">
            <div
              style={{
                backgroundImage: `url(${lambdaBanner})`,
              }}
              className="bgImage"
            />
            <h1>AWS Lambda</h1>
          </div>
        </Link>

        <Link to="/blogs/cloud-computing">
          <div className="projectItem">
            <div
              style={{
                backgroundImage: `url(${cloudCompBanner})`,
              }}
              className="bgImage"
            />
            <h1>Cloud Computing</h1>
          </div>
        </Link>

        <Link to="/blogs/cloud-job-prep">
          <div className="projectItem">
            <div
              style={{
                backgroundImage: `url(${cloudJobBanner})`,
              }}
              className="bgImage"
            />
            <h1>Cloud Job Prep</h1>
          </div>
        </Link>

        <Link to="/blogs/framework-comparison">
          <div className="projectItem">
            <div
              style={{
                backgroundImage: `url(${frameworkCompBanner})`,
              }}
              className="bgImage"
            />
            <h1>Framework Comparison</h1>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Blogs;
