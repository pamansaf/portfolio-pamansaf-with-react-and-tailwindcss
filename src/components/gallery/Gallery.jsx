import React from "react";
import Title from "../layouts/Title";

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
          <img src="../public/desain1.jpg" alt="" />
          <img src="../public/desain6.jpg" alt="" />
        </div>
        <img src="../public/desain3.jpg" alt="" />
        <img src="../public/desain5.jpg" alt="" />
        <img src="../public/desain4.jpg" alt="" />

        <img src="../public/desain2.jpg" alt="" />
        <img src="../public/imsakiyah.png" alt="" />
      </div>
    </section>
  );
};

export default Gallery;
