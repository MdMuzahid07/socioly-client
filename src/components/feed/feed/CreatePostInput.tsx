"use client";

import { useAuth } from "@/context/AuthContext";
import { useCreatePostMutation } from "@/lib/store/features/api/apiSlice";
import { Avatar, Button, Card, CardBody, Textarea } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Image, Send, Smile, Video } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  className?: string;
}

export default function CreatePostInput({ className }: Props = {}) {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleSubmit = async () => {
    if (!content.trim()) return;

    try {
      await createPost({ content }).unwrap();
      setContent("");
      setIsFocused(false);
      toast.success("Post created successfully!");
    } catch (error) {
      toast.error("Failed to create post");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      <Card className="premium-shadow w-full border-small border-divider bg-content1">
        <CardBody className="gap-4 p-4 sm:p-6">
          {/* Input Section */}
          <div className="flex gap-3 sm:gap-4">
            <Avatar
              src={user?.avatar}
              className="h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12"
              isBordered
              color="primary"
            />
            <Textarea
              placeholder={`What's on your mind, ${user?.name?.split(" ")[0] || "there"}?`}
              value={content}
              onValueChange={setContent}
              onFocus={() => setIsFocused(true)}
              variant="flat"
              minRows={isFocused ? 3 : 1}
              maxRows={8}
              classNames={{
                base: "flex-1",
                inputWrapper:
                  "bg-default-100 hover:bg-default-200 dark:bg-default-50 dark:hover:bg-default-100 transition-all duration-200 border-none",
                input:
                  "text-sm sm:text-base text-foreground placeholder:text-default-500",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
            />
          </div>

          {/* Actions Section */}
          <motion.div
            initial={false}
            animate={{
              height: isFocused || content ? "auto" : 0,
              opacity: isFocused || content ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="h-px w-full bg-divider" />
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Media Buttons */}
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="flat"
                  className="flex-1 bg-default-100 text-default-600 hover:bg-default-200 dark:bg-default-50 dark:hover:bg-default-100 sm:flex-none"
                  startContent={<Image size={18} className="text-success" />}
                >
                  <span className="hidden sm:inline">Photo</span>
                  <span className="sm:hidden">Photo</span>
                </Button>
                <Button
                  size="sm"
                  variant="flat"
                  className="flex-1 bg-default-100 text-default-600 hover:bg-default-200 dark:bg-default-50 dark:hover:bg-default-100 sm:flex-none"
                  startContent={<Video size={18} className="text-danger" />}
                >
                  <span className="hidden sm:inline">Video</span>
                  <span className="sm:hidden">Video</span>
                </Button>
                <Button
                  size="sm"
                  variant="flat"
                  className="flex-1 bg-default-100 text-default-600 hover:bg-default-200 dark:bg-default-50 dark:hover:bg-default-100 sm:flex-none"
                  startContent={<Smile size={18} className="text-warning" />}
                >
                  <span className="hidden sm:inline">Feeling</span>
                  <span className="sm:hidden">Emoji</span>
                </Button>
              </div>

              {/* Post Button */}
              <Button
                color="primary"
                endContent={<Send size={16} />}
                onPress={handleSubmit}
                isLoading={isLoading}
                isDisabled={!content.trim()}
                className="w-full font-semibold sm:w-auto"
                size="sm"
              >
                Post
              </Button>
            </div>
          </motion.div>

          {/* Collapsed Actions */}
          {!isFocused && !content && (
            <div className="flex items-center justify-between border-t border-divider pt-3">
              <div className="flex gap-1 sm:gap-2">
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  className="text-success hover:bg-success/10"
                >
                  <Image size={20} />
                </Button>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  className="text-danger hover:bg-danger/10"
                >
                  <Video size={20} />
                </Button>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  className="text-warning hover:bg-warning/10"
                >
                  <Smile size={20} />
                </Button>
              </div>
              <p className="text-xs text-default-400 sm:text-sm">
                Ctrl+Enter to post
              </p>
            </div>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
}
