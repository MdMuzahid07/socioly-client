"use client";
import LoadingSpinner from "@/components/LoadingSpinner";
import SettingHeader from "@/components/settings/Header";
import SettingAside from "@/components/settings/SettingsAside";
import React, { useEffect, useState } from "react";

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner styles="text-white bg-blue-700 h-screen w-full flex justify-center items-center" />
      ) : (
        <>
          <div className="relative grid h-full w-full grid-cols-12">
            <SettingAside
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <div
              className={`${
                isSidebarOpen
                  ? "col-span-12 lg:col-span-8 xl:col-span-10"
                  : "col-span-12"
              }`}
            >
              <SettingHeader
                setIsSidebarOpen={setIsSidebarOpen}
                isSidebarOpen={isSidebarOpen}
              />
              <div className="bg-background text-foreground">
                <div
                  className={`px-6 sm:px-16 ${
                    isSidebarOpen ? "max-w-4xl" : "max-w-4xl"
                  } mx-auto min-h-screen w-full`}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
