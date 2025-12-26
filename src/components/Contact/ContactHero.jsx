"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

/* ===== animations ===== */
const wrap = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardIn = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ContactHero() {
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onSubmit = async (e) => {
  e.preventDefault();
  setStatus({ type: "loading", msg: "Sending..." });

  const form = e.currentTarget;

  const payload = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.ok) {
      setStatus({
        type: "error",
        msg: data?.error || `Failed to send. Status ${res.status}`,
      });
      return;
    }

    setStatus({
      type: "success",
      msg: `Email sent successfully. }`,
    });

    form.reset();
  } catch (err) {
    setStatus({ type: "error", msg: "Network error. Please try again." });
  } finally {
    setTimeout(() => setStatus({ type: "idle", msg: "" }), 3000);
  }
};


  return (
    <section className="relative overflow-hidden bg-[#050B1D] py-20 sm:py-24 ">
      {/* static background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050B1D] via-[#061533] to-[#07162F]" />
      <div className="absolute inset-0 -z-10 opacity-45 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] " />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_70%_35%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_30%_85%,rgba(99,102,241,0.16),transparent_55%)]" />

      {/* floating glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-44 top-10 h-[520px] w-[520px] rounded-full bg-sky-400/12 blur-3xl"
        animate={{ x: [0, 22, 0], y: [0, -14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-52 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-400/12 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-6xl px-4">
        {/* heading */}
        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="text-center"
        >
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-semibold text-white mt-10">
            Contact
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-white/70">
            Want to work together? Send a message and I will reply as soon as possible.
          </motion.p>
        </motion.div>

        {/* content grid */}
        <motion.div
          variants={wrap}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          {/* form card */}
          <motion.div
            variants={cardIn}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8"
          >
            {/* neon border on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-sky-400/18 via-indigo-400/10 to-fuchsia-400/10 blur-sm" />
            </div>

            <div className="relative z-10">
              <h2 className="text-xl font-semibold text-white">Send a message</h2>
              <p className="mt-2 text-sm text-white/70">
                Fill out the form and I will get back to you.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm text-white/75">Full name</span>
                    <input
                      required
                      name="name"
                      className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 placeholder:text-white/40 outline-none focus:border-sky-400/30"
                      placeholder="Enter Your Name"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm text-white/75">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 placeholder:text-white/40 outline-none focus:border-sky-400/30"
                      placeholder="your@example.com"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm text-white/75">Subject</span>
                  <input
                    required
                    name="subject"
                    className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white/90 placeholder:text-white/40 outline-none focus:border-sky-400/30"
                    placeholder="Project, internship, collaboration..."
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm text-white/75">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/90 placeholder:text-white/40 outline-none focus:border-sky-400/30"
                    placeholder="Write your message..."
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_-20px_rgba(56,189,248,0.6)] transition hover:bg-sky-400 disabled:opacity-60"
                    disabled={status.type === "loading"}
                  >
                    <Send size={18} />
                    {status.type === "loading" ? "Sending..." : "Send Message"}
                  </motion.button>

                 
                 {status.type !== "idle" ? (
  <span
    className={`text-sm ${
      status.type === "success"
        ? "text-emerald-300"
        : status.type === "error"
        ? "text-red-300"
        : "text-white/70"
    }`}
  >
    {status.msg}
  </span>
) : (
  <span className="text-sm text-white/55">
    You can also reach me directly below.
  </span>
)}

                </div>
              </form>
            </div>
          </motion.div>

          {/* info card */}
          <motion.div
            variants={cardIn}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-60 w-60 rounded-full bg-sky-400/12 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -bottom-24 h-60 w-60 rounded-full bg-indigo-400/12 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-xl font-semibold text-white">Contact info</h2>
              <p className="mt-2 text-sm text-white/70">
                Quick links and direct contact details.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="mailto:ibrahim.m@example.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:bg-white/10"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-sky-300">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white/90">Email</p>
                    <p className="text-sm text-white/60">sohaibahmad.dev@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+0000000000"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:bg-white/10"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-sky-300">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white/90">Phone</p>
                    <p className="text-sm text-white/60">+923166073020</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-sky-300">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white/90">Location</p>
                    <p className="text-sm text-white/60">Pakistan</p>
                  </div>
                </div>
              </div>

              {/* socials */}
              <div className="mt-6">
                <p className="text-sm font-medium text-white/80">Social</p>
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-xl transition hover:bg-white/10 hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 text-white/80 backdrop-blur-xl transition hover:bg-white/10 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* small note */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <p className="mt-5 text-sm text-white/60">
                Prefer WhatsApp or email? Message me and I will respond quickly.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
