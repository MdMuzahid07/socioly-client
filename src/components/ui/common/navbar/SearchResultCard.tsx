import { Card, CardHeader, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Plus, User } from "lucide-react";
export default function SearchResultCard() {

    return (
        <Card className="w-full rounded-lg mt-4">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar
                        isBordered
                        radius="full"
                        size="md"
                        src="https://nextui.org/avatars/avatar-1.png"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                    </div>
                </div>
                <div className="flex items-center gap-2 ">
                    <Button
                        className={`bg-blue-700 text-white`}
                        radius="full"
                        size="sm"
                        variant="solid"
                    >
                        <Plus className="w-4 h-4" />
                        Follow
                    </Button>
                    <Button
                        className={`bg-blue-700 text-white `}
                        radius="full"
                        size="sm"
                        variant="solid"
                    >
                        <User className="w-4 h-4 " />
                        Connect
                    </Button>
                </div>
            </CardHeader>

            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">4</p>
                    <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">97.1K</p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
            </CardFooter>
        </Card>
    )
};
