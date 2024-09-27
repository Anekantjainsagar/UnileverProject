"use client";
import React, { useMemo, useState } from "react";
import Topbar from "../Components/Topbar";
import Leftbar from "../Components/Leftbar";
import { useRouter } from "next/navigation";

const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [date, setDate] = useState(getCurrentDate());

  let data = useMemo(() => {
    return [
      ...Array(40).fill(0), // 40 zeroes
      ...Array(30).fill(1), // 30 ones
      ...Array(5).fill(2), // 5 twos
    ].sort(() => Math.random() - 0.5);
  }, [selectedDate]);

  return (
    <div className="flex items-start h-screen">
      <Leftbar />
      <div className="w-[86%] min-[1600px]:w-10/12 overflow-x-hidden">
        <Topbar />
        <div className="p-5 min-[1600px]:p-6 h-[92vh] min-[1600px]:h-[90vh] bg-[#F7F7F7]">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl min-[1600px]:text-3xl font-semibold">
              Physical Verification Data for {selectedDate}
            </h4>
            <div>
              <input
                type="date"
                className="px-5 py-2 rounded-md outline-none text-center text-lg"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <button
                onClick={() => {
                  setSelectedDate(date);
                }}
                className="text-white bg-darkBlue px-5 ml-4 py-2 rounded-lg text-lg"
              >
                View PV Data
              </button>
            </div>
          </div>
          <div className="mt-2 min-[1600px]:mt-4 overflow-y-auto rounded-lg h-[94%] p-5 bg-white border border-gray-300 text-lg overflow-x-hidden">
            <div
              className="grid gap-1.5 min-[1600px]:gap-2"
              style={{ gridTemplateColumns: "repeat(15, 1fr)" }}
            >
              {data.map((e, i) => {
                return (
                  <div key={i}>
                    <Row i={i} data={e} />
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

const Row = ({ i, data }) => {
  const history = useRouter();
  const [showTooltip, setShowTooltip] = useState(false);

  // Format for Aisle no
  const aisleNo = `R-0${Math.floor(i / 15) + 1}-${((i % 15) + 1)
    .toString()
    .padStart(2, "0")}`;

  const randomCount = useMemo(() => {
    return Math.floor(Math.random() * (36 - 30)) + 30;
  }, []);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={(e) => {
        e.preventDefault();
        history.push(`/dashboard/${i + 1}`);
      }}
      className={`relative ${
        data == 0 ? "bg-green-200" : data == 1 ? "bg-red-200" : "bg-gray-200"
      } flex flex-col items-center rounded-md justify-center aspect-square cursor-pointer`}
    >
      {/* Tooltip below the block */}
      {showTooltip && (
        <div className="absolute top-full mt-2 flex flex-col items-center">
          <div className="bg-black text-white text-xs rounded-md p-2 z-10 w-40 relative">
            <p>Aisle no: {aisleNo}</p>
            <p>No. of stickers counted: 30</p>
            <p>No. of QR codes read: 30</p>

            {/* Tooltip arrow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-black"></div>
          </div>
        </div>
      )}

      {/* Row Content */}
      <span className="text-xs min-[1600px]:text-sm text-center mb-1 text-gray-800 w-8/12">
        {aisleNo}
      </span>
      <p className="text-sm min-[1600px]:text-base font-medium">
        {randomCount}
      </p>
    </div>
  );
};

export default Dashboard;
