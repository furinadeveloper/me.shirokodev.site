"use client";
import { BlueArchiveURL } from "@/resources/mp3";
import Image from "next/image";
import { useEffect, useState } from "react";
import avatar from "@/images/avatar.webp";
export default function Avatar({ presence }: { presence: undefined | presenceType }) {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);
  const [isPlayAudio, setIsPlayAudio] = useState<boolean>(false);

  useEffect(() => {
    setAudio(new Audio());
    if (audio) audio.loop = true;
  }, []);

  useEffect(() => {
    if (audio && !audio.src) {
      audio.src = BlueArchiveURL;
      console.log(`[Noti] Music loaded! You can click my avatar to play it:3`);
    }
  }, [audio]);

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

  return (
    <Image
      onClick={handleMusic}
      src={presence?.user?.avatar ? `${presence.user.avatar}?size=512` : avatar}
      alt="Shiroko Avatar"
      priority
      height={0}
      width={0}
      sizes="100vw"
      data-play={isPlayAudio ? true : false}
      className="avatar w-full h-auto shadow-main rounded-lg m-auto cursor-pointer transition-all"
    />
  );
}
