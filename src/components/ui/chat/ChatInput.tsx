"use client";

import { Button, Textarea, Tooltip } from "@nextui-org/react";
import { Image as ImageIcon, Paperclip, Plus, Send, Smile } from "lucide-react";
import { useState } from "react";

export default function ChatInput({ styles }: { styles: string }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("Sending:", message);
    setMessage("");
  };

  return (
    <div
      className={`${styles} relative flex items-end gap-2 border-t border-divider bg-content1/80 p-3 backdrop-blur-md`}
    >
      <div className="flex items-center gap-1 pb-1">
        <Button
          isIconOnly
          variant="light"
          radius="full"
          size="sm"
          className="text-default-500 hover:text-default-700"
        >
          <Plus className="h-5 w-5" />
        </Button>
        <Button
          isIconOnly
          variant="light"
          radius="full"
          size="sm"
          className="text-default-500 hover:text-default-700"
        >
          <ImageIcon className="h-5 w-5" />
        </Button>
        <Button
          isIconOnly
          variant="light"
          radius="full"
          size="sm"
          className="text-default-500 hover:text-default-700"
        >
          <Paperclip className="h-5 w-5" />
        </Button>
      </div>

      <div className="relative flex-1">
        <Textarea
          minRows={1}
          maxRows={4}
          placeholder="Type a message..."
          value={message}
          onValueChange={setMessage}
          radius="full"
          variant="flat"
          classNames={{
            inputWrapper:
              "bg-default-100 dark:bg-default-50 shadow-none pr-10 hover:bg-default-200 dark:hover:bg-default-100 transition-colors",
            input: "py-2.5 text-medium",
          }}
        />
        <Tooltip content="Emoji picker coming soon" placement="top">
          <Button
            isIconOnly
            className="absolute bottom-1.5 right-2 z-10 text-default-400 hover:text-default-600"
            size="sm"
            variant="light"
            radius="full"
            isDisabled
          >
            <Smile className="h-5 w-5" />
          </Button>
        </Tooltip>
      </div>

      <Button
        isIconOnly
        className="mb-0.5 rounded-full bg-primary pb-0 text-white shadow-lg shadow-primary/20"
        size="md"
        onPress={handleSend}
        isDisabled={!message.trim()}
      >
        <Send className="ml-0.5 h-5 w-5" />
      </Button>
    </div>
  );
}
