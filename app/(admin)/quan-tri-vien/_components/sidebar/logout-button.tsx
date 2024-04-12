"use client";

import { Button } from "@/components/ui/button";
import { logoutUser } from "@/lib/user-service";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
	const router = useRouter();

	const onClick = () => {
		logoutUser();
		router.push("/dang-nhap");
	};

	return (
		<Button
			onClick={onClick}
			variant="ghost"
			className="mt-auto rounded-none bg-neutral-200 hover:bg-neutral-300 flex gap-2"
		>
			<LogOut className="h-5 w-5" />
			Đăng Xuất
		</Button>
	);
};
