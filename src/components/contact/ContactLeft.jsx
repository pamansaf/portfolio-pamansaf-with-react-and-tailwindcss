import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaGithub,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-2/5 h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Safwan Sy</h3>
        <p className="text-lg font-normal text-gray-400">
          I`m a Public Health, Web Programming and Graphic Designer.
        </p>

        <p className="text-base text-gray-400 flex items-center gap-2">
          <FaPhoneSquareAlt className="text-xl" />
          Phone: <span className="text-lightText">+62 821 2229 2573</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          <IoMdMail className="text-xl" />
          Email: <span className="text-lightText">safwan.ssys@gmail.com</span>
        </p>

        <p className="text-base text-gray-400 flex gap-2">
          <FaLocationDot className="text-xl" />
          Location:
          <span className="text-lightText">
            Desa Balee Kuyun Kec. Kuala kab. Bireuen, Aceh, Indonesia.
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-2">
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
    </div>
  );
};

export default ContactLeft;
