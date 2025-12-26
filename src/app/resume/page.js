"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";

const RESUME_PDF = "/resume.pdf"; // public/resume.pdf

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

export default function ResumePage() {
  return (
    <section className="relative overflow-hidden bg-[#050B1D] pt-28 pb-20">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050B1D] via-[#061533] to-[#07162F]" />
      <div className="absolute inset-0 -z-10 opacity-45 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_70%_35%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_30%_85%,rgba(99,102,241,0.16),transparent_55%)]" />

      {/* glows */}
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

      <div className="mx-auto w-full max-w-6xl px-4">
        {/* header */}
        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-white/70">
              <FileText size={18} className="text-sky-300" />
              <span className="text-sm">Curriculum Vitae</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Resume
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-white/70">
              View online or download the PDF.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={RESUME_PDF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:bg-white/10"
            >
              <ExternalLink size={18} />
              Open
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={RESUME_PDF}
              download="Resume.pdf"
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_-20px_rgba(56,189,248,0.6)] transition hover:bg-sky-400"
            >
              <Download size={18} />
              Download
            </motion.a>
          </motion.div>
        </motion.div>

        {/* preview */}
        <motion.div
          variants={cardIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_25px_90px_rgba(0,0,0,0.55)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-sky-400/18 via-indigo-400/10 to-fuchsia-400/10 blur-sm" />
          </div>

          <div className="relative p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-white">Preview</h2>
            <p className="mt-1 text-sm text-white/65">
              If preview does not load, use Open.
            </p>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/35">
              <div className="aspect-[16/10] w-full">
                {/* IMPORTANT: pdf link only */}
                <iframe title="Resume Preview" src={RESUME_PDF} className="h-full w-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
