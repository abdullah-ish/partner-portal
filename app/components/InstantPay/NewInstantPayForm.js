import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const NewInstantPayForm = () => {
  const instantPaySchema = z.object({
    account: z.string().nonempty({ message: "Please select an account" }),
    email: z.string().email({ message: "Invalid email address" }),
    // amount: z.number().positive({ message: "Amount must be positive" }),
    memo: z.string().optional(),
    cardHolderName: z
      .string()
      .nonempty({ message: "Card Holder Name is required" }),
    cardNumber: z
      .string()
      .length(16, { message: "Card Number must be 16 digits" })
      .regex(/^\d+$/, "Card Number must be numeric"),
    expiryDate: z
      .string()
      .regex(
        /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
        "Invalid expiry date format (MM/YY)"
      ),
    cvv: z
      .string()
      .length(3, { message: "CVV must be 3 digits" })
      .regex(/^\d+$/, "CVV must be numeric"),
    zipCode: z
      .string()
      .length(5, { message: "Zip Code must be 5 digits" })
      .regex(/^\d+$/, "Zip Code must be numeric"),
    saveCard: z.boolean().optional(),
  });

  // Initialize useForm with Zod schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(instantPaySchema),
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
              Select Account
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

        {/* Recipient Email */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Recipient Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="modal-input-field w-[50%]"
            placeholder="Enter recipient's email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Amount */}
        <div>
          <label htmlFor="amount" className="block font-semibold mb-1">
            Amount
          </label>
          <input
            type="number"
            {...register("amount")}
            className="modal-input-field w-[50%]"
            placeholder="Enter amount"
          />
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
        </div>

        {/* Memo */}
        <div>
          <label htmlFor="memo" className="block font-semibold mb-1">
            Memo
          </label>
          <textarea
            {...register("memo")}
            className="modal-memo-field"
            placeholder="Enter memo"
          ></textarea>
        </div>

        {/* Card Details Row: Card Holder Name, Card Number, Expiry Date, CVV */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <label
              htmlFor="cardHolderName"
              className="block font-semibold mb-1"
            >
              Card Holder Name
            </label>
            <input
              type="text"
              {...register("cardHolderName")}
              className="modal-input-field w-[50%]"
              placeholder="Enter card holder name"
            />
            {errors.cardHolderName && (
              <p className="text-red-500">{errors.cardHolderName.message}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 w-[60%">
            <label htmlFor="cardNumber" className="block font-semibold mb-1">
              US Debit Card Number
            </label>
            <input
              type="text"
              {...register("cardNumber")}
              className="modal-input-field w-[85%]"
              placeholder="Enter 16-digit card number"
            />
            {errors.cardNumber && (
              <p className="text-red-500">{errors.cardNumber.message}</p>
            )}
          </div>
          <div className="flex w-[40%]">
            <div className="flex-1">
              <label htmlFor="expiryDate" className="block font-semibold mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                {...register("expiryDate")}
                className="modal-input-field w-[80%]"
                placeholder="MM/YY"
              />
              {errors.expiryDate && (
                <p className="text-red-500">{errors.expiryDate.message}</p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block font-semibold mb-1">
                CVV
              </label>
              <input
                type="text"
                {...register("cvv")}
                className="modal-input-field w-[80%]"
                placeholder="Enter 3-digit CVV"
              />
              {errors.cvv && (
                <p className="text-red-500">{errors.cvv.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Zip Code and Save Card Checkbox */}
        <div className="flex items-center gap-4">
          <div className="flex-1 w-[60%]">
            <label htmlFor="zipCode" className="block font-semibold mb-1">
              Zip Code
            </label>
            <input
              type="text"
              {...register("zipCode")}
              className="modal-input-field w-[86%]"
              placeholder="Enter zip code"
            />
            {errors.zipCode && (
              <p className="text-red-500">{errors.zipCode.message}</p>
            )}
          </div>
          <div className="flex items-center w-[40%]">
            <input
              type="checkbox"
              {...register("saveCard")}
              className="mr-2 size-4"
            />
            <label htmlFor="saveCard" className="font-semibold">
              Save card for future use
            </label>
          </div>
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

export default NewInstantPayForm;
