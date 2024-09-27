"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Row = ({ idx }) => {
  const history = useRouter();

  return (
    <div
      className={`grid grid-cols-5 ${
        idx % 2 !== 0 ? "bg-white" : "bg-bgBlue/50"
      } cursor-pointer py-4 px-6 rounded-lg text-sm min-[1600px]:text-lg`}
      onClick={() => {
        history.push("/dashboard/prowiz-analytics");
      }}
    >
      <p className="text-center">{new Date().toString()?.slice(4, 21)}</p>
      <p className="text-center">10</p>
      <p className="text-center">2</p>
      <p className="text-center">4</p>
      <p className="text-center">Warehouse</p>
    </div>
  );
};

export default Row;
