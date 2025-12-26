"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Sparkles, BadgeCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const highlights = [
  {
    icon: Code2,
    title: "Frontend Focus",
    desc: "Clean UI, responsive layouts, and smooth interactions.",
  },
  {
    icon: Server,
    title: "Backend Growth",
    desc: "APIs, authentication, and server side logic with Node.",
  },
  {
    icon: Database,
    title: "Databases",
    desc: "PostgreSQL basics and data modeling for real apps.",
  },
];

const skills = [
  "HTML", "CSS", "Tailwind CSS", "JavaScript",
  "React", "Next.js", "Node.js", "Git", "REST APIs", "Nest.js", "TypeScript", "PostgreSQL", 
];

export default function AboutDetails() {
  return (
    <section className="relative overflow-hidden bg-[#050B1D] py-20">
      {/* background static */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050B1D] via-[#061533] to-[#07162F]" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px]" />

      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            What I Do
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            I focus on building modern web interfaces and improving full stack skills through practical projects.
          </p>
        </motion.div>

        {/* Highlights cards */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                variants={card}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sky-300">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{h.desc}</p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills + mini bio */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-indigo-400/15 blur-3xl" />
            <div className="flex items-center gap-3 text-white">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sky-300">
                <Sparkles size={18} />
              </span>
              <h3 className="text-xl font-semibold">A bit more about me</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              I enjoy building UI components, learning by doing, and improving code quality step by step.
              My goal is to ship complete apps with clean design and solid backend basics.
            </p>

            <div className="mt-5 space-y-3">
              {[
                "Strong focus on UI and layouts",
                "Learning backend and databases",
                "Consistent practice and improvement",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 text-white/80">
                  <BadgeCheck className="mt-0.5 text-sky-300" size={18} />
                  <span className="text-sm">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="flex items-center gap-3 text-white">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sky-300">
                <Code2 size={18} />
              </span>
              <h3 className="text-xl font-semibold">Skills</h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-white/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
