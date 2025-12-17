"use client";
import { Button, Switch } from "@nextui-org/react";
import { toast } from "sonner";

export default function PrivacySecurityPage() {
  const handleSave = () => {
    toast.success("Privacy settings updated!");
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 space-y-6 duration-300">
      <h3 className="text-lg font-semibold">Privacy & Security</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-lg bg-content2 p-4">
          <div>
            <p className="font-medium">Private Account</p>
            <p className="text-small text-default-500">
              Only followers can see your posts
            </p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between rounded-lg bg-content2 p-4">
          <div>
            <p className="font-medium">Two-Factor Authentication</p>
            <p className="text-small text-default-500">
              Add an extra layer of security
            </p>
          </div>
          <Switch />
        </div>
      </div>
      <Button color="primary" onPress={handleSave}>
        Update Privacy
      </Button>
    </div>
  );
}
