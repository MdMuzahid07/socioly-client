"use client";
import React from 'react';
import { NextUIProvider } from '@nextui-org/react'


export interface ProvidersProps {
    children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
    return (
        <div>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </div>
    )
}
