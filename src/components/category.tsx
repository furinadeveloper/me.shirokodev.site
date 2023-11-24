import { Recursive } from "next/font/google";
import Nav from "./category/nav";
import Projects from "./category/tabs/projects";
import Underline from "@/resources/underline";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { nav } from "@/resources/nav";
import Technology from "./category/tabs/technology";
import Animes from "./category/tabs/animes";
import TabLoading from "./loadings/tab.loading";
import CardLoading from "./loadings/card.loading";
import TextLoading from "./loadings/text.loading";

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
        <Suspense fallback={<CardLoading />}>{tab === "projects" && <Projects font={font} />}</Suspense>
        <Suspense fallback={<TextLoading />}>{tab === "technology" && <Technology font={font} />}</Suspense>
        <Suspense fallback={<TabLoading />}>{tab === "animes" && <Animes font={font} />}</Suspense>
      </div>
    </div>
  );
}
