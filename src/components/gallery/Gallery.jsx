import React from "react";
import Title from "../layouts/Title";
import {
  desain1,
  desain2,
  desain3,
  desain4,
  desain5,
  desain6,
  imsaqiyah,
} from "../../assets/index";

const Gallery = () => {
  return (
    <section
      id="Gallery"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY GALLERY AND GET MY DESIGNS WITH CORELDRAW"
          des="My Graphic Designs"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 ">
        <div className="flex flex-col gap-10">
          <img src={desain1} alt="" />
          <img src={desain6} alt="" />
        </div>
        <img src={desain3} alt="" />
        <img src={desain5} alt="" />
        <img src={desain4} alt="" />
        <img src={desain2} alt="" />
        <img src={imsaqiyah} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
