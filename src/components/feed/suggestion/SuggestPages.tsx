/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody, CardHeader, Avatar, Button } from '@nextui-org/react'
import { Building2, Users, Plus, UserRoundCheck, Check } from 'lucide-react'

interface SuggestedPage {
    id: number
    name: string
    industry: string
    followers: number
    logo: string
}

const fakeData: SuggestedPage[] = [
    { id: 1, name: "TechCorp Solutions", industry: "Information Technology", followers: 25420, logo: "https://i.pravatar.cc/150?img=6" },
    { id: 2, name: "Global Innovations", industry: "Software Development", followers: 158900, logo: "https://i.pravatar.cc/150?img=7" },
    { id: 3, name: "Future Finance", industry: "Financial Services", followers: 89300, logo: "https://i.pravatar.cc/150?img=8" },
    { id: 4, name: "EcoSmart Systems", industry: "Environmental Services", followers: 12800, logo: "https://i.pravatar.cc/150?img=9" },
]


export default function SuggestPages() {
    const [followPage, setFollowPage] = useState<number[]>([]);


    const handleFollow = (id: number) => {

        setFollowPage((prev) =>
            prev.includes(id) ? prev.filter((profileId: any) => profileId !== id) : [...prev, id]
        );
    };




    return (
        <Card className="w-ful rounded-lg max-h-[300px] text-black">
            <CardHeader className="flex gap-3">
                <Building2 className="w-4 h-4" />
                <p className="text-md font-semibold">Pages you may follow</p>
            </CardHeader>
            <CardBody>
                <div className="space-y-4 overflow-y-auto custom-scrollbar pb-4">
                    {fakeData?.map((page, index) => (
                        <motion.div
                            key={page?.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="group relative "
                        >
                            <div className="flex items-center gap-3">
                                <Avatar className="w-8 h-8" src={page.logo} />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm ">{page.name}</p>
                                    <p className="text-xs ">{page.industry}</p>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                        <Users className="w-3 h-3" />
                                        {page.followers}
                                    </div>
                                </div>
                            </div>
                            <motion.div
                                className="absolute right-3 top-3"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button onPress={() => handleFollow(page?.id)} className={`rounded-full bg-white hover:bg-blue-700 hover:border ${followPage.includes(page?.id) ? "bg-blue-700 text-white" : ""}`} size="sm" isIconOnly aria-label="Like" >
                                    {
                                        followPage.includes(page?.id) ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />
                                    }
                                </Button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
};

