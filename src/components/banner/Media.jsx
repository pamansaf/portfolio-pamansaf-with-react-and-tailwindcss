import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiCoreldraw, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-wrap xl:flex-row gap-6 lgl:gap-40 justify-self-start">
      <div>
        <h2 className="text-base uppercase font-bold mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="http://facebook.com/safwan.sy"
            target="_blank"
            className="bannerIcon"
          >
            <FaFacebookF />
          </a>
          <a
            href="http://instagram.com/sy_safwan"
            target="_blank"
            className="bannerIcon"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="http://github.com/pamansaf"
            target="_blank"
            className="bannerIcon"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-bold mb-4">BEST SKILL ON</h2>
        <div className="flex gap-4">
          <a href="https://vitejs.dev/" target="_blank" className="bannerIcon">
            <FaReact />
          </a>
          <a href="http://nextjs.org" target="_blank" className="bannerIcon">
            <SiNextdotjs />
          </a>
          <a
            href="http://tailwindcss.com"
            target="_blank"
            className="bannerIcon"
          >
            <SiTailwindcss />
          </a>
          <a href="http://coreldraw.com" target="_blank" className="bannerIcon">
            <SiCoreldraw />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
