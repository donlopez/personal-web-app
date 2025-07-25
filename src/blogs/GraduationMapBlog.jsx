import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Tooltip,
  useMap
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import Papa from "papaparse";
import "leaflet/dist/leaflet.css";
import "../styles/BlogPage.css";
import profilePic from "../assets/ProfileWeb.png";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon
} from "react-share";

// Color logic based on graduation rate
const getColor = (rate) => {
  if (rate >= 0.8) return "green";
  else if (rate >= 0.4) return "orange";
  else return "red";
};

// Map flyer
function MapAutoFly({ target }) {
  const map = useMap();
  useEffect(() => {
    if (target) {
        map.flyTo([target.lat, target.lon], 15, { duration: 1.5 });
    }
  }, [target, map]);
  return null;
}

function GraduationMapBlog() {
  const [institutions, setInstitutions] = useState([]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [flyTarget, setFlyTarget] = useState(null);

  const pageUrl = "https://www.lopezbio.com/blog/graduation-map";
  const pageTitle = "U.S. Graduation Rate in 4-Year Colleges: An Interactive Map for Families";

  useEffect(() => {
    Papa.parse("/data/cleaned_graduation_data.csv", {
      download: true,
      header: true,
      complete: (results) => {
        const parsed = results.data
          .filter((row) => row.LATITUDE && row.LONGITUDE && row.C150_4)
          .map((row) => ({
            name: row.INSTNM,
            city: row.CITY,
            state: row.STABBR,
            lat: parseFloat(row.LATITUDE),
            lon: parseFloat(row.LONGITUDE),
            rate: parseFloat(row.C150_4)
          }));
        setInstitutions(parsed);
      }
    });
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    setFlyTarget(null); // Clear flyTarget so it doesn't retrigger while typing
    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const queryWords = value.toLowerCase().split(" ").filter(Boolean);
    const matched = institutions.filter((inst) =>
      queryWords.every((word) => inst.name.toLowerCase().includes(word))
    );

    setSuggestions(matched.slice(0, 5));
  };

  const handleSelectInstitution = (inst) => {
    setSuggestions([]);
    setTimeout(() => {
      setSearch(inst.name);
      setFlyTarget({ lat: inst.lat, lon: inst.lon });
    }, 100);
  };  

  return (
    <div className="blog-article">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="An interactive map showing graduation rates by U.S. college, created by a father for his son—and families everywhere." />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content="Explore college graduation outcomes using a custom-coded, interactive map to support smart college decisions." />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content="An interactive visualization of 4-year college graduation rates, built for real family decisions." />
      </Helmet>

      <div className="blog-header">
        <div className="author-info">
          <img src={profilePic} alt="Julio Lopez" className="author-pic" />
          <div className="author-text">
            <h2 className="author-name">Julio Lopez</h2>
            <p className="blog-date">May 12, 2025</p>
          </div>
        </div>
      </div>

      <div className="blog-title-block">
        <h1 className="blog-title">U.S. Graduation Rate in 4-Year Colleges</h1>
        <p className="blog-subtitle">An Interactive Map Built to Help Students and Families Make More Informed College Choices</p>
        <p className="blog-subsubtitle">Data last updated April 23, 2025</p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="map-search-bar"
      >
        <input
          type="text"
          placeholder="Search institution..."
          value={search}
          onChange={handleSearchChange}
          className="map-search-input"
        />
        {suggestions.length > 0 && (
          <ul style={{
            position: "absolute",
            top: "110%",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "6px",
            listStyle: "none",
            margin: 0,
            padding: 0,
            width: "100%",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 999
          }}>
            {suggestions.map((inst, idx) => (
              <li
                key={idx}
                onClick={() => handleSelectInstitution(inst)}
                style={{
                  padding: "0.75rem 1rem",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee"
                }}
              >
                {inst.name} ({inst.city}, {inst.state})
              </li>
            ))}
          </ul>
        )}
      </form>

      {/* Map */}
      <MapContainer
        center={[28.5, -81.3]}
        zoom={5}
        className="interactive-map"
        style={{ height: "600px", width: "100%", marginBottom: "2rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapAutoFly key={flyTarget ? `${flyTarget.lat}-${flyTarget.lon}-${Date.now()}` : 'none'} target={flyTarget} />
        <MarkerClusterGroup>
          {institutions.map((inst, idx) => (
            <CircleMarker
              key={idx}
              center={[inst.lat, inst.lon]}
              radius={8}
              color={getColor(inst.rate)}
              fillOpacity={0.8}
            >
              <Tooltip
                direction="top"
                offset={[0, -10]}
                opacity={1}
                permanent={false}
                className="custom-tooltip"
              >
                <div>
                  <strong>{inst.name}</strong><br />
                  {inst.city}, {inst.state}<br />
                  Graduation Rate: {(inst.rate * 100).toFixed(0)}%
                </div>
              </Tooltip>
            </CircleMarker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>

      {/* Legend */}
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
        <strong>Legend:</strong>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 16, height: 16, background: "green", borderRadius: "50%" }}></div> ≥ 80%
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 16, height: 16, background: "orange", borderRadius: "50%" }}></div> 40%–79%
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: 16, height: 16, background: "red", borderRadius: "50%" }}></div> &lt; 40%
        </div>
      </div>

      <div className="blog-body">
        <p>
          This project started with a deeply personal purpose: helping my son navigate one of the biggest decisions of his life—
          choosing the right college. As a father and technologist, I wanted to do more than offer encouragement.
          I wanted to give him insight, and I knew data could provide it.
        </p>
        <p>
          I began by exploring national graduation statistics, eventually building dashboards in Power BI.
          But I wanted a tool that was more interactive, more visual—something he could explore himself. That’s when I decided
          to turn the data into a map, building this application from scratch using React, Leaflet, and live CSV parsing.
        </p>
        <p>
          This interactive map visualizes 4-year graduation rates for institutions across the United States. Each dot represents a college.
          Green means a high graduation rate (80%+), orange is mid-range (40%–79%), and red indicates that fewer than 40% of students finish
          within 150% of expected time. Hover over any dot to see the name, location, and rate.
        </p>
        <p>
          This map is built with love and purpose. I hope it helps my son make a smart choice. And I hope it helps other students,
          families, and counselors do the same. Let this data empower you to ask better questions and make confident decisions.
        </p>
      </div>

      <div className="share-buttons">
        <p>Share this article:</p>
        <FacebookShareButton url={pageUrl} quote={pageTitle} hashtag="#college">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={pageUrl} title={pageTitle} hashtags={["graduation", "collegechoice"]}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <EmailShareButton url={pageUrl} subject={pageTitle} body="This interactive map may help you or your family explore colleges.">
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>

      <div className="blog-citations" style={{ marginTop: "2rem" }}>
        <h3>Works Cited</h3>
        <p>
          U.S. Department of Education. <em>College Scorecard Data Home</em>. Data last updated April 23, 2025.<br />
          <a href="https://collegescorecard.ed.gov/data" target="_blank" rel="noreferrer">
            https://collegescorecard.ed.gov/data
          </a>
        </p>
      </div>
    </div>
  );
}

export default GraduationMapBlog;
