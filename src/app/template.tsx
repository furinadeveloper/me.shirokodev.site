"use client";
import Noti from "@/components/noti";
import ThemeProvider from "@/components/theme-provider";
import { Fira_Code } from "next/font/google";
import { notify } from "@/components/noti";
const font = Fira_Code({ subsets: ["latin"] });

if (typeof window !== "undefined") {
  window.onload = () => {
    setTimeout(() => notify(`You can toggle dark&light theme when hit button <T> on your keyboard!`), 1000);
  };
}

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <body suppressHydrationWarning className={`${font.className} bg-[#f8fafc] dark:bg-[#000]`}>
      <ThemeProvider attribute="data-mode" defaultTheme="dark">
        {children}
        <Noti />
      </ThemeProvider>
    </body>
  );
}
