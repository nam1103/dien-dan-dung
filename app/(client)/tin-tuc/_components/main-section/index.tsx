import { Category, Post } from "@prisma/client";
import { PostSection } from "./post-section";
import { SideSection } from "./side-section";

interface MainSectionProps {
	currentPage: number;
	posts: Post[];
	categories: Category[];
}

export const MainSection = ({
	currentPage,
	posts,
	categories,
}: MainSectionProps) => {
	return (
		<div className="w-full grid md:grid-cols-7 grid-cols-1 px-7 md:px-10 lg:px-14 xl:px-20 pt-10 pb-5 gap-x-5">
			<PostSection
				currentPage={currentPage}
				data={posts}
				categories={categories}
			/>
			<SideSection categories={categories} />
		</div>
	);
};
