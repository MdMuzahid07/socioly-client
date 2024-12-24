import Providers from "@/lib/providers";

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            {children}
        </Providers>
    )
};

