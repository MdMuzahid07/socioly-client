"use client";
import { use } from "react";
import ProfilePageView from "../../../../../view/profile/ProfilePageView";

const page = ({ params }: { params: Promise<{ profileId: string }> }) => {
  const { profileId: _profileId } = use(params);

  return <ProfilePageView _profileId={_profileId} />;
};

export default page;
