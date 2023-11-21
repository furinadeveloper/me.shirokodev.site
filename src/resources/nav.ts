import projects from "@/svgs/projects.svg";
import technology from "@/svgs/technologys.svg";
import events from "@/svgs/events.svg";
import about from "@/svgs/about.svg";
import animes from "@/svgs/animes.svg";
import games from "@/svgs/games.svg";

const colorOpacity = 0.3;

export const nav = [
  {
    query: "projects",
    name: "Projects",
    src: projects,
    color: `rgba(139, 92, 246, ${colorOpacity})`,
  },
  {
    query: "technology",
    name: "Technology",
    src: technology,
    color: `rgba(244, 63, 94, ${colorOpacity})`,
  },
  {
    query: "events",
    name: "Events",
    src: events,
    color: `rgba(14, 165, 233, ${colorOpacity})`,
  },
  {
    query: "about",
    name: "About",
    src: about,
    color: `rgba(245 158 11, ${colorOpacity})`,
  },
  {
    query: "animes",
    name: "Animes",
    src: animes,
    color: `rgba(244, 114, 182, ${colorOpacity})`,
  },
  {
    query: "games",
    name: "Games",
    src: games,
    color: `rgba(34, 197, 94, ${colorOpacity})`,
  },
];
