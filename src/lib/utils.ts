import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// format number 
export const formatNumbers = (number: number) => {
  return number.toLocaleString("ru-RU");
};
