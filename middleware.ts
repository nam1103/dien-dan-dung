import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	const { nextUrl } = request;
	const isAuthorized = !!cookies().get("token");

	if (nextUrl.pathname === "/dang-nhap" && isAuthorized) {
		return Response.redirect(new URL("/quan-tri-vien", nextUrl));
	}

	if (nextUrl.pathname.startsWith("/quan-tri-vien") && !isAuthorized) {
		return Response.redirect(new URL("/dang-nhap", nextUrl));
	}
}

// Optionally, don't invoke Middleware on some paths
export const config = {
	matcher: ["/dang-nhap", "/quan-tri-vien/:path*"],
};
