"use client";

import Feed from "@/components/feed/feed/Feed";
import Profile from "@/components/feed/profile/Profile";
import Suggestions from "@/components/feed/suggestion/Suggestions";
import Container from "@/components/ui/common/Container";
import React from "react";

export default function Page() {
  return (
    <section className="bg-slate-50">
      <Container>
        <section className="grid min-h-screen gap-6 pt-4 md:grid-cols-12">
          <Profile />
          <Feed />
          <Suggestions />
        </section>
      </Container>
    </section>
  );
}
