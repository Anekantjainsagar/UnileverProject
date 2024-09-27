import React from "react";
import { RiMenu3Fill } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="w-full h-[8vh] min-[1600px]:h-[10vh] flex items-center justify-between px-6 py-4 border-b">
      <h5 className="text-2xl min-[1600px]:text-3xl font-semibold">
        Welcome, Rishabh Mathur
      </h5>
      <button className="bg-bgBlue text-[#697586] p-3 min-[1600px]:p-4 text-lg min-[1600px]:text-xl rounded-full">
        <RiMenu3Fill />
      </button>
    </div>
  );
};

export default Topbar;
