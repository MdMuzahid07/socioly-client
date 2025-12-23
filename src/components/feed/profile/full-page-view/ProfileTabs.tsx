"use client";
import AboutCard from "@/components/ui/cards/profile/AboutCard";
import ConnectsCard from "@/components/ui/cards/profile/ConnectsCard";
import PhotosCard from "@/components/ui/cards/profile/PhotosCard";
import PostCard from "@/components/ui/cards/profile/PostCard";
import VideosCard from "@/components/ui/cards/profile/VideosCard";
import { MOCK_POSTS } from "@/lib/data/mockData";
import { Post } from "@/types";
import { Tab, Tabs } from "@nextui-org/react";
import { motion } from "framer-motion";
import CreatePostInput from "../../feed/CreatePostInput";

export default function ProfileTabs() {
  const posts: Post[] = MOCK_POSTS;

  return (
    <div className="w-full">
      <Tabs
        aria-label="Profile tabs"
        color="primary"
        variant="underlined"
        className="w-full border-b"
      >
        {/* posts tab start here  */}
        <Tab className="px-4" key="posts" title="Posts">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CreatePostInput className="mb-6 mt-4 rounded-none border-b pb-4 text-black shadow-none" />
            <div className="space-y-10">
              {posts?.map((post, index) => (
                <PostCard
                  key={index}
                  post={post}
                  className="rounded-none border-b shadow-none"
                />
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
            <PhotosCard />
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
            <VideosCard />
          </motion.div>
        </Tab>
        {/* videos tab end here  */}
      </Tabs>
    </div>
  );
}
