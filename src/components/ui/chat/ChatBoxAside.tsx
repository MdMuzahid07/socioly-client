"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { connections } from '../cards/profile/ConnectsCard';
import { useRouter } from 'next/navigation';

export default function ChatBoxAside({ styles }: { styles: string }) {
    const router = useRouter();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePress = (id: any) => {
        router.push(`/chat/${id}`);
    };


    return (
        <section className={`w-full bg-blue-100 p-6 border drop-shadow-sm sticky top-16 h-full max-h-screen ${styles}`}>
            <div className="mb-10 border-b border-black pb-4">
                <h2 className="text-lg font-semibold text-blue-700">Connections</h2>
                <p className="text-muted-foreground text-sm">Your connections on the platform</p>
            </div>
            <div className="flex flex-col space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {connections?.map((user) => (
                    <motion.div
                        onClick={() => handlePress(user?.id)}
                        key={user.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: user.id * 0.1 }}
                        className="flex items-center justify-between cursor-pointer"
                    >
                        <motion.div
                            className="flex items-center gap-3"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div
                                className="relative h-8 w-8 rounded-full">
                                <Image
                                    src="https://img.freepik.com/free-vector/gradient-galaxy-background_52683-140963.jpg?t=st=1735897331~exp=1735900931~hmac=c60d4e5d12be4ef4021cd2a082f5bbfaf5970445eff1a4b30260b37b280fdb60&w=1380"
                                    alt={user.name}
                                    fill
                                    className="object-cover rounded-full"
                                />
                                <span className="absolute flex h-2.5 w-2.5 right-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                                </span>
                            </div>
                            <div>
                                <h3 className="font-medium text-sm">{user.name}</h3>
                                <p className="text-xs text-muted-foreground">{user.role}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section >
    )
};
