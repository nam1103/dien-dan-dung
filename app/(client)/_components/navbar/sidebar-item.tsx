import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarItemProps {
	href: string;
	label: string;
	isActive: boolean;
}

export const SidebarItem = ({ href, label, isActive }: SidebarItemProps) => {
	return (
		<Link
			href={href}
			className={cn(
				"block font-medium text-lg text-neutral-500 p-2 px-5 border-b hover:bg-neutral-100 transition hover:text-black",
				isActive && "bg-neutral-100 text-black"
			)}
		>
			{label}
		</Link>
	);
};
