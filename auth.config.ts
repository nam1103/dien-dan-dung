import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./lib/schemas";
import { getUserByEmail } from "./lib/user-service";
import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedFields = loginSchema.safeParse(credentials);
				if (validatedFields.success) {
					const { email, password } = validatedFields.data;
					const user = await getUserByEmail(email);
					if (!user) return null;
					const passwordsMatch = await bcrypt.compare(password, user.password);
					if (passwordsMatch) return user;
				}
				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
