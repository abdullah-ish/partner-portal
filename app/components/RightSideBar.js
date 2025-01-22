import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "../styles/RightSidebar.css";

const RightSideBar = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div
      className={`right-sidebar-container ${visible ? "visible" : "hidden"}`}
    >
      <Sidebar className="custom-sidebar">
        <div className="flex flex-col justify-center">
          <div className="sidebar-top"></div>

          <div className="h-[580px] mt-[70px] flex flex-col justify-between">
            <div className="flex flex-col justify-center items-start h-[35%]">
              <div className="w-12 h-12 bg-[#046B9F] text-white flex items-center justify-center rounded-full font-bold ml-8 z-10 mb-4">
                SA
              </div>
              <div className="flex flex-col justify-center items-start gap-2 ml-8">
                <h1>Sumair Agent</h1>
                <p>Account ID: 12345</p>
                <p className="text-green-500">Active</p>
              </div>
            </div>
            <button className="flex items-center gap-3 bg-white h-[15%]">
              <img
                src="/my_profile.svg"
                alt="NK text"
                className="w-[50px] h-[50px] object-contain bg-[#046B9F] ml-8"
              />
              <p>My Profile</p>
            </button>
            <div className="h-[35%] flex flex-col justify-end items-start">
              <div className="flex flex-col justify-end items-start  gap-2 ml-8 mb-8">
                <button>About us</button>
                <button>Privacy policy</button>
                <button>Terms of services</button>
              </div>
            </div>
            <button className="flex items-center gap-3 bg-white h-[15%]">
              <img
                src="/log_out.svg"
                alt="NK text"
                className="w-[50px] h-[50px] object-contain bg-[#046B9F] ml-8"
              />
              <p>Logout</p>
            </button>
          </div>
          <p className="text-center text-sm mt-10">NanoKard v1.0.3</p>
        </div>
      </Sidebar>
    </div>
  );
};

export default RightSideBar;
