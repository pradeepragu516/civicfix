import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import styles
import villageVideo from "D:/civicfix project/civicfix/src/assets/village.mp4";

const Home = () => {
  return (
    <div className="home-container">

         {/* 🎥 Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={villageVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔝 Header */}
      <header className="header">
        <h1 className="project-name">CivicFix</h1>
        <div className="auth-buttons">
          <Link to="/login" className="btn">LOGIN</Link>
          <Link to="/signup" className="btn">REGISTER</Link>
        </div>
      </header>

      {/* 🌍 Main Content */}
      <main className="main-content">
        <h2>Empowering Communities</h2>
        <p>Track and resolve local issues together.</p>
        <Link to="/dashboard" className="btn-primary">
          DASHBOARD
        </Link>
      </main>

      {/* 📜 Footer */}
      
    </div>
  );
};

export default Home;
