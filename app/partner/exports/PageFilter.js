// PageFilter.js

import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PageFilter = ({ rowsPerPage, onRowsPerPageChange, placeholder = "10" }) => {
  return (
    <div className="flex items-center py-4 z-20">
      <span>Show</span>
      <Select onValueChange={onRowsPerPageChange}>
        <SelectTrigger className="mx-3">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="25">25</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectContent>
      </Select>
      <span>Entries</span>
    </div>
  );
};

export default PageFilter;
