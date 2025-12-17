"use client";
import { useAuth } from "@/context/AuthContext";
import { useCreatePostMutation } from "@/lib/store/features/api/apiSlice";
import { Avatar, Button, Card, CardBody, Input } from "@nextui-org/react";
import { Image, Send, Smile, Video } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  className?: string; // Changing styles to className for standard pattern, or support both if legacy needed, but className is better
}

export default function CreatePostInput({ className }: Props = {}) {
  const { user } = useAuth();
  const [content, setContent] = useState("");
  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleSubmit = async () => {
    if (!content.trim()) return;

    try {
      await createPost({ content }).unwrap();
      setContent("");
      toast.success("Post created successfully!");
    } catch (error) {
      toast.error("Failed to create post");
    }
  };

  return (
    <Card className={`w-full ${className || ""}`}>
      <CardBody className="gap-4">
        <div className="flex gap-4">
          <Avatar src={user?.avatar} />
          <Input
            placeholder={`What's on your mind, ${user?.name}?`}
            value={content}
            onValueChange={setContent}
            variant="flat"
            size="lg"
            classNames={{
              inputWrapper: "bg-default-100 hover:bg-default-200",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
        </div>

        <div className="flex items-center justify-between pl-14">
          <div className="flex gap-2">
            <Button
              isIconOnly
              variant="light"
              size="sm"
              className="text-default-500"
            >
              <Image size={20} />
            </Button>
            <Button
              isIconOnly
              variant="light"
              size="sm"
              className="text-default-500"
            >
              <Video size={20} />
            </Button>
            <Button
              isIconOnly
              variant="light"
              size="sm"
              className="text-default-500"
            >
              <Smile size={20} />
            </Button>
          </div>

          <Button
            color="primary"
            endContent={<Send size={18} />}
            onPress={handleSubmit}
            isLoading={isLoading}
            isDisabled={!content.trim()}
          >
            Post
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
