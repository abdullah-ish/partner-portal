"use client";

import { ColumnDef } from "@tanstack/react-table";

// This is the shape of our data.
export const columns = [
  {
    accessorKey: "InstantPayID",
    header: () => <div className="font-bold text-black">Instant Pay ID</div>,
  },
  {
    accessorKey: "CreationDate",
    header: () => <div className="font-bold text-black">Creation Date	</div>,
  },
  {
    accessorKey: "NameonCard",
    header: () => <div className="font-bold text-black">Name on Card</div>,
  },
  {
    accessorKey: "Email",
    header: () => <div className="font-bold text-black">Email</div>,
  },
  {
    accessorKey: "Last4",
    header: () => <div className="font-bold text-black">Last 4</div>,
  },
  {
    accessorKey: "InstantPayAmount",
    header: () => <div className="font-bold text-black">Instant Pay Amount</div>,
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
