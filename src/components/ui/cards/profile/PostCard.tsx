"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, Button, Card, CardBody, CardFooter, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react"
import { MessageCircle, MoreHorizontal, Send, Edit, Trash, UserMinus, ThumbsDown, ThumbsUp } from "lucide-react"
import Image from "next/image"
import ShareDropDown from "./ShareDropDown"

interface Comment {
    id: number
    user: {
        name: string
        avatar: string
        role: string
    }
    content: string
    timestamp: string
}

export default function PostCard({ styles }: { styles: string }) {
    const [isLiked, setIsLiked] = useState(false)
    const [isDisLiked, setIsDisLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(10)
    const [disLikeCount, setDisLikeCount] = useState(1)
    const [showComments, setShowComments] = useState(false)
    const [newComment, setNewComment] = useState('')

    const [comments] = useState<Comment[]>([
        {
            id: 1,
            user: {
                name: "Sarah Chen",
                avatar: "https://img.freepik.com/free-photo/view-3d-space-rocket-model_23-2151113269.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid",
                role: "Product Designer"
            },
            content: "This is really insightful! Thanks for sharing your experience.",
            timestamp: "2h"
        },
        {
            id: 2,
            user: {
                name: "Mark Thompson",
                avatar: "https://img.freepik.com/free-photo/view-3d-space-rocket-model_23-2151113269.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid",
                role: "Senior Developer"
            },
            content: "Great points! Would love to hear more about your implementation approach.",
            timestamp: "4h"
        }
    ])

    const handleLike = () => {
        setIsLiked(!isLiked)
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
    }

    const handleDislike = () => {
        setIsDisLiked(!isDisLiked)
        setDisLikeCount(isDisLiked ? disLikeCount - 1 : disLikeCount + 1)
    }

    const handleComment = () => {
        setShowComments(!showComments)
    }

    const handleDelete = () => {
        console.log("Delete post")
        // Implement delete functionality here
    }

    const handleEdit = () => {
        console.log("Edit post")
        // Implement edit functionality here
    }

    const handleUnfollow = () => {
        console.log("Unfollow user")
        // Implement unfollow functionality here
    }

    return (
        <Card className={`w-full p-4 shadow-none mb-10 ${styles}`}>
            <CardBody className="gap-4 p-0 text-black">
                {/* Post Header section */}
                <section className="flex justify-between items-start">
                    <div className="flex gap-3">
                        <Avatar
                            src="https://img.freepik.com/free-photo/view-3d-space-rocket-model_23-2151113269.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid"
                            className="w-10 h-10"
                        />
                        <div>
                            <p className="font-semibold">Alex Morgan</p>
                            <p className="text-small text-default-500">Frontend Developer at TechCorp</p>
                            <p className="text-tiny text-default-400">2h • 🌏</p>
                        </div>
                    </div>
                    <Dropdown placement="bottom-end" className="text-black rounded-lg">
                        <DropdownTrigger>
                            <Button isIconOnly variant="light" className="text-default-400">
                                <MoreHorizontal className="w-5 h-5" />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Post actions">
                            <DropdownItem key="edit" startContent={<Edit className="w-4 h-4" />} onPress={handleEdit}>
                                Edit post
                            </DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger" startContent={<Trash className="w-4 h-4" />} onPress={handleDelete}>
                                Delete post
                            </DropdownItem>
                            <DropdownItem key="unfollow" startContent={<UserMinus className="w-4 h-4" />} onPress={handleUnfollow}>
                                Unfollow Alex Morgan
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </section>

                {/* Post Content section */}
                <section className="space-y-4">
                    <p className="text-default-700">
                        Just wrapped up an exciting project using Next.js 13 and Tailwind CSS. The new
                        App Router features are game-changing! Here a quick overview of what we built... 🚀
                    </p>
                    <Image
                        src="https://img.freepik.com/free-photo/view-3d-space-rocket-model_23-2151113269.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid"
                        alt="Project preview"
                        height={300}
                        width={600}
                        layout="responsive"
                        className="rounded-lg object-cover object-center"
                    />
                </section>

                {/* Engagement Stats, like, dislike */}
                <section className="flex justify-between items-center text-small text-default-400 pt-2">
                    <div className="flex items-center gap-4">
                        <motion.div animate={{ scale: isLiked ? [1, 1.2, 1] : 1 }}>
                            <span>{likeCount} Likes</span>
                        </motion.div>
                        <motion.div animate={{ scale: isDisLiked ? [1, 1.2, 1] : 1 }}>
                            <span>{disLikeCount} DisLikes</span>
                        </motion.div>
                    </div>
                    <div className="flex gap-4">
                        <span>{comments.length} Comments</span>
                        <span>12 Shares</span>
                    </div>
                </section>
            </CardBody>

            {/* Action Buttons, or footer section */}
            <CardFooter className="border-t border-default-200">
                <div className="flex gap-1 w-full">
                    <Button
                        variant="light"
                        className="flex-1"
                        startContent={
                            <ThumbsUp
                                className={`w-5 h-5 ${isLiked ? "fill-blue-700 text-blue-700" : ""}`}
                            />
                        }
                        onPress={handleLike}
                    >
                        Like
                    </Button>
                    <Button
                        variant="light"
                        className="flex-1"
                        startContent={
                            <ThumbsDown
                                className={`w-5 h-5 ${isDisLiked ? "fill-red-500 text-red-500" : ""}`}
                            />
                        }
                        onPress={handleDislike}
                    >
                        Like
                    </Button>
                    <Button
                        variant="light"
                        className="flex-1"
                        startContent={<MessageCircle className="w-5 h-5" />}
                        onPress={handleComment}
                    >
                        Comment
                    </Button>
                    <ShareDropDown />
                </div>
            </CardFooter>

            {/* Comments Section */}
            <AnimatePresence>
                {showComments && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-default-200 text-black"
                    >
                        <section className="p-4 space-y-4">
                            {/* Comment Input */}
                            <section className="flex gap-3 items-center">
                                <Avatar
                                    src="https://img.freepik.com/free-photo/view-3d-space-rocket-model_23-2151113269.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid"
                                    className="w-8 h-8"
                                />
                                <div className="flex-1 flex gap-2">
                                    <Input
                                        placeholder="Add a comment..."
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        className="flex-1"
                                        size="sm"
                                    />
                                    <Button
                                        isIconOnly
                                        variant="light"
                                        isDisabled={!newComment}
                                        className="text-primary"
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </div>
                            </section>

                            {/* Comments List */}
                            <section className="space-y-4">
                                {comments.map((comment) => (
                                    <motion.div
                                        key={comment.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-3"
                                    >
                                        <Avatar
                                            src={comment.user.avatar}
                                            className="w-8 h-8"
                                        />
                                        <section className="flex-1">
                                            <div className="bg-default-100 rounded-lg p-3">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-semibold text-small">
                                                            {comment.user.name}
                                                        </p>
                                                        <p className="text-tiny text-default-500">
                                                            {comment.user.role}
                                                        </p>
                                                    </div>
                                                    <span className="text-tiny text-default-400">
                                                        {comment.timestamp}
                                                    </span>
                                                </div>
                                                <p className="mt-1 text-small">{comment.content}</p>
                                            </div>
                                            <div className="flex gap-4 mt-1 ml-3">
                                                <Button
                                                    size="sm"
                                                    variant="light"
                                                    className="text-tiny text-default-500"
                                                >
                                                    Like
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="light"
                                                    className="text-tiny text-default-500"
                                                >
                                                    Reply
                                                </Button>
                                            </div>
                                        </section>
                                    </motion.div>
                                ))}
                            </section>
                        </section>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    )
};

