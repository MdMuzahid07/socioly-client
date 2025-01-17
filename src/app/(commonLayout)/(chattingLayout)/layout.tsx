import ChatBoxAside from '@/components/ui/chat/ChatBoxAside'
import Container from '@/components/ui/common/Container'
import React from 'react'

export default function ChattingLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="bg-slate-50 relative text-black py-1">
            <Container>
                <div className="grid sm:grid-cols-12 h-[92vh] min-w-screen border rounded-lg overflow-hidden drop-shadow-sm">
                    <ChatBoxAside styles="sm:col-span-4 md:col-span-3" />
                    <div className="w-full sm:col-span-8 md:col-span-9">
                        {children}
                    </div>
                </div>
            </Container>
        </section>
    )
};
