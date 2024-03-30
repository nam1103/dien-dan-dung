import NextAuth from "next-auth";
import { authConfig } from "./auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isAuthorized = !!req.auth;

	if (nextUrl.pathname === "/dang-nhap" && isAuthorized) {
		return Response.redirect(new URL("/quan-tri-vien", nextUrl));
	}

	if (nextUrl.pathname.startsWith("/quan-tri-vien") && !isAuthorized) {
		return Response.redirect(new URL("/dang-nhap", nextUrl));
	}
});

// Optionally, don't invoke Middleware on some paths
export const config = {
	matcher: ["/dang-nhap", "/quan-tri-vien/:path*"],
};
