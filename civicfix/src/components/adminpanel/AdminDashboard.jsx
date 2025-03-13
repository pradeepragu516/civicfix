import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { 
  FaHome, FaClipboardList, FaUsers, FaMoneyBill, 
  FaChartBar, FaCog, FaBars 
} from "react-icons/fa"; 

import "./AdminDashboard.css";

const AdminDashboard = () => {
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
        <h2 className="logo">Admin Panel</h2>
        <ul>
          <li>
            <Link to="/admin" onClick={toggleSidebar}><FaHome /> Home</Link>
          </li>
          <li>
            <Link to="/admin/issues" onClick={toggleSidebar}><FaClipboardList /> Manage Issues</Link>
          </li>
          <li>
            <Link to="/admin/volunteers" onClick={toggleSidebar}><FaUsers /> Volunteer Management</Link>
          </li>
          <li>
            <Link to="/admin/finance" onClick={toggleSidebar}><FaMoneyBill /> Financial Management</Link>
          </li>
          <li>
            <Link to="/admin/reports" onClick={toggleSidebar}><FaChartBar /> Analytics & Reports</Link>
          </li>
          <li>
            <Link to="/admin/settings" onClick={toggleSidebar}><FaCog /> Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
