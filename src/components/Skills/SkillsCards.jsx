// components/Skills/SkillsOverview.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

function ReactIcon(props) {
  return (
    <svg viewBox="0 0 128 128" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="128" y2="128">
          <stop stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="1" />
        </linearGradient>
      </defs>

      <circle cx="64" cy="64" r="10" fill="url(#rg)" opacity="0.95" />
      <path
        d="M64 24c18 0 34.5 3.3 46.2 9.2 9.2 4.7 14.3 10.6 14.3 16.8s-5.1 12.1-14.3 16.8C98.5 72.7 82 76 64 76S29.5 72.7 17.8 66.8C8.6 62.1 3.5 56.2 3.5 50s5.1-12.1 14.3-16.8C29.5 27.3 46 24 64 24Z"
        stroke="url(#rg)"
        strokeWidth="4"
        opacity="0.55"
      />
      <path
        d="M38.5 35.2c9-15.7 20.5-28 32.1-34.2 9.2-4.9 16.9-5.8 22.2-2.7 5.3 3.1 7.7 10.5 6.6 21.1-1.4 13.4-7.2 30-16.2 45.7s-20.5 28-32.1 34.2c-9.2 4.9-16.9 5.8-22.2 2.7-5.3-3.1-7.7-10.5-6.6-21.1 1.4-13.4 7.2-30 16.2-45.7Z"
        stroke="url(#rg)"
        strokeWidth="4"
        opacity="0.45"
      />
      <path
        d="M38.5 92.8c-9-15.7-14.8-32.3-16.2-45.7-1.1-10.6 1.3-18 6.6-21.1 5.3-3.1 13-2.2 22.2 2.7 11.6 6.2 23.1 18.5 32.1 34.2s14.8 32.3 16.2 45.7c1.1 10.6-1.3 18-6.6 21.1-5.3 3.1-13 2.2-22.2-2.7-11.6-6.2-23.1-18.5-32.1-34.2Z"
        stroke="url(#rg)"
        strokeWidth="4"
        opacity="0.45"
      />
    </svg>
  );
}

function NextIcon(props) {
  return (
    <svg viewBox="0 0 128 128" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="ng" x1="0" y1="0" x2="128" y2="128">
          <stop stopColor="#e879f9" stopOpacity="1" />
          <stop offset="1" stopColor="#60a5fa" stopOpacity="1" />
        </linearGradient>
      </defs>

      <path
        d="M30 30h44c13.3 0 24 10.7 24 24v20c0 13.3-10.7 24-24 24H30c-13.3 0-24-10.7-24-24V54c0-13.3 10.7-24 24-24Z"
        fill="url(#ng)"
        opacity="0.08"
      />
      <path
        d="M30 30h44c13.3 0 24 10.7 24 24v20c0 13.3-10.7 24-24 24H30c-13.3 0-24-10.7-24-24V54c0-13.3 10.7-24 24-24Z"
        stroke="url(#ng)"
        strokeWidth="4"
        opacity="0.6"
      />
      <path
        d="M34 44v40"
        stroke="url(#ng)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M94 44v40"
        stroke="url(#ng)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M42 46l44 64"
        stroke="url(#ng)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  );
}

function ServerIcon(props) {
  return (
    <svg viewBox="0 0 128 128" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="128" y2="128">
          <stop stopColor="#34d399" />
          <stop offset="0.5" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path
        d="M22 38c0-6.5 18-12 42-12s42 5.5 42 12-18 12-42 12-42-5.5-42-12Z"
        stroke="url(#sg)"
        strokeWidth="4"
        opacity="0.75"
      />
      <path
        d="M22 38v18c0 6.5 18 12 42 12s42-5.5 42-12V38"
        stroke="url(#sg)"
        strokeWidth="4"
        opacity="0.55"
      />
      <path
        d="M22 56v18c0 6.5 18 12 42 12s42-5.5 42-12V56"
        stroke="url(#sg)"
        strokeWidth="4"
        opacity="0.55"
      />
      <path
        d="M22 74v18c0 6.5 18 12 42 12s42-5.5 42-12V74"
        stroke="url(#sg)"
        strokeWidth="4"
        opacity="0.55"
      />
      <path
        d="M40 45h14M40 63h14M40 81h14"
        stroke="url(#sg)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg viewBox="0 0 128 128" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="dg" x1="0" y1="0" x2="128" y2="128">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      <path
        d="M20 36c0-7.5 19.7-13.5 44-13.5S108 28.5 108 36 88.3 49.5 64 49.5 20 43.5 20 36Z"
        fill="url(#dg)"
        opacity="0.08"
      />
      <path
        d="M20 36c0-7.5 19.7-13.5 44-13.5S108 28.5 108 36 88.3 49.5 64 49.5 20 43.5 20 36Z"
        stroke="url(#dg)"
        strokeWidth="4"
        opacity="0.75"
      />
      <path
        d="M20 36v18c0 7.5 19.7 13.5 44 13.5S108 61.5 108 54V36"
        stroke="url(#dg)"
        strokeWidth="4"
        opacity="0.55"
      />
      <path
        d="M20 54v18c0 7.5 19.7 13.5 44 13.5S108 79.5 108 72V54"
        stroke="url(#dg)"
        strokeWidth="4"
        opacity="0.55"
      />
      <path
        d="M20 72v18c0 7.5 19.7 13.5 44 13.5S108 97.5 108 90V72"
        stroke="url(#dg)"
        strokeWidth="4"
        opacity="0.55"
      />
    </svg>
  );
}

function StarLayer({ className = "", size = 30, opacity = 0.55, offset = "0px 0px" }) {
  return (
    <motion.div
      aria-hidden="true"
      className={"absolute inset-0 " + className}
      style={{
        opacity,
        backgroundImage: "radial-gradient(rgba(255,255,255,.85) 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: offset,
      }}
      animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function NeonBorder() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[34px]"
      style={{
        background:
          "linear-gradient(90deg, rgba(34,211,238,.35), rgba(99,102,241,.25), rgba(232,121,249,.35))",
      }}
      animate={{ opacity: [0.25, 0.55, 0.25] }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease, staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
};

export default function SkillsOverview() {
  return (
    <section className="relative isolate w-full overflow-hidden py-14 md:py-20 ">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#050617]" />

      {/* Stars */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 30%, rgba(120,140,255,.22), transparent 46%)," +
              "radial-gradient(circle at 78% 76%, rgba(170,90,255,.18), transparent 52%)," +
              "radial-gradient(circle at 55% 58%, rgba(60,90,255,.14), transparent 58%)",
          }}
        />
        <StarLayer size={36} opacity={0.55} offset="0px 0px" />
        <StarLayer size={22} opacity={0.35} offset="10px 14px" />
      </div>

      {/* Light streaks like screenshot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 -z-10 rounded-full bg-gradient-to-br from-cyan-400/40 via-indigo-500/20 to-transparent blur-3xl"
        animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-10 h-96 w-96 -z-10 rounded-full bg-gradient-to-br from-fuchsia-400/25 via-indigo-500/18 to-cyan-500/12 blur-3xl"
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute left-1/2 top-12 h-[2px] w-[560px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[0.5px]" />

      <div className="mx-auto w-full max-w-6xl px-4 mt-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* Outer glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-12 rounded-[46px] bg-gradient-to-r from-cyan-400/18 via-indigo-400/14 to-fuchsia-400/18 blur-3xl"
            animate={{ opacity: [0.45, 0.8, 0.45] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Main glass panel */}
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_25px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <NeonBorder />
            <div className="pointer-events-none absolute inset-[1px] rounded-[33px] bg-black/20" />

            {/* Moving shimmer */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -left-1/2 top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-40%", "220%"] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "linear" }}
              style={{ filter: "blur(2px)" }}
            />

            {/* Corner flare */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full bg-gradient-to-br from-cyan-400/60 via-indigo-500/20 to-transparent blur-2xl" />

            <div className="relative px-6 py-10 md:px-12 md:py-14">
              <motion.h2
                variants={item}
                className="text-center text-3xl md:text-5xl font-semibold tracking-tight text-white"
              >
                Skills Overview
              </motion.h2>

              <motion.p
                variants={item}
                className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base leading-relaxed text-white/70"
              >
                My core technologies and tools as a full stack developer.
                <br />
                Building with modern frontend frameworks and exploring
                <br />
                backend systems.
              </motion.p>

              <motion.div variants={item} className="mt-10 md:mt-12">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
                  {/* Frontend */}
                  <SkillCard
                    title="Frontend"
                    glow="from-cyan-400/25 via-indigo-500/12 to-fuchsia-400/18"
                    orbA="bg-cyan-400/20"
                    orbB="bg-fuchsia-400/16"
                    icon={
                      <div className="flex items-center justify-center gap-4">
                        <AnimatedIcon>
                          <ReactIcon className="h-16 w-16 md:h-20 md:w-20 drop-shadow-[0_0_28px_rgba(34,211,238,0.35)]" />
                        </AnimatedIcon>
                        <AnimatedIcon delay={0.08}>
                          <NextIcon className="h-16 w-16 md:h-20 md:w-20 drop-shadow-[0_0_28px_rgba(232,121,249,0.22)]" />
                        </AnimatedIcon>
                      </div>
                    }
                  />

                  {/* Backend */}
                  <SkillCard
                    title="Backend"
                    glow="from-emerald-400/16 via-yellow-300/10 to-fuchsia-400/14"
                    orbA="bg-emerald-400/14"
                    orbB="bg-yellow-300/12"
                    icon={
                      <AnimatedIcon>
                        <ServerIcon className="h-16 w-16 md:h-20 md:w-20 drop-shadow-[0_0_28px_rgba(16,185,129,0.22)]" />
                      </AnimatedIcon>
                    }
                  />

                  {/* Databases */}
                  <SkillCard
                    title="Databases"
                    glow="from-indigo-400/18 via-violet-400/10 to-cyan-400/14"
                    orbA="bg-indigo-400/18"
                    orbB="bg-cyan-400/12"
                    icon={
                      <AnimatedIcon>
                        <DatabaseIcon className="h-16 w-16 md:h-20 md:w-20 drop-shadow-[0_0_28px_rgba(99,102,241,0.22)]" />
                      </AnimatedIcon>
                    }
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom glow */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-7 left-1/2 h-28 w-[92%] -translate-x-1/2 rounded-[34px] bg-gradient-to-r from-cyan-400/12 via-indigo-400/10 to-fuchsia-400/12 blur-2xl"
            animate={{ opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedIcon({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease, delay }}
      animate={{ y: [0, -6, 0] }}
      style={{ willChange: "transform" }}
      // separate loop so it feels alive
      {...{
        transition: { duration: 0.6, ease, delay },
      }}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function SkillCard({ title, icon, glow, orbA, orbB }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_18px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl"
    >
      <div className={"pointer-events-none absolute inset-0 bg-gradient-to-br " + glow} />

      <motion.div
        aria-hidden="true"
        className={"pointer-events-none absolute -left-16 -bottom-16 h-52 w-52 rounded-full blur-3xl " + orbA}
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className={"pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full blur-3xl " + orbB}
        animate={{ opacity: [0.45, 0.85, 0.45], scale: [1, 1.06, 1] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center">{icon}</div>

        <motion.p
          className="mt-5 text-lg font-medium text-white/85"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease }}
        >
          {title}
        </motion.p>

        <div className="mt-6 h-px w-20 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10"
        animate={{ opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
