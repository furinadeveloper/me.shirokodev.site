import Image from "next/image";
import { MapIcon } from "@/resources/etc";
import HelloIcon from "@/svgs/hello.svg";
import { useRef, useEffect } from "react";
import { ColorState } from "@/resources/color";
import VNFlag from "@/svgs/vietnam-flag.svg";

export default function AuthorState({ presence }: { presence: undefined | presenceType }) {
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
        <span className="font-bold text-lg sm:text-xl md:text-4xl">Sunaookami Shiroko</span>
        <Image
          src={HelloIcon}
          alt="Hello Icon"
          width={0}
          height={0}
          className="inline-block ml-3 mb-3 w-8 aspect-square animate-wave"
        />
      </div>
      <div className="flex flex-col sm:flex-row mb-4">
        <div className="flex">
          <span ref={statusIconRef} className="bg-offline h-5 aspect-square mr-2 my-auto rounded-full" />
          <span className="mr-4">currently {presence?.user?.status?.type || "offline"}</span>
        </div>
        <div className="flex">
          <MapIcon className="fill-[#fff] my-auto mr-2" />
          <span className="mr-2">
            Khanh Hoa / Viet Nam
          </span>
          <Image
            src={VNFlag}
            alt="Viet Nam Flag"
            width="0"
            height="0"
            className="w-5 aspect-square h-auto"
          />
        </div>
      </div>
    </>
  );
}
