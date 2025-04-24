import { Button } from "@nextui-org/react";
import { Smile } from "lucide-react";

export default function EmojiPickerDropDown() {
  return (
    <div>
      <Button className="rounded-full" variant="light" startContent={<Smile className="h-4 w-4" />}>
        Emoji
      </Button>
    </div>
  );
}
