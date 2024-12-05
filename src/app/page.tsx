import Image from "next/image";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaArrowTrendUp, FaGithub, FaShareFromSquare, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  
  return (
    <div>
      <div
        id="home  "
        className="bg-gradient-to-br to-[#84af66] from-[#c55454] scroll-smooth"
      >
        <div className="items-center md:h-screen items flex flex-col md:flex-row justify-around">
          <div className="flex flex-col mx-4 md:mx-0 md:w-1/3  gap-10 md:gap-32">
            <div className="flex flex-col gap-3 items-start">
              <h2 className="font-extrabold text-2xl md:text-5xl">
                Hey! I&apos;m RWIGARA
              </h2>
              <h5 className="text-gray-400 font-bold text-3xl">
                Software Engineer
              </h5>
              <p className="text-sm text-black font-bold font-sans">
                As a dedicated and innovative Software Engineer, I bring a
                robust background in software development, encompassing
                front-end and back-end technologies, system design, and agile
                methodologies. With a strong foundation in computer science
                principles and a passion for cutting-edge technology, I excel at
                creating efficient, scalable, and user-friendly applications.
              </p>
              <a
                href="/skills"
                className=" p-3 bg-black text-white rounded-md font-extrabold hover:bg-slate-900 "
              >
                HIRE ME
              </a>
            </div>

            <div className="flex gap-1">
              <div className=" bg-red-100 p-2 font-extrabold rounded-sm text-center">
                <h1>1+ Year</h1>
                <p>Experience</p>
              </div>
              <div className="bg-red-100 p-2 font-extrabold rounded-sm text-center">
                <h1>9+ </h1>
                <p>Project Completed</p>
              </div>
              <div className="bg-red-100 p-2 font-extrabold rounded text-center">
                <h1>5 </h1>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <img
            className="rounded-md shadow-2xl shadow-black "
            // src="/My-profile.jpg"
            src="https://res-console.cloudinary.com/dcg62af7v/thumbnails/v1/image/upload/v1732799653/TXktUHJvZmlsZV90Z3d5ZmM=/drilldown"

            alt="profile image"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div
        id="about"
        className="flex md:flex-row flex-col mx-auto md:w-2/3 justify-around items-center shadow-2xl shadow-black static p-10 md:relative md:bottom-20 bg-white scroll-smooth "
      >
        <div className="md:w-1/3">
          <img
            className="rounded-md w-full  shadow-black "
            // src="/My-profile.jpg"
            src="https://res-console.cloudinary.com/dcg62af7v/thumbnails/v1/image/upload/v1732799653/TXktUHJvZmlsZV90Z3d5ZmM=/drilldown"
            // alt="profile image"
            width={300}
            height={400}
          />
          <div className="flex gap-3 w-fit mx-auto relative bottom-4 bg-white p-2 border-2 border-[#f1eaea] rounded-md  ">
            <FaFacebookF size={20} color="blue" className="cursor-pointer" />
            <FaLinkedinIn size={20} color="blue" className="cursor-pointer" />
            <FaGithub size={20} className="cursor-pointer" />
            <FaInstagram size={20} color="orange" className="cursor-pointer" />
            <FaXTwitter size={20} className="cursor-pointer" />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-10 ">
          <h1 className="text-2xl md:text-4xl font-extrabold text-center ">
            Software Engineer
          </h1>
          <p className="">
            As a dedicated and innovative Software Engineer, I bring a robust
            background in software development, encompassing front-end and
            back-end technologies, system design, and agile methodologies. With
            a strong foundation in computer science principles and a passion for
            cutting-edge technology, I excel at creating efficient, scalable,
            and user-friendly applications.
          </p>
          <div className="flex gap-2 ">
            <a href="" className="bg-red-300 text-black rounded-md p-2 ">
              My Projects
            </a>
            <a
              href=""
              className=" text-black rounded-md p-2 border-red-300 border-2"
            >
              {" "}
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="px-10 md:px-32 ">
        <h1 className="text-center font-extrabold text-2xl">Portfolio</h1>
        <p className="md:text-center lg:mx-24 mt-10 text-gray-500">
          hroughout my experience, I had the opportunity to collaborate with
          diverse teams, contributing to a variety of projects. In addition to
          working on team-driven initiatives, I also took the lead on several
          independent projects, where I was responsible for all stages of
          development. This included [briefly mention key responsibilities, such
          as design, coding, testing, etc.], and allowed me to sharpen my
          problem-solving skills while delivering high-quality software
          solutions. My ability to work both collaboratively and autonomously
          has been a key strength in successfully completing these projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-20">
          <div className="flex h-96 flex-col border-2 border-gray-600 rounded-md relative">
            <div className="h-3/5 overflow-hidden">
              <img
                className="w-full"
                src="/futurefocus.png"
                alt="proect image"
              />
            </div>
            <div className="m-5 ">
              <h4 className="text-gray-600 ">Fullstack</h4>
              <h1 className="font-extrabold text-md text-green-950">
                Futurefocus Academy web
              </h1>
              <p className="h-10 overflow-auto font-extralight text-gray-500 text-sm">
                Dynamic Imformation website for Furuture focus
              </p>
              <a
                className="border-2 border-green-800 rounded-md p-2 flex w-fit items-center gap-2 "
                href=""
              >
                View More <FaArrowRight />
              </a>
            </div>
            <a
              href="https://www.futurefocus.co.rw/"
              className="bg-black  absolute top-0 z-50 flex text-white gap-2  right-0 px-2"
            >
              Visit
              <FaShareFromSquare className="  z-50  text-green-600 text-2xl " />
            </a>
          </div>
          <div className="flex h-96 flex-col border-2 border-gray-600 rounded-md relative">
            <div className="h-3/5 overflow-hidden">
              <img className="w-full" src="/cyberpro.png" alt="proect image" />
            </div>
            <div className="m-5 ">
              <h4 className="text-gray-600 ">Fullstack</h4>
              <h1 className="font-extrabold text-md text-green-950">
                CyberPro Group
              </h1>
              <p className="h-10 overflow-auto  font-extralight text-gray-500 text-sm">
                Dynamic Imformation Website for Cyber Pro Group in collabolation
                with Edge-Reach Tech
              </p>
              <a
                className="border-2 border-green-800 rounded-md p-2 flex w-fit items-center gap-2 "
                href=""
              >
                View More <FaArrowRight />
              </a>
            </div>
            <a
              href="https://www.cyberprogroup.com/"
              className="bg-black  absolute top-0 z-50 flex text-white gap-2  right-0 px-2"
            >
              Visit
              <FaShareFromSquare className="  z-50  text-green-600 text-2xl " />
            </a>
          </div>
          <div className="flex h-96 flex-col border-2 border-gray-600 rounded-md relative">
            <div className="h-3/5 overflow-hidden">
              <img className="w-full" src="/xcool.png" alt="proect image" />
            </div>
            <div className="m-5 ">
              <h4 className="text-gray-600 ">Fullstack</h4>
              <h1 className="font-extrabold text-md text-green-950">
                XCool System
              </h1>
              <p className="h-10 overflow-auto  font-extralight text-gray-500 text-sm">
                System to manage all Activities for Educational instituon
              </p>
              <a
                className="border-2 border-green-800 rounded-md p-2 flex w-fit items-center gap-2 "
                href=""
              >
                View More <FaArrowRight />
              </a>
            </div>
            <a
              href="https://student.futurefocus.co.rw/"
              className="bg-black  absolute top-0 z-50 flex text-white gap-2  right-0 px-2"
            >
              Visit
              <FaShareFromSquare className="  z-50  text-green-600 text-2xl " />
            </a>
          </div>
        </div>
        <a
          className="border-2 text-white mx-auto my-20 bg-green-800 rounded-md p-2 flex w-fit items-center gap-2 "
          href="https://github.com/rodriguecyber"
        >
          More Project
        </a>
      </div>
    </div>
  );
}
