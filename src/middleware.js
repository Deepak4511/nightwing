import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/" ||
    path === "/auth/login" ||
    path === "/auth/register" ||
    path.startsWith("/_next") || // Next.js internals
    path.startsWith("/static") || // Static files
    path.startsWith("/api") || // API routes (handled by backend auth usually, or public)
    path.includes("favicon.ico");

  // Get the token from the cookies
  const token = request.cookies.get("token")?.value || "";

  // 1. If trying to access a protected route without a token -> Redirect to Login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // 2. If trying to access Login/Register WITH a token -> Redirect to Profile or Home
  // (Optional UX improvement: prevent logged-in users from seeing login page)
  if ((path === "/auth/login" || path === "/auth/register") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure paths to match (optional, but good for performance)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
