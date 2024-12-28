import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { UserCheck, UserX } from "lucide-react";

export default function NotificationCard() {
    const [isFollowed, setIsFollowed] = React.useState(false);

    return (
        <Card className="w-full shadow-none border-b pb-2 rounded-none">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar
                        isBordered
                        radius="full"
                        size="sm"
                        src="https://nextui.org/avatars/avatar-1.png"
                    />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-sm leading-none text-default-600">Zoey Lang send you a connect request</h4>
                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                    </div>
                </div>

            </CardHeader>
            <CardFooter className="gap-3">
                <Button
                    className={`bg-blue-700 text-white`}
                    radius="full"
                    size="sm"
                    variant="solid"
                >
                    <UserCheck className="w-4 h-4" />
                    Accept
                </Button>
                <Button
                    className={`bg-red-500 text-white `}
                    radius="full"
                    size="sm"
                    variant="solid"
                >
                    <UserX className="w-4 h-4 " />
                    Cancel
                </Button>
            </CardFooter>
        </Card>
    );
}

