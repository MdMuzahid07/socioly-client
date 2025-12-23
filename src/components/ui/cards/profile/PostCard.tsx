"use client";
import { useAuth } from "@/context/AuthContext";
import { MOCK_COMMENTS, MOCK_USERS } from "@/lib/data/mockData";
import { useLikePostMutation } from "@/lib/store/features/api/apiSlice";
import { Comment, Post } from "@/types";
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
  Bookmark,
  BookmarkCheck,
  Copy,
  Edit,
  Flag,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Send,
  Trash,
} from "lucide-react";
import { useState } from "react";
import ImageModal from "../../modals/ImageModal";
import VideoModal from "../../modals/VideoModal";
import ShareDropDown from "./ShareDropDown";

interface PostCardProps {
  post: Post;
  className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(post.isLikedByCurrentUser);
  const [likeCount, setLikeCount] = useState(post.likesCount);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comment[]>(
    MOCK_COMMENTS[post.id] || [],
  );
  const [commentCount, setCommentCount] = useState(post.commentsCount);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
    let date = new Date();
    try {
      date = new Date(dateStr);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return "now";
    }

    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 60) return `${diff}s`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
    return `${Math.floor(diff / 86400)}d`;
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      content: newComment,
      user: MOCK_USERS.current,
      createdAt: new Date().toISOString(),
    };

    setComments([...comments, comment]);
    setCommentCount(commentCount + 1);
    setNewComment("");
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}/post/${post.id}`;
    navigator.clipboard.writeText(url);
  };

  const isOwnPost = user?.id === post.user.id;

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
                  className="text-default-400 hover:text-foreground"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Post actions">
                {isOwnPost ? (
                  <>
                    <DropdownItem
                      key="edit"
                      startContent={<Edit className="h-4 w-4" />}
                    >
                      Edit Post
                    </DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-danger"
                      color="danger"
                      startContent={<Trash className="h-4 w-4" />}
                    >
                      Delete Post
                    </DropdownItem>
                  </>
                ) : (
                  <>
                    <DropdownItem
                      key="bookmark"
                      startContent={
                        isBookmarked ? (
                          <BookmarkCheck className="h-4 w-4" />
                        ) : (
                          <Bookmark className="h-4 w-4" />
                        )
                      }
                      onPress={() => setIsBookmarked(!isBookmarked)}
                    >
                      {isBookmarked ? "Remove from Bookmarks" : "Save Post"}
                    </DropdownItem>
                    <DropdownItem
                      key="copy"
                      startContent={<Copy className="h-4 w-4" />}
                      onPress={handleCopyLink}
                    >
                      Copy Link
                    </DropdownItem>
                    <DropdownItem
                      key="report"
                      className="text-danger"
                      color="danger"
                      startContent={<Flag className="h-4 w-4" />}
                    >
                      Report Post
                    </DropdownItem>
                  </>
                )}
              </DropdownMenu>
            </Dropdown>
          </section>

          <section className="space-y-3">
            <p className="whitespace-pre-wrap text-medium leading-relaxed text-default-700">
              {post.content}
            </p>
            {post.images && post.images.length > 0 && (
              <div className="mt-2 overflow-hidden rounded-xl">
                {post.images.length === 1 ? (
                  <div
                    className="relative cursor-pointer overflow-hidden"
                    onClick={() => handleImageClick(0)}
                  >
                    <NextImage
                      src={post.images[0]}
                      alt="Post image"
                      className="h-full max-h-[500px] w-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors hover:bg-black/10" />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-1">
                    {post.images.slice(0, 4).map((img, idx) => (
                      <div
                        key={idx}
                        className="relative cursor-pointer overflow-hidden"
                        onClick={() => handleImageClick(idx)}
                      >
                        <NextImage
                          src={img}
                          alt={`Post image ${idx + 1}`}
                          className="h-full max-h-[250px] w-full object-cover transition-transform hover:scale-105"
                        />
                        {idx === 3 && post.images && post.images.length > 4 && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                            +{post.images.length - 4} more
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>

          <section className="mt-2 flex items-center justify-between border-t border-divider pt-2 text-small text-default-400">
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-foreground">
                {likeCount} {likeCount === 1 ? "Like" : "Likes"}
              </span>
              <span
                className="cursor-pointer hover:text-foreground"
                onClick={() => setShowComments(!showComments)}
              >
                {commentCount} {commentCount === 1 ? "Comment" : "Comments"}
              </span>
              {post.shares && (
                <span>
                  {post.shares} {post.shares === 1 ? "Share" : "Shares"}
                </span>
              )}
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
                        isDisabled={!newComment.trim()}
                        onPress={handleAddComment}
                      >
                        <Send size={16} />
                      </Button>
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleAddComment();
                      }
                    }}
                  />
                </div>

                {/* Comments List */}
                <div className="max-h-[400px] space-y-3 overflow-y-auto">
                  {comments.length === 0 ? (
                    <p className="py-4 text-center text-tiny text-default-400">
                      No comments yet. Be the first!
                    </p>
                  ) : (
                    comments.map((comment) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3"
                      >
                        <Avatar
                          src={comment.user.avatar}
                          size="sm"
                          className="h-8 w-8 flex-shrink-0"
                        />
                        <div className="flex-1 rounded-lg bg-default-100 px-3 py-2">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-foreground">
                              {comment.user.name}
                            </p>
                            <span className="text-xs text-default-500">
                              {timeAgo(comment.createdAt)}
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-default-700">
                            {comment.content}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Image Modal */}
      {post.images && post.images.length > 0 && (
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          imageUrl={post.images[selectedImageIndex]}
          alt={`Post image by ${post.user.name}`}
          images={post.images}
          currentIndex={selectedImageIndex}
        />
      )}

      {/* Video Modal - if videos are added to Post type */}
      {isVideoModalOpen && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl=""
          title={`Video by ${post.user.name}`}
        />
      )}
    </motion.div>
  );
}
