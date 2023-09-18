"use client";

import DetailsDrawer from "@/components/details-drawer";
import { SheetTrigger } from "@/components/ui/sheet";
import { dateToStringFormat } from "@/lib/utils";
import { IExperience } from "@/models/experience";
import { IProject } from "@/models/project";
import { useState } from "react";

interface CardProps {
  element: IExperience | IProject;
}

const Card = ({ element }: CardProps) => {
  return (
    <SheetTrigger asChild>
      <div className="flex flex-col duration-150 gap-2.5 p-5 sm:rounded-xl hover:bg-purple-700 hover:text-white cursor-pointer">
        <h3>{element.title}</h3>
        <p>{element.company}</p>
        <p>
          {dateToStringFormat(element.startDate) +
            " - " +
            dateToStringFormat(element.endDate)}
        </p>
      </div>
    </SheetTrigger>
  );
};

export default Card;
