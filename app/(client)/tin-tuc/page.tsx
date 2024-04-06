import { Container } from "@/components/shared/container";
import { Header } from "./_components/header";
import { MainSection } from "./_components/main-section";
import { getPosts } from "@/lib/post-service";
import { getCategories } from "@/lib/category-service";

interface TinTucPageProps {
	searchParams: {
		page?: string;
		category_slug?: string;
	};
}

const TinTucPage = async ({ searchParams }: TinTucPageProps) => {
	const data = await getPosts("asc", "", searchParams.category_slug);
	const categories = await getCategories();

	return (
		<div className="h-full">
			<Container className="bg-neutral-200" innerClassName="bg-white shadow-md">
				<Header />
				<MainSection
					currentPage={parseInt(searchParams.page || "1")}
					posts={data}
					categories={categories}
				/>
			</Container>
		</div>
	);
};

export default TinTucPage;
