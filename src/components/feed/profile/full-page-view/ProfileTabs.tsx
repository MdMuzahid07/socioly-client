'use client'

import React from 'react'
import { Tabs, Tab, Card, CardBody, Avatar, Button, Input, Image } from "@nextui-org/react"
import { motion } from "framer-motion"
import { ImageIcon, Video, Calendar, Smile, Send } from 'lucide-react'
import PostCard from '@/components/ui/cards/profile/PostCard'

export default function ProfileTabs() {
    const posts = [
        { id: 1, content: "Just launched a new project! Check it out at https://example.com", likes: 42, retweets: 10, comments: 5 },
        { id: 2, content: "Excited to speak at the upcoming tech conference next month!", likes: 78, retweets: 25, comments: 12 },
    ]

    const connections = [
        { id: 1, name: "Jane Smith", username: "", role: "UX Designer" },
        { id: 2, name: "Bob Johnson", username: "", role: "Frontend Developer" },
        { id: 3, name: "Alice Williams", username: "", role: "Product Manager" },
        { id: 4, name: "Charlie Brown", username: "", role: "Data Scientist" },
    ]

    const photos = Array.from({ length: 18 }, (_, i) => ({
        id: i + 1,
        src: `https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid`,
    }))

    const videos = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        thumbnail: `https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid`,
    }))

    return (
        <div className="w-full">
            <Tabs
                aria-label="Profile tabs"
                color="primary"
                variant="underlined"
                className="border-b w-full"
            >
                <Tab key="posts" title="Posts">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="mt-4 rounded-none border-b shadow-none text-black pb-4 mb-6">
                            <CardBody>
                                <section className="flex gap-3 relative">
                                    <Avatar className="w-8 h-8" src="https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid" size="md" />
                                    <Input variant="underlined" placeholder="What's happening?" className="flex-1 " />
                                    <button className="rounded-full absolute right-0 bottom-3">
                                        <Send className="w-4 h-4" />
                                    </button>
                                </section>
                                <section className="flex justify-between mt-4">
                                    <Button className="rounded-full" variant="light" startContent={<ImageIcon className="w-4 h-4" />}>
                                        Photo
                                    </Button>
                                    <Button className="rounded-full" variant="light" startContent={<Video className="w-4 h-4" />}>
                                        Video
                                    </Button>
                                    <Button className="rounded-full" variant="light" startContent={<Calendar className="w-4 h-4" />}>
                                        Schedule
                                    </Button>
                                    <Button className="rounded-full" variant="light" startContent={<Smile className="w-4 h-4" />}>
                                        Feeling
                                    </Button>
                                </section>
                            </CardBody>
                        </Card>
                        <div className="space-y-16">
                            {posts?.map((post, index) => (
                                <PostCard key={index} />
                            ))}
                        </div>
                    </motion.div>
                </Tab>
                <Tab className="px-4" key="about" title="About">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="mt-4 rounded-none border-none shadow-none text-black">
                            <CardBody>
                                <h3 className="text-xl font-semibold mb-4">About John Doe</h3>
                                <p className="mb-4">
                                    Full-stack developer with 7+ years of experience in building scalable web applications.
                                    Passionate about open source and creating tools that make developers lives easier.
                                </p>
                                <h4 className="font-semibold mb-2">Skills</h4>
                                <p>JavaScript, React, Node.js, Python, Docker, AWS</p>
                                <h4 className="font-semibold mt-4 mb-2">Work</h4>
                                <p>Senior Developer at TechCorp (2018 - Present)</p>
                                <p>Full-stack Developer at WebSolutions Inc. (2015 - 2018)</p>
                                <h4 className="font-semibold mt-4 mb-2">Education</h4>
                                <p>BS in Computer Science, Tech University (2011 - 2015)</p>
                            </CardBody>
                        </Card>
                    </motion.div>
                </Tab>
                <Tab className="px-4" key="connections" title="Connections">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="mt-4 rounded-none border-none shadow-none text-black">
                            <CardBody>
                                <h3 className="text-xl font-semibold mb-4">Connections (250)</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {connections?.map((user) => (
                                        <div key={user.id} className="flex items-center gap-3">
                                            <Avatar src={`/placeholder.svg?height=40&width=40&text=${user.name[0]}`} />
                                            <div>
                                                <p className="font-semibold">{user.name}</p>
                                                <p className="text-small text-default-500">{user.username}</p>
                                                <p className="text-small text-default-500">{user.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                </Tab>
                <Tab className="px-4" key="photos" title="Photos">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="mt-4 rounded-none border-none shadow-none text-black">
                            <CardBody>
                                <h3 className="text-xl font-semibold mb-4">Photos</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {photos?.map((photo) => (
                                        <Image
                                            key={photo.id}
                                            src={photo.src}
                                            alt={`Photo ${photo.id}`}
                                            classNames={{
                                                img: "object-cover aspect-square rounded-lg",
                                                wrapper: "w-full",
                                            }}
                                        />
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                </Tab>
                <Tab className="px-4" key="videos" title="Videos">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="mt-4 rounded-none border-none shadow-none text-black">
                            <CardBody className="rounded-none">
                                <h3 className="text-xl font-semibold mb-4">Videos</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {videos?.map((video) => (
                                        <div key={video.id} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                            <Image
                                                src={video.thumbnail}
                                                alt={`Video ${video.id} thumbnail`}
                                                className="w-full rounded-lg"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                                <Video className="h-12 w-12 text-white" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </motion.div>
                </Tab>
            </Tabs>
        </div >
    )
}

