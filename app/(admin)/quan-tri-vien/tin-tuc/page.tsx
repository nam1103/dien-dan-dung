import { Header } from "./_components/header";
import { PostList } from "./_components/post-list";
import { Actions } from "./_components/actions";
import { getPosts } from "@/lib/post-service";
import { Category } from "./_components/category";
import { getCategories } from "@/lib/category-service";

interface AdminPostPageProps {
	searchParams: {
		order?: "asc" | "desc";
		title?: string;
		page?: string;
		category_slug?: string;
	};
}

const AdminPostPage = async ({ searchParams }: AdminPostPageProps) => {
	const data = await getPosts(
		searchParams.order,
		searchParams.title,
		searchParams.category_slug
	);

	return (
		<div className="lg:px-14 md:px-10 sm:px-7 px-5 max-w-[700px] pb-20">
			<Header />
			<Actions />
			<Category />
			<PostList data={data} currentPage={parseInt(searchParams.page || "1")} />
		</div>
	);
};

export default AdminPostPage;
