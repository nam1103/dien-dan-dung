"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollBackButton = () => {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		const handleScroll = () => {};

		window.addEventListener("scroll", () => {
			if (window.scrollY > 150) {
				setIsShown(true);
			} else {
				setIsShown(false);
			}
		});

		return () => window.removeEventListener("scroll", handleScroll);
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			onClick={scrollToTop}
			className={cn("fixed bottom-5 right-5 hidden", isShown && "flex")}
			size="icon"
			variant="outline"
		>
			<ArrowUp className="h-5 w-5" />
		</Button>
	);
};
