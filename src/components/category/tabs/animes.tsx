import Link from "next/link";
import Image from "next/image";
import SwordArtOnline from "@/images/animes/SwordArtOnline.jpg";
import SlimeDattaKen from "@/images/animes/SlimeDattaKen.jpg";
import Arifureta from "@/images/animes/Arifureta.jpg";
import KagenoJitsuryokusha from "@/images/animes/KagenoJitsuryokusha.jpg";
import MeitanteiConan from "@/images/animes/MeitanteiConan.jpg";
import TatenoYuusha from "@/images/animes/TatenoYuusha.jpg";
import YoukosoJitsuryoku from "@/images/animes/YoukosoJitsuryoku.jpg";
import OshinoKo from "@/images/animes/OshinoKo.jpg";
import SeishunButa from "@/images/animes/SeishunButa.jpg";
import ReZero from "@/images/animes/Re_Zero.jpg";
import LycorisRecoil from "@/images/animes/LycorisRecoil.jpg";
import { useInView } from "react-intersection-observer";
export default function Animes() {
  const { ref, inView } = useInView({ triggerOnce: true, delay: 1000 });
  return (
    <section
      ref={ref}
      className={`grid grid-cols-1 gap-4 lg:grid-cols-2 ${
        inView ? "fade-in" : "opacity-0"
      }`}
    >
      {[
        {
          name: "Sword Art Online: Alicization",
          description:
            "Kirito awakens in a vast, fantastical forest filled with towering trees.",
          image: SwordArtOnline,
          url: "https://anilist.co/anime/100182/Sword-Art-Online-Alicization/",
        },
        {
          name: "Tensei Shitara Slime Datta Ken",
          description: "The movie is about a 'harmless' slime.",
          image: SlimeDattaKen,
          url: "https://anilist.co/anime/108511/Tensei-Shitara-Slime-Datta-Ken-2nd-Season/",
        },
        {
          name: "Kage no Jitsuryokusha ni Naritakute!",
          description: "Lord of my shadow.",
          image: KagenoJitsuryokusha,
          url: "https://anilist.co/anime/161964/Kage-no-Jitsuryokusha-ni-Naritakute-2nd-season/",
        },
        {
          name: "Arifureta Shokugyou de Sekai Saikyou",
          description: "Betrayed boy and meeting with vampire girl",
          image: Arifureta,
          url: "https://anilist.co/anime/100668/Arifureta-Shokugyou-de-Sekai-Saikyou/",
        },
        {
          name: "Meitantei Conan",
          description:
            "Shinichi is harmed by the black organization and journeys to find a solution to his situation.",
          image: MeitanteiConan,
          url: "https://anilist.co/anime/235/Meitantei-Conan/",
        },
        {
          name: "Tate no Yuusha no Nariagari",
          description: "Armed only with his shield, in a parallel world.",
          image: TatenoYuusha,
          url: "https://anilist.co/anime/99263/Tate-no-Yuusha-no-Nariagari/",
        },
        {
          name: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
          description: "The guy sees everyone as tools because he is so smart.",
          image: YoukosoJitsuryoku,
          url: "https://anilist.co/anime/98659/Youkoso-Jitsuryoku-Shijou-Shugi-no-Kyoushitsu-e/",
        },
        {
          name: "Oshi no Ko",
          description:
            "Idols and die-hard fans are reincarnated as her children",
          image: OshinoKo,
          url: "https://anilist.co/anime/150672/Oshi-no-Ko/",
        },
        {
          name: "Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai",
          description: "Beautiful love between a girl and a boy.",
          image: SeishunButa,
          url: "https://anilist.co/anime/104157/Seishun-Buta-Yarou-wa-Yumemiru-Shoujo-no-Yume-wo-Minai/",
        },
        {
          name: "Re:Zero kara Hajimeru Isekai Seikatsu",
          description:
            "The tragedy of Subaru's ability to die and come back to life and his love for Emilia.",
          image: ReZero,
          url: "https://anilist.co/manga/85737/ReZero-kara-Hajimeru-Isekai-Seikatsu/",
        },
        {
          name: "Lycoris Recoil",
          description:
            "Tells about the great feelings and abilities of two young girls.",
          image: LycorisRecoil,
          url: "https://anilist.co/anime/143270/Lycoris-Recoil/",
        },
      ].map(({ name, description, image, url }, index) => (
        <Link
          tabIndex={-1}
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-48 overflow-hidden rounded-lg px-4 before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-150 hover:before:opacity-50 sm:px-8"
        >
          <Image
            src={image}
            alt={name}
            width={1200}
            height={240}
            className="absolute left-0 top-0 h-full w-full rounded-lg object-cover transition duration-150 group-hover:scale-[1.02]"
          />
          <div className="z-20 my-auto w-full scale-95 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
            <h3 className="text-3xl font-bold">
              <span className="text-stone-300">{index + 1} </span>
              {name}
            </h3>
            <p className="text-lg text-stone-200"># {description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
