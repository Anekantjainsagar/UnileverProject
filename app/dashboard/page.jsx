import React from "react";
import Topbar from "../Components/Topbar";
import Leftbar from "../Components/Leftbar";
import Row from "../Components/Dashboard/Row";

const Dashboard = () => {
  return (
    <div className="flex items-start h-screen">
      <Leftbar />
      <div className="w-[86%] min-[1600px]:w-10/12">
        <Topbar />
        <div className="p-5 min-[1600px]:p-6 h-[92vh] min-[1600px]:h-[90vh] bg-[#F7F7F7]">
          <h4 className="text-2xl min-[1600px]:text-3xl font-semibold">
            Recent Sessions
          </h4>
          <div className="mt-4 rounded-lg h-[94%]">
            <div className="grid grid-cols-5 bg-white py-4 pl-6 pr-8 rounded-lg">
              {[
                "Date",
                "No. of Aisle analyzed",
                "Count matches with WMS",
                "Count Unmatched with WMS",
                "User",
              ].map((e, i) => {
                return (
                  <p
                    key={i}
                    className="text-center min-[1600px]:text-lg font-medium"
                  >
                    {e}
                  </p>
                );
              })}
            </div>
            <div className="h-[90%] min-[1600px]:h-[90%] overflow-y-auto">
              {Array(20)
                .fill()
                .map((e, i) => {
                  return <Row idx={i} key={i} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
