import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <div className="w-[95%] 800px:w-[85%] m-auto pt-10">
        <h1 className={`${styles.title} 800px:!text-[45px]`}>
          What is <span className="text-gradient">Elearning</span>?
        </h1>

        <p className="text-[18px] font-Poppins mt-6 leading-8">
          Welcome to <strong>Elearning</strong> — your supportive space to grow as a programmer.
          Whether you are just starting out or looking to sharpen your skills, our community is
          built to empower you every step of the way. With curated content, practical projects,
          and real-world challenges, you wll find everything you need to level up and thrive.
        </p>

        <p className="text-[18px] font-Poppins mt-6 leading-8">
          Our mission is simple: to help new developers unlock their potential and become confident
          problem solvers. We believe in learning by doing, growing together, and celebrating every
          small victory on your coding journey.
        </p>

        <div className="mt-10">
          <h2 className="text-[22px] font-bold text-gradient">Emma Strienko</h2>
          <p className="text-[18px] font-Poppins">Founder of Elearning</p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
