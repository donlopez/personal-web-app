import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import CloudSolutions from "./pages/CloudSolutions";
import DataAnalysis from "./pages/DataAnalysis";
import AndroidApp from "./pages/AndroidApp";  // New import
import ReactAppWebsite from "./pages/ReactAppWebsite";  // New import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          
          {/* Existing project routes */}
          <Route path="/projects/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/projects/data-analysis" element={<DataAnalysis />} />

          {/* New project routes */}
          <Route path="/projects/android-app" element={<AndroidApp />} />
          <Route path="/projects/react-app-website" element={<ReactAppWebsite />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
