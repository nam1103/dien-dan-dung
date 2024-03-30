"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import { Undo } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryIdentifierProps {
	categories: Category[];
}

export const CategoryIdentifier = ({ categories }: CategoryIdentifierProps) => {
	const searchParams = useSearchParams();

	const currentCategory = categories.find(
		(category) => category.slug === searchParams.get("category_slug")
	);

	const router = useRouter();
	const pathname = usePathname();

	const onClick = () => {
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					order: searchParams.get("order"),
					title: searchParams.get("title"),
					page: searchParams.get("page"),
				},
			},
			{ skipEmptyString: true, skipNull: true }
		);

		router.push(url);
	};

	return (
		<div className="px-4 flex items-center text-lg font-semibold gap-x-3 mb-3 -mt-3 justify-between">
			<div className="flex flex-wrap items-center gap-2">
				<div
					onClick={() => router.push("/")}
					className="text-rose-500 cursor-pointer hover:underline"
				>
					Trang Chủ
				</div>
				<div>/ Tin Tức</div>
				{currentCategory && (
					<div className="uppercase">/ {currentCategory.title}</div>
				)}
			</div>

			{currentCategory && (
				<Button onClick={onClick} size="icon" variant="secondary">
					<Undo className="h-4 w-4" />
				</Button>
			)}
		</div>
	);
};
