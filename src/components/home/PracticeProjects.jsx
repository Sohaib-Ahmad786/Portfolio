"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  CloudSun,
  NotebookPen,
  Briefcase,
  ArrowRight,
} from "lucide-react";

/* ===== Scroll animations (repeat on every scroll, NO bg flash) ===== */
const headingVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardInVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* ===== Bigger React icon ===== */
const ReactIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 841.9 595.3" className={className} fill="none">
    <g stroke="currentColor" strokeWidth="42">
      <ellipse cx="420.9" cy="296.5" rx="165" ry="64" />
      <ellipse
        cx="420.9"
        cy="296.5"
        rx="165"
        ry="64"
        transform="rotate(60 420.9 296.5)"
      />
      <ellipse
        cx="420.9"
        cy="296.5"
        rx="165"
        ry="64"
        transform="rotate(120 420.9 296.5)"
      />
    </g>
    <circle cx="420.9" cy="296.5" r="36" fill="currentColor" />
  </svg>
);

/* ===== Bigger Next.js icon ===== */
const NextIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 256 256" className={className} fill="currentColor">
    <path d="M128 24C70.6 24 24 70.6 24 128s46.6 104 104 104 104-46.6 104-104S185.4 24 128 24Zm55 167-35.9-51.9V191h-18V65h18l35.9 52.2V65H201v126Z" />
  </svg>
);

const techMeta = {
  React: { icon: ReactIcon },
  "Next.js": { icon: NextIcon },
};

const projects = [
  {
    title: "Calculator App",
    desc: "A simple calculator with basic operations.",
    tech: ["React"],
    icon: Calculator,
  },
  {
    title: "Weather Dashboard",
    desc: "A dynamic weather info app.",
    tech: ["React", "Next.js"],
    icon: CloudSun,
  },
  {
    title: "Notes App",
    desc: "A note taking app with local storage handling.",
    tech: ["React"],
    icon: NotebookPen,
  },
  {
    title: "Job Listings Page",
    desc: "A filterable job listing platform.",
    tech: ["React", "Next.js"],
    icon: Briefcase,
  },
];

function TechTag({ name }) {
  const Icon = techMeta?.[name]?.icon;
  return (
    <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
      {Icon ? (
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-sky-300 shadow-[0_10px_30px_-18px_rgba(56,189,248,0.8)]">
          <Icon className="h-6 w-6" />
        </span>
      ) : null}
      <span className="tracking-wide">{name}</span>
    </span>
  );
}

function GlowCard({ item }) {
  const CardIcon = item.icon;

  return (
    <motion.div
      variants={cardInVariants}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
    >
      {/* animated gradient border */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-sky-400/50 via-indigo-400/40 to-fuchsia-400/30 blur-sm" />
      </div>

      {/* inner background overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.07] to-transparent opacity-70" />

      {/* glow blobs */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl transition duration-300 group-hover:bg-sky-400/25" />
      <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl transition duration-300 group-hover:bg-indigo-400/25" />

      <div className="relative z-10 flex items-start gap-4">
        <motion.div
          whileHover={{ rotate: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sky-300"
        >
          <CardIcon size={22} />
        </motion.div>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>

            <motion.div
              initial={{ opacity: 0, x: -6 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="hidden md:flex items-center gap-2 text-xs text-white/70"
            >
              View <ArrowRight size={14} />
            </motion.div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {item.desc}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-5">
            {item.tech.map((t) => (
              <TechTag key={t} name={t} />
            ))}
          </div>
        </div>
      </div>

      {/* shine line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-70" />
    </motion.div>
  );
}

export default function PracticeProjectsSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#050B1D]">
      {/* IMPORTANT: background is NOT animated, so it will never turn white */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050B1D] via-[#061533] to-[#07162F]" />

      {/* stars */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.10),transparent_55%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Heading (animated) */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Practice Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Smaller learning tasks to enhance my skills
          </p>
        </motion.div>

        {/* Grid (animated + stagger) */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {projects.map((p) => (
            <GlowCard key={p.title} item={p} />
          ))}
        </motion.div>

        {/* Button (animated) */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="/tasks"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-gradient-to-b from-sky-500/70 to-indigo-500/60 px-7 py-3 text-sm font-medium text-white shadow-[0_18px_60px_-20px_rgba(56,189,248,0.55)] backdrop-blur transition hover:from-sky-400/80 hover:to-indigo-400/70"
          >
            View All Tasks
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
