import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const NewAchForm = () => {
  const achPaySchema = z.object({
    account: z.string().nonempty({ message: "Please select an account" }),
    // amount: z.number().positive({ message: "Amount must be positive" }),
    memo: z.string().optional(),
  });

  // Initialize useForm with Zod schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(achPaySchema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Perform the API call or further processing
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Select Account */}
        <div className="flex justify-between items-center gap-8">
          <div className="w-[55%] ml-[-10px]">
            <label htmlFor="account" className="block font-semibold mb-1">
              Send from Account
            </label>
            <select
              {...register("account")}
              className="modal-input-field w-[96%]"
            >
              <option value="">Choose an account</option>
              <option value="Account1">Account 1</option>
              <option value="Account2">Account 2</option>
            </select>
            {errors.account && (
              <p className="text-red-500">{errors.account.message}</p>
            )}
          </div>
          <div className="w-[45%]">
            <div className="flex justify-between items-center shadow-md rounded-md mb-[-5px] border-r-4 border-[#046B9F]">
              <p>Balance</p>
              <p className="font-bold">$191.20</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 justify-between">
          <div className="w-[50%] ml-[-10px]">
            <label htmlFor="account" className="block font-semibold mb-1">
              Send from Account
            </label>
            <select
              {...register("account")}
              className="modal-input-field w-[100%]"
            >
              <option value="">Choose an account</option>
              <option value="Account1">Account 1</option>
              <option value="Account2">Account 2</option>
            </select>
            {errors.account && (
              <p className="text-red-500">{errors.account.message}</p>
            )}
          </div>

          <div className="w-[50%] mr-[-10px]">
            <label htmlFor="amount" className="block font-semibold mb-1">
              Enter Amount
            </label>
            <input
              type="number"
              {...register("amount")}
              className="modal-input-field w-[100%]"
              placeholder="Enter amount"
            />
            {errors.amount && (
              <p className="text-red-500">{errors.amount.message}</p>
            )}
          </div>
        </div>

        {/* Memo */}
        <div>
          <label htmlFor="memo" className="block font-semibold mb-1">
            Enter Memo
          </label>
          <textarea
            {...register("memo")}
            className="modal-memo-field"
            placeholder="Enter memo for New ACH"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button type="submit" className="modal-submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAchForm;
