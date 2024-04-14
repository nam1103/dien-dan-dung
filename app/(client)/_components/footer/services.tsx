"use client";

import { Category } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface ServicesProps {
	categories: Category[];
}

export const Services = ({ categories }: ServicesProps) => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();

	const onCategoryClick = (slug: string) => {
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
		<div className="col-span-3">
			<div className="flex gap-x-2 mb-2">
				<div className="border-l-4 border-l-orange-500" />
				<h2 className="uppercase text-lg text-white">Dịch vụ</h2>
			</div>
			{categories.map((category) => (
				<div
					key={category.id}
					className="group cursor-pointer flex items-center gap-x-4 py-1"
					onClick={() => onCategoryClick(category.slug)}
				>
					<ArrowRight className="h-5 w-5 text-orange-500 shrink-0" />
					<p className="uppercase text-white break-words text-sm group-hover:text-orange-500">
						{category.title}
					</p>
				</div>
			))}
		</div>
	);
};
