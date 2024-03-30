"use client";

import { Button } from "@/components/ui/button";
import { useDebounceValue } from "usehooks-ts";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Home } from "lucide-react";

export const Actions = () => {
	const [order, setOrder] = useState<"asc" | "desc">("asc");
	const [title, setTitle] = useState("");
	const debouncedTitle = useDebounceValue(title, 500);
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleValueChange = (value: "asc" | "desc") => {
		setOrder(value);
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					order,
					page: searchParams.get("page"),
					title,
					category_slug: searchParams.get("category_slug"),
				},
			},
			{ skipEmptyString: true, skipNull: true }
		);
		router.push(url);
	};

	useEffect(() => {
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					order,
					title,
					page: searchParams.get("page"),
					category_slug: searchParams.get("category_slug"),
				},
			},
			{ skipEmptyString: true, skipNull: true }
		);

		router.push(url);
	}, [debouncedTitle]);

	return (
		<div className="w-full flex items-center gap-x-4 mb-5">
			<Select defaultValue={order} onValueChange={handleValueChange}>
				<SelectTrigger
					defaultValue="asc"
					className="focus-visible:ring-0 focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 focus-visible:ring-offset-0 shadow-sm"
				>
					<SelectValue defaultValue="asc" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem
						value="asc"
						onClick={(e) => e.stopPropagation()}
						className="flex flex-row gap-2"
					>
						Cũ Nhất
					</SelectItem>
					<SelectItem value="desc" onClick={(e) => e.stopPropagation()}>
						Mới Nhất
					</SelectItem>
				</SelectContent>
			</Select>
			<Input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Tìm kiếm tiêu đề..."
				className="focus-visible:ring-0 focus:ring-0 focus:ring-offset-0 ring-0 ring-offset-0 focus-visible:ring-offset-0 shadow-sm"
			/>

			<Button
				size="icon"
				className="shadow-sm p-3"
				onClick={() => router.push("/tin-tuc")}
			>
				<Home className="h-5 w-5" />
			</Button>
		</div>
	);
};
