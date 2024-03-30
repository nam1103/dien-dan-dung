import { deleteCategory, getCategories } from "@/lib/category-service";
import { Category } from "@prisma/client";
import { Loader2, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { categoryMode } from "./category";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface CategoryListProps {
	onChangeMode: (mode: categoryMode) => void;
}

export const CategoryList = ({ onChangeMode }: CategoryListProps) => {
	const [data, setData] = useState<Category[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [loadingId, setLoadingId] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const categories = await getCategories();

			setData(categories);
			setIsLoading(false);
		};

		fetchData();
	}, []);

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
					category_slug: slug,
				},
			},
			{ skipEmptyString: true, skipNull: true }
		);

		router.push(url);
	};

	const onDelete = async (id: string, slug: string) => {
		setLoadingId(id);
		const statusCode = await deleteCategory(id);

		if (statusCode === 200) {
			toast.success("Xoá danh mục thành công");
			setData(data.filter((category) => category.id !== id));

			if (searchParams.get("category_slug") === slug) {
				onItemClick("");
			}
		} else {
			toast.error("Một sự cố đã xãy ra!");
		}
		setLoadingId(null);
	};

	if (isLoading) {
		return (
			<div className=" w-full flex items-center justify-center py-10">
				<Loader2 className="h-7 w-7 animate-spin" />
			</div>
		);
	}

	if (!data.length) {
		return (
			<div className="w-full space-y-4 py-10 flex flex-col items-center">
				<p className="text-2xl font-semibold">Bạn Chưa Tạo Danh Mục Nào Cả</p>
				<Button onClick={() => onChangeMode(categoryMode.CREATE)}>
					Tạo danh mục
				</Button>
			</div>
		);
	}

	return (
		<div className="w-full flex flex-col">
			<div
				className={cn(
					" hover:bg-neutral-50 py-4 px-4 cursor-pointer",
					!searchParams.get("category_slug") && "bg-neutral-50"
				)}
				onClick={() => onItemClick("")}
			>
				<div className="flex justify-between items-center">
					<p className=" break-all text-xl font-semibold">Không Danh Mục</p>
				</div>

				{data.length && <Separator className="mt-2" />}
			</div>
			{data.map((category, index) => (
				<div
					key={category.id}
					className={cn(
						" hover:bg-neutral-50 py-3 px-4 cursor-pointer",
						category.slug === searchParams.get("category_slug") &&
							"bg-neutral-50"
					)}
					onClick={() => onItemClick(category.slug)}
				>
					<div className="flex justify-between items-center gap-4">
						<p className="text-xl font-semibold">{category.title}</p>
						<Button
							variant="destructive"
							size="icon"
							onClick={() => onDelete(category.id, category.slug)}
							disabled={loadingId === category.id}
						>
							<Trash className="h-4 w-4" />
						</Button>
					</div>

					{index !== data.length - 1 && <Separator className="mt-2" />}
				</div>
			))}
		</div>
	);
};
