import React, { useState } from "react";
import { FaBell, FaCheckCircle, FaTimesCircle, FaTrash } from "react-icons/fa";
import "./Notifications.css";

const Notifications = () => {
  // Sample notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "Issue Update",
      message: "Your reported issue 'Pothole on Main St' has been resolved! 🎉",
      isRead: false,
      link: "/myreports",
    },
    {
      id: 2,
      type: "New Volunteer Task",
      message: "You've been assigned to fix 'Streetlight Outage' issue. ⚡",
      isRead: false,
      link: "/volunteertasks",
    },
    {
      id: 3,
      type: "Community Reply",
      message: "John replied to your discussion: 'Improving waste management'. 🗨️",
      isRead: true,
      link: "/communitydiscussion",
    },
  ]);

  // Mark as read
  const markAsRead = (id) => {
    setNotifications(notifications.map((n) =>
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  // Delete a notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  // Clear all notifications
  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="notifications-container">
      <h2><FaBell /> Notifications</h2>
      <div className="notification-controls">
        <button onClick={clearAll} className="clear-btn">
          <FaTrash /> Clear All
        </button>
      </div>
      
      {notifications.length === 0 ? (
        <p className="no-notifications">No new notifications! 🎉</p>
      ) : (
        <ul className="notifications-list">
          {notifications.map((notification) => (
            <li key={notification.id} className={`notification-item ${notification.isRead ? "read" : ""}`}>
              <p onClick={() => markAsRead(notification.id)}>
                <strong>{notification.type}:</strong> {notification.message}
              </p>
              <div className="notification-actions">
                <button className="mark-read" onClick={() => markAsRead(notification.id)}>
                  <FaCheckCircle /> Mark as Read
                </button>
                <button className="delete-btn" onClick={() => deleteNotification(notification.id)}>
                  <FaTimesCircle /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
