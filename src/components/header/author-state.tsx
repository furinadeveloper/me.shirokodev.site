import Image from "next/image";
import Link from "next/link";
import { MapIcon } from "@/resources/etc";
import HelloIcon from "@/svgs/hello.svg";
import { useRef, useEffect } from "react";
import { ColorState } from "@/resources/color";
import { Infomation } from "@/resources/author";
export default function AuthorState({ presence }: { presence: undefined | presenceType }) {
  const statusIconRef = useRef<null | HTMLSpanElement>(null);

  console.log(presence)
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
        <span className="font-bold text-lg sm:text-xl md:text-4xl">{Infomation.nickname}</span>
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
          <span ref={statusIconRef} className="relative-state bg-offline h-5 aspect-square mr-2 my-auto rounded-full">
            <div className="absolute-state top-[110%] left-0 w-full">Hello</div>
          </span>
          <span className="mr-4">currently {presence?.user?.status?.type || "offline"}</span>
        </div>
        <div className="flex">
          <MapIcon className="fill-[#000] dark:fill-[#fff] my-auto mr-2" />
          <Link
            href={Infomation.address.wiki}
            target="_blank"
            rel="noopener noreferrer"
            className="relative-state text-state mr-2"
          >
            {Infomation.address.province} / {Infomation.address.country}
            <div className="absolute-state p-0">
              <Image
                src={"/kh-vn.webp"}
                alt={`${Infomation.address.province} - ${Infomation.address.country}`}
                sizes="100vw"
                height={0}
                width={0}
                className="w-full h-auto"
              />
              <div className="p-2">{Infomation.address.desc}</div>
            </div>
          </Link>
          <Image
            src={Infomation.address.flag}
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
