import Link from "next/link";
import Image from "next/image";
import watching from "@/svgs/watching.svg";
import stars from "@/svgs/stars.svg";
import forks from "@/svgs/forks.svg";
import nextjs from "@/svgs/nextjs.svg";
import tailwindcss from "@/svgs/tailwind.svg";
import { NextFont } from "next/dist/compiled/@next/font";
export default function Projects({ font }: { font?: NextFont }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {[
        {
          name: "shirokodev.site",
          link: "https://shirokodev.site",
          repo: "https://github.com/sunaookamishirokodev/shirokodev.site",
          framework: [nextjs, tailwindcss],
          desc: "My home page:3",
          state: {
            forks: 0,
            stars: 0,
            watching: 0,
          },
          pic: "https://api.screenshotone.com/take?access_key=57RmFbpmx99yig&url=https%3A%2F%2Fshirokodev.site&viewport_height=680&device_scale_factor=1&format=webp&block_ads=true&block_cookie_banners=true&block_trackers=true&cache=false",
        },
        {
          name: "profile.shirokodev.site",
          link: "https://profile.shirokodev.site",
          repo: "https://github.com/sunaookamishirokodev/profile.shirokodev.site",
          framework: [nextjs, tailwindcss],
          desc: "My personal portfolio website:>",
          state: {
            forks: 0,
            stars: 0,
            watching: 0,
          },
          pic: "https://api.screenshotone.com/take?access_key=57RmFbpmx99yig&url=https%3A%2F%2Fprofile.shirokodev.site&viewport_height=680&device_scale_factor=1&format=webp&block_ads=true&block_cookie_banners=true&block_trackers=true&cache=false",
        },
      ].map((item, index) => {
        return (
          <div
            key={index}
            className="group fade-in p-3 div-layout border rounded-md h-96  transition-transform hover:-translate-y-2"
          >
            <Image
              src={item.pic}
              alt={`Screen shot of project: ${item.name}`}
              priority
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-md"
            />
            <div className={`${font?.className} mt-3`}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopenner noreferrer"
                className="block mb-2 text-xl underline-offset-2 hover:underline"
              >
                {item.name}
              </Link>
              <div className="flex justify-between border-b border-[#292524] pb-2">
                <div className="flex gap-2 select-none">
                  {item.framework.map((item, index) => {
                    return (
                      <Image
                        src={item}
                        key={index}
                        alt={""}
                        style={{ width: "20px", height: "auto" }}
                        className="opacity-50 hover:opacity-100"
                      />
                    );
                  })}
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-1">
                    <Image src={watching} alt="Watching counter" width={0} height={0} className="w-5 h-auto my-auto" />
                    {item.state.watching}
                  </div>
                  <div className="flex gap-1">
                    <Image src={stars} alt="Stars counter" width={0} height={0} className="w-5 h-auto my-auto" />
                    {item.state.stars}
                  </div>
                  <div className="flex gap-1">
                    <Image src={forks} alt="Forks counter" width={0} height={0} className="w-5 h-auto my-auto" />
                    {item.state.forks}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-ellipsis overflow-hidden mt-2 opacity-50">{item.desc}</p>
          </div>
        );
      })}
    </section>
  );
}
