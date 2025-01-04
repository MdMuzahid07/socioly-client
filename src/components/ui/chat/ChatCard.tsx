"use client";
import { Card, CardBody } from "@nextui-org/react";

export default function ChatCard({ styles }: { styles: string }) {
    return (
        <Card className={`${styles} max-w-[400px] min-h-[70px] text-black rounded-lg`}>
            <CardBody>
                <p>Make beautiful websites regardless of your design experience.</p>
            </CardBody>
        </Card>
    );
};
