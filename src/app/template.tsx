import Noti from "@/components/noti";
import { Fira_Code } from "next/font/google";
const font = Fira_Code({ subsets: ["latin"] });

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <body className={`${font.className} bg-black`}>
      {children}
      <Noti />
    </body>
  );
}
