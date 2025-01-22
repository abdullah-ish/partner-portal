import React from "react";

const Help = () => {
  return (
    <div className="w-full h-auto bg-[#f1f1f1]">
      <div className="pl-32 pt-16 flex flex-col gap-4 ">
        <p className="text-[36px] font-medium text-[#4c4c4c]">Get Help</p>
        <p className="text-[20px] font-medium text-[#4c4c4c]">Contact Info</p>
        <div className="w-[584px] h-[400px] bg-white rounded-lg shadow-md gap-12 pl-8">
          <div className="w-full h-[80px]">
            <img
              src="/QCLogo.png"
              alt="NK text"
              className="w-[30%] h-full object-contain"
            />
          </div>
          <div className="w-full h-[80px] gap-8 flex items-center">
            <img
              src="/envelop.svg"
              alt="NK text"
              className="w-[45px] h-[45px] object-contain"
            />
            <div className="flex flex-col justify-center">
              <p>Email</p>
              <p className="font-semibold">support@nanokard.com</p>
            </div>
            <button>
              <img
                src="/copyblue.svg"
                alt="NK text"
                className="w-[18px] h-[18px] object-contain"
              />
            </button>
          </div>
          <div className="w-full h-[80px] gap-8 flex items-center">
            <img
              src="/landline.svg"
              alt="NK text"
              className="w-[45px] h-[45px] object-contain"
            />
            <div className="flex flex-col justify-center">
              <p>Customer Support</p>
              <p className="font-semibold">1-877-371-6122</p>
            </div>
            <button>
              <img
                src="/copyblue.svg"
                alt="NK text"
                className="w-[18px] h-[18px] object-contain"
              />
            </button>
          </div>
          <div className="w-full h-[80px] gap-8 flex items-center">
            <img
              src="/clock.svg"
              alt="NK text"
              className="w-[45px] h-[45px] object-contain"
            />
            <div className="flex flex-col justify-center">
              <p>Available from</p>
              <p className="font-semibold w-[325px]">
                Monday - Friday 6am - 8pm PT, Saturday - Sunday 9am - 5pm PT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
