import { Container } from "@/components/shared/container";
import { Header } from "./_components/header";
import { getPostBySlug } from "@/lib/post-service";
import { redirect } from "next/navigation";
import { MainSection } from "./_components/main-section";
import { SubFooter } from "./_components/sub-footer";
import { FullPost } from "@/types";

interface PostSlugPage {
	params: {
		slug: string;
	};
}

const PostSlugPage = async ({ params }: PostSlugPage) => {
	const data = await getPostBySlug(params.slug);

	if (!data) {
		return redirect("/tin-tuc");
	}

	return (
		<div className="h-full">
			<Container className="bg-neutral-200" innerClassName="bg-white shadow-md">
				<Header postTitle={data.title} />
				<MainSection data={data} />
				<SubFooter post={data} />
			</Container>
		</div>
	);
};

export default PostSlugPage;
