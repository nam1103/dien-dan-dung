"use client";

import { CornerDownLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface BackToHomeButtonProps {
	asChild?: boolean;
	className?: string;
}

export const BackToHomeButton = ({
	asChild = false,
	className,
}: BackToHomeButtonProps) => {
	const router = useRouter();

	const onClick = () => {
		router.push("/");
	};

	return (
		<Button
			onClick={onClick}
			size="lg"
			variant="outline"
			className={cn("text-xl gap-3 py-7", className)}
			asChild={asChild}
		>
			<CornerDownLeft className="w-7 h-7" />
			Trở về Trang Chủ
		</Button>
	);
};
