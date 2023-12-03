import Image from "next/image";
import { useState, useEffect } from "react";
import sleep from "@/images/sleep.png";
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
    <div className={`flex div-layout text-sm sm:text-md overflow-hidden`}>
      <Image
        src={presence?.activity?.assets?.largeImage || sleep}
        width={0}
        height={0}
        sizes="100vw"
        className="w-[128px] aspect-square"
        alt={presence?.activity?.assets?.largeText || "Zzz..."}
      />
      <div className="pl-3 my-auto">
        <div className="text-md sm:text-lg">{presence?.activity?.name || "At school or home"}</div>
        <div>{(presence?.activity && presence?.activity?.state) || ""}</div>
        <div className="flex flex-col">
          {(presence?.activity && presence?.activity?.details) || (
            <>
              <span>🏠 | If (home) Sleeping...</span>
              <span>🏫 | If (school) Studying...</span>
            </>
          )}
        </div>
        <div>Elapsed: {(presence?.activity && currentElapsed) || "Infinity:>"}</div>
      </div>
    </div>
  );
}
