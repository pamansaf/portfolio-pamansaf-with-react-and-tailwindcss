import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full h-20 sticky px-4 top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="home"
        className="flex items-center gap-3 cursor-pointer"
      >
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        <span className="text-2xl font-bold text-designColor tracking-wide">
          pamansaf
        </span>
      </Link>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 ">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-md font-semibold text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer "
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide ">
            <div className="flex flex-col gap-4 py-2 relative">
              <img className="w-32 rounded-lg" src={logo} alt="logo" />
              <div className="flex flex-col gap-2 text-xs text-gray-300 border-b border-gray-500">
                <p>Assalamu`alaikum...</p>
                <p>
                  Hello, I`m Safwan Sy, a Public Health, Web Programming and
                  Graphic Designer.
                </p>
                <p className="italic pb-6">
                  `Keep smiling even though life feels bitter.`
                </p>
              </div>
              <ul className="flex flex-col gap-4 pt-3">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-md font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="flex items-center gap-3"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-bold mb-2 mt-6">
                  Find me in
                </h2>
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
