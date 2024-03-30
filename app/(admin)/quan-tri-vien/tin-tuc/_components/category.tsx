"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useIsClient } from "usehooks-ts";
import { CategoryForm } from "./category-form";
import { CategoryList } from "./category-list";

export enum categoryMode {
	MANAGE,
	CREATE,
}

export const Category = () => {
	const [mode, setMode] = useState(categoryMode.MANAGE);

	const isClient = useIsClient();

	if (!isClient) {
		return (
			<Button className="gap-2" variant="secondary">
				<Loader2 className="h-5 w-5 animate-spin" />
				Danh Mục
			</Button>
		);
	}

	return (
		<Dialog>
			<DialogTrigger>
				<Button>Danh Mục Của Bạn</Button>
			</DialogTrigger>
			<DialogContent className="w-full max-h-[500px] overflow-y-auto">
				<DialogHeader className="gap-y-3">
					<DialogTitle className="text-3xl">Danh Mục</DialogTitle>
					<div className="w-full grid grid-cols-2">
						<div
							className={cn(
								"border-b-2 border-background p-2 text-center select-none font-semibold hover:bg-neutral-200 transition cursor-pointer",
								mode === categoryMode.MANAGE && "border-blue-500"
							)}
							onClick={() => setMode(categoryMode.MANAGE)}
						>
							Danh Sách
						</div>
						<div
							className={cn(
								"border-b-2 border-background p-2 text-center select-none font-semibold hover:bg-neutral-200 transition cursor-pointer",
								mode === categoryMode.CREATE && "border-blue-500"
							)}
							onClick={() => setMode(categoryMode.CREATE)}
						>
							Tạo Mới
						</div>
					</div>
				</DialogHeader>
				{mode === categoryMode.CREATE ? (
					<CategoryForm onChangeMode={setMode} />
				) : (
					<CategoryList onChangeMode={setMode} />
				)}
			</DialogContent>
		</Dialog>
	);
};
