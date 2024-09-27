import Image from "next/image";
import React from "react";
import { CiLogout } from "react-icons/ci";

const Leftbar = () => {
  let data = [
    {
      img: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.625 9.375V5H9.375V9.375H5V10.625H9.375V15H10.625V10.625H15V9.375H10.625Z"
            fill="#121926"
          />
        </svg>
      ),
      title: "New QC Session",
    },
  ];

  return (
    <div className="w-2/12 h-full px-6 pt-6 flex flex-col items-center justify-between border-r border-r-gray-200">
      <div className="w-full flex flex-col items-center">
        <Image
          src={"/text-logo.png"}
          alt="Unilever logo"
          width={1000}
          height={1000}
          className="w-11/12"
        />
        <div className="mt-12 flex flex-col w-full">
          {data?.map((e, i) => {
            return <Button key={i} data={e} />;
          })}
        </div>
      </div>{" "}
      <button className="bg-red-500 font-medium w-full text-white flex items-center justify-center py-3 px-5 rounded-full mb-6 text-lg gap-x-3">
        <CiLogout />
        <span>Logout</span>
      </button>
    </div>
  );
};

const Button = ({ data }) => {
  return (
    <button className="bg-bgBlue flex items-center py-3 px-5 rounded-full mb-6 text-lg gap-x-2">
      {data?.img}
      <span>{data?.title}</span>
    </button>
  );
};

export default Leftbar;
