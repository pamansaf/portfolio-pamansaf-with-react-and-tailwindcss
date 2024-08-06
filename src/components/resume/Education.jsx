import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1997 - 2012</p>
          <h2 className="text-3xl md:text-4xl font-bold">Formal Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Elementary School"
            subTitle="SD N 26 Bireuen (1997 - 2003)"
            result="95/100"
            // des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Junior High School"
            subTitle="SMP N 1 Bireuen (2003 - 2006)"
            result="90/100"
            // des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Senior High School"
            subTitle="SMA N 1 Bireuen (2006 - 2009)"
            result="92/100"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Diploma - 3"
            subTitle="Akper Tjoet Nya` Dhien Banda Aceh (2009 - 2012)"
            result="3.67/4"
            // des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2007 - Present
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Training and Courses
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Microsoft Office and Internet"
            subTitle="Unit Kopergu SMA N 1 Bireuen - (2007 - 2008)"
            result="Bireuen"
            des="Ms. Office Word - Ms. Office Exel - Ms. Office PowerPoint - Internet"
          />
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle="Web Peogramming UNPAS - (2020 - Present)"
            result="Youtube"
            des="HTML - CSS - JavaScript - PHP - Laravel - TailwindCSS - Git -GitHub"
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="codingstudio.id - (2024)"
            result="Website"
            des="HTML - CSS - JavaScript"
          />
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle="VIT CODE STUDIO - (2024 - Present)"
            result="Youtube"
            des="React.JS - Next.JS - Firebase - Vercel"
          />
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle="Mister Coding - (2024 - Present)"
            result="Website"
            des="React.JS - Next.Js -TailwindCSS - Chakra UI - Strapi - API"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
