"use client";
import { Card, CardBody } from "@nextui-org/react";

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
    <Card
      className={`${styles} min-h-[70px] max-w-[400px] rounded-xl text-black ${
        isMine
          ? "rounded-br-none bg-blue-600 text-white"
          : "rounded-bl-none bg-gray-100 text-gray-900"
      }`}
    >
      <CardBody>
        <p>{text}</p>
      </CardBody>
    </Card>
  );
}
