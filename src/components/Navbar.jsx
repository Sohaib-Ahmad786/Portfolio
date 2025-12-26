"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Tasks", href: "/tasks" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = useMemo(() => {
    if (!mounted) return "dark";
    return theme === "system" ? systemTheme : theme;
  }, [mounted, theme, systemTheme]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={[
            "relative flex items-center justify-between",
            "rounded-2xl px-5 py-3",
            "border border-white/10 backdrop-blur-xl",
            "shadow-[0_12px_36px_rgba(0,0,0,0.40)]",
            "bg-slate-900/70 "
          ].join(" ")}
        >
          {/* glow divider line */}
          <div className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-sky-400/45 to-transparent" />

          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-3xl font-extrabold tracking-tight text-white">SA</span>
          </Link>

          {/* Center: Links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-[16px] text-white/85 hover:text-white transition"
                >
                  <span className={active ? "font-semibold text-white" : ""}>{item.label}</span>

                  {/* active glow underline */}
                  <span
                    className={[
                      "pointer-events-none absolute left-1/2 top-full mt-2 h-[2px] w-12 -translate-x-1/2 rounded-full",
                      "bg-gradient-to-r from-sky-400 via-sky-200 to-sky-400",
                      "shadow-[0_0_14px_rgba(56,189,248,0.70)]",
                      active ? "opacity-100" : "opacity-0",
                      "transition-opacity",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Sohaib-Ahmad786"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:grid h-10 w-10 place-items-center rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sohaib-ahmad-60b652353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:grid h-10 w-10 place-items-center rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="/resume"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2 text-sm font-semibold text-white
                         bg-sky-500/90 hover:bg-sky-400 transition
                         shadow-[0_0_18px_rgba(56,189,248,0.35)]"
            >
              Resume
            </a>

            <button
              type="button"
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="grid h-10 w-10 place-items-center rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="Toggle theme"
            >
              {currentTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="Menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="md:hidden absolute left-4 right-4 top-[72px] rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-4">
              <div className="flex flex-col gap-2">
                {NAV.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={[
                        "rounded-xl px-4 py-3 text-white/85 hover:text-white transition",
                        "hover:bg-white/10",
                        active ? "bg-white/10 text-white font-semibold" : "",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="mt-2 flex items-center gap-2">
                  <a
                    href="https://github.com/Sohaib-Ahmad786"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
