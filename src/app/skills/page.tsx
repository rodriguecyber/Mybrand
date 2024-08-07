import Tooltip from "@mui/material/Tooltip";
import React from "react";
import {
  SiBootstrap,
  SiCircleci,
  SiCss3,
  SiCypress,
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiJest,
  SiMaterialdesign,
  SiMocha,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="min-h-screen pt-10 md:pt-32  bg-gradient-to-br from-black to-white w-full md:pb-64">
      <h1 className="text-center text-6xl font-extrabold">SKILLS</h1>

      <div className="">
        <div className="mt-5">
          <h2 className="text-center font-bold text-4xl">1. Techical skills</h2>
          <div className=" flex flex-row flex-wrap gap-10 mt-10 mx-6 md:mx-48">
            <Tooltip title="Language: Javascript">
              <SiJavascript className="text-yellow-300 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Language: Typescript">
              <SiTypescript className="text-blue-700 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Backend: NodeJS">
              <SiNodedotjs className="text-green-700 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Database: Postgresql">
              <SiPostgresql className=" text-white bg-blue-900 text-5xl md:text-8xl" />
            </Tooltip>

            <Tooltip title="Database: Mongodb">
              <SiMongodb className="text-green-900 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Database: Mysql">
              <SiMysql className="text-blue-400 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Frontend: ReactJS">
              <SiReact className="text-blue-500 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Frontend: NextJS">
              <SiNextdotjs className="text-black text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Devops: Docker">
              <SiDocker className="bg-blue-500 text-white text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Devops: Circleci">
              <SiCircleci className=" text-white text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Integration Testing: Mocha">
              <SiMocha className="text-yellow-900 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Unit testing: Jest">
              <SiJest className="text-red-900 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="End-to-End Testing: Cypress">
              <SiCypress className="text-blue-900 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="Version control: Git">
              <SiGit className="text-orange-600 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="styling: CSS3">
              <SiCss3 className="text-blue-500 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="styling: SASS">
              <SiSass className="text-pink-500 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="styling: Bootstrap">
              <SiBootstrap className="text-violet-600 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="styling: Tailwindcss">
              <SiTailwindcss className="text-blue-500 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="layout: Material-UI">
              <SiMaterialdesign className="text-blue-500 text-5xl md:text-8xl" />
            </Tooltip>
            <Tooltip title="UI/UX: Figma">
              <SiFigma className="text-red-500 text-5xl md:text-8xl" />
            </Tooltip>
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-center font-bold text-4xl">2. Professional Skils</h3>
          <div className="grid md:grid-cols-2 gap-10 text-3xl mt-10 mx-6 md:mx-64">
            <li>Team Collaboration</li>
            <li>Team Management</li>
            <li>Time Management</li>
            <li>Leadership</li>
            <li>Effective Communication</li>
            <li>Critical Thinking</li>
            <li>Planning</li>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-center font-bold text-4xl">3. Other Skills</h2>
          <div className="grid md:grid-cols-2 gap-10 text-3xl mt-10 mx-6 md:mx-64">
            <li>Accounting</li>
            <li>UI/UX Design</li>
            <li>System Architecture</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
