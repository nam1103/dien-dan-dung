import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { getPosts } from "@/lib/post-service";
import { Newspaper } from "lucide-react";
import Link from "next/link";

export const PostCard = async () => {
	const posts = await getPosts();

	return (
		<Link href="/quan-tri-vien/tin-tuc ">
			<Card className="shadow-md max-w-[300px] hover:bg-neutral-50 transition">
				<CardHeader>
					<CardTitle>Bài Viết</CardTitle>
					<CardDescription>Quản lí bài viết của bạn</CardDescription>
				</CardHeader>
				<CardContent>
					<Newspaper className=" h-28 w-28" />
					<p className="font-semibold text-neutral-500 mt-6">
						Bạn hiện đang có {posts.length} bài viết
					</p>
				</CardContent>
			</Card>
		</Link>
	);
};
