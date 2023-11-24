"use client";
import Noti from "@/components/noti";
import { Fira_Code } from "next/font/google";
const font = Fira_Code({ subsets: ["latin"] });

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <body suppressHydrationWarning className={`${font.className} bg-[#f8fafc] dark:bg-[#000]`}>
        {children}
        <Noti />
    </body>
  );
}
