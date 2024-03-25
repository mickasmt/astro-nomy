import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatDate(date: Date) {
  return format(date, "LLL dd, y");
}

export function extractSegmentURL(path: string) {
  if (!path) return "";
  if (path === "/") return null;
  return path.split("/")[1];
}

export function capitalizer(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function getSeasonInfo() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  let season = "";
  let seasonYear = currentDate.getFullYear();
  let nextSeason = "";
  let nextYear = seasonYear;

  switch (currentMonth) {
    case 12:
    case 1:
    case 2:
      season = "WINTER";
      nextSeason = "SPRING";
      break;
    case 3:
    case 4:
    case 5:
      season = "SPRING";
      nextSeason = "SUMMER";
      break;
    case 6:
    case 7:
    case 8:
      season = "SUMMER";
      nextSeason = "FALL";
      break;
    case 9:
    case 10:
    case 11:
      season = "FALL";
      nextSeason = "WINTER";
      if (currentMonth === 11) {
        nextYear++;
      }
      break;
  }

  return {
    season,
    seasonYear,
    nextSeason,
    nextYear,
  };
}
