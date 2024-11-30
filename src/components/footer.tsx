import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white  lg:bottom-0 w-full py-4 flex flex-col md:flex-row justify-around items-center">
      <div className="flex flex-col text-center mb-4 md:mb-0">
        <h1 className="text-lg font-semibold mb-2">PROJECT</h1>
        <ul className="space-y-1">
          <li>E-commerce (ATLP)</li>
          <li>Stock Management</li>
        </ul>
      </div>
      <div className="flex flex-col text-center mb-4 md:mb-0">
        <h1 className="text-lg font-semibold mb-2">CONNECT ME</h1>
        <ul className="space-y-2 grid grid-cols-3 gap-1">
          <li>
            <a href="https://www.linkedin.com/in/rwigara-rodrigue-39a61925b/">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-blue-600 w-7"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rodriguecyber"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faGithub} className="text-white w-7" />
            </a>
          </li>
          <li>
            <a
              href="https://web.facebook.com/rodri.jazzy/"
              className="hover:text-blue-600"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-600 w-7"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jazzy.rodrigue/"
              className="hover:text-pink-500"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-pink-500 w-7"
              />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/RwigaraRodrigue"
              className="hover:text-blue-400"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-blue-400 w-7"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col text-center mb-4 md:mb-0">
        <h1 className="text-lg font-semibold mb-2">CONTACT ME</h1>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon className="w-5 text-green-600" icon={faPhone} />
            <p>+250 787 910 406</p>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon className="w-5 text-green-700" icon={faWhatsapp} />
            <p>+250 787 910 406</p>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon className="w-5 text-blue-300" icon={faEnvelope} />
            <p>rodrirwigara@gmail.com</p>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon className="w-5" icon={faLocationDot} />
            <p>Kigali - Rwanda</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
