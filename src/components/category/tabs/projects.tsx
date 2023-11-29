"use client";

import Nextjs from "@/svgs/app/nextjs.svg";
import Tailwindcss from "@/svgs/app/tailwind.svg";
import Motion from "@/svgs/app/motion.svg";
import Image from "next/image";
import profileImage from "@/images/projects/profile.png";
import homepageImage from "@/images/projects/homepage.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({ delay: 1000, triggerOnce: true });
  return (
    <section ref={ref} className={`grid gap-4 grid-cols-1 lg:grid-cols-2 ${inView ? "fade-in" : "opacity-0"}`}>
      <Project
        title="shirokodev.site"
        desc="My home page website:3"
        img={homepageImage}
        link="https://shirokodev.site"
        repo="https://github.com/sunaookamishirokodev"
        use={[Nextjs, Tailwindcss]}
      />
      <Project
        title="profile.shirokodev.site"
        desc="My portfolio website:>"
        img={profileImage}
        link="/"
        repo="https://github.com/sunaookamishirokodev/profile.shirokodev.site"
        use={[Nextjs, Tailwindcss, Motion]}
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
    <section className="group mb-3 sm:mb-8 last:mb-0">
      <div className="overflow-hidden sm:pr-8 relative sm:h-[20rem] transition div-layout hover:bg-white/10">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col gap-2 h-full">
          <Link tabIndex={-1} href={link} target="_blank" className="text-2xl font-semibold">
            {title}
          </Link>
          <p className="leading-relaxed text-white/70">{desc}</p>
          <div className="flex flex-wrap mt-auto gap-2">
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
          <Link tabIndex={-1} href={repo} rel="noopener noreferrer" className="text-white/70 hover:text-white">
            Source code - read if cute
          </Link>
        </div>

        <Link
          tabIndex={-1}
          href={link}
          className="absolute hidden sm:block top-8 left-[60%] w-[28.25rem] shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2"
          target="_blank"
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
        </Link>
      </div>
    </section>
  );
}
