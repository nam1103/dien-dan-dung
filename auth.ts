import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";

import { getUserById } from "./lib/user-service";

import authConfig from "./auth.config";

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	callbacks: {
		async session({ token, session }) {
			if (!token.sub) return session;

			const existingUser = await getUserById(token.sub);

			if (!existingUser) return session;

			//@ts-ignore
			session.user = existingUser;

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);

			if (!existingUser) return token;

			return token;
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
});
