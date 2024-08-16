import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  if (!backToTop) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToTop}>
      <FaAngleUp className="fixed bg-designColor rounded-full bottom-8 right-8 text-white p-2 text-4xl animate-pulse hover:bg-white hover:text-designColor cursor-pointer" />
    </button>
  );
};

export default BackToTop;
