import { getPosts } from "@/lib/post-service";
import { Image } from "lucide-react";
import Link from "next/link";

export const NewPosts = async () => {
	const data = await getPosts("desc", "");
	const limitedData = data.slice(0, 20);

	return (
		<>
			<div className="flex gap-2">
				<div className="border-2 border-orange-400 w-0" />
				<h2 className="text-xl font-semibold">Bài Viết Mới</h2>
			</div>
			<div className="flex flex-col gap-y-4">
				{limitedData.map((post) => (
					<Link
						href={`/tin-tuc/${post.slug}`}
						key={post.id}
						className="flex group items-center gap-x-2 hover:bg-neutral-50 rounded-sm"
					>
						{post.imageUrls?.[0] ? (
							<img src={post.imageUrls[0]} className="w-[70px]" />
						) : (
							<div className="w-[70px] h-[50px] shrink-0 gap-x-4 flex items-center  bg-neutral-100 rounded-lg justify-center">
								<Image className="h-5 w-5" />
							</div>
						)}
						<p className="text-orange-500 text-sm break-all group-hover:brightness-125 ">
							{post.title}
						</p>
					</Link>
				))}
			</div>
		</>
	);
};
