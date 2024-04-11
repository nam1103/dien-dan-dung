"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";
import { categorySchema } from "./schemas";
import slugify from "slugify";
import * as z from "zod";

export const getCategories = async () => {
	try {
		const categories = await db.category.findMany({
			orderBy: {
				posts: {
					_count: "desc",
				},
			},
		});

		return categories;
	} catch (error) {
		return [];
	}
};

export const createCategory = async (
	values: z.infer<typeof categorySchema>
) => {
	try {
		const result = categorySchema.safeParse(values);

		if (!result.success) {
			return { status: 401 };
		}

		let slug = slugify(result.data.title, { lower: true });
		const numberOfCategoryStartWithSlug = await db.category.count({
			where: {
				slug: {
					startsWith: slug,
				},
			},
		});

		if (numberOfCategoryStartWithSlug !== 0) {
			slug = `${slug}-${numberOfCategoryStartWithSlug}`;
		}

		const newCategory = await db.category.create({
			data: {
				slug,
				...result.data,
			},
		});

		return { status: 200, data: newCategory };
	} catch (error) {
		console.log(error);

		return { status: 500 };
	}
};

export const deleteCategory = async (id: string) => {
	try {
		const postsToUpdate = await db.post.findMany({
			where: {
				categoryId: id,
			},
		});

		await Promise.all(
			postsToUpdate.map(async (post) => {
				await db.post.update({
					where: { id: post.id },
					data: { categoryId: null },
				});
			})
		);

		await db.category.delete({
			where: { id },
		});

		revalidatePath("/quan-tri-vien/tin-tuc");

		return 200;
	} catch (error) {
		return 500;
	}
};
