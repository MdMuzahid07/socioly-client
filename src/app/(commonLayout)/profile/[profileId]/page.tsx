import FullProfile from "@/components/feed/profile/full-page-view/FullProfile";
import Suggestions from "@/components/feed/suggestion/Suggestions";
import Container from "@/components/ui/common/Container";

export default function page() {
    return (
        <section className="bg-slate-50">
            <Container>
                <section className="grid md:grid-cols-12 gap-6 min-h-screen pt-4">
                    <FullProfile />
                    <Suggestions />
                </section>
            </Container>
        </section>
    )
};
