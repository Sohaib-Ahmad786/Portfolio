"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, CheckCircle2, Download } from "lucide-react";

/* ===== animation variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ===== links ===== */
const GITHUB_URL = "https://github.com/Sohaib-Ahmad786";
const LINKEDIN_URL = "https://www.linkedin.com/in/sohaib-ahmad-60b652353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"; // <-- apna real LinkedIn URL yahan paste karo
// const EMAIL_LINK = "mailto:sohaibahmad.dev@gmail.com?subject=Portfolio%20Contact";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-slate-950">
      {/* background (NOT animated) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_60%)]" />

      {/* particles */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(56,189,248,0.18) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          backgroundPosition: "12px 18px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        {/* CTA CARD */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_90px_rgba(0,0,0,0.55)]"
        >
          {/* glow lines */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/55 to-transparent" />
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/55 to-transparent" />

          {/* slow floating glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-20 rounded-full bg-sky-500/10 blur-3xl"
            animate={{ x: [0, 30, 0], y: [0, -18, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative p-8 sm:p-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="text-center"
            >
              <h3 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to work together?</h3>
              <p className="mx-auto mt-3 max-w-2xl text-white/70">
                Open for internships, freelance projects, and collaboration.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="rounded-xl bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(56,189,248,0.45)] transition hover:bg-sky-400"
              >
                Contact Me
              </Link>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl transition hover:bg-white/10"
              >
                <Download size={18} />
                Download Resume
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&to=sohaibahmad.dev@gmail.com&su=Portfolio%20Contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-slate-900/35 px-4 py-3 text-white/80 backdrop-blur-xl transition hover:bg-slate-900/45"
                aria-label="Email Sohaib"
              >
                <Mail size={18} className="text-sky-400" />
                <span className="text-sm">sohaibahmad.dev@gmail.com</span>
              </a>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/35 px-4 py-3 text-white/80 backdrop-blur-xl">
                <CheckCircle2 size={18} className="text-sky-400" />
                <span className="text-sm">Available for work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xl font-bold text-white">Sohaib Ahmad</p>
            <p className="mt-1 text-white/65">Full Stack Web Developer</p>
          </div>

          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-xl transition hover:bg-white/10 hover:text-white"
            >
              <Github size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-xl transition hover:bg-white/10 hover:text-white"
            >
              <Linkedin size={20} />
            </a>

            {/* Email */}
            <a
  href="https://mail.google.com/mail/?view=cm&to=sohaibahmad.dev@gmail.com&su=Portfolio%20Contact"
  rel="noreferrer"
  aria-label="Email"
  className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-xl transition hover:bg-white/10 hover:text-white"
>
  <Mail size={20} />
</a>


            <button
              onClick={scrollTop}
              className="ml-2 grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-xl transition hover:bg-white/10 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </motion.div>

        <div className="mt-8 text-center text-white/55">© {year} Sohaib Ahmad</div>
      </div>
    </footer>
  );
}
