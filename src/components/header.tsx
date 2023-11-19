"use client";
import { MapIcon } from "@/app/icons/etc";
import { DiscordIcon, FacebookIcon, GithubIcon, GmailIcon } from "@/app/icons/social";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [age, setAge] = useState<string>("");
  const [beginTime, setBeginTime] = useState<string>("");
  const [presence, setPresence] = useState<undefined | presenceType>();
  const [timeStamp, setTimeStamp] = useState<string>("hh:mm:ss");

  const statusRef = useRef<null | HTMLDivElement>(null);

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
    const socket = new WebSocket("wss://gateway.misonomika.site/");
    socket.addEventListener(
      "open",
      () => {
        console.log(`[Noti] Socket Connected!`);
      },
      { once: true }
    );

    socket.addEventListener("message", (message) => {
      setPresence(JSON.parse(message.data));
    });
  }, []);

  useEffect(() => {
    if (statusRef.current) {
      switch (presence?.user?.status) {
        case "online":
          statusRef.current.style.backgroundColor = "#4ade80";
          break;
        case "offline":
          statusRef.current.style.backgroundColor = "#5B5C6F";
          break;
        case "idle":
          statusRef.current.style.backgroundColor = "#FACC15";
          break;
        case "dnd":
          statusRef.current.style.backgroundColor = "#F23F43";
          break;
      }
    }
  });

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
        setTimeStamp(formattedTime);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [presence]);

  return (
    <header className="grid grid-cols-5 gap-10 w-full min-h-screen bg-light-main dark:bg-dark-main p-16">
      <div className="flex flex-col justify-between col-span-3">
        <div className="flex flex-col">
          <div className="flex mb-1">
            <span className="font-bold text-4xl">Sunaookami Shiroko</span>
            <Image
              src={"/hello.svg"}
              alt="Hello Icon"
              width={0}
              height={0}
              className="ml-3 w-8 aspect-square animate-wave"
            />
          </div>
          <div className="flex mb-4">
            <div ref={statusRef} className={`bg-offline h-5 aspect-square mr-2 my-auto rounded-full`} />
            <span className="mr-4">currently {presence?.user?.status}</span>
            <MapIcon className="fill-[#000] dark:fill-[#fff] my-auto mr-2" />
            <span className="mr-2">Khanh Hoa / Viet Nam</span>
            <Image
              src={"/vietnam-flag.svg"}
              alt="Viet Nam Flag"
              width="0"
              height="0"
              sizes="100vw"
              className="w-5 h-auto"
            />
          </div>
          <p className="max-w-[90%] my-2 text-lg">
            Hi there, I&apos;m Shiroko - a normal student love programming. I&apos;m <span>{age}</span> years old and
            have been studying it for <span>{beginTime}</span>.
          </p>
          <p className="max-w-[90%] mb-2 text-lg">Front-end Developer from Elaina Team.</p>
          <p className="max-w-[90%] mb-2 text-lg">Experienced with Next.JS and Linux System.</p>
          <div className="flex w-full gap-3">
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
                <Link href={item.link} key={index}>
                  <Icon className="fill-[#000] dark:fill-[#fff] hover:!fill-[#67e8f9] transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className={`${presence && presence.activity?.state !== null ? "flex" : "hidden"}`}>
          <Image
            src={presence?.activity?.largeImage ? presence.activity.largeImage : "/vietnam-flag.svg"}
            unoptimized
            width="0"
            height="0"
            sizes="100vw"
            className="w-[100px] h-auto"
            alt={presence?.activity?.largeText || ""}
          />
          <div className="flex flex-col gap-0.5 pl-3 py-1 w-full light-main-100 dark:bg-dark-main-100 rounded-r-md text-sm">
            <span className="text-lg">{presence?.activity?.name}</span>
            <span>{presence?.activity?.description}</span>
            <span>{presence?.activity?.state}</span>
            <span>Elapsed: {timeStamp}</span>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <Image
          src={"/avatar.jpg"}
          alt="Shiroko Avatar"
          priority
          height={0}
          width={0}
          sizes="100vw"
          className="w-full rounded-3xl"
        />
      </div>
    </header>
  );
}
