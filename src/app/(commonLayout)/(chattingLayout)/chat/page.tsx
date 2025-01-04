import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className="bg-slate-100 h-full w-full px-6 flex justify-center items-center">
            <Image
                src="https://res.cloudinary.com/dlxfcyc7x/image/upload/v1735959790/chat-robot_ggsw95.jpg"
                alt=""
                width={250}
                height={250}
                className="object-cover rounded-full"
            />
        </div>
    )
}
