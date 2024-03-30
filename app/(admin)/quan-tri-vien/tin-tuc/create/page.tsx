import { getCategories } from "@/lib/category-service";
import { CreatePostForm } from "./_components/create-post-form";
import { Header } from "./_components/header";

const PostCreatePage = async () => {
	const categories = await getCategories();

	return (
		<div className="lg:px-14 md:px-10 sm:px-7 px-5 max-w-[700px] pb-20">
			<Header />
			<CreatePostForm categories={categories} />
		</div>
	);
};

export default PostCreatePage;
