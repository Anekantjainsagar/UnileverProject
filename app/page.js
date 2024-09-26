"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";

const App = () => {
  const history = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  return (
    <div className="flex h-screen">
      <div className="w-5/12 p-[62px] flex flex-col items-start justify-between h-full">
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={1000}
          height={1000}
          className="w-[5vw]"
        />
        <div className="w-full">
          <h2 className="text-darkBlack text-4xl font-semibold">
            Login to continue
          </h2>{" "}
          <div className="flex flex-col my-6">
            <label
              htmlFor="email"
              className="mb-1.5 text-sm min-[1600px]:text-base"
            >
              Email
            </label>
            <input
              id="email"
              value={user?.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              type="text"
              placeholder="Enter Email"
              className="bg-transparent w-8/12 outline-none border border-gray-300 px-4 py-2 rounded-lg text-lg"
            />
          </div>
          <label htmlFor="password" className="text-sm min-[1600px]:text-base">
            Password
          </label>
          <div className="w-8/12 relative mt-1.5">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={user?.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              placeholder="Enter Password"
              className="bg-transparent w-full outline-none border border-gray-300 px-4 py-2 rounded-lg text-lg"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 text-gray-500 right-4 text-lg min-[1600px]:text-2xl cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              history.push("/dashboard");
            }}
            className="text-white bg-darkBlue mt-8 w-8/12 py-3 text-xl font-semibold rounded-lg"
          >
            Login
          </button>
        </div>
        <div className="py-10"></div>
      </div>
      <div className="w-7/12 bg-lightBlue pl-[80px] flex flex-col items-start justify-center m-5 rounded-lg overflow-hidden">
        <h1 className="text-lightGrey text-5xl font-semibold w-6/12 mb-6 leading-tight">
          Real-Time Inventory Verification Platform
        </h1>
        <Image
          src={"/dashboard.png"}
          alt="Dashboard"
          width={1000}
          height={1000}
          className="w-[100vw] object-cover object-left h-[75vh] border-l-[8px] border-t-[8px] border-b-[8px] rounded-s-lg border-[#e3e8ee]"
        />
      </div>
    </div>
  );
};

export default App;
