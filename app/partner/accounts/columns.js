"use client";

import { ColumnDef } from "@tanstack/react-table";

// This is the shape of our data.
export const columns = [
  {
    accessorKey: "ACHID",
    header: () => <div className="font-bold text-black">ACH ID</div>,
  },
  {
    accessorKey: "CreationDate",
    header: () => <div className="font-bold text-black">Creation Date</div>,
  },
  {
    accessorKey: "NameOnBankAccount",
    header: () => <div className="font-bold text-black">Name On Bank Account</div>,
  },
  {
    accessorKey: "AccountLast4",
    header: () => <div className="font-bold text-black">Account Last 4</div>,
  },
  {
    accessorKey: "ACHAmount",
    header: () => <div className="font-bold text-black">ACHAmount</div>,
    cell: ({ row }) => {
      const ACHAmount = parseFloat(row.getValue("ACHAmount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(ACHAmount)
 
      return <div className=" font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "Fee",
    header: () => <div className="font-bold text-black">Fee</div>,
    cell: ({ row }) => {
      const Fee = parseFloat(row.getValue("Fee"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(Fee)
 
      return <div className=" font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "TotalAmount",
    header: () => <div className="font-bold text-black ">TotalAmount</div>,
    cell: ({ row }) => {
      const TotalAmount = parseFloat(row.getValue("TotalAmount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(TotalAmount)
 
      return <div className=" font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "Status",
    header: () => <div className="font-bold text-black">Status</div>,
  },
];
