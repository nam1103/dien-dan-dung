import { getPostBySlug } from "@/lib/post-service";
import { redirect } from "next/navigation";
import { Header } from "./_components/header";
import { MainSection } from "./_components/main-section";

interface SlugPageProps {
	params: {
		slug: string;
	};
}

const SlugPage = async ({ params }: SlugPageProps) => {
	const data = await getPostBySlug(params.slug);

	if (!data) {
		return redirect("/quan-tri-vien/tin-tuc");
	}

	return (
		<div className="lg:px-14 md:px-10 sm:px-7 px-5 max-w-[700px] pb-20">
			<Header title={data.title} slug={data.slug} />
			<MainSection data={data} />
		</div>
	);
};

export default SlugPage;
