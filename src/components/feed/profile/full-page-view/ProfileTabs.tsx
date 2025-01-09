'use client';
import React from 'react'
import { Tabs, Tab } from "@nextui-org/react"
import { motion } from "framer-motion"
import PostCard from '@/components/ui/cards/profile/PostCard'
import CreatePostInput from '../../feed/CreatePostInput'
import AboutCard from '@/components/ui/cards/profile/AboutCard'
import ConnectsCard from '@/components/ui/cards/profile/ConnectsCard'
import ProfileImageView from '@/components/modals/FullProfileView/ProfileImageView';
import VideoFullView from '@/components/modals/FullProfileView/VideoFullView';

export default function ProfileTabs() {
    const posts = [
        { id: 1, content: "Just launched a new project! Check it out at https://example.com", likes: 42, retweets: 10, comments: 5 },
        { id: 2, content: "Excited to speak at the upcoming tech conference next month!", likes: 78, retweets: 25, comments: 12 },
    ]



    return (
        <div className="w-full">
            <Tabs
                aria-label="Profile tabs"
                color="primary"
                variant="underlined"
                className="border-b w-full"
            >

                {/* posts tab start here  */}
                <Tab className="px-4" key="posts" title="Posts">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <CreatePostInput styles="mt-4 rounded-none border-b shadow-none text-black pb-4 mb-6" />
                        <div className="space-y-10">
                            {posts?.map((post, index) => (
                                <PostCard key={index} styles="border-b shadow-none drop-shadow-none rounded-none p-0" />
                            ))}
                        </div>
                    </motion.div>
                </Tab>
                {/* posts tab end here  */}


                {/* about tab start here  */}
                <Tab className="px-4" key="about" title="About">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <AboutCard />
                    </motion.div>
                </Tab>
                {/* about tab end here  */}


                {/* connections tab start here  */}
                <Tab className="px-4" key="connections" title="Connections">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <ConnectsCard />
                        </div>
                    </motion.div>
                </Tab>
                {/* connections tab end here  */}


                {/* photos tab start here  */}
                <Tab className="px-4" key="photos" title="Photos">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <ProfileImageView />
                        </div>
                    </motion.div>
                </Tab>
                {/* photos tab end here  */}


                {/* videos tab start here  */}
                <Tab className="px-4" key="videos" title="Videos">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div>
                            <VideoFullView />
                        </div>
                    </motion.div>
                </Tab>
                {/* videos tab end here  */}
            </Tabs>
        </div >
    )
}

