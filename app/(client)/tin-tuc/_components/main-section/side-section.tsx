import { Category as CategoryType } from "@prisma/client";
import { Category } from "./category";
import { NewPosts } from "./new-posts";

interface SideSectionProps {
	categories: CategoryType[];
}

export const SideSection = ({ categories }: SideSectionProps) => {
	return (
		<aside className="col-span-2 space-y-5">
			<Category data={categories} />
			<NewPosts />
		</aside>
	);
};
