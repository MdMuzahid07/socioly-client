"use client";

import { Button, Input, Tooltip } from "@nextui-org/react";
import { Image as ImageIcon, Paperclip, Plus, Send, Smile } from "lucide-react";
import { KeyboardEvent, useState } from "react";

interface ChatInputProps {
  styles?: string;
  onSendMessage?: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  styles = "",
  onSendMessage,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim() || disabled) return;
    const trimmedMessage = message.trim();
    if (onSendMessage) {
      onSendMessage(trimmedMessage);
    }
    setMessage("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className={`${styles} relative flex items-end gap-2 border-t border-divider bg-content1/95 p-4 backdrop-blur-md`}
    >
      <div className="flex items-center gap-1">
        <Tooltip content="Add media" placement="top">
          <Button
            isIconOnly
            variant="light"
            radius="full"
            size="sm"
            className="text-default-500 hover:bg-default-100 hover:text-default-700"
            isDisabled={disabled}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </Tooltip>
        <Tooltip content="Attach image" placement="top">
          <Button
            isIconOnly
            variant="light"
            radius="full"
            size="sm"
            className="text-default-500 hover:bg-default-100 hover:text-default-700"
            isDisabled={disabled}
          >
            <ImageIcon className="h-5 w-5" />
          </Button>
        </Tooltip>
        <Tooltip content="Attach file" placement="top">
          <Button
            isIconOnly
            variant="light"
            radius="full"
            size="sm"
            className="text-default-500 hover:bg-default-100 hover:text-default-700"
            isDisabled={disabled}
          >
            <Paperclip className="h-5 w-5" />
          </Button>
        </Tooltip>
      </div>

      <div className="relative flex-1">
        <Input
          placeholder="Type a message..."
          value={message}
          onValueChange={setMessage}
          onKeyDown={handleKeyPress}
          radius="full"
          variant="flat"
          isDisabled={disabled}
          classNames={{
            inputWrapper:
              "bg-default-100 dark:bg-default-50 shadow-none pr-10 hover:bg-default-200 dark:hover:bg-default-100 transition-colors border-none",
            input: "py-2.5 text-sm",
          }}
        />
        <Tooltip content="Emoji picker coming soon" placement="top">
          <Button
            isIconOnly
            className="absolute bottom-1.5 right-2 z-10 text-default-400 hover:text-default-600"
            size="sm"
            variant="light"
            radius="full"
            isDisabled={disabled}
          >
            <Smile className="h-5 w-5" />
          </Button>
        </Tooltip>
      </div>

      <Button
        isIconOnly
        className="mb-0.5 rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30"
        size="md"
        onPress={handleSend}
        isDisabled={!message.trim() || disabled}
      >
        <Send className="ml-0.5 h-5 w-5" />
      </Button>
    </div>
  );
}
