import { imageLibrary } from "./image-library";

export function getDailyImage(): { path: string; source: string } {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24)
  );
  const imageIndex = dayOfYear % imageLibrary.length; // Cycle through images
  return imageLibrary[imageIndex];
}