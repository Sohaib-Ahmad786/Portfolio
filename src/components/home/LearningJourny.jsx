"use client";

import { motion } from "framer-motion";
import {
  Atom,
  LayoutPanelTop,
  Server,
  Database,
  ArrowRight,
} from "lucide-react";

/* animation variants */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const journey = [
  {
    title: "Learning React",
    desc: "Started learning React and building reusable UI components.",
    icon: Atom,
  },
  {
    title: "Building Projects",
    desc: "Developed full stack applications to improve practical skills.",
    icon: LayoutPanelTop,
  },
  {
    title: "Exploring Backend",
    desc: "Learned backend technologies like Node.js and APIs.",
    icon: Server,
  },
  {
    title: "Working with Databases",
    desc: "Integrated PostgreSQL for scalable data storage.",
    icon: Database,
  },
];

export default function LearningJourney() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050B1D] via-[#061533] to-[#07162F]" />

      {/* stars */}
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-7xl px-4">
        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            My Learning Journey
          </h2>
          <p className="mt-4 text-white/70">
            Follow my progress as I continue to grow
          </p>
        </motion.div>

        {/* timeline */}
        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ y: -8 }}
                  className="relative text-center"
                >
                  {/* dot */}
                  <div className="mx-auto mb-6 h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.9)]" />

                  {/* card */}
                  <div className="group relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:border-white/20">
                    {/* glow */}
                    <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />

                    {/* icon */}
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-300">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* button */}
        {/* <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-2xl bg-sky-500 px-7 py-3 text-sm font-medium text-white shadow-[0_18px_60px_-20px_rgba(56,189,248,0.7)] transition hover:bg-sky-400"
          >
            View All Practice Work
            <ArrowRight size={18} />
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
}
