import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dateToStringFormat = (date: Date | undefined): string => {
  if (!date) return "Present";
  const split = date.toDateString().split(" ");
  return `${split[1]} ${split[3]}`;
};
