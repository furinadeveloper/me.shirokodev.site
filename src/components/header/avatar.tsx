import Image from "next/image";
import avatar from "@/images/avatar.webp";

export default function Avatar({ presence }: { presence: undefined | Presence }) {
  return (
    <Image
      src={presence?.user?.avatar ? `${presence.user.avatar}?size=512` : avatar}
      alt="Shiroko Avatar"
      priority
      height={0}
      width={0}
      sizes="100vw"
      className="w-full h-auto shadow-main rounded-lg"
    />
  );
}
