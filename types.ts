import { Category, Comment, Post, Rating } from "@prisma/client";

export type PostWithRatings = Post & {
	ratings: Rating[];
};

export type PostWithCommentAndRatings = PostWithRatings & {
	comments: Comment[];
};

export type FullPost = PostWithCommentAndRatings & {
	category: Category | null;
};
