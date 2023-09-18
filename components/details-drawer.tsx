import { Icons } from "./assets/icons";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { dateToStringFormat } from "@/lib/utils";
import Link from "next/link";

interface DetailsDrawerProps {
  element: IExperience | IProject | null;
}
const DetailsDrawer = ({ element }: DetailsDrawerProps) => {
  if (!element) return null;

  return (
    <SheetContent className="min-w-full lg:min-w-[50%] flex flex-col gap-4">
      <SheetHeader>
        <SheetTitle>{element.title}</SheetTitle>
      </SheetHeader>
      <p className="text-muted-foreground">{element.company}</p>
      <p className="text-muted-foreground">
        {dateToStringFormat(element.startDate) +
          " - " +
          dateToStringFormat(element.endDate)}
      </p>
      <p className="text-muted-foreground">{element.description}</p>
      <ul>
        {element.bulletPoints?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 ml-4 text-muted-foreground"
          >
            <span className="w-2 h-1 bg-purple-700" />
            {item}
          </div>
        ))}
      </ul>
      <div className="flex gap-2 flex-wrap">
        {element.tags?.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-1.5 font-bold bg-purple-700 rounded-full text-white"
          >
            {item}
          </div>
        ))}
      </div>
      {element.link && (
        <Link href={element.link ?? ""} target="blank">
          <Button variant="link" className="text-purple-700 gap-4">
            <Icons.link className="w-6 h-6 " />
            {element.link}
          </Button>
        </Link>
      )}
    </SheetContent>
  );
};

export default DetailsDrawer;
