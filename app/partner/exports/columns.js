"use client";

import { ColumnDef } from "@tanstack/react-table";

// This is the shape of our data.
export const columns = [
  {
    accessorKey: "ID",
    header: () => <div className="font-bold text-black">ID</div>,
  },
  {
    accessorKey: "ReportName",
    header: () => <div className="font-bold text-black">Report Name</div>,
  },
  {
    accessorKey: "StartDate",
    header: () => <div className="font-bold text-black">Start Date</div>,
  },
  {
    accessorKey: "EndDate",
    header: () => <div className="font-bold text-black">End Date</div>,
  },
  {
    accessorKey: "CreatedDate",
    header: () => <div className="font-bold text-black">Created Date</div>,
  },
  {
    accessorKey: "Fee",
    header: () => <div className="font-bold text-black">Fee</div>,
  },
  {
    accessorKey: "Status",
    header: () => <div className="font-bold text-black">Status</div>,
  },
];
