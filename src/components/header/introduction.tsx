"use client";
import Link from "next/link";
import { DiscordIcon, FacebookIcon, GithubIcon, GmailIcon } from "@/resources/social";
import { useEffect, useState } from "react";
import { Infomation, SocialMediaLink } from "@/resources/author";

export default function Introduction() {
  const [age, setAge] = useState<string>("");
  const [beginTime, setBeginTime] = useState<string>("");

  useEffect(() => {
    const now = new Date();

    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;

    const totalMonthLearning = nowMonth - Infomation.startCoding.month;
    const totalYearLearning = nowYear - Infomation.startCoding.year;

    const fullAge = nowYear - 2007;
    setAge(`${Math.floor(fullAge / 10)}${Number(String(fullAge).slice(1)) >= 5 ? "X" : "x"}`);

    if (totalYearLearning * 12 + totalMonthLearning < 12) {
      setBeginTime(`${totalMonthLearning} ${totalMonthLearning === 1 ? "month" : "months"}`);
    } else {
      setBeginTime(`${totalYearLearning} ${totalYearLearning === 1 ? "year" : "years"}`);
    }
  }, []);

  return (
    <>
      <p className="my-2 text-lg">● Hi there, I&apos;m Shiroko - a normal student love programming.</p>
      <p className="mb-2 text-lg">
        ● I&apos;m {age} years old and have been studying it for {beginTime}.
      </p>
      <p className="mb-2 text-lg">● Front-end Developer from Elaina Team.</p>
      <p className="mb-2 text-lg">● Experienced with Next.JS and Linux System.</p>
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
            <Link tabIndex={-1} href={item.link} target="_blank" rel="nooponer noreferrer" key={index}>
              <Icon aria-label={item.name} className="fill-[#fff] hover:!fill-[#67e8f9] transition-colors" />
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
