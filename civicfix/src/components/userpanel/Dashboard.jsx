import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { 
  FaHome, FaListAlt, FaCheckCircle, FaUsers, 
  FaBell, FaCog, FaPlusCircle, FaComments, FaBars 
} from "react-icons/fa"; 

import "./Dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar Toggle Button for Mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="logo">CivicFix</h2>
        <ul>
          <li>
            <Link to="/dashboard" onClick={toggleSidebar}><FaHome /> Home</Link>
          </li>
          <li>
            <Link to="/dashboard/report" onClick={toggleSidebar}><FaPlusCircle /> Report an Issue</Link>
          </li>
          <li>
            <Link to="/dashboard/myreports" onClick={toggleSidebar}><FaListAlt /> My Reports</Link>
          </li>
          <li>
            <Link to="/dashboard/upvoted" onClick={toggleSidebar}><FaCheckCircle /> Upvoted Issues</Link>
          </li>
          <li>
            <Link to="/dashboard/volunteer" onClick={toggleSidebar}><FaUsers /> Volunteer Tasks</Link>
          </li>
          <li>
            <Link to="/dashboard/discussion" onClick={toggleSidebar}><FaComments /> Community Discussion</Link>
          </li>
          <li>
            <Link to="/dashboard/notifications" onClick={toggleSidebar}><FaBell /> Notifications</Link>
          </li>
          <li>
            <Link to="/dashboard/settings" onClick={toggleSidebar}><FaCog /> Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
