import React, { FC } from "react";
import UserAnalytics from "../Analytics/UserAnalytics";
import { BiBorderLeft } from "react-icons/bi";
import { PiUsersFourLight } from "react-icons/pi";
import { Box, CircularProgress } from "@mui/material";
import OrdersAnalytics from "../Analytics/OrdersAnalytics";
import AllInvoices from "../Order/AllInvoices";

type Props = {
  open?: boolean;
  value?: number;
};

const CircularProgressWithLabel: FC<Props> = ({ open, value = 0 }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={45}
        color={value && value > 99 ? "info" : "error"}
        thickness={4}
        style={{ zIndex: open ? -1 : 1 }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};

const DashboardWidgets: FC<Props> = ({ open }) => {
  return (
    <div className="mt-[30px] min-h-screen">
      <div className="grid grid-cols-[75%,25%]">
        <div className="p-8">
          <UserAnalytics isDashboard={true} />
        </div>

        <div className="pt-[80px] pr-8">
          <div className="w-full dark:bg-[#111c43] rounded-sm shadow">
            <div className="flex items-center p-5 justify-between">
              <div className="">
                <BiBorderLeft className="dark:text-[#45cba0] text-[#000] text-[30px]" />
                <h5 className="pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]">
                  120
                </h5>
                <h5 className="pt-2 font-Poppins dark:text-[#45cba0] text-black text-[20px]">
                  Sales Obtained
                </h5>
              </div>
              <div>
                <CircularProgressWithLabel value={100} open={open} />
                <h5 className="text-center pt-4">+120%</h5>
              </div>
            </div>
          </div>

          <div className="w-full dark:bg-[#111c43] rounded-sm shadow my-8">
            <div className="flex items-center p-5 justify-between">
              <div className="">
                <PiUsersFourLight className="dark:text-[#45cba0] text-[#000] text-[30px]" />
                <h5 className="pt-2 font-Poppins dark:text-[#fff] text-black text-[20px]">
                  450
                </h5>
                <h5 className="pt-2 font-Poppins dark:text-[#45cba0] text-black text-[20px]">
                  New Users
                </h5>
              </div>
              <div>
                <CircularProgressWithLabel value={100} open={open} />
                <h5 className="text-center pt-4">+150%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[65%,35%] mt-5 gap-5 items-start overflow-hidden w-full">
        {/* Orders Analytics Container */}
        <div className="dark:bg-[#111c43] w-full h-full shadow-sm">
          <OrdersAnalytics isDashboard={true} />
        </div>

        {/* Recent Transactions */}
        <div className="p-5 h-full flex flex-col justify-between max-w-full">
          <h5 className="dark:text-[#fff] text-black text-[20px] font-[400] font-Poppins pb-3">
            Recent Transactions
          </h5>
          <AllInvoices isDashboard={true} />
        </div>
      </div>
    </div>
  );
};

export default DashboardWidgets;
