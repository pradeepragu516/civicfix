import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  FaSearch, 
  FaUserCircle, 
  FaPlusCircle, 
  FaClipboardList, 
  FaCheckCircle, 
  FaUsers
} from "react-icons/fa";
import "./DashboardHome.css";
import Report from "./Report";
import ProfileDropdown from "./profileDropdown";

const DashboardHome = () => {
  // 🌟 State for Stats & Recent Activity
  const [totalIssues, setTotalIssues] = useState(15);
  const [issuesResolved, setIssuesResolved] = useState(8);
  const [volunteersAssigned, setVolunteersAssigned] = useState(5);
  const [recentActivity, setRecentActivity] = useState([
    { text: "You reported a pothole issue", time: "2 hours ago" },
    { text: "Upvoted a broken streetlight issue", time: "1 day ago" },
    { text: "Completed a volunteer task", time: "3 days ago" },
  ]);

  // 🔥 State for Modals & Profile Dropdown
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [username, setUsername] = useState("Pradeep");

  const profileRef = useRef(null);

  // 📌 Handle Click Outside to Close Profile Dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dashboard-home">
      {/* 🏠 Header Section */}
      <header className="dashboard-header">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search issues..." />
        </div>

        {/* 👤 Profile Section */}
        <div 
          className="profile-section" 
          ref={profileRef} 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <FaUserCircle className="profile-icon" />
        </div>
      </header>

      {/* Profile Dropdown */}
      {isProfileOpen && <ProfileDropdown userName={username} onClose={() => setIsProfileOpen(false)} />}

      {/* 🌟 Welcome Section */}
      <div className="welcome">
        <h2>Welcome to CivicFix</h2>
        <p>
          CivicFix is a community-driven platform for reporting and resolving local issues efficiently.
          Join hands to make your locality better by reporting problems and volunteering to solve them.
        </p>
      </div>

      {/* 📊 Stats Overview */}
      <div className="stats-grid">
        <div className="stat-box">
          <FaClipboardList className="stat-icon" />
          <h3>{totalIssues}</h3>
          <p>Total Issues Reported</p>
        </div>
        <div className="stat-box">
          <FaCheckCircle className="stat-icon" />
          <h3>{issuesResolved}</h3>
          <p>Total Issues Resolved</p>
        </div>
        <div className="stat-box">
          <FaUsers className="stat-icon" />
          <h3>{volunteersAssigned}</h3>
          <p>Number of Volunteers Assigned</p>
        </div>
      </div>

      {/* 🔥 Recent Activity */}
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          {recentActivity.map((activity, index) => (
            <li key={index}>
              📝 {activity.text} - <span>{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
      

    </div>
  );
};

export default DashboardHome;
