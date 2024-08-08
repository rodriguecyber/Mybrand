import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-black to-white h-screen overflow-x-auto">
      <div className="flex flex-col lg:flex-row mt-32 lg:ml-32 ml-10 lg:mr-32 lg:justify-around">
        <div className="h-full mb-10 lg:mb-0">
          <h2 className="font-extrabold text-3xl">Hey! I&apos;m RWIGARA</h2>
          <h5 className="text-gray-400 font-bold text-xl">Software Engineer</h5>
          <p className="w-full lg:w-4/5 text-lg text-black font-bold">
            As a dedicated and innovative Software Engineer, I bring a robust
            background in software development, encompassing front-end and
            back-end technologies, system design, and agile methodologies. With
            a strong foundation in computer science principles and a passion for
            cutting-edge technology, I excel at creating efficient, scalable,
            and user-friendly applications.
          </p>
        </div>
        <div className="rounded-tl-full rounded-bl-full rounded-tr-full bg-gradient-to-tl from-black to-white p-2 flex justify-center lg:justify-start">
          
          <Image
            className="rounded-tl-full rounded-bl-full rounded-tr-full w-full lg:w-auto"
            src="/passport.jpg"
            alt="passport.jpg"
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="flex justify-center lg:justify-start">
        <a
          href="/skills"
          className="text-center p-3 bg-white rounded-md font-extrabold mt-5 lg:ml-64"
        >
          HIRE ME
        </a>
      </div>
    </div>
  );
}
