"use client";
import ProfileEdit from "@/components/modals/Profile/ProfileEdit";
import { Avatar } from "@nextui-org/avatar"
import { Image, useDisclosure } from "@nextui-org/react"
import { motion } from "framer-motion"
import { MapPin, Calendar, LinkIcon, BadgeCheck } from 'lucide-react'

export default function ProfileHeader() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();



    return (
        <header className="bg-white text-black overflow-hidden border-b w-full">
            <section className="relative">
                {/* Banner */}
                <motion.div
                    className="h-48 bg-blue-700 relative z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="https://img.freepik.com/free-photo/rocket-flying-through-space_23-2150378594.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid"
                        alt="Profile banner"
                        className="w-full h-full object-cover rounded-none"
                        width={"100%"}
                        height={192}
                    />
                </motion.div>

                <section className="px-4 z-50">
                    {/* Profile Avatar */}
                    <motion.div
                        className="relative"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Avatar
                            src="https://img.freepik.com/free-photo/view-3d-space-rocket-model_23-2151113269.jpg?uid=R74546932&ga=GA1.1.1246546318.1733558748&semt=ais_hybrid"
                            className="absolute -top-16 border-4 border-white w-32 h-32"
                        />
                    </motion.div>

                    {/* Profile Actions */}
                    <div className="flex justify-end py-3">
                        <ProfileEdit
                            isOpen={isOpen}
                            onOpen={onOpen}
                            onOpenChange={onOpenChange}
                        />
                    </div>

                    {/* Profile Info */}
                    <motion.div
                        className="mt-2 pb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className="text-2xl font-bold flex items-center">John Doe  <BadgeCheck className="w-4 h-4 ml-2" /></h1>
                        <p className="text-gray-500">@johndoe</p>
                        <p className="mt-2">Full-stack developer(MERN) | Open source enthusiast | Coffee lover</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-gray-500">
                            <div className="flex items-center gap-1">
                                <MapPin size={16} />
                                <span>San Francisco, CA</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <LinkIcon size={16} />
                                <a href="#" className="text-blue-500 hover:underline">johndoe.com</a>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar size={16} />
                                <span>Joined September 2010</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <p><strong>1,234</strong> <span className="text-gray-500">Following</span></p>
                            <p><strong>5,678</strong> <span className="text-gray-500">Followers</span></p>
                        </div>
                    </motion.div>
                </section>
            </section>
        </header>
    )
};

