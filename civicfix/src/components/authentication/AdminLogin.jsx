import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import "./AdminLogin.css";
import scenery from "../../assets/scenery.jpg"; // Corrected import path

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      {/* 🌆 Background Overlay with imported image */}
      <div
        className="background-overlay"
        style={{ backgroundImage: `url(${scenery})` }}
      ></div>

      {/* 📦 Login Box */}
      <div className="login-box">
        <h2 className="let">Admin Login</h2>
        <p>Login to continue</p>

        {/* 📩 Email Field */}
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        {/* 🔒 Password Field */}
        <div className="input-group">
          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* 🎯 Login & Guest Buttons */}
        <button className="btn-login">Login</button>
        {/* <button className="btn-guest">Continue as Guest</button> */}

      

        {/* 📌 Register Link */}
        {/* <div className="register-link">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AdminLogin;
