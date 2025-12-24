import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";

export default function FullProfile() {
  return (
    <section className="col-span-9 min-h-screen overflow-hidden rounded-t-lg border bg-background pb-32 drop-shadow-sm">
      <ProfileHeader />
      <ProfileTabs />
    </section>
  );
}
