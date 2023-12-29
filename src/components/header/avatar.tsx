import Image from "next/image";
import avatar from "@/images/avatar.png";

export default function Avatar({
  presence,
}: {
  presence: undefined | Presence;
}) {
  return (
    <Image
      src={
        presence?.user?.avatar ? `${presence.user.avatar}?size=4096` : avatar
      }
      alt="Shiroko Avatar"
      priority
      height={0}
      width={0}
      sizes="100vw"
      className="shadow-main h-auto w-full rounded-lg"
    />
  );
}
