import React from "react";

const AmountDetail = ({ svgSrc, title, amount, className }) => {
  return (
    <div>
      <div className={`flex gap-10 items-center ${className}`}>
        <div className="w-[60px] h-[60px] bg-[#f1f1f1] rounded-sm justify-center items-center flex">
          <img
            src={svgSrc}
            alt={title}
            className="w-[56px] h-[56px] object-contain p-1"
          />
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-[16px] font-normal text-[#adadad]">{title}</p>
          <p className="text-[24px] font-bold text-[#707070]">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default AmountDetail;
