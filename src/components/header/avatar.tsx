"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import avatar from "@/images/avatar.webp";
import { notify } from "../noti";

const songs = [
  "https://cdn.discordapp.com/attachments/1171073523704418317/1178460990753472673/y2mate.com_-_Wn_3107_3_Official_Video_ft_267_Nau_Duongg.mp3?ex=65763a52&is=6563c552&hm=6d9d56dee111472fc4eab8b0a899b3acc0cca1b4afe5411138ad1ecd8b24b8c4&",
  "https://cdn.discordapp.com/attachments/1171073523704418317/1173238573915459667/y2mate.com_-_Hikikomari_Kyuuketsuki_no_Monmon_ending_full_Nemurenai_by_MIMiNARI_feat_Tomori_Kusunoki.mp3?ex=65633a91&is=6550c591&hm=aa6fc130b5808d59830b4823e3b94b45b477d240faedcba554a2d5e16328bfde&",
  "https://cdn.discordapp.com/attachments/1171073523704418317/1172569187718266990/y2mate.com_-_So_Far_Away_Acoustic_Martin_Garrix_David_Guetta_Cover_by_Adam_Christopher.mp3?ex=6560cb27&is=654e5627&hm=926a885cb7bc52656dcd8bf5f01213289bf720e70b13d2cb7be1d9981332f6d8&",
];

export default function Avatar({ presence }: { presence: undefined | presenceType }) {
  const [audio, setAudio] = useState<null | HTMLAudioElement>(null);
  const [isPlayAudio, setIsPlayAudio] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    setAudio(new Audio());
  }, []);

  useEffect(() => {
    if (audio && !audio.src) {
      audio.src = songs[currentIndex];
      console.log(`[Noti] Music loaded! You can click my avatar to play it:3`);
      notify(`Music loaded! You can click my avatar to play it:3`, {
        type: "success",
      });
    }
    if (audio) {
      audio.onended = () => {
        if (currentIndex < songs.length - 1) {
          setCurrentIndex(currentIndex + 1);
          audio.src = songs[currentIndex + 1];
        } else {
          setCurrentIndex(0);
          audio.src = songs[0];
        }
        audio.load();
        audio.play();
        setIsPlayAudio(true);
      };
    }
  }, [audio, currentIndex]);

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
