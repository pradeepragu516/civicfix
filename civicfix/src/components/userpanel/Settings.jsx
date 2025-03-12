import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleTwoFactorToggle = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  return (
    <div className="settings-container">
      <h2>⚙️ Settings</h2>

      <div className="setting-option">
        <label>🌙 Dark Mode</label>
        <button onClick={handleDarkModeToggle} className={darkMode ? "active" : ""}>
          {darkMode ? "Enabled" : "Disabled"}
        </button>
      </div>

      <div className="setting-option">
        <label>🌎 Language</label>
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>

      <div className="setting-option">
        <label>🔒 Two-Factor Authentication</label>
        <button onClick={handleTwoFactorToggle} className={twoFactorAuth ? "active" : ""}>
          {twoFactorAuth ? "Enabled" : "Disabled"}
        </button>
      </div>

      <div className="setting-option">
        <label>📱 Manage Connected Devices</label>
        <button>View Devices</button>
      </div>

      <div className="setting-option">
        <label>📦 Data & Storage</label>
        <button>Manage Storage</button>
      </div>

      <div className="setting-option">
        <label>🚫 Blocked Users</label>
        <button>View Blocked</button>
      </div>

      <div className="setting-option">
        <label>📄 Terms & Policies</label>
        <button>View Policies</button>
      </div>

      <div className="setting-option delete-account">
        <label>⚠️ Delete Account</label>
        <button className="danger">Delete</button>
      </div>
    </div>
  );
};

export default Settings;
