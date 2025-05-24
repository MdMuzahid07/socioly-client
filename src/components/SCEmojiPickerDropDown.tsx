"use client";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { motion, AnimatePresence } from "framer-motion";

interface SCEmojiPickerDropDownProps {
  setEmoji: (emoji: string) => void;
  dropEmojiPicker: boolean;
  setDropEmojiPicker: (value: boolean) => void;
}

export default function SCEmojiPickerDropDown({
  setEmoji,
  dropEmojiPicker,
  setDropEmojiPicker,
}: SCEmojiPickerDropDownProps) {
  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setEmoji(emojiData.emoji);
    setDropEmojiPicker(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="absolute bottom-[60px] z-50"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <EmojiPicker
          open={dropEmojiPicker}
          onEmojiClick={handleEmojiClick}
          width={300}
        />
      </motion.div>
    </AnimatePresence>
  );
}
