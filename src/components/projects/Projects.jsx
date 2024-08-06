import React from "react";
import Title from "../layouts/Title";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        <ProjectsCard
          title="coming soon launching website menggunakan HTML CSS dan JavaScript"
          // des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          //     Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={project1}
        />
        <ProjectsCard
          title="game puzzel sederhana menggunakan HTML CSS dan JavaScript"
          src={project2}
        />
        <ProjectsCard
          title="portfolio menggunakan HTML, TailwindCSS dan JavaScript"
          src={project3}
        />
        <ProjectsCard
          title="portfolio menggunakan HTML, CSS dan JavaScript"
          src={project4}
        />
        <ProjectsCard
          title="website restoran burger menggunakan HTML, TailwindCSS dan JavaScript"
          src={project5}
        />

        <a
          href="https://hospital-landing-page-by-pamansaf.vercel.app/"
          target="_blank"
        >
          <ProjectsCard
            title="Hospital Landing Page with React.JS and TailwindCSS"
            src={project6}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
