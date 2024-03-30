"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

interface PaginationProps {
	totalPage: number;
}

export const Pagination = ({ totalPage }: PaginationProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = parseInt(searchParams.get("page") || "1");

	const handleSetPage = (value: number) => {
		if (value === currentPage) return;

		if (value > totalPage || value < 1) return;

		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					order: searchParams.get("order"),
					title: searchParams.get("title"),
					page: String(value),
				},
			},
			{ skipEmptyString: true, skipNull: true }
		);

		router.push(url);
	};

	return (
		<div className="flex gap-x-5 py-4 w-full justify-center">
			<Button
				variant="ghost"
				className="gap-x-2"
				disabled={currentPage === 1}
				onClick={() => handleSetPage(currentPage - 1)}
			>
				<ArrowLeft className="h-6 w-6" />
				Trước
			</Button>
			<div className="space-x-2">
				{Array(totalPage < 4 ? totalPage : 4)
					.fill(null)
					.map((_, index) => {
						let number = currentPage + index;

						console.log(totalPage - number + index);

						const isCurrent = number === currentPage;

						return (
							<Button
								key={number}
								className={cn("text-xl")}
								size="icon"
								onClick={() => handleSetPage(number)}
								variant={isCurrent ? "secondary" : "outline"}
							>
								{number}
							</Button>
						);
					})}
			</div>
			<Button
				variant="ghost"
				className="gap-x-2"
				disabled={currentPage === totalPage}
				onClick={() => handleSetPage(currentPage + 1)}
			>
				Sau
				<ArrowRight className="h-6 w-6" />
			</Button>
		</div>
	);
};
