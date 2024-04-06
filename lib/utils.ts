import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const removeDiacritics = (text: string) => {
	// Decompose the text into its base characters and diacritics
	text = text.normalize("NFD");

	// Remove combining diacritical marks
	text = text.replace(/[\u0300-\u036f]/g, "");

	// Replace đ character with d
	text = text.replace(/đ/g, "d").replace(/Đ/g, "D");

	// Remove any remaining non-alphanumeric characters
	text = text.replace(/[^a-zA-Z0-9\s]/g, "");

	return text;
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
