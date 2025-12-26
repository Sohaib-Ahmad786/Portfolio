"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Atom, Layers3, Wind, Flame, Database } from "lucide-react";

const STACK = [
  { name: "React", Icon: Atom },
  { name: "Next.js", Icon: Layers3 },
  { name: "Tailwind CSS", Icon: Wind },
  { name: "NestJS", Icon: Flame },
  { name: "PostgreSQL", Icon: Database },
];

const wrap = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const cardIn = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function TechStack() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]" />

      {/* Starry particles */}
      <div
        className="absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          backgroundPosition: "0 0",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(56,189,248,0.18) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
          backgroundPosition: "12px 18px",
        }}
      />

      {/* soft floating glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-56 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-sky-500/10 blur-3xl"
        animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-56 bottom-0 -z-10 h-[560px] w-[560px] rounded-full bg-indigo-500/10 blur-3xl"
        animate={{ x: [0, -16, 0], y: [0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Title */}
        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            My Tech Stack
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg"
          >
            Technologies I use to build scalable web applications
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {STACK.map(({ name, Icon }) => (
            <motion.div
              key={name}
              variants={cardIn}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              {/* glow border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-sky-400/50 shadow-[0_0_30px_rgba(56,189,248,0.25)] transition group-hover:opacity-100" />

              <div className="flex flex-col items-center gap-4 text-center">
                <motion.div
                  whileHover={{ rotate: 3 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-slate-900/40"
                >
                  <Icon className="h-8 w-8 text-sky-400" />
                </motion.div>

                <p className="text-lg font-semibold text-white">{name}</p>
              </div>

              {/* bottom blue glow line */}
              <div className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="mt-12 flex justify-center"
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/skills"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.45)] transition hover:bg-sky-400"
            >
              View All Skills
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
