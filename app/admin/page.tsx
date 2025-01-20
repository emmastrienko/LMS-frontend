"use client";
import React, { FC } from 'react'
import Heading from '../utils/Heading';
import AdminSidebar from '../components/Admin/sidebar/AdminSidebar'
import AdminProtected from '../hooks/adminProtected';
import DashboardHero from "../components/Admin/DashboardHero"

type Props = {}

const page:FC<Props> = (props: Props) => {
  return (
    <div>
      <AdminProtected>
      <Heading
        title="ELearning - Admin"
        description='ELearning is a platform for students to learn and get help from teacers'
        keywords='Programming, MERN, Redux, Machine Learning'
      />
      <div className="flex h-[200vh]">
        <div className='1500px:w-[16%] w-1/5'>
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
        </div>
      </div>
      </AdminProtected>
    </div>
  )
}

export default page