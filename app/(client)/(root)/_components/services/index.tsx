import { Container } from "@/components/shared/container";
import { getPosts } from "@/lib/post-service";
import { Category, Post } from "@prisma/client";
import { TieuBieu } from "./tieu-bieu";
import { OngNuoc } from "./ong-nuoc";
import { ChongTham } from "./chong-tham";
import { ThongNghet } from "./thong-nghet";

export const Services = async () => {
	const posts = (await getPosts("asc", "")) as (Post & {
		category: Category;
	})[];

	const tieubieuPosts = [] as Post[];
	const ongnuocPosts = [] as Post[];
	const chongthamPosts = [] as Post[];
	const thongnghetPosts = [] as Post[];

	posts.forEach((post) => {
		if (
			post?.category?.slug === "dich-vu-sua-chua-djien-tieu-bieu" &&
			tieubieuPosts.length < 6
		) {
			tieubieuPosts.push(post);
		} else if (
			post?.category?.slug === "dich-vu-sua-djuong-ong-nuoc-chinh" &&
			ongnuocPosts.length < 6
		) {
			ongnuocPosts.push(post);
		} else if (
			post?.category?.slug === "dich-vu-chong-tham" &&
			ongnuocPosts.length < 6
		) {
			ongnuocPosts.push(post);
		}
	});

	return (
		<Container>
			<div className="w-full py-10 px-7 md:px-10 lg:px-14 xl:px-20 space-y-10">
				<TieuBieu posts={tieubieuPosts} />
				<OngNuoc posts={ongnuocPosts} />
				<ChongTham posts={chongthamPosts} />
				<ThongNghet posts={thongnghetPosts} />
			</div>
		</Container>
	);
};
