import { Icons } from "@/components/assets/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";

function SocialLinks() {
  return (
    <nav className="flex items-center space-x-1">
      <Link href={siteConfig.links.mail} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icons.mail className="h-5 w-5" />
          <span className="sr-only">Mail</span>
        </div>
      </Link>
      <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icons.linkedin className="h-5 w-5" />
          <span className="sr-only">Linkedin</span>
        </div>
      </Link>
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icons.gitHub className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
    </nav>
  );
}

export default SocialLinks;
