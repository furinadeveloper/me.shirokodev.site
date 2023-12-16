"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useTransition } from "react";
import { useInView } from "react-intersection-observer";

export default function Nav({
  nav,
  tab,
  setTab,
}: {
  nav: navType[];
  tab: string | null;
  setTab: Dispatch<SetStateAction<string | null>>;
}) {
  const [isPending, startTransition] = useTransition();
  const { ref, inView } = useInView({ delay: 500, triggerOnce: true });

  useEffect(() => {}, []);

  return (
    <nav ref={ref} className="relative h-16 overflow-y-hidden overflow-x-scroll">
      <ul
        className={`flex absolute left-0 top-0 w-full select-none gap-4 font-bold ${inView ? "fade-in" : "opacity-0"}`}
      >
        {nav.map(({ name, query, color, src }, index) => {
          return (
            <motion.li
              onClick={() => {
                startTransition(() => {
                  setTab(query);
                  const url = new URL(location.href);
                  url.searchParams.set("tab", query);
                  history.replaceState(null, "", url.search);
                });
              }}
              style={{ backgroundColor: color }}
              className={`relative flex cursor-pointer gap-2 p-3 rounded-full opacity-80 hover:opacity-100 transition-[opacity] ${
                tab === query && "!opacity-100"
              }`}
              key={index}
              initial={{ y: -100 }}
              animate={{ y: 0 }}
            >
              <div className="flex">{name}</div>
              <div className="w-4 flex">
                <Image src={src} style={{ width: "100%", height: "auto" }} alt={`${name} Icon`} className="my-auto" />
              </div>
              {query === tab && (
                <motion.span
                  className={`rounded-full absolute inset-0 -z-10 bg-white/50`}
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
