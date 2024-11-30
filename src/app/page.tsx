import Image from "next/image";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <div
        id="home  "
        className="bg-gradient-to-br to-[#84af66] from-[#c55454] scroll-smooth"
      >
        <div className="items-center h-screen items flex justify-around">
          <div className="flex flex-col w-1/3  gap-32">
            <div className="flex flex-col gap-3 items-start">
              <h2 className="font-extrabold text-5xl">Hey! I&apos;m RWIGARA</h2>
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
                <p>Happy Client</p>
              </div>
            </div>
          </div>

          <img
            className="rounded-md shadow-2xl shadow-black "
            src="https://res-console.cloudinary.com/dcg62af7v/thumbnails/v1/image/upload/v1732799653/TXktUHJvZmlsZV90Z3d5ZmM=/drilldown"
            alt="profile image"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div
        id="about"
        className="flex mx-auto w-2/3 justify-around items-center shadow-2xl shadow-black p-10 relative bottom-20 bg-white scroll-smooth "
      >
        <div className="w-1/3">
          <img
            className="rounded-md w-full  shadow-black "
            src="https://res-console.cloudinary.com/dcg62af7v/thumbnails/v1/image/upload/v1732799653/TXktUHJvZmlsZV90Z3d5ZmM=/drilldown"
            alt="profile image"
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
        <div className="w-1/2 flex flex-col gap-10 ">
          <h1 className="text-4xl font-extrabold text-center ">
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
              My project
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
    </div>
  );
}
