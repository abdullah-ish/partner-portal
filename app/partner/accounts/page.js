"use client";

import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData() {
  // Fetch data from your API here.
  return [
    {
      ACHID: "135",
      CreationDate: "04-23-2024 04:32:25 AM",
      NameOnBankAccount: "hjgfjhfvjh",
      AccountLast4: "6789",
      ACHAmount: 4,
      Fee: 5.1,
      TotalAmount: 7.1,
      Status: "Pending",
    },
    {
      ACHID: "135",
      CreationDate: "04-23-2024 04:32:25 AM",
      NameOnBankAccount: "hjgfjhfvjh",
      AccountLast4: "6789",
      ACHAmount: 3,
      Fee: 5.1,
      TotalAmount: 7.1,
      Status: "Pending",
    },
    {
      ACHID: "135",
      CreationDate: "04-23-2024 04:32:25 AM",
      NameOnBankAccount: "hjgfjhfvjh",
      AccountLast4: "6789",
      ACHAmount: 3,
      Fee: 5.1,
      TotalAmount: 7.1,
      Status: "Pending",
    },
    {
      ACHID: "135",
      CreationDate: "04-23-2024 04:32:25 AM",
      NameOnBankAccount: "hjgfjhfvjh",
      AccountLast4: "6789",
      ACHAmount: 3,
      Fee: 5.1,
      TotalAmount: 7.1,
      Status: "Pending",
    },
    // You can add more dummy data here or fetch from an API
  ];
}

const Accounts = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("ACH");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-24 container mx-auto">
      <div>
        <h1 className="text-[#4c4c4c] text-4xl">Account Overview</h1>
      </div>
      <div className="flex h-[112px] p-6 bg-white my-12 rounded-lg shadow-md ">
        <div className="w-2 h-[70px] bg-[#34BCFF] rounded-l-lg"></div>
        <div className="w-10/12 bg-[#f1f1f1] h-[70px]">
          <div className="text-base font-bold text-[#4c4c4c] mt-5 ml-5">
            <span>Total Funds in Account</span>
            <a
              className="underline text-xs font-bold text-[#046B9F] ml-5 my-10"
              href=""
            >
              view more
            </a>
          </div>
        </div>
        <div className="w-22 h-[70px] bg-[#34BCFF] rounded-r-lg">
          <p className="m-5 font-bold text-[#4c4c4c]">$604.91</p>
        </div>
        <div className="w-2/12 flex justify-center items-center">
          <button className="w-[165px] h-[48px] rounded-[24px] shadow-md border-2 border-[#34BCFF] bg-white text-[16px] font-semibold leading-[1.5] tracking-[0.26px] text-[#4c4c4c] mx-[12px] ">
            Withdraw
          </button>
        </div>
      </div>
      <div className="h-full p-6 bg-white my-12 rounded-lg shadow-md">
        <div className="w-full">
          <h1 className="text-[#4c4c4c] text-4xl">Withdrawals</h1>
          <hr className="border-t-4 border-[#f1f1f1] my-8" />
        </div>

        <div className="flex space-x-4">
          <button
            className={`ml-3 font-bold ${
              activeTab === "ACH"
                ? "text-[#4c4c4c] border-b-4 border-[#046B9F]"
                : "text-[#4c4c4c]"
            }`}
            onClick={() => handleTabClick("ACH")}
          >
            ACH
          </button>
          <button
            className={`ml-3 font-bold ${
              activeTab === "Instant Pay"
                ? "text-[#4c4c4c] border-b-4 border-[#046B9F]"
                : "text-[#4c4c4c]"
            }`}
            onClick={() => handleTabClick("Instant Pay")}
          >
            Instant Pay
          </button>
        </div>

        <hr className="border-t-4 border-gray-300 my-4" />

        <div className="container mx-auto py-10">
          {activeTab === "ACH" && <DataTable columns={columns} data={data} />}
          {activeTab === "Instant Pay" && (
            <DataTable columns={columns} data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
