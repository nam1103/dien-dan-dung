import { Category, Post } from "@prisma/client";
import { PostItem } from "./post-item";
import { Pagination } from "./pagination";
import { CategoryIdentifier } from "./category-indentifier";

interface PostSectionProps {
	currentPage: number;
	data: Post[];
	categories: Category[];
}

const postsPerPage = 10;

export const PostSection = ({
	currentPage,
	data,
	categories,
}: PostSectionProps) => {
	const startIndex = (currentPage - 1) * postsPerPage;
	const endIndex = startIndex + postsPerPage;
	const shownPosts = data.slice(startIndex, endIndex);

	if (!data.length) {
		return (
			<div className="col-span-5 pb-20 space-y-20">
				<CategoryIdentifier categories={categories} />

				<h1 className="text-3xl font-semibold text-center">
					Không có bài viết trong danh mục này
				</h1>
			</div>
		);
	}

	return (
		<div className="col-span-5">
			<CategoryIdentifier categories={categories} />
			{shownPosts.map((post) => (
				<PostItem data={post} key={post.id} />
			))}

			<Pagination totalPage={Math.ceil(data.length / 10)} />
		</div>
	);
};
