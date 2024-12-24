"use client";
import React from 'react';
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'sonner';


export interface ProvidersProps {
    children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
    return (
        <>
            <NextUIProvider>
                {children}
            </NextUIProvider>
            <Toaster position="bottom-right" />
        </>
    )
}
