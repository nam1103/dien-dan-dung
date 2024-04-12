import { registerSchema } from "@/lib/schemas";
import { createUser, getUserByEmail } from "@/lib/user-service";
import { NextResponse } from "next/server";

const AUTH_SECRET = process.env.AUTH_SECRET;

export const POST = async (req: Request) => {
	try {
		const authHeader = req.headers.get("authorization");

		if (!authHeader || authHeader !== `Bearer ${AUTH_SECRET}`) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const body = await req.json();

		const validatedFields = registerSchema.safeParse(body);

		if (!validatedFields.success) {
			return NextResponse.json({
				error: validatedFields.error.issues[0].message,
			});
		}

		const { email, password } = validatedFields.data;

		const existingUser = await getUserByEmail(email);

		if (existingUser) {
			return NextResponse.json(
				{ error: "User already exists" },
				{ status: 400 }
			);
		}

		const newUser = await createUser({ email, password });

		if (!newUser) {
			return NextResponse.json(
				{ error: "Something went wrong" },
				{ status: 500 }
			);
		}

		return NextResponse.json(newUser, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Something went wrong" },
			{ status: 500 }
		);
	}
};
