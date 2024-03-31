import { getPosts } from "@/lib/post-service";
import { FullPost } from "@/types";
import Link from "next/link";

interface SubFooterProps {
	post: FullPost;
}

export const SubFooter = async ({ post }: SubFooterProps) => {
	const data = await getPosts("asc", "", post?.category?.slug);
	const relatedPosts = data.filter((po) => po.id !== post.id).slice(0, 6);

	if (!relatedPosts.length) {
		return <div className="py-4"></div>;
	}

	return (
		<div className="w-full px-7 md:px-10 lg:px-14 xl:px-20 py-10">
			<h2 className="uppercase text-xl font-semibold">Bài viết liên quan</h2>

			<div className="px-5 mt-2">
				{relatedPosts.map((repost) => (
					<Link
						href={`/tin-tuc/${repost.slug}`}
						key={repost.id}
						className="text-orange-500 text-lg cursor-pointer list-item hover:brightness-125 transition"
					>
						{repost.title}
					</Link>
				))}
			</div>
		</div>
	);
};
