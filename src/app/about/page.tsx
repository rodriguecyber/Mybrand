"use client"
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" min-h-screen pt-10 md:pt-32  bg-gradient-to-br from-black to-white w-full">
      <h1 className="text-center font-extrabold text-3xl">EDUCATION</h1>
      <div className="md:mx-32  mt-5 gap-20 md:gap-0 mx-10 flex flex-col md:flex-row md:justify-around">
        <div className="md:w-1/4 flex flex-col gap-4  ">
          <Image
            src="/passport.jpg"
            alt="passport"
            className="rounded-3xl"
            width={500}
            height={300}
          />
          <button
            className="bg-gradient-to-br from-black to-white text-black font-extrabold p-2 text-center rounded-lg hover:to-black hover:from-white hover:text-black "
           onClick={()=>window.location.href="https://drive.google.com/file/d/16aCeeyRxVlZcAEY4UyYbkX9xMKpad2P_/view?usp=sharing"
            } >
            MY CV
          </button>
        </div>

        <div className="grid  grid-cols-1 gap-0 md:gap-6 lg:grid-cols-2 ">
          <div className=" mb-20 flex flex-col gap-4 bg-blue-100   rounded-xl ">
            <h1 className="bg-blue-500 text-center font-extrabold">
              UNIVERSITY OF RWANDA
            </h1>
            <h3 className="flex justify-around font-bold ">
              <p>2022</p> - <p>2025</p>
            </h3>
            <p className="m-3">
              Bachelor&apos;s of Business Information Technology
            </p>
          </div>
          <div className=" mb-20  flex flex-col gap-4 bg-blue-100   rounded-xl ">
            <h1 className="bg-blue-500 text-center font-extrabold">
              ANDELA TECHENICAL LEADERSHIP PROGRAM
            </h1>
            <h3 className="flex justify-around font-bold ">
              <p>2024</p> - <p>2025</p>
            </h3>
            <p className="m-3">Software Engeneering</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
