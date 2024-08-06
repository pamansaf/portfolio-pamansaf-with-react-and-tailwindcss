import { IoHome } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
// import { FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const navLinksdata = [
  {
    _id: 1001,
    title: "Home",
    link: "home",
    icon: <IoHome />,
  },
  {
    _id: 1002,
    title: "Features",
    link: "features",
    icon: <FaListAlt />,
  },
  {
    _id: 1003,
    title: "Projects",
    link: "projects",
    icon: <AiOutlineFundProjectionScreen />,
  },
  {
    _id: 1004,
    title: "Resume",
    link: "resume",
    icon: <GrNotes />,
  },
  // {
  //   _id: 1005,
  //   title: "Testimonial",
  //   link: "testimonial",
  //   icon: <FaUsers />,
  // },
  {
    _id: 1006,
    title: "Contact",
    link: "contact",
    icon: <MdEmail />,
  },
];
