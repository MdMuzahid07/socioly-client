import Providers from "@/lib/providers";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="px-2.5">{children}</div>
    </Providers>
  );
}
