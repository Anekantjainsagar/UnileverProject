"use client";
import Image from "next/image";
import React, { useState } from "react";
import Topbar from "../../../Components/Topbar";
import Leftbar from "../../../Components/Leftbar";

const Dashboard = ({ params }) => {
  const [value, setValue] = useState(5);
  const { id } = params;

  return (
    <div className="flex items-start h-screen">
      <Leftbar />
      <div className="w-10/12">
        <Topbar />
        <div className="p-6 h-[90vh] bg-[#F7F7F7]">
          <div className="flex items-center justify-between">
            <h4 className="text-3xl font-semibold">Detailed Analysis </h4>{" "}
            <button className="text-white bg-darkBlue text-lg font-medium px-7 rounded-lg py-1.5">
              Save
            </button>
          </div>
          <div className="mt-4 rounded-lg h-[94%] flex flex-col justify-between bg-white border border-gray-300/30">
            <div className="h-[8%] flex items-center px-4 border-b border-b-gray-300/30">
              <div
                className="grid bg-white rounded-lg w-full px-6"
                style={{ gridTemplateColumns: "5% 22% 21% 20% 20% 12%" }}
              >
                {[
                  "S. No.",
                  "QR Code Image",
                  "QR Code Value",
                  "CPU Code",
                  "Image Path",
                  "Include in Analysis",
                ].map((e, i) => {
                  return (
                    <p key={i} className="text-lg font-medium text-center">
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="h-[90%] px-4 overflow-y-auto">
              {Array(20)
                .fill()
                ?.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className="grid border border-gray-300/30 mb-3 pl-6 pr-4 py-1 rounded-lg items-center"
                      style={{ gridTemplateColumns: "5% 22% 21% 20% 20% 12%" }}
                    >
                      <p className="text-center">{id}</p>
                      <div className="flex items-center justify-center">
                        <Image
                          src="/qr.png"
                          className="w-6/12"
                          alt="QR code"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="flex items-center justify-center">
                        <label htmlFor="qrValue" className="mr-3">
                          Value:
                        </label>
                        <input
                          type="text"
                          id="qrValue"
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder="Enter QR Code Value"
                          className="outline-none border border-gray-400 px-4 rounded-lg py-0.5 text-lg w-3/12"
                        />
                      </div>
                      <p className="text-center">A-102-102</p>
                      <p className="px-4 text-lg text-center">
                        <span className="font-medium mr-1">Path:</span>
                        /xyz/qr.png
                      </p>{" "}
                      <div class="inline-flex items-center justify-center">
                        <label class="relative flex items-center p-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={true}
                            class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none border-2 border-gray-200 rounded-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-6 before:w-6 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-200 checked:bg-darkBlue checked:before:bg-gray-800 hover:before:opacity-10"
                            id="check"
                          />
                          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
