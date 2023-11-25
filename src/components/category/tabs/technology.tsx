import { NextFont } from "next/dist/compiled/@next/font";
import HTML from "@/svgs/html.svg";
import CSS from "@/svgs/css.svg";
import JS from "@/svgs/js.svg";
import NodeJS from "@/svgs/nodejs.svg";
import NextJS from "@/svgs/nextjs.svg";
import ReactJS from "@/svgs/reactjs.svg";
import Tailwind from "@/svgs/_tailwind.svg";
import Bootstrap from "@/svgs/bootstrap.svg";
import CloudFlare from "@/svgs/cloudflare.svg";
import Github from "@/svgs/github.svg";
import Linux from "@/svgs/linux.svg";
import Windows from "@/images/technologies/windows.png";
import VSCode from "@/svgs/vscode.svg";
import Image from "next/image";

export default function Technology({ font }: { font: NextFont }) {
  return (
    <section className={`${font.className} fade-in flex flex-wrap gap-4 div-layout rounded-md p-4`}>
      {[
        {
          name: "HTML",
          icon: HTML,
        },
        {
          name: "CSS",
          icon: CSS,
        },
        {
          name: "JavaScript",
          icon: JS,
        },
        {
          name: "NodeJS",
          icon: NodeJS,
        },
        {
          name: "ReactJS",
          icon: ReactJS,
        },
        {
          name: "NextJS",
          icon: NextJS,
        },
        {
          name: "TailwindCSS",
          icon: Tailwind,
        },
        {
          name: "Bootstrap",
          icon: Bootstrap,
        },
        {
          name: "CloudFlare",
          icon: CloudFlare,
        },
        {
          name: "Github",
          icon: Github,
        },
        {
          name: "VSCode",
          icon: VSCode,
        },
        {
          name: "Linux",
          icon: Linux,
        },
        {
          name: "Windows",
          icon: Windows,
        },
      ].map((value, index) => {
        return (
          <div className="mx-auto" key={index}>
            <Image src={value.icon} alt={value.name} style={{ width: "80px", height: "auto" }} />
          </div>
        );
      })}
    </section>
  );
}
