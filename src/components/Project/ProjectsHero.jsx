"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-[#050B1D] py-24">
      {/* background same as home */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050B1D] via-[#061533] to-[#07162F]" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-6xl px-4 mt-12">
        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            Featured Projects
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Here are some of my recent work
          </p>
        </motion.div>

        {/* cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid gap-8 md:grid-cols-2"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
