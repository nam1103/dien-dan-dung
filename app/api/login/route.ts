import { loginSchema } from "@/lib/schemas";
import { getUserByEmail } from "@/lib/user-service";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const POST = async (req: Request) => {
	try {
		const body = await req.json();

		const validatedFields = loginSchema.safeParse(body);

		if (!validatedFields.success) {
			return NextResponse.json({
				error: validatedFields.error.issues[0].message,
			});
		}

		const { email, password } = validatedFields.data;

		const existingUser = await getUserByEmail(email);

		if (!existingUser) {
			return NextResponse.json(
				{ error: "Email hoặc mật khẩu không chính xác" },
				{ status: 400 }
			);
		}

		const passwordsMatch = await bcrypt.compare(
			password,
			existingUser.password
		);

		if (!passwordsMatch) {
			return NextResponse.json(
				{ error: "Email hoặc mật khẩu không chính xác" },
				{ status: 400 }
			);
		}

		const token = jwt.sign({ id: existingUser.id }, process.env.JWT_SECRET!);

		cookies().set("token", token);

		return NextResponse.json(existingUser, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: "Một sự cố đã xảy ra" }, { status: 200 });
	}
};
