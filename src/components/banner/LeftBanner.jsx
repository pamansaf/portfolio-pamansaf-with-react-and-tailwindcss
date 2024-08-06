import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Public Health.", "Web Programming.", "Graphic Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WEBSITE</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          <p className="text-2xl pb-2">Hello 👋 I am</p>
          <p className="text-designColor capitalize">Safwan Bin Syarifuddin</p>
        </h1>
        <h2 className=" text-3xl md:text-4xl font-bold text-white">
          I`m a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#22d3ee"
          />
        </h2>
        <p className="text-sm md:text-base font-bodyFont leading-6 tracking-wide italic">
          `Whoever has never felt the bitterness of seeking knowledge though one
          day, he will swallow his humiliation all his life.`
          <br />( Asy-Syafi`i )
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
