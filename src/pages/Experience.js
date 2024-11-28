import React from "react";
import { VerticalTimeline, VerticalTimelineElement, }  from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#000">
        <VerticalTimelineElement className="vertical-timeline-element--education"
         date="2022 - 2024"
         iconStyle={{background: "#3e497a", color: "#fff"}}
         icon={<SchoolIcon />}
         >
          <h3 className="vertical-timeline-element-title"> Valencia College </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Orlando, FL
          </h4>

          <p> Associate' Degree In Computer Science </p>
         </VerticalTimelineElement>
         <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2025 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Valencia College
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Orlando, FL
          </h4>

          <p>Bachelor's Degree in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2015"
          iconStyle={{ background: "#ff4500", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CDL Class A Driver - Kenan Advantage Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Orlando, FL
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - present"
          iconStyle={{ background: "#ff4500", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IT Consultant / Contractor - Orlando FL
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Orlando, FL
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience