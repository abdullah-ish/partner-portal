"use client";
import React, { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Input } from "@/components/ui/input";
import PageFilter from "../../../components/ui/PageFilter";
import Pagination from "../../../components/ui/Pagination";

async function getData() {
  return [
    { ID: "92", ReportName: "Transactions", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Pending" },
    { ID: "93", ReportName: "Test", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Complete" },
    { ID: "94", ReportName: "Out", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Approved" },
    { ID: "95", ReportName: "Not", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Declined" },
    { ID: "92", ReportName: "Transactions", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Pending" },
    { ID: "93", ReportName: "Test", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Complete" },
    { ID: "94", ReportName: "Out", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Approved" },
    { ID: "95", ReportName: "Not", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Declined" },
    { ID: "92", ReportName: "Transactions", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Pending" },
    { ID: "93", ReportName: "Test", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Complete" },
    { ID: "94", ReportName: "Out", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Approved" },
    { ID: "95", ReportName: "Not", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Declined" },
    { ID: "92", ReportName: "Transactions", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Pending" },
    { ID: "93", ReportName: "Test", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Complete" },
    { ID: "94", ReportName: "Out", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Approved" },
    { ID: "95", ReportName: "Not", StartDate: "06-01-2024", EndDate: "06-27-2024", CreatedDate: "06-27-2024 06:05:03 AM", Fee: 5.10, Status: "Declined" },
  ];
}

const Exports = () => {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.ReportName.toLowerCase().includes(filterValue.toLowerCase()) || 
    item.ID.toString().includes(filterValue) || 
    item.Status.toLowerCase().includes(filterValue.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-24 container mx-auto">
      <div>
        <h1 className="text-[#4c4c4c] text-4xl">Exported Files</h1>
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
            <img src="/Search.svg" alt="Search" className="absolute top-1/2 transform -translate-y-1/2" />
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
    </div>
  );
};

export default Exports;
