import { Post } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Pagination } from "./pagination";
import { PostItem } from "./post-item";

interface PostListProps {
	data: Post[];
	currentPage: number;
}

const postsPerPage = 10;

export const PostList = ({ data, currentPage }: PostListProps) => {
	const startIndex = (currentPage - 1) * postsPerPage;
	const endIndex = startIndex + postsPerPage;
	const shownPosts = data.slice(startIndex, endIndex);

	if (!data.length) {
		return (
			<div className="w-full py-20 flex flex-col items-center gap-5">
				<h1 className="text-2xl font-semibold text-muted-foreground text-center ">
					Bạn Chưa Tạo Bài Viết Nào
				</h1>
				<Link href="/quan-tri-vien/tin-tuc/create">
					<Button size="lg">
						<Plus className="h-5 w-5" />
						Tạo Bài Viết
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<div className="mt-6">
			{shownPosts.map((post) => (
				<PostItem data={post} key={post.id} />
			))}

			<Pagination totalPage={Math.ceil(data.length / 10)} />
		</div>
	);
};
