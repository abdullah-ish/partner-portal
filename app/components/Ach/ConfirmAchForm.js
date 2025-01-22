import React from "react";

const ConfirmAchForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="black-text-lg text-xl">Confirm Your Information</p>
      <div className="flex h-[400px] gap-4">
        <div className=" w-full">
          <div className="bg-[#D8D8D833] p-4">
            <p className="gray-text-md">Account</p>
            <p className="gray-text-lg">Sumair Agent</p>
          </div>
          <div className=" p-4">
            <p className="gray-text-md">Bank Account</p>
            <p className="gray-text-lg">****6789</p>
          </div>
          <div className="bg-[#D8D8D833] p-4">
            <p className="gray-text-md">Description</p>
            <p className="gray-text-lg">ewreww</p>
          </div>
        </div>
        <div className=" w-full bg-white rounded-lg shadow-md p-4">
          <p className="black-text-lg text-2xl">Accounts</p>
          <div className="bg-[#D8D8D833] h-[3px] mt-2"></div>
          <div>
            <div className=" p-4 flex justify-between h-[60px] items-center">
              <p className="gray-text-sm">Available Balance</p>
              <p>$191.05</p>
            </div>
            <div className="bg-[#D8D8D833] p-4 flex justify-between h-[60px] rounded-lg items-center">
              <p className="gray-text-sm">ACH Amount</p>
              <p>$1.00</p>
            </div>
            <div className=" p-4 flex justify-between h-[60px] items-center">
              <p className="gray-text-sm">Fee</p>
              <p>$191.05</p>
            </div>
            <div className="bg-[#D8D8D833] p-4 flex justify-between h-[60px] rounded-lg items-center">
              <p className="gray-text-sm">Total Amount</p>
              <p>$1.00</p>
            </div>
            <div className="bg-[#D8D8D833] h-[3px] mt-2 mb-2"></div>
            <div className="bg-[#D8D8D833] p-4 flex justify-between h-[60px] rounded-lg items-center border-r-8 border-[#046B9F]">
              <p className="gray-text-sm">Remaining Balance</p>
              <p>$190.05</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <button className="border-2 border-[#34bcff] text-[#4c4c4c] bg-white rounded-full px-8 py-2 text-lg shadow-md">
          Back
        </button>
        <button className="text-[#4c4c4c] bg-[#34bcff] rounded-full px-8 py-2 text-lg shadow-md">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmAchForm;
