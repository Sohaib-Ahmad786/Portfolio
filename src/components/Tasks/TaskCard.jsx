"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3, Flame } from "lucide-react";

const cardAnim = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const statusMap = {
  "To Do": { Icon: Clock3, cls: "text-white/70 bg-white/5 border-white/10" },
  "In Progress": { Icon: Flame, cls: "text-sky-300 bg-sky-500/10 border-sky-400/20" },
  Done: { Icon: CheckCircle2, cls: "text-emerald-300 bg-emerald-500/10 border-emerald-400/20" },
};

export default function TaskCard({ task }) {
  const { Icon, cls } = statusMap[task.status];

  return (
    <motion.div
      variants={cardAnim}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-sky-400/35 via-indigo-400/25 to-fuchsia-400/20 blur-sm" />
      </div>

      {/* content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">
            {task.title}
          </h3>

          <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${cls}`}>
            <Icon size={14} />
            {task.status}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/70">
          {task.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {task.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-200"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="text-xs text-white/60">{task.eta}</span>
        </div>

        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </motion.div>
  );
}
