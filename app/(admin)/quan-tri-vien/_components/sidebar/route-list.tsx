"use client";

import { Newspaper, PhoneCall, BarChart, Settings, Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { RouteItem } from "./route-item";

const routes = [
	{ label: "Tổng Thể", pathname: "", icon: BarChart },
	{ label: "Tin Tức Của Bạn", pathname: "/tin-tuc", icon: Newspaper },
	{ label: "Liên Hệ Của Khách Hàng", pathname: "/lien-he", icon: PhoneCall },
	{ label: "Thông Báo", pathname: "/thong-bao", icon: Bell },
	{ label: "Cài Đặt", pathname: "/cai-dat", icon: Settings },
];

export const RouteList = () => {
	const currentPathname = usePathname();

	return (
		<>
			{routes.map((route) => {
				const href = `/quan-tri-vien${route.pathname}`;

				return (
					<RouteItem
						href={href}
						icon={route.icon}
						label={route.label}
						key={route.label}
						isActive={
							(href !== "/quan-tri-vien" && currentPathname.startsWith(href)) ||
							href === currentPathname
						}
					/>
				);
			})}
		</>
	);
};
