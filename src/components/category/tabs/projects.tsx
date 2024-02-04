"use client";

import Nextjs from "@/svgs/app/nextjs.svg";
import Tailwindcss from "@/svgs/app/tailwind.svg";
import Motion from "@/svgs/app/motion.svg";
import Socket from "@/svgs/app/socket.io.svg";
import Djs from "@/svgs/app/djs.svg";
import Image from "next/image";
import profileImage from "@/images/projects/profile.png";
import homepageImage from "@/images/projects/homepage.png";
import owoSelfBot from "@/images/projects/owo-selfbot.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { config } from "dotenv";
config();

export default function Projects() {
  const { ref, inView } = useInView({ delay: 1000, triggerOnce: true });
  
  return (
    <section
      ref={ref}
      className={`grid grid-cols-1 gap-4 lg:grid-cols-2 ${
        inView ? "fade-in" : "opacity-0"
      }`}
    >
      <Project
        title="shirokodev.site"
        desc="My home page website:3"
        img={homepageImage}
        link="https://shirokodev.site"
        repo="https://github.com/sunaookamishirokodev"
        use={[Nextjs, Tailwindcss]}
      />
      <Project
        title="me.shirokodev.site"
        desc="My portfolio website:>"
        img={profileImage}
        link="/"
        repo="https://github.com/sunaookamishirokodev/me.shirokodev.site"
        use={[Nextjs, Tailwindcss, Motion, Socket]}
      />
      <Project
        title="owo-selfbot"
        desc="A tool to play OwO' automatic"
        img={owoSelfBot}
        link="https://github.com/sunaookamishirokodev/owo-selfbot"
        repo="https://github.com/sunaookamishirokodev/owo-selfbot"
        use={[Djs]}
      />
    </section>
  );
}

function Project({
  title,
  desc,
  img,
  link,
  repo,
  use,
}: {
  title: string;
  desc: string;
  img: any;
  link: string;
  repo: string;
  use: StaticImport[];
}) {
  return (
    <section className="group mb-3 last:mb-0 sm:mb-8">
      <div className="div-layout relative overflow-hidden transition hover:bg-white/10 sm:h-[20rem] sm:pr-8">
        <div className="flex h-full max-w-[65%] flex-col gap-2 px-5 pb-7 pt-4 sm:pl-10 sm:pr-2 sm:pt-10">
          <Link
            tabIndex={-1}
            href={link}
            target="_blank"
            className="text-2xl font-semibold"
          >
            {title}
          </Link>
          <p className="leading-relaxed text-white/70">{desc}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {use.map((tag, index) => (
              <Image
                key={index}
                src={tag}
                alt=""
                className="opacity-30 hover:opacity-100"
                style={{ width: "30px", height: "auto" }}
              />
            ))}
          </div>
          <Link
            tabIndex={-1}
            href={repo}
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white"
          >
            Source code - read if cute
          </Link>
        </div>

        <div
          tabIndex={-1}
          className="absolute left-[60%] top-8 hidden w-[28.25rem] shadow-2xl transition
        group-hover:-translate-x-3 
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-hover:scale-[1.04]
        sm:block"
        >
          <Image
            aria-label={`Preview ${link}`}
            src={img}
            alt=""
            width={0}
            height={0}
            quality={95}
            className="rounded-l-md"
          />
        </div>
      </div>
    </section>
  );
}
