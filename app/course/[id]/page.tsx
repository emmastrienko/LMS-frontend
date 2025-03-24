"use client";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";

const Page = ({ params }: any) => {
  return (
    <div>
      <CourseDetailsPage id={params.id} />
    </div>
  );
};

export default Page;
