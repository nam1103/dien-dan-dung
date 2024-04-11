import { Button } from "@/components/ui/button";
import { Post } from "@prisma/client";
import { Menu } from "lucide-react";
import Link from "next/link";

interface OngNuocProps {
	posts: Post[];
}

export const OngNuoc = ({ posts }: OngNuocProps) => {
	if (!posts.length) {
		return null;
	}

	return (
		<div className="w-full flex flex-col">
			<div className="flex gap-x-2 mb-4">
				<div className=" border-l-[6px] border-l-red-500" />
				<h2 className="uppercase text-2xl text-red-500 font-semibold">
					DỊCH VỤ SỬA ĐƯỜNG ỐNG NƯỚC CHÍNH
				</h2>
			</div>

			<div className="grid gap-x-2 gap-y-3 grid-cols-2 md:grid-cols-3 self-center">
				{posts.map((post) => (
					<div
						key={post.id}
						className="w-full space-y-1 hover:-translate-y-3 duration-300 transition-transform transform"
					>
						<Link
							className="w-full object-center object-contain relative "
							href={`/tin-tuc/${post.slug}`}
						>
							<img
								className="cursor-pointer h-[300px] w-full object-center object-contain bg-black"
								src={post.imageUrls[0]}
								alt={post.title}
							/>
						</Link>

						<p className="text-md text-center uppercase text-red-500 font-semibold hover:text-orange-500 transition-colors">
							{post.title}
						</p>
					</div>
				))}
			</div>
			<Link
				href="/tin-tuc?category_slug=dich-vu-sua-djuong-ong-nuoc-chinh"
				className=" self-center mt-5"
			>
				<Button
					className="uppercase gap-x-3 rounded-full px-5 mx-auto"
					variant="destructive"
					size="lg"
				>
					<Menu className="h-4 w-4 " />
					xem thêm
				</Button>
			</Link>
		</div>
	);
};
