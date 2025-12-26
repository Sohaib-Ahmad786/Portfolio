"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Layers, Wind, Server, ArrowRight } from "lucide-react";

const wrap = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%)]" />

      {/* subtle stars */}
      <div className="absolute inset-0 -z-10 opacity-35">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* floating glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-52 top-10 -z-10 h-[560px] w-[560px] rounded-full bg-sky-500/12 blur-3xl"
        animate={{ x: [0, 22, 0], y: [0, -14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-52 bottom-0 -z-10 h-[640px] w-[640px] rounded-full bg-indigo-500/12 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-4 pt-28 md:pt-28">
        <div className="grid w-full grid-cols-1 items-center gap-14 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            variants={wrap}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
          >
            <motion.p variants={fadeUp} className="mb-3 text-lg text-white/70">
              Hi, I’m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Sohaib{" "}
              <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                Ahmad
              </span>
            </motion.h1>

            <motion.h2 variants={fadeUp} className="mt-4 text-xl font-medium text-sky-400">
              Full Stack Web Developer
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              I build clean, responsive, and scalable web applications using modern technologies.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-6 text-white/80">
              <span className="inline-flex items-center gap-2">
                <Code2 size={20} className="text-sky-400" /> React
              </span>
              <span className="inline-flex items-center gap-2">
                <Layers size={20} className="text-sky-400" /> Next.js
              </span>
              <span className="inline-flex items-center gap-2">
                <Wind size={20} className="text-sky-400" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-2">
                <Server size={20} className="text-sky-400" /> NestJS
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.45)] transition hover:bg-sky-400"
              >
                View Projects
                <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/10"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.35 }}
            className="relative hidden md:flex justify-center"
          >
            <div className="pointer-events-none absolute -inset-14 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute h-[460px] w-[460px] rounded-full border border-white/10" />

            <motion.div
              whileHover={{ scale: 1.02, rotate: -0.6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
            >
              <div className="pointer-events-none absolute inset-4 rounded-full ring-1 ring-white/10" />

              <div className="relative h-[420px] w-[420px] overflow-hidden rounded-full">
                <Image
                  src="/Sohaib.png"
                  alt="Sohaib Ahmad"
                  fill
                  priority
                  sizes="(min-width: 768px) 420px, 0px"
                  className="object-cover object-center"
                />
              </div>

              <div className="pointer-events-none absolute -top-24 left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
