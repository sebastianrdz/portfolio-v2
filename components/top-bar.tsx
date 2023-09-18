"use client";

import NavLinks from "@/components/nav-links";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

function TopBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const percentage = (scrollY / maxScroll) * 100;

      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 flex flex-col gap-4 bg-white/30 backdrop-blur-lg pb-2">
      <Progress value={scrollPercentage} />
      <NavLinks />
    </div>
  );
}

export default TopBar;
