"use client";
import Container from "@/components/ui/common/Container";
import { Button, Card, CardBody, Input, Switch } from "@nextui-org/react";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");

  const [formData, setFormData] = useState({
    name: "Md. Muzahid",
    email: "muzahid@example.com",
    bio: "Full Stack Developer",
  });

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "account":
        return (
          <div className="animate-in fade-in slide-in-from-right-4 space-y-6 duration-300">
            <div>
              <h3 className="mb-1 text-xl font-semibold">
                Make the most of your professional life
              </h3>
              <p className="text-sm text-default-500">
                Get the most out of your Socioly.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="space-y-2">
                <label className="text-small font-medium">Full Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  variant="bordered"
                />
              </div>
              <div className="space-y-2">
                <label className="text-small font-medium">Email Address</label>
                <Input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  variant="bordered"
                />
              </div>
              <div className="space-y-2">
                <label className="text-small font-medium">Bio</label>
                <Input
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData({ ...formData, bio: e.target.value })
                  }
                  variant="bordered"
                />
              </div>
            </div>

            <Button color="primary" onPress={handleSave}>
              Save Changes
            </Button>
          </div>
        );
      case "privacy":
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
      case "danger":
        return (
          <div className="animate-in fade-in slide-in-from-right-4 space-y-6 duration-300">
            <h3 className="text-lg font-semibold text-danger">Danger Zone</h3>
            <div className="rounded-lg border border-danger/50 bg-danger/10 p-4">
              <h4 className="mb-2 font-medium text-danger">Close Account</h4>
              <p className="mb-4 text-sm text-default-600">
                Permanently delete your account and all of your content. This
                action cannot be undone.
              </p>
              <Button
                color="danger"
                variant="flat"
                startContent={<Trash2 size={16} />}
              >
                Close Account
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-transparent p-4">
      <Container>
        <div className="w-full">
          {/* Content Area */}
          <Card className="min-h-[500px]">
            <CardBody className="p-6 md:p-8">{renderContent()}</CardBody>
          </Card>
        </div>
      </Container>
    </div>
  );
}
