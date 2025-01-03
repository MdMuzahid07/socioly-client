import { Button } from "@nextui-org/react";
import { Smile } from "lucide-react";



export default function EmojiPickerDropDown() {
    return (
        <div>
            <Button className="rounded-full" variant="light" startContent={<Smile className="w-4 h-4" />}>
                Emoji
            </Button>
        </div>
    );
};
