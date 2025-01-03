import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Share } from "lucide-react";

import {
    FacebookIcon,
    FacebookMessengerIcon,
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
    return (
        <Dropdown placement="top-end" className="text-black rounded-lg">
            <DropdownTrigger>
                <Button isIconOnly variant="light" className="text-default-400">
                    <Share className="w-5 h-5 clear-start text-black" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Share options">
                <DropdownItem key="facebook">
                    <FacebookShareButton url={window.location.href} className="flex items-center">
                        <FacebookIcon size={32} round={true} />
                        <span className="ml-2">Facebook</span>
                    </FacebookShareButton>
                </DropdownItem>
                <DropdownItem key="facebook-messenger">
                    <div className="flex items-center">
                        <FacebookMessengerIcon size={32} round={true} />
                        <span className="ml-2">Messenger</span>
                    </div>
                </DropdownItem>
                <DropdownItem key="linkedin">
                    <LinkedinShareButton url={window.location.href} className="flex items-center">
                        <LinkedinIcon size={32} round={true} />
                        <span className="ml-2">LinkedIn</span>
                    </LinkedinShareButton>
                </DropdownItem>
                <DropdownItem key="reddit">
                    <RedditShareButton url={window.location.href} className="flex items-center">
                        <RedditIcon size={32} round={true} />
                        <span className="ml-2">Reddit</span>
                    </RedditShareButton>
                </DropdownItem>
                <DropdownItem key="telegram">
                    <TelegramShareButton url={window.location.href} className="flex items-center">
                        <TelegramIcon size={32} round={true} />
                        <span className="ml-2">Telegram</span>
                    </TelegramShareButton>
                </DropdownItem>
                <DropdownItem key="twitter">
                    <TwitterShareButton url={window.location.href} className="flex items-center">
                        <TwitterIcon size={32} round={true} />
                        <span className="ml-2">Twitter</span>
                    </TwitterShareButton>
                </DropdownItem>
                <DropdownItem key="whatsapp">
                    <WhatsappShareButton url={window.location.href} className="flex items-center">
                        <WhatsappIcon size={32} round={true} />
                        <span className="ml-2">WhatsApp</span>
                    </WhatsappShareButton>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

