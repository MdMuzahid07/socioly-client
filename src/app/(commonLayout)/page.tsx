"use client";

import Feed from "@/components/feed/feed/Feed";
import Profile from "@/components/feed/profile/Profile";
import Suggestions from "@/components/feed/suggestion/Suggestions";
import Container from "@/components/ui/common/Container";

export default function Page() {
  return (
    <section className="min-h-screen bg-background">
      <Container>
        <section className="grid min-h-screen grid-cols-1 gap-6 pt-4 md:grid-cols-12">
          <div className="md:col-span-3">
            <Profile />
          </div>
          <div className="md:col-span-6">
            <Feed />
          </div>
          <div className="md:col-span-3">
            <Suggestions />
          </div>
        </section>
      </Container>
    </section>
  );
}
