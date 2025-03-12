import React, { useState } from "react";
import { FaUpload, FaMapMarkerAlt, FaExclamationCircle, FaEyeSlash } from "react-icons/fa";
import "./Report.css";

const Report = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [media, setMedia] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [duplicateWarning, setDuplicateWarning] = useState("");

  // Simulated AI Duplicate Detection
  const checkForDuplicate = (title) => {
    const existingIssues = JSON.parse(localStorage.getItem("userReports")) || [];
    const duplicate = existingIssues.find((issue) => issue.title.toLowerCase() === title.toLowerCase());
    setDuplicateWarning(duplicate ? `⚠️ Similar issue found: "${duplicate.title}"` : "");
  };

  // Handle File Upload
  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) setMedia(file);
  };

  // Fetch User's GPS Location
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
        },
        () => {
          alert("Failed to fetch location. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  // Submit Issue & Store in Local Storage
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReport = {
      id: Date.now(),
      title,
      description,
      category,
      location,
      urgency: priority,
      media: media ? media.name : "",
      isAnonymous,
      status: "Pending",
    };

    // Save to Local Storage
    const existingReports = JSON.parse(localStorage.getItem("userReports")) || [];
    localStorage.setItem("userReports", JSON.stringify([...existingReports, newReport]));

    alert("✅ Issue reported successfully!");
    setTitle("");
    setDescription("");
    setCategory("");
    setLocation("");
    setPriority("Medium");
    setMedia(null);
    setIsAnonymous(false);
    setDuplicateWarning("");
  };

  return (
    <div className="report-container">
      <h2>📢 Report an Issue</h2>
      <p>Help us improve the community by reporting problems you encounter.</p>

      <form onSubmit={handleSubmit} className="report-form">
        {/* Title Input */}
        <label>Issue Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            checkForDuplicate(e.target.value);
          }}
          placeholder="Briefly describe the issue"
          required
        />
        {duplicateWarning && <p className="duplicate-warning">{duplicateWarning}</p>}

        {/* Description Input */}
        <label>Issue Description:</label>
        <textarea
          className="iss_des"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide more details about the issue..."
          required
        />

        {/* Category Selection */}
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select a category</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Electricity Issue">Electricity Issue</option>
          <option value="Water Supply">Water Supply</option>
          <option value="Garbage Collection">Garbage Collection</option>
          <option value="Other">Other</option>
        </select>

        {/* Upload Media */}
        <label>Upload Images/Videos:</label>
        <input type="file" accept="image/*,video/*" onChange={handleMediaUpload} />
        {media && <p>📁 Selected: {media.name}</p>}

        {/* Location Picker */}
        <label>Location (GPS-enabled):</label>
        <div className="location-container">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location or allow GPS access"
            required
          />
          <button type="button" className="location-btn" onClick={fetchLocation}>
            <FaMapMarkerAlt /> Use My Location
          </button>
        </div>

        {/* Urgency Level */}
        <label>Urgency Level:</label>
        <div className="priority-options">
          <button
            type="button"
            className={`priority-btn ${priority === "Low" ? "active low" : ""}`}
            onClick={() => setPriority("Low")}
          >
            Low
          </button>
          <button
            type="button"
            className={`priority-btn ${priority === "Medium" ? "active medium" : ""}`}
            onClick={() => setPriority("Medium")}
          >
            Medium
          </button>
          <button
            type="button"
            className={`priority-btn ${priority === "High" ? "active high" : ""}`}
            onClick={() => setPriority("High")}
          >
            High
          </button>
        </div>

        {/* Submit Anonymously */}
        <label className="checkbox-container">
          <input
            style={{ height: "20px", width: "20px", marginRight: "10px" }}
            type="checkbox"
            checked={isAnonymous}
            onChange={() => setIsAnonymous(!isAnonymous)}
          />
          <FaEyeSlash className="an-icon" />
          <span className="sub-an">Submit Anonymously</span>
        </label>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          <FaUpload /> Submit Report
        </button>
      </form>
    </div>
  );
};

export default Report;
