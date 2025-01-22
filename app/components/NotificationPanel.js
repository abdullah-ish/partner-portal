import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import "../styles/NotificationPanel.css";

const NotificationPanel = () => {
  const [visible, setVisible] = useState(true);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "Test User",
      text: "System Maintenance has been completed. ",
      date: "today",
    },
    { id: 2, user: "Test User", text: "User liked your photo", date: "today" },
    {
      id: 3,
      user: "Test User",
      text: "System Maintenance has been completed. ",
      date: "yesterday",
    },
    {
      id: 1,
      user: "Test User",
      text: "System Maintenance has been completed. ",
      date: "today",
    },
    { id: 2, user: "Test User", text: "User liked your photo", date: "today" },
    {
      id: 3,
      user: "Test User",
      text: "System Maintenance has been completed. ",
      date: "yesterday",
    },
    {
      id: 4,
      user: "Test User",
      text: "System Maintenance has been completed. ",
      date: "older",
    },
    {
      id: 5,
      user: "Test User",
      text: "System Maintenance has been completed. ",
      date: "older",
    },
  ]);

  const clearAll = () => setNotifications([]);
  const markAllAsRead = () => alert("All notifications marked as read!");
  const clearNotification = (id) =>
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );

  const categorizedNotifications = {
    today: notifications.filter((notif) => notif.date === "today"),
    yesterday: notifications.filter((notif) => notif.date === "yesterday"),
    older: notifications.filter((notif) => notif.date === "older"),
  };

  return (
    <div
      className={`notification-bar-container ${visible ? "visible" : "hidden"}`}
    >
      <Sidebar className="notification-panel">
        <div className="flex flex-col justify-center">
          <div className="notification-bar-top flex items-center justify-between px-4 py-2 gap-28">
            <div className="flex items-center">
              <IoIosNotificationsOutline size={30} />
              <span className="ml-2 font-semibold">Notifications</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={clearAll}
                className="flex items-center justify-center bg-gray-700 text-white rounded-full p-2"
              >
                <RxCross2 size={10} />
              </button>
              <button
                onClick={markAllAsRead}
                className="border-2 border-[#34bcff] text-[#4c4c4c] bg-white rounded-full px-2 py-1"
              >
                Mark All as Read
              </button>
            </div>
          </div>

          <div className="flex justify-between px-4 py-2">
            <button onClick={clearAll} className="text-red-500">
              Clear All
            </button>
            <button onClick={markAllAsRead} className="text-blue-500">
              Mark All as Read
            </button>
          </div>
          <Menu>
            {["today", "yesterday", "older"].map((category) =>
              categorizedNotifications[category].length > 0 ? (
                <div key={category} className="notification-category">
                  <h3 className="category-title px-4 py-2 capitalize">
                    {category}
                  </h3>
                  {categorizedNotifications[category].map((notification) => (
                    <MenuItem
                      key={notification.id}
                      className="notification-item"
                    >
                      <div className="flex flex-col gap-3">
                        <span className="text-[#34bcff] font-semibold">
                          {notification.user}
                        </span>
                        <span className="text-[16px]">{notification.text}</span>
                        <span className="text-[14px]">{notification.date}</span>
                      </div>

                      <button
                        onClick={() => clearNotification(notification.id)}
                        className="clear-btn"
                      >
                        <FaTimes size={12} />
                      </button>
                    </MenuItem>
                  ))}
                </div>
              ) : null
            )}
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default NotificationPanel;
