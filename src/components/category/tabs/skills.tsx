import HTML from "@/svgs/app/html.svg";
import CSS from "@/svgs/app/css.svg";
import SASS from "@/svgs/app/sass.svg";
import JS from "@/svgs/app/js.svg";
import TS from "@/svgs/app/ts.svg";
import NodeJS from "@/svgs/app/nodejs.svg";
import NextJS from "@/svgs/app/nextjs.svg";
import ReactJS from "@/svgs/app/reactjs.svg";
import Tailwind from "@/svgs/app/tailwind.svg";
import Bootstrap from "@/svgs/app/bootstrap.svg";
import CloudFlare from "@/svgs/app/cloudflare.svg";
import Github from "@/svgs/app/github.svg";
import Linux from "@/svgs/app/linux.svg";
import Windows from "@/svgs/app/windows.svg";
import VSCode from "@/svgs/app/vscode.svg";
import Motion from "@/svgs/app/motion.svg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref, inView } = useInView({ delay: 1000, triggerOnce: true });
  return (
    <section ref={ref} className={`flex flex-wrap justify-center gap-5 div-layout p-4 ${inView ? "fade-in" : "opacity-0"}`}>
      {[
        HTML,
        CSS,
        SASS,
        JS,
        TS,
        NodeJS,
        ReactJS,
        NextJS,
        Tailwind,
        Bootstrap,
        Motion,
        CloudFlare,
        Github,
        VSCode,
        Linux,
        Windows,
      ].map((icon, index) => (
        <Image key={index} src={icon} alt="" style={{ width: "80px", height: "auto" }} />
      ))}
    </section>
  );
}
