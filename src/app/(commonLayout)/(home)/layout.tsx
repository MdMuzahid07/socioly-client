import Profile from "@/components/feed/profile/Profile";
import Suggestions from "@/components/feed/suggestion/Suggestions";
import Container from "@/components/ui/common/Container";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-background">
      <Container>
        <section className="grid min-h-screen grid-cols-1 gap-6 pt-4 md:grid-cols-12">
          <div className="hidden md:col-span-3 md:block">
            <Profile />
          </div>
          <div className="md:col-span-9 lg:col-span-6">{children}</div>
          <div className="hidden md:col-span-3 lg:block">
            <Suggestions />
          </div>
        </section>
      </Container>
    </section>
  );
}
