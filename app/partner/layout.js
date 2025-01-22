"use client";
import React, { useState, useRef } from "react";
import SidebarMenu from "../components/Sidebar";
import Topbar from "../components/Topbar";
import RightSideBar from "../components/RightSideBar";
import NotificationPanel from "../components/NotificationPanel";

const Partner = ({ children }) => {
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const rightSidebarRef = useRef(null);
  const notificationRef = useRef(null);

  // Function to toggle right sidebar visibility
  const toggleRightSidebar = () => {
    setRightSidebarVisible(!isRightSidebarVisible);
  };

  // Function to toggle notification panel visibility
  const toggleNotificationBar = () => {
    setNotificationVisible(!isNotificationVisible);
  };

  // Function to close right sidebar and notification panel when clicking outside
  const handleClickOutside = (event) => {
    if (
      isRightSidebarVisible &&
      rightSidebarRef.current &&
      !rightSidebarRef.current.contains(event.target)
    ) {
      setRightSidebarVisible(false);
    }
    if (
      isNotificationVisible &&
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setNotificationVisible(false);
    }
  };

  return (
    <div className="flex h-screen" onClick={handleClickOutside}>
      {/* Always Visible Sidebar */}
      <div className="fixed top-0 left-0 w-[250px] h-screen overflow-y-auto z-20">
        <SidebarMenu />
      </div>

      {/* Fixed Topbar */}
      <div className="fixed top-0 left-0 w-full z-10">
        <Topbar
          toggleSidebar={toggleRightSidebar}
          toggleNotificationBar={toggleNotificationBar}
        />
      </div>

      {/* Main Content Area */}
      <div className="mt-[60px] w-full overflow-y-auto overflow-x-hidden h-[calc(100vh-60px)] bg-[#f1f1f1]">
        {children}
      </div>

      {/* Notification Panel */}
      {isNotificationVisible && (
        <div
          ref={notificationRef}
          className="fixed top-0 right-0 w-[250px] h-screen overflow-y-auto z-20"
        >
          <NotificationPanel />
        </div>
      )}

      {/* Right Sidebar */}
      {isRightSidebarVisible && (
        <div
          ref={rightSidebarRef}
          className="fixed top-0 right-0 w-[250px] h-screen overflow-y-auto z-20"
        >
          <RightSideBar />
        </div>
      )}
    </div>
  );
};

export default Partner;
