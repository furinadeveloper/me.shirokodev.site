import projects from "@/svgs/projects.svg";
import technology from "@/svgs/technologys.svg";
import events from "@/svgs/events.svg";
import about from "@/svgs/about.svg";
import animes from "@/svgs/animes.svg";
import games from "@/svgs/games.svg";

const colorOpacity = 0.3;

export const nav: navType[] = [
  {
    query: "projects",
    name: "Projects",
    desc: "Below are all the projects I make public.",
    src: projects,
    color: `rgba(139, 92, 246, ${colorOpacity})`,
  },
  {
    query: "technology",
    name: "Technology",
    desc: "Below are all the technologies I use.",
    src: technology,
    color: `rgba(244, 63, 94, ${colorOpacity})`,
  },
  {
    query: "events",
    name: "Events",
    desc: "Outstanding events in my life that I want everyone to know about.",
    src: events,
    color: `rgba(14, 165, 233, ${colorOpacity})`,
  },
  {
    query: "about",
    name: "About",
    desc: 'Some basic information about me to help you understand me better.',
    src: about,
    color: `rgba(245 158 11, ${colorOpacity})`,
  },
  {
    query: "animes",
    name: "Animes",
    desc: "The anime series I like the most.",
    src: animes,
    color: `rgba(244, 114, 182, ${colorOpacity})`,
  },
  {
    query: "games",
    name: "Games",
    desc: "The games I'm currently playing.",
    src: games,
    color: `rgba(34, 197, 94, ${colorOpacity})`,
  },
];
