import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "../styles/Sidebar.css";
import { useRouter } from "next/navigation";

const SidebarMenu = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sidebar
      className={`custom-sidebar ${collapsed ? "collapsed" : ""}`}
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <div className="sidebar-header">
        <button onClick={() => router.push("/partner/accounts")}>
          {collapsed ? (
            <img
              src="/NanoKard_badge.svg"
              alt="NK text"
              className="w-[35px] h-[35px] object-contain"
            />
          ) : (
            <div className="flex items-center ml-4">
              <img
                src="/QCLogo.png"
                alt="NK text"
                className="w-[60%] h-full object-contain"
              />
            </div>
          )}
        </button>
      </div>
      <Menu>
        <MenuItem
          icon={
            <img
              src="/Accounts-b.svg"
              alt="NK text"
              className="w-full h-full object-contain"
            />
          }
          onClick={() => router.push("/partner/accounts")}
        >
          Accounts
        </MenuItem>
        <SubMenu
          label="Withdraw"
          icon={
            <img
              src="/Withdraw-b.svg"
              alt="NK text"
              className="w-full h-full object-contain"
            />
          }
        >
          <MenuItem
            icon={""}
            onClick={() => router.push("/partner/instant_ach")}
          >
            ACH
          </MenuItem>
          <MenuItem
            icon={""}
            onClick={() => router.push("/partner/instant_pay")}
          >
            Instant Pay
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={
            <img
              src="/Exports-b.svg"
              alt="NK text"
              className="w-full h-full object-contain"
            />
          }
          onClick={() => router.push("/partner/exports")}
        >
          Export
        </MenuItem>
        <SubMenu
          label="Business Settings"
          icon={
            <img
              src="/Business-Settings-b.svg"
              alt="NK text"
              className="w-full h-full object-contain"
            />
          }
        >
          <MenuItem icon onClick={() => router.push("/partner/fee_structure")}>
            Fee Structure
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={
            <img
              src="/GetHelp-b.svg"
              alt="NK text"
              className="w-full h-full object-contain"
            />
          }
          onClick={() => router.push("/partner/help")}
        >
          Get Help
        </MenuItem>
      </Menu>
      <div className="sidebar-bottom"></div>
    </Sidebar>
  );
};

export default SidebarMenu;
