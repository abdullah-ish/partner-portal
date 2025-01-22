// DateRangePicker.js
"use client";
import React, { useState } from "react";
import { addDays, format } from "date-fns"; // Import format here
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const DateRangePicker = ({ initialDate, onDateChange, className }) => {
  const [date, setDate] = useState({
    from: initialDate || new Date(),
    to: initialDate ? addDays(initialDate, 20) : addDays(new Date(), 20),
  });

  // const handleDateChange = (newDate) => {
  //   setDate(newDate);
  //   onDateChange && onDateChange(newDate);
  // };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "w-[200px] rounded-[28px] justify-between text-left font-normal text-[#4C4C4C]",
            !date && "text-muted-foreground",
            className
          )}
        >
          {date.from ? format(date.from, "MMM dd, yyyy") : "Select Date"}
          <img src="/down-b.svg" alt="down" className="ml-2" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          // onSelect={handleDateChange}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DateRangePicker;
