import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
  return (
      <div className="experience">
        <VerticalTimeline lineColor="#fff">

          {/* Valencia College (Associate) */}
          <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2021 - 2024"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
          >
            <a
                href="https://valenciacollege.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
            >
              <h3 className="vertical-timeline-element-title">Valencia College</h3>
              <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
              <p>Associate of Science in Computer Programming & Analysis</p>
            </a>
          </VerticalTimelineElement>

          {/* Valencia College (Bachelor) */}
          <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2021 - 2025"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
          >
            <a
                href="https://valenciacollege.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
            >
              <h3 className="vertical-timeline-element-title">Valencia College</h3>
              <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
              <p>Bachelor of Applied Science in Computing Technology & Software Development</p>
            </a>
          </VerticalTimelineElement>

          {/* Kenan Advantage Group (Driver) */}
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2015"
              iconStyle={{ background: "#dc1818", color: "#fff" }}
              icon={<WorkIcon />}
          >
            <a
                href="https://drivers.thekag.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
            >
              <h3 className="vertical-timeline-element-title">
                Kenan Advantage Group - CDL Class A Driver
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
            </a>
          </VerticalTimelineElement>

          {/* Kenan Advantage Group (Owner Operator) */}
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2015 - 2024"
              iconStyle={{ background: "#dc1818", color: "#fff" }}
              icon={<WorkIcon />}
          >
            <a
                href="https://drivers.thekag.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
            >
              <h3 className="vertical-timeline-element-title">
                Kenan Advantage Group - Owner Operator
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
            </a>
          </VerticalTimelineElement>

          {/* Toho Water Authority - Safety & Risk */}
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2025"
              iconStyle={{ background: "#dc1818", color: "#fff" }}
              icon={<WorkIcon />}
          >
            <a
                href="https://tohowater.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
            >
              <h3 className="vertical-timeline-element-title">
                Toho Water Authority - Safety & Risk
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Kissimmee, FL</h4>
            </a>
          </VerticalTimelineElement>

          {/* Toho Water Authority - Operations Data Analyst */}
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2025 - Present"
              iconStyle={{ background: "#dc1818", color: "#fff" }}
              icon={<WorkIcon />}
          >
            <a
                href="https://tohowater.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-link"
            >
              <h3 className="vertical-timeline-element-title">
                Toho Water Authority - Operations Data Analyst
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Kissimmee, FL</h4>
            </a>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
  );
}

export default Experience;
