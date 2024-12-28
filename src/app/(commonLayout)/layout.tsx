import SYNavbar from "@/components/ui/common/navbar/SYNavbar";
import Providers from "@/lib/providers";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <SYNavbar />
            {children}
        </Providers>
    )
};

