import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";
import scenery from "../../assets/scenery.jpg"; // Importing the background image

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="register-container">
      {/* 🌆 Background Overlay */}
      <div
        className="background-overlay"
        style={{ backgroundImage: `url(${scenery})` }}
      ></div>

      {/* 📦 Register Box */}
      <div className="register-box">
        <h2>Create Account</h2>
        <p>Join us and make a difference</p>

        {/* 📝 Name Field */}
        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>

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

        {/* 🔒 Confirm Password Field */}
        <div className="input-group">
          <label>Confirm Password</label>
          <div className="password-input">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              required
            />
            <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* 🎯 Register Button */}
        <button className="btn-register">Sign Up</button>

        {/* 📌 Login Link */}
        <div className="login-link">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
