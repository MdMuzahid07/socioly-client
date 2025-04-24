import { useState, useEffect } from "react";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ArrowRight, Share } from "lucide-react";

import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

export default function ShareDropDown() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // Only runs on the client side
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <Dropdown placement="top-end" className="rounded-lg text-black">
      <DropdownTrigger>
        <Button isIconOnly variant="light" className="text-default-400">
          <Share className="clear-start h-5 w-5 text-black" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Share options">
        <DropdownItem key="facebook">
          <FacebookShareButton
            url={currentUrl}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center">
              <FacebookIcon size={24} round={true} />
              <span className="ml-2">Facebook</span>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
          </FacebookShareButton>
        </DropdownItem>
        <DropdownItem key="linkedin">
          <LinkedinShareButton
            url={currentUrl}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center">
              <LinkedinIcon size={24} round={true} />
              <span className="ml-2">LinkedIn</span>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
          </LinkedinShareButton>
        </DropdownItem>
        <DropdownItem key="reddit">
          <RedditShareButton url={currentUrl} className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <RedditIcon size={24} round={true} />
              <span className="ml-2">Reddit</span>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
          </RedditShareButton>
        </DropdownItem>
        <DropdownItem key="telegram">
          <TelegramShareButton
            url={currentUrl}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center">
              <TelegramIcon size={24} round={true} />
              <span className="ml-2">Telegram</span>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
          </TelegramShareButton>
        </DropdownItem>
        <DropdownItem key="twitter">
          <TwitterShareButton url={currentUrl} className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <TwitterIcon size={24} round={true} />
              <span className="ml-2">Twitter</span>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
          </TwitterShareButton>
        </DropdownItem>
        <DropdownItem key="whatsapp">
          <WhatsappShareButton
            url={currentUrl}
            className="flex w-full items-center justify-between"
          >
            <div className="flex items-center">
              <WhatsappIcon size={24} round={true} />
              <span className="ml-2">WhatsApp</span>
            </div>
            <ArrowRight className="h-4 w-4 text-slate-400" />
          </WhatsappShareButton>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
