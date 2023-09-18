import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

interface NavLinksProps {
  className?: string;
}

function NavLinks({ className }: NavLinksProps) {
  return (
    <div className={`sticky top-8 flex justify-end ${className}`}>
      {siteConfig.sections.map((section, index) => {
        return (
          <Link key={index} href={`#${section.id}`}>
            <Button variant="link">{section.title}</Button>
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
