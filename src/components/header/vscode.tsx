import Image from "next/image";
import { useState, useEffect } from "react";
export default function VSCode({ presence }: { presence: undefined | presenceType }) {
  const [timeStamp, setTimeStamp] = useState<null | string>(null);

  useEffect(() => {
    if (presence?.activity?.createdTimestamp) {
      const timeStamp = presence.activity.createdTimestamp;
      let seconds = Math.floor((timeStamp / 1000) % 60);
      let minutes = Math.floor((timeStamp / 1000 / 60) % 60);
      let hours = Math.floor((timeStamp / 1000 / 60 / 60) % 24);
      const interval = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }
        }
        const formattedTime = [
          hours.toString().padStart(2, "0"),
          minutes.toString().padStart(2, "0"),
          seconds.toString().padStart(2, "0"),
        ].join(":");
        setTimeStamp(`Elapsed: ${formattedTime}`);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [presence]);

  return (
    <div
      className={`${
        presence?.activity ? "flex" : "hidden"
      } shadow-main bg-light-main-100 dark:bg-dark-main-100 text-sm sm:text-md rounded-lg overflow-hidden`}
    >
      <Image
        src={presence?.activity?.assets?.largeImage || "/avatar.webp"}
        width="0"
        height="0"
        sizes="100vw"
        className="w-[128px] aspect-square"
        alt={presence?.activity?.assets?.largeText || ""}
      />
      <div className="pl-3 my-auto">
        <div className="text-md sm:text-lg">
          {presence?.activity?.name || ""}
        </div>
        <div>{presence?.activity?.state || ""}</div>
        <div>{presence?.activity?.details}</div>
        <div>{timeStamp}</div>
      </div>
    </div>
  );
}
