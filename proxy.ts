import { NextRequest, NextResponse } from "next/server";

const PREVIEW_SECRET = process.env.PREVIEW_SECRET || "devnextra-preview-2026";
const PREVIEW_COOKIE = "devnextra_preview";

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  const isExempt =
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.(png|jpg|jpeg|svg|webp|gif|ico)$/.test(pathname);

  if (isExempt) return NextResponse.next();

  // Preview link: /?preview=YOUR_SECRET — sets a cookie and unlocks the real site
  const previewParam = searchParams.get("preview");
  if (previewParam === PREVIEW_SECRET) {
    const response = NextResponse.redirect(new URL(pathname, request.url));
    response.cookies.set(PREVIEW_COOKIE, PREVIEW_SECRET, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
    return response;
  }

  const hasAccess = request.cookies.get(PREVIEW_COOKIE)?.value === PREVIEW_SECRET;
  if (hasAccess) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};