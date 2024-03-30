"use client";

import { cn } from "@/lib/utils";
import { Category as CategoryType } from "@prisma/client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface CategoryProps {
	data: CategoryType[];
}

export const Category = ({ data }: CategoryProps) => {
	const pathname = usePathname();
	const router = useRouter();

	const searchParams = useSearchParams();

	const onItemClick = (slug: string) => {
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					order: searchParams.get("order"),
					title: searchParams.get("title"),
					page: searchParams.get("page"),
					category_slug:
						searchParams.get("category_slug") !== slug ? slug : null,
				},
			},
			{ skipEmptyString: true, skipNull: true }
		);

		router.push(url);
	};

	return (
		<>
			<div className="flex gap-2">
				<div className="border-2 border-orange-400 w-0" />
				<h2 className="text-xl font-semibold">Danh Mục</h2>
			</div>
			<div className="space-y-4">
				{data.map((category) => (
					<div
						key={category.id}
						onClick={() => onItemClick(category.slug)}
						className={cn(
							"w-full p-4 cursor-pointer group hover:bg-neutral-50",
							searchParams.get("category_slug") === category.slug &&
								"bg-neutral-50"
						)}
					>
						<p className="break-normal uppercase group-hover:underline text-orange-500 group-hover:brightness-125">
							{category.title}
						</p>
					</div>
				))}
			</div>
		</>
	);
};
