"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { ArrowRight, Copy, Share } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { toast } from "sonner";

export default function ShareDropDown() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Link copied to clipboard!");
  };

  const shareOptions = [
    {
      key: "facebook",
      label: "Facebook",
      icon: FacebookIcon,
      Button: FacebookShareButton,
      color: "#1877F2",
    },
    {
      key: "twitter",
      label: "Twitter",
      icon: TwitterIcon,
      Button: TwitterShareButton,
      color: "#1DA1F2",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      icon: LinkedinIcon,
      Button: LinkedinShareButton,
      color: "#0A66C2",
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: WhatsappIcon,
      Button: WhatsappShareButton,
      color: "#25D366",
    },
    {
      key: "telegram",
      label: "Telegram",
      icon: TelegramIcon,
      Button: TelegramShareButton,
      color: "#0088cc",
    },
    {
      key: "reddit",
      label: "Reddit",
      icon: RedditIcon,
      Button: RedditShareButton,
      color: "#FF4500",
    },
  ];

  return (
    <Dropdown
      placement="top-end"
      classNames={{
        content: "bg-content1 border-small border-divider min-w-[240px] p-1",
      }}
    >
      <DropdownTrigger>
        <Button
          variant="light"
          className="flex-1 text-foreground data-[hover=true]:bg-default-100 data-[hover=true]:text-foreground"
          startContent={<Share className="h-5 w-5" />}
        >
          Share
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Share options"
        variant="flat"
        classNames={{
          list: "gap-1",
        }}
      >
        {[
          /* Copy Link Option */
          <DropdownItem
            key="copy"
            className="rounded-lg py-3 hover:bg-default-100"
            startContent={
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-default-100">
                <Copy className="h-4 w-4 text-default-600" />
              </div>
            }
            endContent={<ArrowRight className="h-4 w-4 text-default-400" />}
            onPress={handleCopyLink}
          >
            <span className="font-medium text-foreground">Copy Link</span>
          </DropdownItem>,

          /* Divider */
          <DropdownItem
            key="divider"
            className="cursor-default p-0 hover:bg-transparent"
            isReadOnly
          >
            <div className="h-px w-full bg-divider" />
          </DropdownItem>,

          /* Social Share Options */
          ...shareOptions.map((option) => {
            const IconComponent = option.icon;
            const ShareButton = option.Button;

            return (
              <DropdownItem
                key={option.key}
                className="rounded-lg py-3 hover:bg-default-100"
                textValue={option.label}
              >
                <ShareButton
                  url={currentUrl}
                  className="flex w-full items-center justify-between"
                >
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent size={32} round />
                    <span className="font-medium text-foreground">
                      {option.label}
                    </span>
                  </motion.div>
                  <ArrowRight className="h-4 w-4 text-default-400" />
                </ShareButton>
              </DropdownItem>
            );
          }),
        ]}
      </DropdownMenu>
    </Dropdown>
  );
}
