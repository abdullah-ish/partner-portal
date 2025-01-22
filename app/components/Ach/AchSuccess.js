import React from "react";

const AchSuccess = () => {
  return (
    <div className="flex flex-col gap-8 items-center p-8">
      <p className="black-text-lg text-3xl">
        Successfully Submitted ACH to **** 6789
      </p>
      <span className="flex mt-[-10px]">
        <p className="gray-text-lg">ACH ID:</p>
        <p className="gray-text-lg">306629</p>
      </span>
      <img
        src="/success.svg"
        alt="NK Logo"
        className="w-[188px] h-[188px] object-contain"
      />
      <button className="text-[#4c4c4c] bg-[#34bcff] rounded-full px-8 py-2 text-lg shadow-md">
        OK
      </button>
    </div>
  );
};

export default AchSuccess;
