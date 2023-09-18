import AboutSection from "./about-section";
import ExperienceSection from "./experience-section";
import ProfilePictureSection from "./profile-picture-section";
import ProjectSection from "./project-section copy";
import SocialLinks from "@/components/social-links";
import TopBar from "@/components/top-bar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="grid min-h-screen grid-cols-1 lg:grid-cols-3 scroll-smooth">
        <div className="flex flex-col justify-center items-center gap-4 min-h-screen lg:sticky lg:max-h-screen top-0 right-0 bottom-0 left-0">
          <div className="text-center ">
            <h1>Sebastian Rodriguez</h1>
            <p>Full-stack Software Engineer</p>
          </div>
          <SocialLinks />
          <a href="/CV_SebastianRodriguez(V2).pdf" download>
            <Button
              className="w-fit border-purple-700 hover:bg-purple-700 hover:text-white"
              variant="outline"
              size="lg"
            >
              DOWNLOAD CV
            </Button>
          </a>
        </div>

        <div className="col-span-2 grid">
          <ProfilePictureSection className="hidden lg:grid" />
          <AboutSection />
          <ExperienceSection />
          <ProjectSection />
        </div>
      </main>
    </>
  );
}
