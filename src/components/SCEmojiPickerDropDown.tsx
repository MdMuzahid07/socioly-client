"use client";
import { Spinner } from "@nextui-org/react";
import { EmojiClickData, Theme } from "emoji-picker-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { lazy, Suspense, useEffect, useState } from "react";

// Lazy load the emoji picker
const EmojiPicker = lazy(() => import("emoji-picker-react"));

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
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload the emoji picker on component mount
  useEffect(() => {
    const preloadTimer = setTimeout(() => {
      import("emoji-picker-react").then(() => {
        setIsLoaded(true);
      });
    }, 100); // Small delay to not block initial render

    return () => clearTimeout(preloadTimer);
  }, []);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setEmoji(emojiData.emoji);
    setDropEmojiPicker(false);
  };

  if (!dropEmojiPicker) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="absolute bottom-[70px] right-0 z-50 overflow-hidden rounded-xl shadow-xl"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <Suspense
          fallback={
            <div className="flex h-[400px] w-[320px] items-center justify-center rounded-xl bg-content1">
              <Spinner size="lg" color="primary" />
            </div>
          }
        >
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            theme={theme === "dark" ? Theme.DARK : Theme.LIGHT}
            width={320}
            height={400}
            lazyLoadEmojis={true}
            previewConfig={{ showPreview: false }}
            searchPlaceHolder="Search emoji..."
            skinTonesDisabled
          />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}
