"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import SettingAside from "@/components/settings/SettingsAside";
import SettingHeader from "@/components/settings/Header";
import React, { useEffect, useState } from "react";

export default function SettingLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);


    return (
        <>
            {
                isLoading ? (
                    <LoadingSpinner styles="text-white bg-blue-700 h-screen w-full flex justify-center items-center" />
                ) : (
                    <>
                        <div className="grid grid-cols-12 h-full w-full relative">
                            <SettingAside
                                isSidebarOpen={isSidebarOpen}
                                setIsSidebarOpen={setIsSidebarOpen}
                            />
                            <div
                                className={
                                    `${isSidebarOpen
                                        ? "col-span-12 lg:col-span-8 xl:col-span-10"
                                        : "col-span-12"
                                    }`
                                }
                            >
                                <SettingHeader
                                    setIsSidebarOpen={setIsSidebarOpen}
                                    isSidebarOpen={isSidebarOpen}
                                />
                                <div className="bg-slate-50 text-black">
                                    <div
                                        className={`sm:px-16 px-6 ${isSidebarOpen ? "max-w-4xl" : "max-w-4xl"
                                            } min-h-screen w-full mx-auto `}
                                    >
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
};

