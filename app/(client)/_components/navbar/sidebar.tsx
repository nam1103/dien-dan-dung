"use client";

import { routes } from "@/constants";
import { SidebarItem } from "./sidebar-item";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className="w-full">
			<Link
				href={"/"}
				className={cn(
					"block font-medium text-lg text-neutral-500 p-2 px-5 border-b hover:bg-neutral-100 transition hover:text-black",
					pathname === "/" && "bg-neutral-100 text-black"
				)}
			>
				Trang chủ
			</Link>
			{routes.map((route) => (
				<SidebarItem
					key={route.href}
					href={route.href}
					label={route.label}
					isActive={route.href === pathname}
				/>
			))}
		</div>
	);
};
