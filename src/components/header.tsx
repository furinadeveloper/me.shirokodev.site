"use client";
import { MapIcon } from "@/app/icons/etc";
import { DiscordIcon, FacebookIcon, GithubIcon, GmailIcon } from "@/app/icons/social";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const musicURL =
  "https://cdn.discordapp.com/attachments/1171073523704418317/1175715506209161236/y2mate.com_-_OST_Blue_Archive_OST.mp3?ex=656c3d64&is=6559c864&hm=0805ebb967f23c511e3d0a1af2b62341f0f062951ebe5118963e75722b64e3e9&";

export default function Header() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);
  const [isPlayAudio, setIsPlayAudio] = useState<boolean>(false);
  const [age, setAge] = useState<string>("");
  const [beginTime, setBeginTime] = useState<string>("");
  const [presence, setPresence] = useState<undefined | presenceType>();
  const [timeStamp, setTimeStamp] = useState<null | string>(null);
  const [status, setStatus] = useState<string>("");

  const statusIconRef = useRef<null | HTMLDivElement>(null);
  const statusTextRef = useRef<null | HTMLAnchorElement>(null);

  useEffect(() => {
    setAudio(new Audio());

    (function Socket() {
      const socket = new WebSocket("wss://gateway.misonomika.site/");
      socket.addEventListener(
        "open",
        () => {
          console.log(`[Noti] Socket Connected!`);
        },
        { once: true }
      );

      socket.addEventListener("error", (event) => {
        console.log("[Error] Socket Error! Proceed to reboot in 1000ms");
        setTimeout(() => Socket(), 1000);
      });

      socket.addEventListener("close", (event) => {
        console.log("[Noti] Socket closed");
      });

      socket.addEventListener("message", (message) => {
        setPresence(JSON.parse(message.data));
      });
    })();
  }, []);

  const handleMusic = () => {
    if (audio) {
      if (!isPlayAudio) {
        audio.play();
        setIsPlayAudio(true);
      } else {
        audio.pause();
        setIsPlayAudio(false);
      }
    }
  };

  useEffect(() => {
    const now = new Date();

    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;

    const born = 2007;
    const totalMonthLearning = nowMonth - 7;
    const totalYearLearning = nowYear - 2023;

    const fullAge = nowYear - born;
    setAge(`${Math.floor(fullAge / 10)}${Number(String(fullAge).slice(1)) >= 5 ? "X" : "x"}`);

    if (totalYearLearning * 12 + totalMonthLearning < 12) {
      setBeginTime(`${totalMonthLearning} ${totalMonthLearning === 1 ? "month" : "months"}`);
    } else {
      setBeginTime(`${totalYearLearning} ${totalYearLearning === 1 ? "year" : "years"}`);
    }
  }, []);

  useEffect(() => {
    const color = {
      online: "#4ade80",
      offline: "#CCCCCC",
      idle: "#FACC15",
      dnd: "#F23F43",
    };
    if (statusIconRef.current && statusTextRef.current) {
      if (presence?.user?.status) {
        switch (presence.user.status) {
          case "online":
            statusIconRef.current.style.backgroundColor = color.online;
            statusTextRef.current.style.color = color.online;
            setStatus("Online:3");
            break;
          case "offline":
            statusIconRef.current.style.backgroundColor = color.offline;
            statusTextRef.current.style.color = color.offline;
            setStatus("Offline:(");
            break;
          case "idle":
            statusIconRef.current.style.backgroundColor = color.idle;
            statusTextRef.current.style.color = color.idle;
            setStatus("Idle...");
            break;
          case "dnd":
            statusIconRef.current.style.backgroundColor = color.dnd;
            statusTextRef.current.style.color = color.dnd;
            setStatus("Do not disturb");
            break;
        }
      } else {
        statusIconRef.current.style.backgroundColor = color.offline;
        statusTextRef.current.style.color = color.offline;
        setStatus("Offline:(");
      }
    }
  }, [presence, presence?.user?.status]);

  useEffect(() => {
    if (presence?.activity?.elapsed?.timestamp) {
      const timeStamp = presence.activity.elapsed.timestamp;
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

  useEffect(() => {
    if (audio && !audio.src) {
      audio.src = musicURL;
      console.log(`[Noti] Music loaded! You can click my avatar to play it:3`);
    }
  }, [audio])

  return (
    <header className="flex w-full min-h-screen flex-col lg:flex-row gap-10 bg-light-main dark:bg-dark-main p-2 sm:p-10 md:p-16">
      <div className="flex flex-col gap-5 lg:gap-0 justify-between">
        <div className="flex flex-col">
          <div className="mb-1">
            <span className="font-bold text-lg sm:text-xl md:text-4xl">Sunaookami Shiroko</span>
            <Image
              src={"/hello.svg"}
              alt="Hello Icon"
              width={0}
              height={0}
              className="inline-block ml-3 mb-3 w-8 aspect-square animate-wave"
            />
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="flex">
              <div ref={statusIconRef} className={`bg-offline h-5 aspect-square mr-2 my-auto rounded-full`} />
              <span className="mr-4">
                currently{" "}
                <Link onClick={(e) => e.preventDefault()} href={"/"} className="relative-state" ref={statusTextRef}>
                  {presence?.user?.status || "offline"}
                  <span className="absolute-state -right-2/3">{status}</span>
                </Link>
              </span>
            </div>
            <div className="flex">
              <MapIcon className="fill-[#000] dark:fill-[#fff] my-auto mr-2" />
              <Link
                href={"https://wikipedia.org/wiki/Kh%C3%A1nh_H%C3%B2a_province"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative-state mr-2"
              >
                Khanh Hoa / Viet Nam
                <div className="absolute-state p-0">
                  <Image
                    src={"/kh-vn.webp"}
                    alt="Khanh Hoa - Viet Nam"
                    sizes="100vw"
                    height={0}
                    width={0}
                    className="w-full h-auto"
                  />
                  <div className="p-2">
                    Khánh Hòa is a southern coastal province in the South Central Coast region, the Central of Vietnam.
                  </div>
                </div>
              </Link>
              <Image
                src={"/vietnam-flag.svg"}
                alt="Viet Nam Flag"
                width="0"
                height="0"
                sizes="100vw"
                className="w-5 h-auto"
              />
            </div>
          </div>
          <p className="my-2 text-lg">
            ● Hi there, I&apos;m{" "}
            <Link onClick={(e) => e.preventDefault()} href={"/"} className="relative-state">
              Shiroko
              <span className="absolute-state -right-2/3 w-[200px]">Other name: Xiroco, Lelira, Lira, Kayd.</span>
            </Link>{" "}
            - a{" "}
            <Link
              href={"http://nvtroi.khanhhoa.edu.vn/"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative-state"
            >
              normal student
              <span className="absolute-state">Currently I&apos;m studying at Nguyen Van Troi High School.</span>
            </Link>{" "}
            love programming.
          </p>
          <p className="mb-2 text-lg">
            ● I&apos;m <span>{age}</span> years old and have been studying it for <span>{beginTime}.</span>
          </p>
          <p className="mb-2 text-lg">
            ● Front-end Developer from{" "}
            <Link href={"https://elainateam.io/"} target="_blank" className="relative-state">
              Elaina Team
              <span className="absolute-state">A developer team in Vietnam.</span>
            </Link>
            .
          </p>
          <p className="mb-2 text-lg">
            ● Experienced with{" "}
            <Link href={"https://nextjs.org/"} className="relative-state" target="_blank" rel="noopener noreferrer">
              Next.JS
              <span className="absolute-state">The React Framework for the Web.</span>
            </Link>{" "}
            and{" "}
            <Link
              href={"https://en.wikipedia.org/wiki/Linux"}
              className="relative-state"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linux System
              <span className="absolute-state">
                Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating
                system kernel first released on September 17, 1991, by Linus Torvalds.
              </span>
            </Link>
            .
          </p>
          <div className="flex w-full gap-3">
            <span>
              ● Contact me at <span className="hidden md:inline-block">(☞ﾟヮﾟ)☞</span>
            </span>
            {[
              { name: "Github", link: "https://github.com/sunaookamishirokodev", icon: GithubIcon },
              {
                name: "Facebook",
                link: "https://www.facebook.com/sunaookamishirokodev",
                icon: FacebookIcon,
              },
              {
                name: "Gmail",
                link: "mailto:lethanhtrung.trungle@gmail.com",
                icon: GmailIcon,
              },
              {
                name: "Discord",
                link: "https://discord.com/users/962375717465763961",
                icon: DiscordIcon,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Link href={item.link} target="_blank" rel="nooponer noreferrer" key={index}>
                  <Icon
                    aria-label={item.name}
                    className="fill-[#000] dark:fill-[#fff] hover:!fill-[#67e8f9] transition-colors"
                  />
                </Link>
              );
            })}
            <div>
              <span className="hidden md:inline-block">☜(ﾟヮﾟ☜)</span>.
            </div>
          </div>
        </div>

        <div
          className={`flex shadow-main bg-light-main-100 dark:bg-dark-main-100 text-sm sm:text-md rounded-lg overflow-hidden`}
        >
          <Image
            src={presence?.activity?.largeImage ? presence.activity.largeImage : "/avatar.webp"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-[128px] aspect-square"
            alt={presence?.activity?.largeText || ""}
          />
          <div className="pl-3 my-auto">
            <div className="text-md sm:text-lg">
              {presence?.activity?.name || "● The user currently has no activity or socket is error!"}
            </div>
            <div>{presence?.activity?.description || "● Please contact with me to know it!"}</div>
            <div>{presence?.activity?.state}</div>
            <div>{timeStamp}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1">
        <Image
          onClick={handleMusic}
          src={presence?.user?.avatar || "/avatar.webp"}
          alt="Shiroko Avatar"
          priority
          height={0}
          width={0}
          sizes="100vw"
          data-play={isPlayAudio ? true : false}
          className="avatar w-full aspect-square shadow-main rounded-lg m-auto cursor-pointer transition-all"
        />
      </div>
    </header>
  );
}
