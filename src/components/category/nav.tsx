import Image from "next/image";
import { nav } from "@/resources/nav";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Nav() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [tab, setTab] = useState<null | string>(searchParams.get("tab") || nav[0].query);

  return (
    <nav className="fade-in flex min-h-[28px] select-none flex-wrap gap-4 font-bold">
      {nav.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setTab(item.query);
              router.push(`?tab=${item.query}`, {
                scroll: false,
              });
            }}
            className={`${
              item.query === tab ? "z-10" : "cursor-pointer bg-light-main-100 dark:bg-dark-main-100"
            } flex relative gap-2 rounded-md overflow-hidden items-center px-2 py-[2px]`}
          >
            <span>{item.name}</span>
            <Image
              src={item.src}
              width={0}
              height={0}
              className="w-5 aspect-square select-none drag-none"
              alt={`${item.name} Icon`}
            />
            {item.query === tab && (
              <motion.div
                className="absolute left-0 top-0 z-10 h-full w-full"
                layoutId="page"
                animate={{ backgroundColor: item.color }}
                transition={{ type: "spring", duration: 0.4 }}
              />
            )}
          </div>
        );
      })}
    </nav>
  );
}
