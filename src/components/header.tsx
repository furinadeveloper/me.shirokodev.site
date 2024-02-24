"use client";
import { lazy, useEffect, useState } from "react";
import Avatar from "./header/avatar";
import Introduction from "./header/introduction";
import AuthorState from "./header/author-state";
import { io } from "socket.io-client";

const VSCode = lazy(() => import("./header/vscode"));

const socket = io("wss://gateway.shirokodev.site", {
  withCredentials: true,
  extraHeaders: {
    "shiroko-socket": "shiroko-presence",
  },
});
function sendIdentify(): Promise<{
  error: string;
  data: string;
  msg: string;
}> {
  return new Promise((resolve) => {
    socket.once("identify:result", (data) => {
      data = JSON.parse(data);
      if (data.error === "USER_NOT_FOUND") {
        return console.log(
          "You have not joined the server yet. Please click here: https://discord.gg/hH48zm8Bvw",
        );
      }
      resolve(data);
    });
    socket.emit(
      "identify",
      JSON.stringify({
        userId: "962375717465763961",
      }),
    );
  });
}

export default function Header() {
  const [presence, setPresence] = useState<undefined | Presence>(undefined);
  const [timestamp, setTimestamp] = useState<number>(0);

  useEffect(() => {
    socket.once("user:ready", () => {
      sendIdentify().then();
      console.log("Socket Ready");
    });

    socket.on("presence:update", (data) => {
      console.log("Socket Update");
      data = JSON.parse(data);
      setTimestamp(data.activity?.timestamps?.start);
      setPresence(data);
    });

    return () => {
      socket.disconnect();
  };
  }, []);

  return (
    <header className="box-layout flex flex-col gap-10 lg:flex-row">
      <div className="flex basis-[60%] flex-col justify-between gap-5">
        <div className="flex flex-col">
          <AuthorState presence={presence} />
          <Introduction />
        </div>
        <VSCode presence={presence} timestamp={timestamp} />
      </div>
      <div className="flex flex-1">
        <Avatar presence={presence} />
      </div>
    </header>
  );
}
