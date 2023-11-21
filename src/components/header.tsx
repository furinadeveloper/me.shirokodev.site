"use client";
import { useEffect, useState } from "react";
import { notify } from "./noti";
import { SocketURL } from "@/resources/presence-socket";
import Avatar from "./header/avatar";
import VSCode from "./header/vscode";
import Introduction from "./header/introduction";
import AuthorState from "./header/author-state";

export default function Header() {
  const [presence, setPresence] = useState<undefined | presenceType>(undefined);

  useEffect(() => {
    const rebootDelay = 1000;

    const Socket = {
      socket: new WebSocket(SocketURL),
      socketOpen() {
        console.log(`[Noti] Socket Connected!`);
        notify(`Socket Connected!`);
      },
      socketError() {
        console.log(`[Error] Socket Error! Proceed to reboot in ${rebootDelay}ms`);
        notify(`Socket Error! Proceed to reboot in ${rebootDelay}ms`);
        setTimeout(() => NewSocket(), rebootDelay);
      },
      socketClose() {
        console.log("[Noti] Socket closed!");
        notify(`Socket closed!`);
        setTimeout(() => NewSocket(), rebootDelay);
      },
      socketMessage(data: string) {
        setPresence(JSON.parse(data));
      },
    };

    function NewSocket() {
      Socket.socket.addEventListener("open", Socket.socketOpen, { once: true });
      Socket.socket.addEventListener("error", Socket.socketError);
      Socket.socket.addEventListener("close", Socket.socketClose);
      Socket.socket.addEventListener("message", (message: any) => Socket.socketMessage(message.data));
    }
    NewSocket();
    return () => {
      Socket.socket.removeEventListener("open", Socket.socketOpen);
      Socket.socket.removeEventListener("error", Socket.socketError);
      Socket.socket.removeEventListener("close", Socket.socketClose);
      Socket.socket.removeEventListener("message", (message: any) => Socket.socketMessage(message.data));
    };
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
