import { Avatar, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import { LifeBuoy, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function UserDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleDrop = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    router.push("/login");
  };

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (isDropdownOpen && !wrapperRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isDropdownOpen]);

  return (
    <div ref={wrapperRef} className="relative">
      <Avatar
        onClick={handleDrop}
        isBordered
        as="button"
        className="h-6 w-6 transition-transform sm:h-8 sm:w-8"
        src="https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826"
      />
      {isDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="flex items-center justify-between"
        >
          <div className="dark:bg-surface-800 absolute right-0 top-[70px] z-50 h-[300px] w-[220px] overflow-hidden rounded-lg border border-default-200 bg-content1 drop-shadow-sm dark:border-default-700">
            <div className="p-4">
              <div className="mb-4 flex items-center gap-3">
                <Avatar
                  as="button"
                  className="h-11 w-11 transition-transform"
                  src="https://img.freepik.com/free-vector/cute-astronaut-floating-with-satellite-rocket-space-cartoon-vector-icon-illustration-science_138676-8894.jpg?t=st=1735653575~exp=1735657175~hmac=692eb217b46f3a8d64c255c1106bc86e5ee72755f115570662280c586f35a0a5&w=826"
                />
                <div>
                  <h1 className="text-lg font-bold text-foreground dark:text-default-400">
                    John Doe
                  </h1>
                  <p className="text-xs text-default-500 dark:text-default-400">
                    Web Developer
                  </p>
                </div>
              </div>
              <Button
                onPress={() => router.push("/profile/8745")}
                size="sm"
                className="text-md w-full rounded-full bg-primary font-medium text-primary-foreground"
              >
                View Profile
              </Button>
              <div className="mt-6 space-y-3">
                <div
                  onClick={() => router.push("/settings")}
                  className="flex h-5 w-full cursor-pointer items-center text-default-600 transition-colors hover:text-primary dark:text-default-300"
                >
                  <Settings className="mr-2 h-4 w-4" /> <p>Setting & Privacy</p>
                </div>
                <div className="flex h-5 w-full cursor-pointer items-center text-default-600 transition-colors hover:text-primary dark:text-default-300">
                  <LifeBuoy className="mr-2 h-4 w-4" /> <p>Support</p>
                </div>
                <div>
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full">
              <button
                onClick={handleLogout}
                className="text-md h-9 w-full rounded-none border-none bg-default-100 font-semibold text-default-600 shadow-none transition-colors hover:bg-danger hover:text-white dark:bg-default-800 dark:text-default-200 dark:hover:bg-danger"
              >
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
