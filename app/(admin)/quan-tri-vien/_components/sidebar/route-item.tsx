import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface RouteItemProps {
	href: string;
	label: string;
	icon: LucideIcon;
	isActive: boolean;
}

export const RouteItem = ({
	href,
	label,
	icon: Icon,
	isActive,
}: RouteItemProps) => {
	return (
		<Link
			href={href}
			className={cn(
				"w-full flex items-center hover:bg-neutral-200 px-4 gap-2 h-14",
				isActive && "bg-neutral-200"
			)}
		>
			<Icon className="h-5 w-5" />
			<p className="text-xs text-center font-semibold">{label}</p>
		</Link>
	);
};
