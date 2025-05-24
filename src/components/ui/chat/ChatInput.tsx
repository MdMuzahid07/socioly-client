"use client";

import SCEmojiPickerDropDown from "@/components/SCEmojiPickerDropDown";
import { Button } from "@nextui-org/react";
import { Plus, Send, Smile } from "lucide-react";
import { useState } from "react";

export default function ChatInput({ styles }: { styles: string }) {
  const [emoji, setEmoji] = useState<string | null>(null);
  const [dropEmojiPicker, setDropEmojiPicker] = useState(false);

  return (
    <div className={`${styles} relative flex items-center gap-3`}>
      <div className="flex items-center gap-3">
        <Button isIconOnly className="rounded-full border" size="sm">
          <Plus className="h-5 w-5" />
        </Button>
        <Button
          onPress={() => setDropEmojiPicker(!dropEmojiPicker)}
          isIconOnly
          className="rounded-full"
          size="sm"
          color="warning"
        >
          <Smile className="h-full w-full text-white" />
        </Button>
      </div>
      <div className="flex w-full items-center gap-3">
        <input
          type="text"
          placeholder="Type a message"
          onChange={(e) => setEmoji(e.target.value)}
          value={emoji || ""}
          className="w-full rounded-full border-2 border-gray-200 px-4 py-1 focus:border-primary focus:outline-none"
        />
        <Button isIconOnly className="rounded-full bg-blue-700" size="sm">
          <Send className="h-5 w-5 text-white" />
        </Button>
      </div>
      <SCEmojiPickerDropDown
        dropEmojiPicker={dropEmojiPicker}
        setDropEmojiPicker={setDropEmojiPicker}
        setEmoji={setEmoji}
      />
    </div>
  );
}
