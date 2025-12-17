import ProfileAside from "./ProfileAside";

export default function Profile() {
  return (
    <aside className="sticky top-20 hidden h-screen w-full rounded-lg md:col-span-3 md:block md:max-h-[65vh]">
      <ProfileAside />
    </aside>
  );
}
