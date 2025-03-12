import React from "react";
import { Outlet, Link } from "react-router-dom";
import { 
  FaHome, FaListAlt, FaCheckCircle, FaUsers, 
  FaBell, FaCog, FaPlusCircle, FaComments 
} from "react-icons/fa"; // Removed duplicate imports

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar (Constant) */}
      <nav className="sidebar">
        <h2 className="logo">CivicFix</h2>
        <ul>
          <li>
            <Link to="/dashboard"><FaHome /> Home</Link>
          </li>
          <li>
            <Link to="/dashboard/report"><FaPlusCircle /> Report an Issue</Link>
          </li>
          <li>
            <Link to="/dashboard/myreports"><FaListAlt /> My Reports</Link>
          </li>
          <li>
            <Link to="/dashboard/upvoted"><FaCheckCircle /> Upvoted Issues</Link>
          </li>
          <li>
            <Link to="/dashboard/volunteer"><FaUsers /> Volunteer Tasks</Link>
          </li>
          <li>
            <Link to="/dashboard/discussion"><FaUsers /> Community Discussion</Link>
          </li>
          {/* <li>
            <Link to="/dashboard/chat"><FaComments /> Chatting Page</Link>
          </li> */}
          <li>
            <Link to="/dashboard/notifications"><FaBell /> Notifications</Link>
          </li>
          <li>
            <Link to="/dashboard/settings"><FaCog /> Settings</Link>
          </li>
          {/* Logout Option (Uncomment if needed) */}
          {/* <li className="logout">
            <Link to="/logout"><FaSignOutAlt /> Logout</Link>
          </li> */}
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
