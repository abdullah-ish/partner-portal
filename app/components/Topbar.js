import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const Topbar = ({ toggleSidebar, toggleNotificationBar }) => {
  return (
    <div className="w-full h-20 bg-white flex justify-end items-center">
      <button>
        <IoIosNotificationsOutline
          onClick={toggleNotificationBar}
          size={35}
          className="mr-8"
        />
      </button>

      {/* SA button to toggle the right sidebar */}
      <button
        onClick={toggleSidebar}
        className="w-12 h-12 bg-[#046B9F] text-white flex items-center justify-center rounded-full mr-12 font-bold"
      >
        SA
      </button>
    </div>
  );
};

export default Topbar;
