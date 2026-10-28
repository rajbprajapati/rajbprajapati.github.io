"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to dark mode for distributed systems aesthetic
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${className}`}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-xl transition-all duration-200 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 shadow-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-800 dark:hover:text-white ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45 duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-500 transition-transform hover:-rotate-12 duration-300" />
      )}
    </button>
  );
}
