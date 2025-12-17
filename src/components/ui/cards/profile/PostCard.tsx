"use client";
import { useAuth } from "@/context/AuthContext";
import { useLikePostMutation } from "@/lib/store/features/api/apiSlice";
import { Post } from "@/types";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Image as NextImage,
} from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Edit,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Trash,
} from "lucide-react";
import { useState } from "react";
import ShareDropDown from "./ShareDropDown";

interface PostCardProps {
  post: Post;
  className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
  const { user } = useAuth(); // If needed for ownership checks
  const [isLiked, setIsLiked] = useState(post.isLikedByCurrentUser);
  const [likeCount, setLikeCount] = useState(post.likesCount);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const [likePost] = useLikePostMutation();

  const handleLike = async () => {
    // Optimistic UI update
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    setLikeCount(newIsLiked ? likeCount + 1 : likeCount - 1);

    try {
      await likePost(post.id).unwrap();
    } catch (error) {
      // Revert on failure
      setIsLiked(!newIsLiked);
      setLikeCount(newIsLiked ? likeCount - 1 : likeCount + 1);
      console.error("Failed to like post", error);
    }
  };

  const timeAgo = (dateStr: string) => {
    // Basic date parsing safely
    let date = new Date();
    try {
      date = new Date(dateStr);
    } catch (e) {
      return "now";
    }

    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000); // seconds

    if (diff < 60) return `${diff}s`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className={`w-full ${className || ""}`}>
        <CardBody className="gap-4 p-4">
          <section className="flex items-start justify-between">
            <div className="flex gap-3">
              <Avatar
                src={post.user.avatar}
                className="h-10 w-10 cursor-pointer"
                isBordered
              />
              <div>
                <p className="cursor-pointer text-medium font-semibold hover:underline">
                  {post.user.name}
                </p>
                <p className="text-small text-default-500">
                  {timeAgo(post.createdAt)} • 🌏
                </p>
              </div>
            </div>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  className="text-default-400"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Post actions">
                <DropdownItem
                  key="edit"
                  startContent={<Edit className="h-4 w-4" />}
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                  startContent={<Trash className="h-4 w-4" />}
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </section>

          <section className="space-y-3">
            <p className="whitespace-pre-wrap text-medium leading-relaxed text-default-700">
              {post.content}
            </p>
            {post.images && post.images.length > 0 && (
              <div className="mt-2 overflow-hidden rounded-xl">
                {/* Using NextUI Image for better integration or Next/Image */}
                <NextImage
                  src={post.images[0]}
                  alt="Post image"
                  className="h-full max-h-[500px] w-full object-cover"
                />
              </div>
            )}
          </section>

          <section className="mt-2 flex items-center justify-between border-t border-divider pt-2 text-small text-default-400">
            <div className="flex gap-4">
              <span>{likeCount} Likes</span>
              <span>{post.commentsCount} Comments</span>
            </div>
          </section>
        </CardBody>

        <CardFooter className="gap-2 pt-0">
          <Button
            variant="light"
            className="flex-1 data-[hover=true]:bg-default-100"
            onPress={handleLike}
            startContent={
              <motion.div
                animate={{ scale: isLiked ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Heart
                  className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : "text-default-500"}`}
                />
              </motion.div>
            }
          >
            <span
              className={
                isLiked ? "font-medium text-red-500" : "text-default-500"
              }
            >
              Like
            </span>
          </Button>

          <Button
            variant="light"
            className="flex-1 text-default-500 data-[hover=true]:bg-default-100"
            onPress={() => setShowComments(!showComments)}
            startContent={<MessageCircle className="h-5 w-5" />}
          >
            Comment
          </Button>

          <div className="flex flex-1 justify-center">
            <ShareDropDown />
          </div>
        </CardFooter>

        <AnimatePresence>
          {showComments && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="border-t border-divider bg-default-50 p-4">
                <div className="mb-4 flex gap-2">
                  <Input
                    placeholder="Write a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    size="sm"
                    radius="full"
                    classNames={{
                      inputWrapper: "bg-white dark:bg-default-100 shadow-sm",
                    }}
                    endContent={
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        color="primary"
                        isDisabled={!newComment}
                      >
                        <Send size={16} />
                      </Button>
                    }
                  />
                </div>
                {/* Placeholder for comments list */}
                <p className="py-2 text-center text-tiny text-default-400">
                  No comments yet. Be the first!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
