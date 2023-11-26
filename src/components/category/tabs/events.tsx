import Image from "next/image";
import chloe from "@/images/events/chloe.jpg";
import coding from "@/images/events/coding.jpg";
import ui from "@/images/events/ui.jpg";
import elaina from "@/images/events/elaina.jpg";
import { FaHeart } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { createElement, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref, inView } = useInView({ delay: 1000, triggerOnce: true });
  useEffect(() => {});
  return (
    <section ref={ref} className="mb-28 sm:mb-40">
      <VerticalTimeline lineColor="rgba(255,255,255,0.75)">
        {[
          {
            title: "Dating with Chloe",
            location: "Viet Nam",
            description: "After about a month of getting to know her, we decided to date her.",
            icon: createElement(FaHeart),
            img: chloe,
            date: "28/1/2023 - present",
          },
          {
            title: "Become a coder",
            location: "Viet Nam",
            description:
              "After researching and learning, I started writing the first line of code and use nickname: Shiroko",
            icon: createElement(FaCode),
            img: coding,
            date: "24/7/2023 - present",
          },
          {
            title: "Front-end Developer",
            location: "Viet Nam",
            description:
              "I'm now a front-end developer working as a freelancer. My stack includes Next.js, TypeScript, Tailwind.",
            icon: createElement(FaReact),
            img: ui,
            date: "10/2023 - present",
          },
          {
            title: "Join Elaina Team",
            location: "Viet Nam",
            description: "Elaina was founded, and I was invited to join.",
            icon: createElement(FaPeopleGroup),
            img: elaina,
            date: "19/11/2023",
          },
        ].map(({ title, location, description, icon, img, date }, index) => (
          <VerticalTimelineElement
            key={index}
            className="group"
            visible={inView}
            contentStyle={{
              backgroundColor: "#222",
              color: "#000",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #222",
            }}
            date={date}
            dateClassName="text-white"
            icon={icon}
            iconStyle={{
              background: "#121212",
              fontSize: "1.5rem",
            }}
          >
            <div className="flex group-odd:flex-row-reverse gap-4 text-white">
              <div>
                <h3 className="font-semibold capitalize">{title}</h3>
                <p className="!mt-0">{location}</p>
                <p className="!mt-1 !font-normal">{description}</p>
              </div>
              <Image src={img} alt="" style={{ width: "25%", height: "auto" }} className="rounded-md my-auto" />
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
