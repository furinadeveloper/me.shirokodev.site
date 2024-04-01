"use client";
import Link from "next/link";
import {
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  GmailIcon,
} from "@/resources/social";
import { useEffect, useState } from "react";

export default function Introduction() {
  const [age, setAge] = useState<string>("");
  const [beginTime, setBeginTime] = useState<string>("");

  useEffect(() => {
    const birthday = new Date();
    birthday.setDate(9);
    birthday.setMonth(9);
    birthday.setFullYear(2007);
    const age = new Date().valueOf() - birthday.valueOf();
    setAge(Math.floor(age / 1000 / 60 / 60 / 24 / 365).toString());

    const code = new Date();
    code.setDate(24);
    code.setMonth(7);
    code.setFullYear(2023);
    const ct = new Date().valueOf() - code.valueOf();
    setBeginTime(`${(ct / 1000 / 60 / 60 / 24 / 365).toFixed(2)} years`);
  }, []);

  return (
    <>
      <p className="my-2 text-lg">
        ● Hi there, I&apos;m Shiroko - a normal student love programming.
      </p>
      <p className="mb-2 text-lg">
        ● I&apos;m {age} years old and have been studying it for {beginTime}.
      </p>
      <p className="mb-2 text-lg">● Fullstack Developer from Elaina Team.</p>
      <p className="mb-2 text-lg">
        ● Experienced with Next.JS and Linux System.
      </p>
      <div className="flex w-full gap-3">
        <span>
          ● Contact me at{" "}
          <span className="hidden md:inline-block">(☞ﾟヮﾟ)☞</span>
        </span>
        {[
          {
            name: "Github",
            link: "https://github.com/sunaookamishirokodev",
            icon: GithubIcon,
          },
          {
            name: "Facebook",
            link: "https://www.facebook.com/sunaookamishirokodev",
            icon: FacebookIcon,
          },
          {
            name: "Gmail",
            link: `mailto:lethanhtrung.trungle@gmail.com`,
            icon: GmailIcon,
          },
          {
            name: "Discord",
            link: "https://discord.com/users/1216624112139632711",
            icon: DiscordIcon,
          },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              tabIndex={-1}
              href={item.link}
              target="_blank"
              rel="nooponer noreferrer"
              key={index}
            >
              <Icon
                aria-label={item.name}
                className="fill-[#fff] transition-colors hover:!fill-[#67e8f9]"
              />
            </Link>
          );
        })}
        <div>
          <span className="hidden md:inline-block">☜(ﾟヮﾟ☜)</span>.
        </div>
      </div>
    </>
  );
}
