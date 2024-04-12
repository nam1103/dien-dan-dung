"use server";

import { db } from "./db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createUser = async (values: {
	email: string;
	password: string;
}) => {
	try {
		const hashedPassword = await bcrypt.hash(values.password, 10);

		const user = await db.user.create({
			data: { ...values, password: hashedPassword },
		});
		return user;
	} catch (error) {
		return null;
	}
};

export const getUserByEmail = async (email: string) => {
	try {
		const user = await db.user.findUnique({ where: { email } });
		return user;
	} catch (error) {
		return null;
	}
};
export const getUserById = async (id: string) => {
	try {
		const user = await db.user.findUnique({ where: { id } });
		return user;
	} catch (error) {
		return null;
	}
};

export const updateUser = async (
	id: string,
	values: {
		email?: string;
		emailedWhenContact?: boolean;
		emailedWhenComment?: boolean;
	}
) => {
	try {
		const user = await db.user.update({ where: { id }, data: { ...values } });

		revalidatePath("/quan-tri-vien/:path*");
		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const deleteUser = async (id: string, password: string) => {
	try {
		console.log({ id });
		console.log("passed-1");

		const user = await db.user.findUnique({
			where: { id },
		});

		if (!user) {
			return 500;
		}

		const passwordsMatch = await bcrypt.compare(password, user.password);

		if (!passwordsMatch) {
			return 401;
		}

		const deletedUser = await db.user.delete({
			where: { id },
		});

		return 200;
	} catch (error) {
		return 500;
	}
};

export const changePassword = async (
	id: string,
	currentPassword: string,
	newPassword: string
) => {
	try {
		const user = await db.user.findUnique({ where: { id } });

		if (!user) {
			return 500;
		}

		const passwordsMatch = await bcrypt.compare(currentPassword, user.password);

		if (!passwordsMatch) {
			return 401;
		}

		const newHashedPassword = await bcrypt.hash(newPassword, 10);

		const updatedUser = await db.user.update({
			where: { id },
			data: {
				password: newHashedPassword,
			},
		});

		return 200;
	} catch (error) {
		console.log(error);
		return 500;
	}
};

export const getUserData = async () => {
	try {
		const token = cookies().get("token");

		if (!token) {
			return null;
		}
		// Verify JWT token
		const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as {
			id: string;
		};
		// Here, you can fetch additional user data based on the decoded token
		if (!decoded.id) {
			return null;
		}

		const user = await getUserById(decoded.id);

		return user;
	} catch (error) {
		return null;
	}
};

export const logoutUser = () => {
	cookies().delete("token");
};
