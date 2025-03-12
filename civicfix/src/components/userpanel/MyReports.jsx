import React, { useState, useEffect } from "react";
import "./MyReports.css";
import { FaSearch, FaFilter, FaTrash, FaEdit, FaEye, FaCheckCircle } from "react-icons/fa";

const MyReports = () => {
  const [reports, setReports] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // 🌟 Load reports from local storage
  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem("userReports")) || [];
    setReports(storedReports);
  }, []);

  // 📌 Handle Report Deletion
  const deleteReport = (id) => {
    const updatedReports = reports.filter((report) => report.id !== id);
    setReports(updatedReports);
    localStorage.setItem("userReports", JSON.stringify(updatedReports));
  };

  // 📌 Handle Report Editing (Only for Pending)
  const editReport = (id) => {
    alert("Edit functionality can be added here!");
  };

  // 📌 Filter Reports Based on Status
  const filteredReports = reports.filter((report) => 
    (filter === "All" || report.status === filter) && 
    report.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-reports">
      {/* 🔍 Search & Filter Section */}
      <div className="reports-header">
        <h2>My Reports</h2>
        <div className="search-filter">
          <div className="search-bar">
            <FaSearch className="icon" />
            <input 
              type="text" 
              placeholder="Search reports..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="filter-dropdown">
            <FaFilter className="icon" />
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {/* 📜 Reports List */}
      <div className="reports-list">
        {filteredReports.length === 0 ? (
          <p className="no-reports">No reports found.</p>
        ) : (
          filteredReports.map((report) => (
            <div key={report.id} className="report-card">
              <h3>{report.title}</h3>
              <p><strong>Category:</strong> {report.category}</p>
              <p><strong>Location:</strong> {report.location}</p>
              <p><strong>Urgency:</strong> {report.urgency}</p>
              <p><strong>Status:</strong> <span className={`status ${report.status.toLowerCase()}`}>{report.status}</span></p>

              {/* 🛠 Action Buttons */}
              <div className="actions">
                <button className="view-btn"><FaEye /> View</button>
                {report.status === "Pending" && (
                  <>
                    <button className="edit-btn" onClick={() => editReport(report.id)}><FaEdit /> Edit</button>
                    <button className="delete-btn" onClick={() => deleteReport(report.id)}><FaTrash /> Delete</button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyReports;
