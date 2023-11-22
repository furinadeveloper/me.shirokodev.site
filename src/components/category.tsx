import { Recursive } from "next/font/google";
import Nav from "./category/nav";
import Projects from "./category/tabs/projects";
import Underline from "@/resources/underline";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { nav } from "@/resources/nav";

const font = Recursive({ subsets: ["latin"] });

export default function Category() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<null | string>(searchParams.get("tab") || nav[0].query);

  return (
    <div className="box-layout">
      <Nav nav={nav} tab={tab} setTab={setTab}/>
      <div className="mt-10 group">
        <div className="flex gap-2 mb-5 relative">
          <span className="text-4xl text-zinc-800 group-hover:text-emerald-400">#</span>
          <span className={`${font.className} text-4xl font-bold z-10 opacity-70 group-hover:opacity-100`}>
            {nav.map((item) => {
              return <>{item.query === tab && item.name}</>
            })}
          </span>
          <Underline className="absolute left-8 top-4 w-40 group-hover:fill-emerald-400" />
        </div>
        {tab === "projects" && <Projects />}
      </div>
    </div>
  );
}
