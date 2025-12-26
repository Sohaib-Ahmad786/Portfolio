"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Code2, GraduationCap } from "lucide-react";

/**
 * ABOUT HERO (navbar ke bilkul nichay)
 * Button removed
 * Same glass + starry vibe
 * Full framer-motion animations
 *
 * Put your image in: /public/about/about-hero.png
 * (or change src below)
 */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const floaty = {
  animate: {
    y: [0, -10, 0],
    x: [0, 8, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#050B1D] py-20 sm:py-24">
      {/* Background (static, no flash) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050B1D] via-[#061533] to-[#07162F]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-35 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Soft moving glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl"
        variants={floaty}
        animate="animate"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
        variants={floaty}
        animate="animate"
      />

      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_30px_110px_rgba(0,0,0,0.55)]"
        >
          {/* top and bottom shine line */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

          <div className="relative grid gap-10 p-8 sm:p-12 md:grid-cols-[320px_1fr] md:items-center">
            {/* Left: Profile circle + glow */}
            <motion.div variants={fadeUp} className="relative">
              <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64">
                {/* outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/50 via-indigo-400/40 to-fuchsia-400/30 blur-md opacity-80" />
                <div className="absolute inset-[10px] rounded-full bg-[#061533]" />

                {/* image */}
                <div className="absolute inset-[14px] overflow-hidden rounded-full border border-white/10">
                  <Image
                    src="/projects/AboutMe.jpeg"
                    alt="About profile"
                    fill
                    className="object-cover opacity-95"
                    sizes="260px"
                    priority
                  />
                </div>

                {/* tiny sparkles */}
                <motion.div
                  aria-hidden
                  className="absolute -right-2 top-8 grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sky-300"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles size={18} />
                </motion.div>
              </div>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-center text-sm text-white/65"
              >
                Full Stack Web Developer · Portfolio
              </motion.p>
            </motion.div>

            {/* Right: Text */}
            <div className="text-center md:text-left">
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
              >
                About Me
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-2xl text-base leading-relaxed text-white/70"
              >
                I build clean and modern web experiences with a strong focus on
                UI quality, performance, and real world usability. I enjoy
                learning new technologies and turning ideas into fast, beautiful
                products.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-2xl text-base leading-relaxed text-white/70"
              >
                I’m currently improving my full stack skills by building
                practical projects, exploring backend systems, and working with
                databases to ship complete applications.
              </motion.p>

              {/* Feature chips */}
              <motion.div
                variants={fadeUp}
                className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start"
              >
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  <Code2 size={18} className="text-sky-300" />
                  React · Next.js · Tailwind
                </span>
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  <GraduationCap size={18} className="text-sky-300" />
                  Learning by building projects
                </span>
              </motion.div>

              {/* No button (removed as requested) */}
              <motion.div variants={fadeUp} className="mt-8">
                <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent md:mx-0 mx-auto" />
              </motion.div>

              {/* Quick stats (optional, looks premium) */}
              <motion.div
                variants={fadeUp}
                className="mt-6 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-3"
              >
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-2xl font-semibold text-white">10+</p>
                  <p className="mt-1 text-sm text-white/65">UI components</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-2xl font-semibold text-white">6+</p>
                  <p className="mt-1 text-sm text-white/65">Projects built</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 col-span-2 md:col-span-1">
                  <p className="text-2xl font-semibold text-white">2025</p>
                  <p className="mt-1 text-sm text-white/65">Active learning</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
