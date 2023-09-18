"use client";

import Card from "@/components/card";
import DetailsDrawer from "@/components/details-drawer";
import { Sheet } from "@/components/ui/sheet";
import { projects } from "@/config/site";
import { useState } from "react";

const ProjectSection = () => {
  return (
    <section id="projectSection" className="min-h-screen py-24">
      <h2 className="text-purple-700 px-4">PROJECTS</h2>
      <div className=" sm:px-4 ">
        {projects.map((item, index) => {
          return (
            <Sheet key={item.title}>
              <Card element={item} />
              <DetailsDrawer element={item} />
            </Sheet>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
