import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Planit from "./pages/Planit";
import DataAnalysis from "./pages/DataAnalysis";
import ReactAppWebsite from "./pages/ReactAppWebsite";
import BlackLionProject from "./pages/BlackLionProject";
import DMSProject from "./pages/DMSProject";
//import Blogs from "./pages/Blogs";
//import USGraduationRate from "./blogs/USGraduationRate";
//import AwsLambda from "./blogs/AwsLambda";
//import CloudComputing from "./blogs/CloudComputing";
//import CloudJobPrep from "./blogs/CloudJobPrep";
//import FrameworkComparison from "./blogs/FrameworkComparison";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/us-graduation-rate" element={<USGraduationRate />} />
          <Route path="/blogs/aws-lambda" element={<AwsLambda />} />
          <Route path="/blogs/cloud-computing" element={<CloudComputing />} />
          <Route path="/blogs/cloud-job-prep" element={<CloudJobPrep />} />
          <Route path="/blogs/framework-comparison" element={<FrameworkComparison />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/planit" element={<Planit />} />
          <Route path="/projects/data-analysis" element={<DataAnalysis />} />
          <Route path="/projects/react-app-website" element={<ReactAppWebsite />} />
          <Route path="/projects/black-lion-project" element={<BlackLionProject />} />
          <Route path="/projects/dms-java" element={<DMSProject />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
