import {
  Avatar,
  Button,
  Card,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Plus, User } from "lucide-react";
export default function SearchResultCard() {
  return (
    <Card className="mt-4 w-full rounded-lg">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="https://nextui.org/avatars/avatar-1.png"
          />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Zoey Lang
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @zoeylang
            </h5>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className={`bg-primary text-white`}
            radius="full"
            size="sm"
            variant="solid"
          >
            <Plus className="h-4 w-4" />
            Follow
          </Button>
          <Button
            className={`bg-primary text-white`}
            radius="full"
            size="sm"
            variant="solid"
          >
            <User className="h-4 w-4" />
            Connect
          </Button>
        </div>
      </CardHeader>

      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-400">4</p>
          <p className="text-small text-default-400">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-400">97.1K</p>
          <p className="text-small text-default-400">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
