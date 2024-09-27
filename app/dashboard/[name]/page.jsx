"use client";
import React from "react";
import Topbar from "../../Components/Topbar";
import Leftbar from "../../Components/Leftbar";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  return (
    <div className="flex items-start h-screen">
      <Leftbar />
      <div className="w-10/12">
        <Topbar />
        <div className="p-6 h-[90vh] bg-[#F7F7F7]">
          <h4 className="text-3xl font-semibold">Recent Sessions</h4>
          <div className="mt-4 overflow-y-auto rounded-lg h-[94%] bg-white border border-gray-300 py-2">
            {Array(4)
              .fill()
              .map((e, i) => {
                return (
                  <div key={i}>
                    <h5 className="text-xl font-medium px-3 mb-2">
                      Columns {20 * i + 1} - {i * 20 + 20}
                    </h5>
                    <Row />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Row = () => {
  const history = useRouter();

  return (
    <div
      className={`grid cursor-pointer py-1 px-5 gap-2 rounded-lg text-lg mb-2`}
      style={{ gridTemplateColumns: "repeat(20, 1fr)" }}
    >
      {Array(40)
        .fill()
        .map((e, i) => {
          return (
            <div
              key={i}
              onClick={(e) => {
                e.preventDefault();
                history.push(`/dashboard/prowiz-analytics/${i + 1}`);
              }}
              className={`${
                i % 2 == 0 ? "bg-green-200" : "bg-red-200"
              } flex flex-col items-center rounded-md justify-center aspect-square`}
            >
              <p className="text-base font-medium">{i + 1}</p>
              <span className="text-sm text-center mt-1 text-gray-800 w-8/12">
                A-102-102
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Dashboard;
