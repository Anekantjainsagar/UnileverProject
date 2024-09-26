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
          <h4 className="text-3xl font-semibold">Detailed Analysis </h4>
          <div className="mt-4 rounded-lg h-[94%] flex flex-col justify-between bg-white border border-gray-300/30">
            <div className="h-[8%] flex items-center px-4 border-b border-b-gray-300/30">
              <div
                className="grid bg-white rounded-lg w-full px-6"
                style={{ gridTemplateColumns: "7% 31% 31% 31%" }}
              >
                {[
                  "S. No.",
                  "QR Code Image",
                  "QR Code Path",
                  "QR Code Value",
                ].map((e, i) => {
                  return (
                    <p key={i} className="text-lg font-medium">
                      {e}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="h-[80%] px-6 overflow-y-auto">
              {Array(20)
                .fill()
                ?.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className="grid border border-gray-300/30 mb-3 px-4 py-1 rounded-lg items-center"
                      style={{ gridTemplateColumns: "7% 31% 31% 31%" }}
                    >
                      <p>{id}</p>
                      <Image
                        src="/qr.png"
                        className="w-5/12"
                        alt="QR code"
                        width={1000}
                        height={1000}
                      />
                      <p className="px-4 text-lg">
                        <span className="font-medium mr-1">Path:</span>
                        /xyz/qr.png
                      </p>
                      <div className="flex items-center">
                        <label htmlFor="qrValue" className="mr-3">
                          No. of QR Codes:
                        </label>
                        <input
                          type="text"
                          id="qrValue"
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                          placeholder="Enter QR Code Value"
                          className="outline-none border border-gray-400 px-4 rounded-lg py-1 text-lg w-4/12"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>{" "}
            <div className="h-[10%] flex items-center justify-end px-8 border-t border-t-gray-300/30">
              <button className="text-white bg-darkBlue text-lg font-medium px-7 rounded-md py-1.5">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
