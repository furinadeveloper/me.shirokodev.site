import Image from "next/image";
import HelloIcon from "@/svgs/hello.svg";
import { useRef, useEffect } from "react";
import { ColorState } from "@/resources/color";
import VNFlag from "@/svgs/vietnam-flag.svg";
import Map from "@/svgs/map.svg";

export default function AuthorState({
  presence,
}: {
  presence: undefined | Presence;
}) {
  const statusIconRef = useRef<null | HTMLSpanElement>(null);

  useEffect(() => {
    if (statusIconRef.current) {
      if (presence?.user?.status) {
        switch (presence.user.status.type) {
          case "online":
            statusIconRef.current.style.backgroundColor = ColorState.online;
            break;
          case "offline":
            statusIconRef.current.style.backgroundColor = ColorState.offline;
            break;
          case "idle":
            statusIconRef.current.style.backgroundColor = ColorState.idle;
            break;
          case "dnd":
            statusIconRef.current.style.backgroundColor = ColorState.dnd;
            break;
        }
      } else {
        statusIconRef.current.style.backgroundColor = ColorState.offline;
      }
    }
  }, [presence, presence?.user?.status]);

  return (
    <>
      <div className="mb-1">
        <span className="text-lg font-bold sm:text-xl md:text-4xl">
          Sunaookami Shiroko
        </span>
        <Image
          src={HelloIcon}
          alt="Hello Icon"
          width={0}
          height={0}
          className="animate-wave mb-3 ml-3 inline-block aspect-square w-8"
        />
      </div>
      <div className="mb-4 flex flex-col sm:flex-row">
        <div className="flex">
          <span
            ref={statusIconRef}
            className="bg-offline my-auto mr-2 aspect-square h-5 rounded-full"
          />
          <span className="mr-4">
            currently {presence?.user?.status?.type || "Zzz..."}
          </span>
        </div>
        <div className="flex">
          <Image
            src={Map}
            alt=""
            height={16}
            width={16}
            className="my-auto mr-2"
          />
          <span className="mr-2">Khanh Hoa / Viet Nam</span>
          <Image
            src={VNFlag}
            alt="Viet Nam Flag"
            width="0"
            height="0"
            className="aspect-square h-auto w-5"
          />
        </div>
      </div>
    </>
  );
}
