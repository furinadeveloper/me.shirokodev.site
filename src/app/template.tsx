import { JetBrains_Mono } from "next/font/google";
const font = JetBrains_Mono({ subsets: ["latin"] });

export default function Home({ children }: { children: React.ReactNode }) {
  return <body className={`${font.className} bg-black`}>{children}</body>;
}
