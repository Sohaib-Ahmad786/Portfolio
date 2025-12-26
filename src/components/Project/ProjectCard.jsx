"use client";

import { motion } from "framer-motion";

const cardAnim = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardAnim}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl"
    >
      {/* image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-105"
        />

        {/* soft overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {project.description}
        </p>

        {/* tech stack */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-sky-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* glow line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />
    </motion.div>
  );
}
