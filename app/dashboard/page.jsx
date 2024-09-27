"use client";
import React from "react";
import Topbar from "../Components/Topbar";
import Leftbar from "../Components/Leftbar";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  return (
    <div className="flex items-start h-screen">
      <Leftbar />
      <div className="w-[86%] min-[1600px]:w-10/12">
        <Topbar />
        <div className="p-5 min-[1600px]:p-6 h-[92vh] min-[1600px]:h-[90vh] bg-[#F7F7F7]">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl min-[1600px]:text-3xl font-semibold">
              Recent Sessions
            </h4>
            <div>
              <input
                type="date"
                className="px-3 py-1 rounded-md outline-none"
              />
              <button className="text-white bg-darkBlue px-3 ml-4 py-0.5 rounded-lg">
                View PA Data
              </button>
            </div>
          </div>
          <div className="mt-2 min-[1600px]:mt-4 overflow-y-auto rounded-lg h-[94%] p-5 bg-white border border-gray-300 text-lg">
            <div
              className="grid gap-1.5 min-[1600px]:gap-2"
              style={{ gridTemplateColumns: "repeat(15, 1fr)" }}
            >
              {[
                ...Array(40).fill(0), // 40 zeroes
                ...Array(30).fill(1), // 30 ones
                ...Array(5).fill(2), // 5 twos
              ]
                .sort(() => Math.random() - 0.5)
                .map((e, i) => {
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

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        history.push(`/dashboard/${i + 1}`);
      }}
      className={`${
        data == 0 ? "bg-green-200" : data == 1 ? "bg-red-200" : "bg-gray-200"
      } flex flex-col items-center rounded-md justify-center aspect-square cursor-pointer`}
    >
      {" "}
      <span className="text-xs min-[1600px]:text-sm text-center mb-1 text-gray-800 w-8/12">
        R-0{Math.floor(i / 15) + 1}-{((i % 15) + 1).toString().padStart(2, "0")}
      </span>
      <p className="text-sm min-[1600px]:text-base font-medium">
        {Math.floor(Math.random() * (36 - 30)) + 30}
      </p>
    </div>
  );
};

export default Dashboard;
