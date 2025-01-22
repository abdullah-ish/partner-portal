import React from "react";

const FeeStructure = () => {
  const feeStructureData = [
    {
      fee_type: "Tuition Fees",
      records: [
        { fee_title: "First Term", fee_price: 1000 },
        { fee_title: "Second Term", fee_price: 1500 },
      ],
    },
    {
      fee_type: "Hostel Fees",
      records: [
        { fee_title: "Accommodation", fee_price: 2000 },
        { fee_title: "Food", fee_price: 800 },
      ],
    },
    {
      fee_type: "Hostel Fees",
      records: [
        { fee_title: "Accommodation", fee_price: 2000 },
        { fee_title: "Food", fee_price: 800 },
      ],
    },
    {
      fee_type: "Hostel Fees",
      records: [
        { fee_title: "Accommodation", fee_price: 2000 },
        { fee_title: "Food", fee_price: 800 },
      ],
    },
    {
      fee_type: "Hostel Fees",
      records: [
        { fee_title: "Accommodation", fee_price: 2000 },
        { fee_title: "Food", fee_price: 800 },
      ],
    },
  ];

  return (
    <div className="w-full h-auto bg-[#f1f1f1]">
      <div className="pl-32 pt-16 pb-16 flex flex-col gap-8">
        <p className="text-[36px] font-medium text-[#4c4c4c]">Fee Structure</p>
        <div className="w-[700px] h-[650px] bg-white rounded-lg shadow-md gap-12 pl-8 overflow-y-scroll">
          {feeStructureData.map((feeTable, index) => (
            <div key={index} className="mb-8 mt-8 mr-8">
              {/* Table Name with Gray Underline */}
              <h2
                className="text-[24px] font-semibold pb-2 border-b-2 border-gray-300"
                style={{ color: "#4c4c4c" }}
              >
                {feeTable.fee_type}
              </h2>

              {/* Table without borders and alternating row colors */}
              <table className="min-w-full bg-white">
                <tbody>
                  {feeTable.records.map((record, idx) => (
                    <tr
                      key={idx}
                      className={`${
                        idx % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"
                      }`}
                    >
                      <td className="px-4 py-2">{record.fee_title}</td>
                      <td className="px-4 py-2 text-right">
                        {record.fee_price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <p className="text-[13px] font-medium text-[#4c4c4c]">
          *Privacy Fee is a card surcharge passed to the customer. The Merchant
          keeps 100% of this to offset their fees.
        </p>
        <p className="text-[13px] font-medium text-[#4c4c4c]">
          **Withdrawal fees include: ACH, Instant Pay and Gift Card.
        </p>
      </div>
    </div>
  );
};

export default FeeStructure;
