import { Recursive } from "next/font/google";
import Underline from "@/resources/underline";
import { useSearchParams } from "next/navigation";
import { lazy, useState } from "react";
import { nav } from "@/resources/nav";
import Events from "./category/tabs/events";

const Nav = lazy(() => import("./category/nav"));
const Projects = lazy(() => import("./category/tabs/projects"));
const Technology = lazy(() => import("./category/tabs/technology"));
const Animes = lazy(() => import("./category/tabs/animes"));

const font = Recursive({ subsets: ["latin"] });

export default function Category() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<null | string>(searchParams.get("tab") || nav[0].query);

  return (
    <div className="box-layout">
      <Nav nav={nav} tab={tab} setTab={setTab} />
      <div className="mt-10">
        <div className="group flex gap-2 mb-5 relative select-none">
          <span className="text-4xl text-zinc-800 group-hover:text-emerald-400">#</span>
          {nav.map((item, index) => {
            if (item.query === tab) {
              return (
                <div key={index} className={`${font.className} flex flex-col gap-3 opacity-70 group-hover:opacity-100`}>
                  <span className={`text-4xl font-bold`}>{item.query}</span>
                  <span>{item.desc}</span>
                </div>
              );
              font;
            }
          })}
          <Underline className="absolute left-8 top-4 w-40" />
        </div>
        {tab === "projects" && <Projects font={font} />}
        {tab === "technology" && <Technology font={font} />}
        {tab === "events" && <Events font={font} />}
        {tab === "animes" && <Animes font={font} />}
      </div>
    </div>
  );
}
