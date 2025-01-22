"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

// Define Zod schema for validation
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const Login = () => {
  const router = useRouter();

  // Initialize useForm with zod validation schema, trigger validation onBlur
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger, // Use trigger to manually validate fields
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur", // Validation mode set to onBlur
  });

  // Handle form submission
  const onSubmit = async (data) => {
    console.log("Form submitted:", data);

    try {
      const response = await fetch("http://localhost:3000/login_verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "login",
          email: data.email,
          password: data.password,
        }),
      });

      // Check if the response is OK (status 200)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse response only if it exists
      const result = await response.json();
      console.log("API Response:", result);
      if (result.user === "admin") {
        router.push("/partner");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="w-full h-[1080px] absolute gap-12 flex flex-col items-center justify-center bg-gradient-to-b from-[#0C1E30] to-[#046B9F]">
      <div className="w-[218.7px] h-[108.9px] gap-[14.4px] mt-[42px] flex flex-col items-center justify-center">
        <img
          src="/nk-logo.svg"
          alt="NK Logo"
          className="w-[63px] h-[63px] object-contain"
        />
        <img
          src="/nk-text.svg"
          alt="NK text"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-[579px] h-[657px] gap-[48px] flex flex-col items-center justify-center bg-[rgba(12,30,48,0.4)] rounded-[10px]">
        <div className="w-[451px] h-[341px] gap-[36px] flex flex-col items-center justify-center ">
          <p className="pg-text">Log in to your NanoKard account.</p>
          <div className="w-[451px] h-[183px] gap-[18px] flex flex-col items-center">
            <form className="flex flex-col w-full">
              <div className="w-[451px] h-[69px] gap-[8px] mb-4">
                <label htmlFor="email" className="bold-text text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email")}
                  onBlur={() => trigger("email")} // Trigger validation onBlur
                  className="input-field"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="w-[451px] h-[96px] gap-[8px] mb-4 mt-2">
                <label htmlFor="password" className="bold-text text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  {...register("password")}
                  className="input-field"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                <button className="text-btn mt-2">Forget Password?</button>
              </div>
            </form>
          </div>
          <div className="w-[234px] h-[59px] ml-[-210px] bg-white flex items-center justify-start">
            <input
              type="checkbox"
              id="not-a-robot"
              className="mr-2 ml-2 w-[20px] h-[20px]"
            />
            <label htmlFor="not-a-robot" className="text-black">
              I'm not a robot
            </label>

            <img
              src="/recaptcha-icon.svg"
              alt="recaptcha icon"
              className="w-[40px] h-[40px] object-contain ml-8"
            />
          </div>
        </div>
        <div className="w-[451px] h-[140px] gap-[64px] flex flex-col items-center justify-center">
          {/* Updated button to trigger form submission */}
          <button
            className="blue-btn-lg"
            onClick={handleSubmit(onSubmit)} // Use react-hook-form handleSubmit
          >
            Log In
          </button>
          <p className="bold-text">
            Don’t have an account?{" "}
            <button className="link-text hover:underline">Contact Us</button>
          </p>
        </div>
      </div>

      <div className="w-[1069px] h-[22px] gap-[13px] text-center mt-[42px]">
        <p className="footer-text">
          © 2024 NanoKard, Inc. All rights reserved. Privacy Policy | Terms of
          Service
        </p>
      </div>
    </div>
  );
};

export default Login;
