"use client";
import Link from "next/link";
import { DiscordIcon, FacebookIcon, GithubIcon, GmailIcon } from "@/resources/social";
import { useEffect, useState } from "react";
import { BestTechnology, Infomation, SocialMediaLink, Team } from "@/resources/author";

export default function Introduction() {
  const [age, setAge] = useState<string>("");
  const [beginTime, setBeginTime] = useState<string>("");

  useEffect(() => {
    const now = new Date();

    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;

    const totalMonthLearning = nowMonth - Infomation.startCoding.month;
    const totalYearLearning = nowYear - Infomation.startCoding.year;

    const fullAge = nowYear - Infomation.born;
    setAge(`${Math.floor(fullAge / 10)}${Number(String(fullAge).slice(1)) >= 5 ? "X" : "x"}`);

    if (totalYearLearning * 12 + totalMonthLearning < 12) {
      setBeginTime(`${totalMonthLearning} ${totalMonthLearning === 1 ? "month" : "months"}`);
    } else {
      setBeginTime(`${totalYearLearning} ${totalYearLearning === 1 ? "year" : "years"}`);
    }
  }, []);

  return (
    <>
      <p className="my-2 text-lg">
        ● Hi there, I&apos;m{" "}
        <Link onClick={(e) => e.preventDefault()} href={"/"} className="relative-state text-state">
          {Infomation.shortname}
          <span className="absolute-state -right-2/3 w-[200px]">Other name: {Infomation.otherName}.</span>
        </Link>{" "}
        - a{" "}
        <Link
          href={Infomation.school.website}
          target="_blank"
          rel="noopener noreferrer"
          className="relative-state text-state"
        >
          normal {Infomation.job}
          <span className="absolute-state">Currently I&apos;m studying at {Infomation.school.name}.</span>
        </Link>{" "}
        love programming.
      </p>
      <p className="mb-2 text-lg">
        ● I&apos;m <span>{age}</span> years old and have been studying it for <span>{beginTime}.</span>
      </p>
      <p className="mb-2 text-lg">
        ● Front-end Developer from{" "}
        <Link href={Team.website} target="_blank" className="relative-state text-state">
          {Team.name}
          <span className="absolute-state right-0">{Team.desc}</span>
        </Link>
        .
      </p>
      <p className="mb-2 text-lg">
        ● Experienced with{" "}
        <Link
          href={BestTechnology.framework.website}
          className="relative-state text-state"
          target="_blank"
          rel="noopener noreferrer"
        >
          {BestTechnology.framework.name}
          <span className="absolute-state">{BestTechnology.framework.desc}</span>
        </Link>{" "}
        and{" "}
        <Link
          href={BestTechnology.system.website}
          className="relative-state text-state"
          target="_blank"
          rel="noopener noreferrer"
        >
          {BestTechnology.system.name} System
          <span className="absolute-state">{BestTechnology.system.desc}</span>
        </Link>
        .
      </p>
      <div className="flex w-full gap-3">
        <span>
          ● Contact me at <span className="hidden md:inline-block">(☞ﾟヮﾟ)☞</span>
        </span>
        {[
          { name: "Github", link: SocialMediaLink.github, icon: GithubIcon },
          {
            name: "Facebook",
            link: SocialMediaLink.facebook,
            icon: FacebookIcon,
          },
          {
            name: "Gmail",
            link: `mailto:${SocialMediaLink.gmail}`,
            icon: GmailIcon,
          },
          {
            name: "Discord",
            link: SocialMediaLink.discord,
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
    </>
  );
}
