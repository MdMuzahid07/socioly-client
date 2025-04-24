import React from "react";
import Image from "next/image";

export default function ChatHeader({ styles }: { styles: string }) {
  return (
    <div className={`${styles} flex items-center justify-between`}>
      <div className="flex cursor-pointer items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 rounded-full">
            <Image
              src="https://img.freepik.com/free-vector/gradient-galaxy-background_52683-140963.jpg?t=st=1735897331~exp=1735900931~hmac=c60d4e5d12be4ef4021cd2a082f5bbfaf5970445eff1a4b30260b37b280fdb60&w=1380"
              alt=""
              fill
              className="rounded-full object-cover"
            />
            <span className="absolute right-0 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600"></span>
            </span>
          </div>
          <div>
            <h3 className="text-sm font-medium">John Doe</h3>
            <p className="text-muted-foreground text-xs">Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
