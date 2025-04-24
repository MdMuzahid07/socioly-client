"use client";
import { Avatar, Card, CardBody } from "@nextui-org/react";

export default function ChatCard({
  styles,
  text,
  isMine,
}: {
  styles?: string;
  text: string;
  isMine: boolean;
}) {
  return (
    <div className="flex flex-col">
      <Card
        className={`${styles} min-h-[70px] max-w-[400px] rounded-xl text-black ${
          isMine
            ? "mr-3.5 rounded-br-none bg-blue-600 text-white"
            : "ml-3.5 rounded-bl-none bg-gray-100 text-gray-900"
        }`}
      >
        <CardBody>
          <p>{text}</p>
        </CardBody>
      </Card>
      <div className={`${isMine ? "justify-end" : ""} mt-3 flex w-full items-center`}>
        {isMine && <h1 className="mr-2">Md</h1>}
        <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        {!isMine && <h1 className="ml-2">John</h1>}
      </div>
    </div>
  );
}
