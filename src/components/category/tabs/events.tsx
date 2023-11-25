import { NextFont } from "next/dist/compiled/@next/font";
import Link from "next/link";
import Image from "next/image";
import chloe from "@/images/events/chloe.jpg";
import coding from "@/images/events/lovely.jpg";

export default function Events({ font }: { font: NextFont }) {
  return (
    <section className={`${font.className} fade-in grid grid-cols-2 gap-4`}>
      <div className="div-layout flex gap-4 rounded-md">
        <Image src={chloe} alt="" style={{ width: "20%", height: "auto" }} className="rounded-md" />
        <div className="flex flex-col p-4">
          <span>Planet: The Earth</span>
          <span>Country: Viet Nam</span>
          <span>Event: Dating</span>
          <span>
            Collaborator:{" "}
            <Link
              tabIndex={-1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300"
              href={"https://www.facebook.com/profile.php?id=100078340711659"}
            >
              Nguyễn Chi
            </Link>
          </span>
          <span>From: 28/01/2023</span>
        </div>
      </div>
      <div className="div-layout flex gap-4 rounded-md">
        <Image src={coding} alt="" style={{ width: "20%", height: "auto" }} className="rounded-md" />
        <div className="flex flex-col p-4">
          <span>Planet: The Earth</span>
          <span>Country: Viet Nam</span>
          <span>Event: Write the first line of code</span>
          <span>From: 24/07/2023</span>
        </div>
      </div>
    </section>
  );
}
