import { Footer, Navbar } from "@/components/sections";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="top" className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
