"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";
import { commentSchema, postSchema } from "./schemas";
import slugify from "slugify";
import * as z from "zod";

export const getPosts = async (
	order: "asc" | "desc" = "asc",
	title: string = "",

	category_slug?: string
) => {
	try {
		let posts;

		if (category_slug) {
			posts = await db.post.findMany({
				where: {
					title: {
						contains: title || "",
					},
					category: {
						slug: category_slug,
					},
				},
				orderBy: { createdAt: order || "asc" },
			});
		} else {
			posts = await db.post.findMany({
				where: {
					title: {
						contains: title || "",
					},
				},
				orderBy: { createdAt: order || "asc" },
			});
		}

		console.log("fetch");
		return posts;
	} catch (error) {
		return [];
	}
};

export const getPostBySlug = async (slug: string) => {
	try {
		const post = await db.post.findUnique({
			where: {
				slug,
			},
			include: {
				ratings: true,
				comments: true,
				category: true,
			},
		});

		return post;
	} catch (error) {
		return null;
	}
};

export const createPost = async (values: z.infer<typeof postSchema>) => {
	const result = postSchema.safeParse(values);

	if (!result.success) {
		return { status: 400 };
	}

	try {
		const imageUrls = result.data.images.map((image) => image.url);

		let slug = slugify(result.data.title);
		const numberOfPostStartWithSlug = await db.post.count({
			where: {
				slug: {
					startsWith: slug,
				},
			},
		});

		if (numberOfPostStartWithSlug !== 0) {
			slug = `${slug}-${numberOfPostStartWithSlug}`;
		}

		const newPost = await db.post.create({
			data: {
				title: result.data.title,
				body: result.data.body,
				categoryId: result.data.category_id,
				imageUrls,
				slug,
			},
		});

		return { status: 200, data: newPost };
	} catch (error) {
		console.log(error);
		return { status: 500 };
	}
};

export const updatePost = async (
	id: string,
	values: z.infer<typeof postSchema>
) => {
	const result = postSchema.safeParse(values);

	if (!result.success) {
		return { status: 400 };
	}

	try {
		const imageUrls = result.data.images.map((image) => image.url);

		let slug = slugify(result.data.title);
		const numberOfPostStartWithSlug = await db.post.count({
			where: {
				slug: {
					startsWith: slug,
				},
			},
		});

		if (numberOfPostStartWithSlug !== 0) {
			slug = `${slug}-${numberOfPostStartWithSlug}`;
		}

		const updatedPost = await db.post.update({
			where: { id },
			data: {
				title: result.data.title,
				body: result.data.body,
				categoryId: result.data.category_id,
				imageUrls,
				slug,
			},
		});

		return { status: 200, data: updatedPost };
	} catch (error) {
		console.log(error);
		return { status: 500 };
	}
};

export const deletePost = async (id: string) => {
	try {
		await db.post.delete({
			where: { id },
		});

		revalidatePath("/quan-tri-vien/tin-tuc");
		return 200;
	} catch (error) {
		return 500;
	}
};

export const ratePost = async (id: string, slug: string, newValue: number) => {
	if (newValue < 1 && newValue > 5) return;

	const rating = await db.rating.create({
		data: {
			postId: id,
			value: newValue,
		},
	});

	revalidatePath(`/tin-tuc/${slug}`);

	return rating;
};

export const commentPost = async (
	id: string,
	values: z.infer<typeof commentSchema>
) => {
	try {
		const result = commentSchema.safeParse(values);

		if (!result.success) {
			return 404;
		}

		const comment = await db.comment.create({
			data: {
				...result.data,
				postId: id,
			},
		});

		return 200;
	} catch (error) {
		return 500;
	}
};

export const deleteComment = async (id: string, postId: string) => {
	try {
		await db.comment.delete({
			where: { id },
		});

		revalidatePath(`/quan-tri-vien/tin-tuc/${postId}`);

		return 200;
	} catch (error) {
		return 500;
	}
};
