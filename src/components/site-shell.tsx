import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({
  children,
  mainClassName = "",
}: {
  children: React.ReactNode;
  mainClassName?: string;
}) {
  return (
    <>
      <SiteHeader />
      <main id="main" className={mainClassName}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
