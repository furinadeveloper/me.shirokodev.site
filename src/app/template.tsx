"use client"
import ThemeProvider from "@/components/theme-provider";
import { Fira_Code } from "next/font/google";
const font = Fira_Code({ subsets: ["latin"] });

export default function Home({ children }: { children: React.ReactNode }) {
  return <body suppressHydrationWarning className={font.className}>
    <ThemeProvider
    attribute="data-mode"
    defaultTheme="dark"
    forcedTheme="dark"
    >
    {children}
    </ThemeProvider>
  </body>
}
