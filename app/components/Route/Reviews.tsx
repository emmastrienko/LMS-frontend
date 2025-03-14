import React from "react";
import Image from "next/image";
import { styles } from "@/app/styles/style";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge university",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed molestie est, a sollicitudin mi. Etiam at dapibus nibh.",
  },
  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Student | Cambridge university",
    comment:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed molestie est, a sollicitudin mi. Etiam at dapibus nibh. Aenean sed justo ac ex auctor gravida in id nulla. Pellentesque interdum arcu sit amet mauris porttitor laoreet. ",
  },
  {
    name: "Jay Gibbs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Student | Cambridge university",
    comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed molestie est, a sollicitudin mi. Etiam at dapibus nibh. Aenean sed justo ac ex auctor gravida in id nulla. Pellentesque interdum arcu sit amet mauris porttitor",
  },
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Student | Cambridge university",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Rosemary Smith",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Student | Cambridge university",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ",
  },
  {
    name: "Laura Mckenzie",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Student | Cambridge university",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed molestie est, a sollicitudin mi. Etiam at dapibus nibh.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assets/business.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
            molestie est, a sollicitudin mi. Etiam at dapibus nibh. Aenean sed
            justo ac ex auctor gravida in id nulla. Pellentesque interdum arcu
            sit amet mauris porttitor laoreet.
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px] ">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
