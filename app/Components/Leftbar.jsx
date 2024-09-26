import Image from "next/image";
import React from "react";

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
            d="M18.5669 12.0581L16.6919 10.1831C16.6339 10.1251 16.565 10.079 16.4892 10.0476C16.4133 10.0162 16.3321 9.99998 16.25 9.99998C16.1679 9.99998 16.0867 10.0162 16.0108 10.0476C15.935 10.079 15.8661 10.1251 15.8081 10.1831L10 15.9912V18.75H12.7588L18.5669 12.9419C18.6249 12.8839 18.671 12.815 18.7024 12.7392C18.7338 12.6633 18.75 12.5821 18.75 12.5C18.75 12.4179 18.7338 12.3367 18.7024 12.2608C18.671 12.185 18.6249 12.1161 18.5669 12.0581ZM12.2412 17.5H11.25V16.5088L14.375 13.3838L15.3662 14.375L12.2412 17.5ZM16.25 13.4912L15.2588 12.5L16.25 11.5088L17.2412 12.5L16.25 13.4912Z"
            fill="#121926"
          />
          <path d="M11.25 8.75V11.25H12.5V8.75H11.25Z" fill="#121926" />
          <path d="M8.75 7.5V11.25H10V7.5H8.75Z" fill="#121926" />
          <path d="M6.25 5V11.25H7.5V5H6.25Z" fill="#121926" />
          <path
            d="M7.5 18.75H3.75C3.41859 18.7497 3.10085 18.6178 2.8665 18.3835C2.63216 18.1492 2.50035 17.8314 2.5 17.5V2.5C2.50035 2.16859 2.63216 1.85085 2.8665 1.6165C3.10085 1.38216 3.41859 1.25035 3.75 1.25H13.75C14.0814 1.25035 14.3992 1.38216 14.6335 1.6165C14.8678 1.85085 14.9997 2.16859 15 2.5V8.75H13.75V2.5H3.75V17.5H7.5V18.75Z"
            fill="#121926"
          />
        </svg>
      ),
      title: "Detailed Analytics",
    },
  ];

  return (
    <div className="w-2/12 h-full p-6 flex flex-col items-center border-r border-r-gray-200">
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
