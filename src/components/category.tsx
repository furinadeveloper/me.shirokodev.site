import { Recursive } from "next/font/google";
import { useSearchParams } from "next/navigation";
import { Fragment, lazy, useState } from "react";

import skills from "@/svgs/nav/skills.svg";
import projects from "@/svgs/nav/projects.svg";
import events from "@/svgs/nav/events.svg";
import musics from "@/svgs/nav/musics.svg";
import about from "@/svgs/nav/about.svg";
import animes from "@/svgs/nav/animes.svg";
import games from "@/svgs/nav/games.svg";
import comments from "@/svgs/nav/comments.svg";

const colorOpacity = 0.3;

const Nav = lazy(() => import("./category/nav"));
const Events = lazy(() => import("./category/tabs/events"));
const About = lazy(() => import("./category/tabs/about"));
const Musics = lazy(() => import("./category/tabs/musics"));
const Games = lazy(() => import("./category/tabs/games"));
const Projects = lazy(() => import("./category/tabs/projects"));
const Skills = lazy(() => import("./category/tabs/skills"));
const Animes = lazy(() => import("./category/tabs/animes"));
const Comments = lazy(() => import("./category/tabs/comments"));

const font = Recursive({ subsets: ["latin"] });

const nav = [
  {
    query: "projects",
    name: "Projects",
    desc: "Below are all the projects I make public.",
    src: projects,
    color: `rgba(139, 92, 246, ${colorOpacity})`,
    slide: Projects,
  },
  {
    query: "skills",
    name: "Skills",
    desc: "Below are all the technologies I use.",
    src: skills,
    color: `rgba(244, 63, 94, ${colorOpacity})`,
    slide: Skills,
  },
  {
    query: "events",
    name: "Events",
    desc: "Outstanding events in my life that I want everyone to know about.",
    src: events,
    color: `rgba(14, 165, 233, ${colorOpacity})`,
    slide: Events,
  },
  {
    query: "musics",
    name: "Musics",
    desc: "The music I often listen to",
    src: musics,
    color: `rgba(94, 234, 212, ${colorOpacity})`,
    slide: Musics,
  },
  {
    query: "about",
    name: "About",
    desc: "Some basic information about me to help you understand me better.",
    src: about,
    color: `rgba(245, 158, 11, ${colorOpacity})`,
    slide: About,
  },
  {
    query: "animes",
    name: "Animes",
    desc: "The anime series I like the most.",
    src: animes,
    color: `rgba(244, 114, 182, ${colorOpacity})`,
    slide: Animes,
  },
  {
    query: "games",
    name: "Games",
    desc: "The games I'm currently playing.",
    src: games,
    color: `rgba(34, 197, 94, ${colorOpacity})`,
    slide: Games,
  },
  {
    query: "comments",
    name: "Comments",
    desc: "Some reviews from visitors.",
    src: comments,
    color: `rgba(209, 213, 219, ${colorOpacity})`,
    slide: Comments,
  },
];

export default function Category() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<null | string>(
    searchParams.get("tab") || nav[0].query,
  );
  return (
    <div className="box-layout">
      <Nav nav={nav} tab={tab} setTab={setTab} />
      <div className="group mb-5 mt-10 flex select-none gap-2">
        <span className="text-4xl text-zinc-800 group-hover:text-emerald-400">
          #
        </span>
        {nav.map(({ query, desc }, index) => {
          if (query === tab) {
            return (
              <div
                key={index}
                className={`${font.className} flex flex-col gap-3 opacity-70 group-hover:opacity-100`}
              >
                <span className={`text-4xl font-bold`}>{query}</span>
                <span>{desc}</span>
              </div>
            );
          }
        })}
      </div>
      {nav.map(({ query, slide }, index) => {
        const Slider = slide;
        if (query === tab) {
          return (
            <Fragment key={index}>
              <Slider />
            </Fragment>
          );
        }
      })}
    </div>
  );
}
