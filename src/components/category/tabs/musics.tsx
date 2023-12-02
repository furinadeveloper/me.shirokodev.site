"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Komorebi from "@/images/musics/komorebi.webp";
import NhinKiaTroiToiRoi from "@/images/musics/nhinkiatroitoiroi.jpg";
import FakeLove from "@/images/musics/fakelove.jpg";
import { useEffect, useState, useRef } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaCirclePlay, FaCirclePause, FaShuffle, FaRotateLeft, FaForwardStep, FaBackwardStep } from "react-icons/fa6";
const songs = [
  {
    name: "Komorebi | 抖音",
    singer: "m-taku",
    pic: Komorebi,
    duration: "03:32",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1179913397270237235/y2mate.com_-_mtaku_Komorebi_017_Nhac_Buon_Khong_Loi_Tiktok_Trung_Quoc.mp3?ex=657b82fb&is=65690dfb&hm=32e6cd1fc036933556429af8c385de31d1281c09a598ec78727920a89079260f&",
  },
  {
    name: "你看，天黑了",
    singer: "魔鬼花园",
    pic: NhinKiaTroiToiRoi,
    duration: "01:20",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1179547664166162462/y2mate.com_-_Cau_xem_troi_toi_roi_Khu_vuon_ma_quy.mp3?ex=657a2e5e&is=6567b95e&hm=4e61e08e5a19b2dfe9c30db0d1e2ec17bf56151991d9a7cd62415e07e971595e&",
  },
  {
    name: "id 072019",
    singer: "W/N",
    pic: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/e/d/b/6edb77335e90a767735022f61ae93ab4.jpg",
    duration: "04:32",
    url: "https://a128-zmp3.zmdcdn.me/90083d6a4f1c62d2b7b5f3e76fed2986?authen=exp=1701606568~acl=/90083d6a4f1c62d2b7b5f3e76fed2986/*~hmac=64233462b07ab6856c291bfd28638078",
  },
  {
    name: "3107 3",
    singer: "W/N, Duongg, Nâu, titie",
    pic: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/a/2/6/ca266dd4fe3e3a296dd3a469c7972bf0.jpg",
    duration: "04:00",
    url: "https://a128-zmp3.zmdcdn.me/25df5f6d8d3e551a88cc208c790aaa2f?authen=exp=1701607051~acl=/25df5f6d8d3e551a88cc208c790aaa2f/*~hmac=c72cff354c00268add5cdb167d1c6b9c",
  },
  {
    name: "방탄소년단",
    singer: "BTS",
    pic: FakeLove,
    duration: "04:12",
    url: "https://cdn.discordapp.com/attachments/1171073523704418317/1180128112235790367/y2mate.com_-_BTS_Fake_Love_Piano_Cover.mp3?ex=657c4af3&is=6569d5f3&hm=b7cc7fef2f3413870ec457df41532d22d0a22fccc568045009acbf2ab5c35176&",
  },
];

export default function Musics() {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);
  const [crrIndex, setCrrIndex] = useState<number>(0);
  const [crrImg, setCrrImg] = useState<string | StaticImport>(songs[0].pic);
  const [crrTime, setCrrTime] = useState<number>(0);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const [IDinterval, setIDInterval] = useState<any>(null);

  const trackRef = useRef<null | HTMLDivElement>(null);
  const thumbRef = useRef<null | HTMLDivElement>(null);

  const { ref, inView } = useInView();

  useEffect(() => {
    setAudio(new Audio());
  }, []);

  if (audio)
    audio.onended = () => {
      if (isLoop) {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
      } else if (isShuffle) {
        const newIndex = Math.floor(Math.random() * songs.length);
        audio.pause();
        setCrrTime(0);
        setCrrIndex(newIndex);
        setCrrImg(songs[newIndex].pic);
        audio.src = songs[newIndex].url;
        audio.load();
        audio.play();
      } else {
        handleNextSong();
      }
    };

  useEffect(() => {
    if (audio) {
      audio.src = songs[0].url;
    }
  }, [audio]);

  useEffect(() => {
    if (audio) audio.currentTime = crrTime;
  }, [crrTime, audio]);

  const togglePlayPause = () => {
    if (audio) {
      if (!isPlay) {
        audio.play();
        setIsPlay(true);
        const interval = setInterval(() => {
          if (trackRef.current && thumbRef.current) {
            thumbRef.current.style.right = `${100 - (audio.currentTime / audio.duration) * 100}%`;
          }
        }, 1000);
        setIDInterval(interval);
      } else {
        audio.pause();
        setIsPlay(false);
        clearInterval(IDinterval);
      }
    }
  };

  const handleShuffle = () => setIsShuffle(!isShuffle);
  const handleLoop = () => setIsLoop(!isLoop);

  const handleNextSong = () => {
    let newIndex = crrIndex;
    if (audio) {
      audio.pause();
      if (crrIndex < songs.length - 1) {
        newIndex++;
      } else {
        newIndex = 0;
      }
      setCrrTime(0);
      setCrrIndex(newIndex);
      setCrrImg(songs[newIndex].pic);
      audio.src = songs[newIndex].url;
      audio.load();
      audio.play();
    }
  };

  const handlePrevSong = () => {
    let newIndex = crrIndex;
    if (audio) {
      audio.pause();
      if (crrIndex > 0) {
        newIndex--;
      } else {
        newIndex = songs.length - 1;
      }
      setCrrIndex(newIndex);
      setCrrImg(songs[newIndex].pic);
      setCrrTime(0);
      audio.src = songs[newIndex].url;
      audio.load();
      audio.play();
    }
  };

  const handleChooseSong = (index: number) => {
    if (audio) {
      audio.pause();
      setCrrIndex(index);
      setCrrImg(songs[index].pic);
      setCrrTime(0);
      audio.src = songs[index].url;
      audio.load();
      audio.play();
    }
  };

  const handleChangeProgress = (e: any) => {
    if (audio && trackRef.current && thumbRef.current) {
      const trackRect = trackRef.current.getBoundingClientRect();
      const percent = Math.round(((e.clientX - trackRect.left) * 10000) / trackRect.width) / 100;
      thumbRef.current.style.right = `${100 - percent}%`;
      audio.currentTime = (percent * audio.duration) / 100;
      const newTime = Math.round(audio.currentTime);
      setCrrTime(newTime);
    }
  };

  return (
    <section ref={ref} className={`grid gap-4 grid-cols-1 lg:grid-cols-3 ${inView ? "fade-in" : "opacity-0"}`}>
      <div className="relative col-span-2 div-layout h-96 overflow-y-scroll">
        <ul className="absolute top-0 left-0 w-full h-full p-4">
          <li className="grid grid-cols-6 pb-2 pl-16 pr-2 border-b border-white/5">
            <span className="col-span-2">Name</span>
            <span className="col-span-3">Singer</span>
            <span className="col-span-1">Duration</span>
          </li>
          {songs.map(({ name, singer, pic, duration }, index) => {
            return (
              <li
                onClick={() => handleChooseSong(index)}
                key={index}
                className={`flex gap-2 p-2 border-b border-white/5 rounded-xl cursor-pointer transition-[background-color_0.1s_linear] ${
                  !(crrIndex === index) && "hover:bg-white/10"
                } ${crrIndex === index && isPlay && "bg-white/20"}`}
              >
                <Image src={pic} alt={`${name} Image`} width={50} height={50} />
                <div className="grid grid-cols-6 flex-1">
                  <span className="col-span-2 my-auto">{name}</span>
                  <span className="col-span-3 my-auto">{singer}</span>
                  <span className="col-span-1 my-auto">{duration}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-around h-96 div-layout p-4">
        <span>Now Playing: {songs[crrIndex].name}</span>
        <Image
          src={crrImg}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className={`w-2/3 aspect-square rounded-full border-4 border-white animate-circle ${
            !isPlay ? "[animation-play-state:paused]" : "[animation-play-state:running]"
          }`}
        />
        <div className="flex text-lg gap-4 items-center">
          <FaBackwardStep onClick={handlePrevSong} className="opacity-70 hover:opacity-100 cursor-pointer" />
          <FaShuffle
            onClick={handleShuffle}
            className={`opacity-70 hover:opacity-100 cursor-pointer ${isShuffle && "!opacity-100"}`}
          />
          <FaCirclePause
            onClick={togglePlayPause}
            className={`text-4xl opacity-70 hover:opacity-100 cursor-pointer ${!isPlay && "hidden"}`}
          />
          <FaCirclePlay
            onClick={togglePlayPause}
            className={`text-4xl opacity-70 hover:opacity-100 cursor-pointer ${isPlay && "hidden"}`}
          />
          <FaRotateLeft
            onClick={handleLoop}
            className={`opacity-70 hover:opacity-100 cursor-pointer ${isLoop && "!opacity-100"}`}
          />
          <FaForwardStep onClick={handleNextSong} className="opacity-70 hover:opacity-100 cursor-pointer" />
        </div>
        <div onClick={handleChangeProgress} ref={trackRef} className="relative h-1 w-full rounded-full bg-zinc-700">
          <div
            ref={thumbRef}
            className="absolute transition-all rounded-full top-0 left-0 h-full bg-white hover:after:absolute hover:after:-bottom-1 hover:bg-emerald-300 hover:after:right-0 hover:after:h-3 hover:after:w-3 hover:after:rounded-full hover:after:bg-white "
          />
        </div>
      </div>
    </section>
  );
}
