import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaFilter, FaSort } from "react-icons/fa";
import "./UpvotedIssues.css";

const UpvotedIssues = () => {
  const [upvotedIssues, setUpvotedIssues] = useState([]);
  const [sortOrder, setSortOrder] = useState("mostUpvoted");
  const [filterCategory, setFilterCategory] = useState("");

  // Simulated fetch function (Replace with API call)
  useEffect(() => {
    const storedIssues = [
      {
        id: 1,
        title: "Pothole on Main Street",
        description: "Large pothole causing traffic issues.",
        category: "Road Damage",
        status: "Open",
        location: "Main Street",
        upvotes: 15,
      },
      {
        id: 2,
        title: "Broken Streetlight",
        description: "Streetlight not working for weeks.",
        category: "Electricity Issue",
        status: "In Progress",
        location: "Park Avenue",
        upvotes: 20,
      },
    ];
    setUpvotedIssues(storedIssues);
  }, []);

  // Remove upvote (Simulating API Update)
  const handleRemoveUpvote = (id) => {
    setUpvotedIssues(upvotedIssues.filter(issue => issue.id !== id));
  };

  // Sorting function
  const sortedIssues = [...upvotedIssues].sort((a, b) => {
    if (sortOrder === "mostUpvoted") return b.upvotes - a.upvotes;
    if (sortOrder === "newest") return b.id - a.id;
    if (sortOrder === "oldest") return a.id - b.id;
    return 0;
  });

  // Filtering function
  const filteredIssues = filterCategory
    ? sortedIssues.filter(issue => issue.category === filterCategory)
    : sortedIssues;

  return (
    <div className="upvoted-container">
      <h2>👍 My Upvoted Issues</h2>

      {/* Sorting & Filtering */}
      <div className="controls">
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="mostUpvoted">Sort by: Most Upvoted</option>
          <option value="newest">Sort by: Newest</option>
          <option value="oldest">Sort by: Oldest</option>
        </select>

        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">Filter by: All Categories</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Electricity Issue">Electricity Issue</option>
          <option value="Water Supply">Water Supply</option>
        </select>
      </div>

      {/* Issue List */}
      <div className="issue-list">
        {filteredIssues.length > 0 ? (
          filteredIssues.map((issue) => (
            <div key={issue.id} className="issue-card">
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
              <p><strong>Category:</strong> {issue.category}</p>
              <p><strong>Location:</strong> {issue.location}</p>
              <p><strong>Status:</strong> <span className={`status ${issue.status.toLowerCase()}`}>{issue.status}</span></p>
              <p><strong>Upvotes:</strong> {issue.upvotes}</p>
              <button className="remove-btn" onClick={() => handleRemoveUpvote(issue.id)}>
                <FaThumbsUp /> Remove Upvote
              </button>
            </div>
          ))
        ) : (
          <p>No upvoted issues found.</p>
        )}
      </div>
    </div>
  );
};

export default UpvotedIssues;
