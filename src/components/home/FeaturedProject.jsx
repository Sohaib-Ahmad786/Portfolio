"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layers3, Flame, Database, Atom, ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Task Management App",
    description: "A full stack task management application to organize and track work.",
    image: "/projects/task.png.png",
    stack: [
      { label: "Next.js", Icon: Layers3 },
      { label: "NestJS", Icon: Flame },
      { label: "PostgreSQL", Icon: Database },
    ],
    href: "/projects",
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce platform for discovering and purchasing products.",
    image: "/projects/ecommerce.png",
    stack: [
      { label: "React", Icon: Atom },
      { label: "NestJS", Icon: Flame },
      { label: "PostgreSQL", Icon: Database },
    ],
    href: "/projects",
  },
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

export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background same style */}
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
          backgroundSize: "46px 46px",
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg"
          >
            Here are some of my recent work
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {PROJECTS.map((p) => (
            <motion.div key={p.title} variants={cardIn}>
              <Link
                href={p.href}
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.50)]"
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="relative"
                >
                  {/* Glow border */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 ring-1 ring-sky-400/50 shadow-[0_0_40px_rgba(56,189,248,0.25)] transition group-hover:opacity-100" />

                  {/* Top image */}
                  <div className="relative h-56 w-full">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/25 to-slate-950/65" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-extrabold text-white">{p.title}</h3>
                      <span className="mt-1 hidden items-center gap-2 text-sm text-white/70 md:flex">
                        View <ArrowRight size={16} />
                      </span>
                    </div>

                    <p className="mt-3 max-w-xl text-white/70">{p.description}</p>

                    {/* Stack row */}
                    <div className="mt-6 flex flex-wrap items-center gap-8 text-white/80">
                      {p.stack.map(({ label, Icon }) => (
                        <div key={label} className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-sky-400" />
                          <span className="text-sm font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom blue glow line */}
                  <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/55 to-transparent opacity-0 transition group-hover:opacity-100" />
                </motion.div>
              </Link>
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
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.45)] transition hover:bg-sky-400"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
