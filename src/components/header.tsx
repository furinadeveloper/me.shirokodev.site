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
      resolve(data);
    });
    socket.emit(
      "identify",
      JSON.stringify({
        userId: "962375717465763961",
      })
    );
  });
}

export default function Header() {
  const [presence, setPresence] = useState<undefined | Presence>(undefined);
  const [timestamp, setTimestamp] = useState<number>(0);

  useEffect(() => {
    socket.once("user:ready", () => {
      sendIdentify().then();
    });

    socket.on("presence:update", (data) => {
      data = JSON.parse(data);
      setTimestamp(data.activity?.timestamps?.start);
      setPresence(data);
    });
  });

  return (
    <header className="box-layout flex flex-col lg:flex-row gap-10">
      <div className="flex basis-[60%] flex-col gap-5 justify-between">
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
