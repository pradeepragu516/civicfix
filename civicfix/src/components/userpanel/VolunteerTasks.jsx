import React, { useState, useEffect } from "react";
import "./VolunteerTasks.css";

const VolunteerTasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fix Broken Streetlight",
      description: "A streetlight near the main square is not working.",
      location: "Main Square, City Center",
      status: "Not Finished",
    },
    {
      id: 2,
      title: "Clean Up Garbage",
      description: "Overflowing garbage bins need cleaning.",
      location: "Park Road, Sector 5",
      status: "Not Finished",
    },
  ]);

  const handleStatusUpdate = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="volunteer-tasks-container">
      <h2>📌 Volunteer Tasks</h2>
      <p>Tasks assigned to you. Update the status once completed.</p>
      
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>📍 Location:</strong> {task.location}</p>
            <p><strong>📝 Status:</strong> {task.status}</p>

            <button
              className={`status-btn ${task.status === "Finished" ? "completed" : ""}`}
              onClick={() => handleStatusUpdate(task.id, "Finished")}
            >
              ✅ Mark as Finished
            </button>

            <button
              className={`status-btn not-finished-btn ${task.status === "Not Finished" ? "active" : ""}`}
              onClick={() => handleStatusUpdate(task.id, "Not Finished")}
            >
              ❌ Mark as Not Finished
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerTasks;
