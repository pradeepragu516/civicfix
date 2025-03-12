import React from "react";
import { Link } from "react-router-dom";
import { 
  FaUserCircle, 
  FaUserEdit, 
  FaKey, 
  FaLock, 
  FaBell, 
  FaSignOutAlt 
} from "react-icons/fa";
import "./ProfileDropdown.css";

const ProfileDropdown = ({ userName, onClose }) => {
  return (
    <div className="profile-dropdown">
      {/* Username Section - Clearly Visible */}
      <div className="profile-username">
        <FaUserCircle className="dropdown-icon large-icon" />
        <span className="username-text">{userName}</span>
      </div>

      <ul className="dropdown-menu">
        <li>
          <Link to="/profile">
            <FaUserCircle className="dropdown-icon" /> View Profile
          </Link>
        </li>
        <li>
          <Link to="/edit-profile">
            <FaUserEdit className="dropdown-icon" /> Edit Profile
          </Link>
        </li>
        <li>
          <Link to="/change-password">
            <FaKey className="dropdown-icon" /> Change Password
          </Link>
        </li>
        <li>
          <Link to="/privacy-settings">
            <FaLock className="dropdown-icon" /> Privacy Settings
          </Link>
        </li>
        <li>
          <Link to="/notification-settings">
            <FaBell className="dropdown-icon" /> Notification Settings
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FaSignOutAlt className="dropdown-icon" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
