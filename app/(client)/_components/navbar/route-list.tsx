"use client";

import { routes } from "@/constants";
import { RouteItem } from "./route-item";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const RouteList = () => {
	const pathname = usePathname();
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {};

		window.addEventListener("scroll", () => {
			if (window.scrollY > 150) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		});

		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div
			className={cn(
				"hidden lg:flex h-[70px] justify-center bg-neutral-700 items-center px-5 z-[30]",
				isFixed && "fixed"
			)}
		>
			{routes.map(({ label, href }) => (
				<RouteItem
					key={href}
					label={label}
					href={href}
					isActive={pathname === href}
				/>
			))}
		</div>
	);
};
