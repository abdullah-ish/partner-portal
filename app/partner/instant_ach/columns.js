"use client";

import { ColumnDef } from "@tanstack/react-table";

// This is the shape of our data.
export const columns = [
  {
    accessorKey: "ACHID",
    header: () => <div className="font-bold text-black">Instant Pay ID</div>,
  },
  {
    accessorKey: "CreationDate",
    header: () => <div className="font-bold text-black">Creation Date	</div>,
  },
  {
    accessorKey: "NameonBankAccount",
    header: () => <div className="font-bold text-black">Name on Bank Account</div>,
  },
  {
    accessorKey: "AccountLast4",
    header: () => <div className="font-bold text-black">Account Last 4</div>,
  },
  {
    accessorKey: "ACHAmount",
    header: () => <div className="font-bold text-black">ACH Amount</div>,
  },
  {
    accessorKey: "Fee",
    header: () => <div className="font-bold text-black">Fee</div>,
  },
  {
    accessorKey: "TotalAmount",
    header: () => <div className="font-bold text-black">Total Amount</div>,
  },
  {
    accessorKey: "Status",
    header: () => <div className="font-bold text-black">Status</div>,
  },
];
