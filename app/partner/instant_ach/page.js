"use client";
import AmountDetail from "@/app/components/AmountDetail";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Input } from "@/components/ui/input";
import PageFilter from "../../../components/ui/PageFilter";
import Pagination from "../../../components/ui/Pagination";
import DateRangePicker from "../../../components/ui/DateRangePicker";
import Modal from "@/app/components/Modal";
import "../../styles/Modal.css";
import NewAchForm from "@/app/components/Ach/NewAchForm";

const ACH = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  async function getData() {
    return [
      {
        ACHID: "91",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Sohail",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Pending",
      },
      {
        ACHID: "92",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Saad",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Approved",
      },
      {
        ACHID: "93",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Ali",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Decline",
      },
      {
        ACHID: "94",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Sumair",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Cancel",
      },
      {
        ACHID: "91",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Sohail",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Pending",
      },
      {
        ACHID: "92",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Saad",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Approved",
      },
      {
        ACHID: "93",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Ali",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Decline",
      },
      {
        ACHID: "94",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Sumair",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Cancel",
      },
      {
        ACHID: "91",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Sohail",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Pending",
      },
      {
        ACHID: "92",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Saad",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Approved",
      },
      {
        ACHID: "93",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Ali",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Decline",
      },
      {
        ACHID: "94",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Sumair",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Cancel",
      },
      {
        ACHID: "91",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Sohail",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Pending",
      },
      {
        ACHID: "92",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Saad",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Approved",
      },
      {
        ACHID: "93",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Ali",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Decline",
      },
      {
        ACHID: "94",
        CreationDate: "06-01-2024",
        NameonBankAccount: "Sumair",
        AccountLast4: "1111",
        ACHAmount: "15.1",
        Fee: 5.1,
        TotalAmount: 5.9,
        Status: "Cancel",
      },
    ];
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.NameonBankAccount.toLowerCase().includes(
        filterValue.toLowerCase()
      ) ||
      item.ACHID.toString().includes(filterValue) ||
      item.Status.toLowerCase().includes(filterValue.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    currentPage * rowsPerPage,
    (currentPage + 1) * rowsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDateChange = (newDate) => {
    // Use the new date value as needed
    console.log("Selected Date Range:", newDate);
  };

  return (
    <div className="pl-44 pr-16 pt-24 pb-28 w-full  flex flex-col gap-6 ">
      <div className="w-full flex justify-between items-center">
        <p className="text-[36px] font-semibold text-[#4c4c4c]">ACH</p>
        <div className="flex gap-4">
          <button className="border-2 border-[#34bcff] text-[#4c4c4c] bg-white rounded-full px-8 py-2 text-lg shadow-md">
            Activity Log
          </button>
          <button className="border-2 border-[#34bcff] text-[#4c4c4c] bg-white rounded-full px-8 py-2 text-lg shadow-md">
            Export
          </button>
          <button
            onClick={handleOpenModal}
            className="text-[#4c4c4c] bg-[#34bcff] rounded-full px-8 py-2 text-lg shadow-md"
          >
            New ACH
          </button>
        </div>
      </div>

      <div className="w-full h-[40%] bg-white rounded-lg flex flex-col justify-center shadow-md">
        <div className="flex justify-between">
          <div className="w-[80%]">
            <div className="flex justify-between items-center">
              <AmountDetail
                svgSrc="/earnings.svg"
                title="Total Paid"
                amount="$0.00"
              />
              <AmountDetail
                svgSrc="/processingfee.svg"
                title="Total Pending"
                amount="$0.00"
              />
              <AmountDetail
                svgSrc="/in_process.svg"
                title="Total In Progress"
                amount="$0.00"
              />
            </div>
            <div className="flex justify-between items-center">
              <AmountDetail
                svgSrc="/paid_wire.svg"
                title="Total Paid by Wire"
                amount="$0.00"
              />
              <AmountDetail
                svgSrc="/expensis.svg"
                title="Total Cancelled"
                amount="$0.00"
                className="ml-[-48px]"
              />
              <AmountDetail
                svgSrc="/money.svg"
                title="Total Failed"
                amount="$0.00"
                className="mr-[39px]"
              />
            </div>
            <div className="flex justify-between items-center">
              <AmountDetail
                svgSrc="/processingfee.svg"
                title="Total Under Review"
                amount="$0.00"
              />
            </div>
          </div>

          {/* Date Range Picker component */}
          <DateRangePicker
            initialDate={new Date(2022, 0, 20)}
            onDateChange={handleDateChange}
            className="mt-3 mr-5"
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-6/12">
          <PageFilter
            onRowsPerPageChange={(value) => {
              setRowsPerPage(value);
              setCurrentPage(0); // Reset to the first page when rows per page changes
            }}
            placeholder={String(rowsPerPage)}
          />
        </div>
        <div className="w-6/12 flex items-center py-4 justify-end">
          <div className="relative w-[280px]">
            <img
              src="/Search.svg"
              alt="Search"
              className="absolute top-1/2 transform -translate-y-1/2"
            />
            <Input
              placeholder="Search"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="w-full h-[48px] rounded-[28px] border-2 border-[#efefef] bg-white pl-12"
            />
          </div>
        </div>
      </div>
      <div className="h-full p-6 bg-white rounded-lg shadow-md">
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={paginatedData} />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {/* Modal component with a custom title */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="New ACH">
        <NewAchForm />
      </Modal>
    </div>
  );
};

export default ACH;
