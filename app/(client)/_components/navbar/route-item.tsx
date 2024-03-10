import { cn } from "@/lib/utils";
import Link from "next/link";

interface RouteItemProps {
	label: string;
	href: string;
	isActive: boolean;
}

export const RouteItem = ({ label, href, isActive }: RouteItemProps) => {
	return (
		<Link
			href={href}
			className="uppercase text-white font-semibold h-full flex group"
		>
			<div
				className={cn(
					"w-0 h-0 border-l-[20px] border-l-transparent border-t-[70px] border-t-neutral-700 group-hover:border-t-blue-500",
					isActive && "border-t-blue-500"
				)}
			></div>
			<div
				className={cn(
					"h-full w-fit group-hover:bg-blue-500 text-sm flex text-center items-center font-light",
					isActive && "bg-blue-500"
				)}
			>
				{label}
			</div>
			<div
				className={cn(
					"w-0 h-0 border-r-[20px] border-r-transparent border-b-[70px] border-b-neutral-700 group-hover:border-b-blue-500",
					isActive && "border-b-blue-500"
				)}
			></div>
		</Link>
	);
};
