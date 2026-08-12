import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";

import { createServerClient } from "@supabase/ssr";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // ADMIN — залишаємо без мовних префіксів
  if (pathname.startsWith("/admin")) {
    const res = NextResponse.next();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll() {
            return req.cookies.getAll();
          },

          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              res.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (
      !user &&
      pathname !== "/admin/login"
    ) {
      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );
    }

    return res;
  }

  // PUBLIC SITE — next-intl
  return intlMiddleware(req);
}

export const config = {
  matcher: [
    "/",
    "/(cs|uk|en)/:path*",
    "/((?!api|_next|.*\\..*).*)",
  ],
};