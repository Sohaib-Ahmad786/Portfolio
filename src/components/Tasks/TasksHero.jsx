"use client";

import { motion } from "framer-motion";
import TaskCard from "./TaskCard";
import { tasksData } from "@/data/taskData";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TasksHero() {
  return (
    <section className="relative overflow-hidden bg-[#050B1D] py-24  ">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050B1D] via-[#061533] to-[#07162F]" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-6xl px-4 mt-16">
        {/* heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            Tasks
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Small learning tasks and action items that keep the portfolio moving forward.
          </p>
        </motion.div>

        {/* grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {tasksData.map((task) => (
            <TaskCard key={task.title} task={task} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
