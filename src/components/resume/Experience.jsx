import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2019</p>
          <h2 className="text-4xl font-bold">
            Public Health - Web Developer - Design
          </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Staff Perawat"
            subTitle="Apotek & Klinik Mitrasana - (2013)"
            result="Cikarang"
            des="Marketing Obat-Obatan Farmasi, menjalin kerjasama dengan dokter, rumah sakit, apotek dan pihak terkait lainnya."
          />
          <ResumeCard
            title="Medical Representative"
            subTitle="PT. Interbat - (2013 - 2015)"
            result="Jakarta"
            des="Marketing Obat-Obatan Farmasi, menjalin kerjasama dengan dokter, rumah sakit, apotek dan pihak terkait lainnya."
          />
          <ResumeCard
            title="PIC Jaminan Kesehatan"
            subTitle="PT Nayaka Era Husada - (2015 - 2019)"
            result="Makassar"
            des="PIC Wilayah kerja Sulawesi dan Maluku. Pelayanan dan Jaminan Kesehatan. Verifikator Claim eimburesment"
          />
          <ResumeCard
            title="Freelance Design & Developer"
            subTitle="Freelance - (2023 - Present)"
            result="Indonesia"
            des="Menerima jasa pembuatan desain grafis dan landing page website"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
