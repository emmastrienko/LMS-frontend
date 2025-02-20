"use client";
import DashboardHero from "@/app/components/Admin/DashboardHero";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import React from "react";
import EditHero from "../../components/Admin/Customization/EditHero";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="ELearning - Admin"
          description="ELearning is a platform for students to learn and get help from teacers"
          keywords="Programming, MERN, Redux, Machine Learning"
        />
        <div className="flex h-srceen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
            <EditHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
}

export default page;
