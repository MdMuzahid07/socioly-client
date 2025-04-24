"use client";
import { Button } from "@nextui-org/react";
import { Plus, Send, Smile } from "lucide-react";

export default function ChatInput({ styles }: { styles: string }) {
  return (
    <div className={`${styles} flex items-center gap-3`}>
      <div className="flex items-center gap-3">
        <Button isIconOnly className="rounded-full border" size="sm">
          <Plus className="h-5 w-5" />
        </Button>
        <Button isIconOnly className="rounded-full" size="sm" color="warning">
          <Smile className="h-full w-full text-white" />
        </Button>
      </div>
      <div className="flex w-full items-center gap-3">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full rounded-full border-2 border-gray-200 px-4 py-1 focus:border-primary focus:outline-none"
        />
        <Button isIconOnly className="rounded-full bg-blue-700" size="sm">
          <Send className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
}
