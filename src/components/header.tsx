"use client";
import { useEffect, useState } from "react";
import { SocketURL } from "@/resources/presence-socket";
import Avatar from "./header/avatar";
import VSCode from "./header/vscode";
import Introduction from "./header/introduction";
import AuthorState from "./header/author-state";

export default function Header() {
  const [presence, setPresence] = useState<undefined | presenceType>(undefined);

  useEffect(() => {
    (function handleSocket() {
      const ws = new WebSocket(SocketURL);
      ws.addEventListener("open", () => console.log(`[Noti] Socket Connnected!`));
      ws.addEventListener("error", () => ws.close());
      ws.addEventListener("close", () => setTimeout(handleSocket, 1000));
      ws.addEventListener("message", async ({ data }: { data: string }) => setPresence(JSON.parse(data)));
    })();
  }, []);

  return (
    <header className="box-layout flex min-h-screen flex-col lg:flex-row gap-10">
      <div className="flex flex-col gap-5 lg:gap-0 justify-between">
        <div className="flex flex-col">
          <AuthorState presence={presence} />
          <Introduction />
        </div>
        <VSCode presence={presence} />
      </div>
      <div className="flex flex-1">
        <Avatar presence={presence} />
      </div>
    </header>
  );
}
