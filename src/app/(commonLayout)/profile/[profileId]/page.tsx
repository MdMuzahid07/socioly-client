import FullProfile from "@/components/feed/profile/full-page-view/FullProfile";
import Suggestions from "@/components/feed/suggestion/Suggestions";
import Container from "@/components/ui/common/Container";

export default function page() {
  return (
    <section className="bg-slate-50">
      <Container>
        <section className="grid min-h-screen gap-6 pt-4 md:grid-cols-12">
          <FullProfile />
          <Suggestions />
        </section>
      </Container>
    </section>
  );
}
