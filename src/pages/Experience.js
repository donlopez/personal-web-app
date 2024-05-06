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
         date="2008 - 2009"
         iconStyle={{background: "#3e497a", color: "#fff"}}
         icon={<SchoolIcon />}
         >
          <h3 className="vertical-timeline-element-title"> GED, Boston Mass. </h3>
          <p> General Education Diploma </p>
         </VerticalTimelineElement>
         <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Valencia College, Orlando, FL
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2015"
          iconStyle={{ background: "#ff4500", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CDL Class A - Kenan Advantage Group
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
            Contractor / Freelance - Orlando FL
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