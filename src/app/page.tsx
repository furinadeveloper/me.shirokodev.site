"use client";
import Category from "@/components/category";
import Header from "@/components/header";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function PageRoot() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const toggleTheme = (e: KeyboardEvent) => {
      if (e.key === "t" || e.key === "T") {
        setTheme(theme === "dark" ? "light" : "dark");
      }
    };
    document.onkeydown = (e: KeyboardEvent) => toggleTheme(e);
    return () => {
      document.onkeydown = (e: KeyboardEvent) => toggleTheme(e);
    };
  }, [setTheme, theme]);

  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Category />
    </div>
  );
}
