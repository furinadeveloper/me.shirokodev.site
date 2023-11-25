import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useTransition } from "react";

export default function Nav({
  nav,
  tab,
  setTab,
}: {
  nav: navType[];
  tab: string | null;
  setTab: Dispatch<SetStateAction<string | null>>;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <nav className="fade-in flex min-h-[28px] select-none flex-wrap gap-4 font-bold">
      {nav.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              startTransition(() => {
                setTab(item.query);
                router.push(`?tab=${item.query}`, {
                  scroll: false,
                });
              });
            }}
            className={`${
              item.query === tab ? "z-10" : "cursor-pointer bg-dark-main-100"
            } flex fade-in relative gap-2 rounded-md overflow-hidden items-center px-2 py-[2px]`}
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
