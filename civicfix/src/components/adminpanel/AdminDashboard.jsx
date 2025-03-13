import React from "react";
import { Outlet, Link } from "react-router-dom";
import { 
  FaHome, FaClipboardList, FaUsers, FaMoneyBill, 
  FaChartBar, FaCog 
} from "react-icons/fa"; 

import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <nav className="admin-sidebar">
        <h2 className="admin-logo">Admin Panel</h2>
        <ul>
          <li>
            <Link to="/admin"><FaHome /> Home</Link>
          </li>
          <li>
            <Link to="/admin/issues"><FaClipboardList /> Manage Issues</Link>
          </li>
          <li>
            <Link to="/admin/volunteers"><FaUsers /> Volunteer Management</Link>
          </li>
          <li>
            <Link to="/admin/finance"><FaMoneyBill /> Financial Management</Link>
          </li>
          <li>
            <Link to="/admin/reports"><FaChartBar /> Analytics & Reports</Link>
          </li>
          <li>
            <Link to="/admin/settings"><FaCog /> Settings</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="admin-dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
