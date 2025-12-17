"use client";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { toast } from "sonner";

export default function AccountPreferencesPage() {
  const [formData, setFormData] = useState({
    name: "Md. Muzahid",
    email: "muzahid@example.com",
    bio: "Full Stack Developer",
  });

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

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
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            variant="bordered"
          />
        </div>
      </div>

      <Button color="primary" onPress={handleSave}>
        Save Changes
      </Button>
    </div>
  );
}
