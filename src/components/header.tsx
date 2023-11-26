"use client";
import { lazy, useEffect, useState } from "react";
import Avatar from "./header/avatar";
import Introduction from "./header/introduction";
import AuthorState from "./header/author-state";

const VSCode = lazy(() => import("./header/vscode"));

export default function Header() {
  const [presence, setPresence] = useState<undefined | presenceType>(undefined);
  const [timestamp, setTimestamp] = useState<number>(0)

  useEffect(() => {
    const websocket = new WebSocket("wss://gateway.misonomika.site");
    console.log(`[gateway.misonomika.site]: Gateway connecting...`);

    websocket.addEventListener(
      "open",
      () => {
        console.log(`[gateway.misonomika.site]: Gateway connected.`);
      },
      { once: true }
    );

    websocket.addEventListener(
      "close",
      () => {
        console.log(`[gateway.misonomika.site]: Gateway disconnected.`);
      },
      { once: true }
    );

    websocket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setTimestamp(data.activity?.timestamps?.start);
      setPresence(data);
    });
  }, []);

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
