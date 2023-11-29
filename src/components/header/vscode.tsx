import Image from "next/image";
import { useState, useEffect } from "react";
import avatar from "@/images/avatar.webp";
export default function VSCode({ presence, timestamp }: { presence: undefined | Presence; timestamp: number }) {
  const [currentElapsed, setCurrentElapsed] = useState<string>("");

  useEffect(() => {
    if (timestamp) {
      const timeoutId = setInterval(() => {
        const elapsed = Date.now() - timestamp;
        const hours = Math.floor(elapsed / 1000 / 60 / 60)
          .toString()
          .padStart(2, "0");
        const minutes = (Math.floor(elapsed / 1000 / 60) % 60).toString().padStart(2, "0");
        const seconds = (Math.floor(elapsed / 1000) % 60).toString().padStart(2, "0");

        setCurrentElapsed(`${hours}:${minutes}:${seconds}`);
      }, 1000);

      return () => {
        clearInterval(timeoutId);
      };
    }
  }, [timestamp]);

  return (
    <div className={`${presence?.activity ? "flex" : "hidden"} div-layout text-sm sm:text-md overflow-hidden`}>
      <Image
        src={presence?.activity?.assets?.largeImage || avatar}
        width={0}
        height={0}
        sizes="100vw"
        className="w-[128px] aspect-square"
        alt={presence?.activity?.assets?.largeText || ""}
      />
      <div className="pl-3 my-auto">
        <div className="text-md sm:text-lg">{presence?.activity?.name || ""}</div>
        <div>{presence?.activity?.state || ""}</div>
        <div>{presence?.activity?.details}</div>
        <div>Elapsed: {currentElapsed}</div>
      </div>
    </div>
  );
}
