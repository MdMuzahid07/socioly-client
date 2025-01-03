import { Card, CardBody } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";


const connections = [
    { id: 1, name: "Jane Smith", username: "", role: "UX Designer" },
    { id: 2, name: "Bob Johnson", username: "", role: "Frontend Developer" },
    { id: 3, name: "Alice Williams", username: "", role: "Product Manager" },
    { id: 4, name: "Charlie Brown", username: "", role: "Data Scientist" },
    { id: 4, name: "Charlie Brown", username: "", role: "Data Scientist" },
    { id: 4, name: "Charlie Brown", username: "", role: "Data Scientist" },
    { id: 4, name: "Charlie Brown", username: "", role: "Data Scientist" },
    { id: 4, name: "Charlie Brown", username: "", role: "Data Scientist" },
    { id: 4, name: "Charlie Brown", username: "", role: "Data Scientist" },
    { id: 4, name: "Charlie Brown", username: "", role: "Data Scientist" },
]

export default function ConnectsCard() {
    return (
        <Card className="mt-4 rounded-none border-none shadow-none text-black">
            <CardBody>
                <h3 className="text-xl font-semibold mb-4">Connections (250)</h3>
                <div className="flex flex-wrap items-center gap-6">
                    {connections?.map((user) => (
                        <motion.div
                            key={user.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: user.id * 0.1 }}
                            className="flex items-center justify-between"
                        >
                            <motion.div
                                className="flex items-center gap-3"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                                    <Image
                                        src="https://img.freepik.com/free-vector/gradient-galaxy-background_52683-140963.jpg?t=st=1735897331~exp=1735900931~hmac=c60d4e5d12be4ef4021cd2a082f5bbfaf5970445eff1a4b30260b37b280fdb60&w=1380"
                                        alt={user.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium text-sm">{user.name}</h3>
                                    <p className="text-xs text-muted-foreground">{user.role}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}
