import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./AdminLogin.css";
import scenery from "../../assets/scenery.jpg"; // Ensure correct image path

const AdminLogin = () => {
  const [email, setEmail] = useState(""); // Store email input
  const [password, setPassword] = useState(""); // Store password input
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // Store error message
  const navigate = useNavigate(); // For redirection

  // 🔥 Handle Admin Login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Invalid credentials"); // Show error message
        return;
      }

      localStorage.setItem("adminToken", data.token); // Store token
      navigate("/AdminDashboard"); // Navigate to Admin Dashboard
    } catch (err) {
      setError("Something went wrong! Try again.");
    }
  };

  return (
    <div className="login-container">
      {/* 🌆 Background Overlay */}
      <div className="background-overlay" style={{ backgroundImage: `url(${scenery})` }}></div>

      {/* 📦 Login Box */}
      <div className="login-box">
        <h2 className="let">Admin Login</h2>
        <p>Login to continue</p>

        {/* 🚨 Show Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* 📩 Email Field */}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* 🔒 Password Field */}
        <div className="input-group">
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* 🎯 Login Button */}
        <button className="btn-login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
