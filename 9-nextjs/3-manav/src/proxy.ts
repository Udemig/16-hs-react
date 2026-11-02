import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { USER_COOKIE, userCookieOptions } from "./lib/user-cookie";

const handleI18nRouting = createMiddleware(routing);

// Next.js 16 proxy: dil yönlendirmesi ve misafir kimliği çerezi
export default function proxy(request: NextRequest) {
  const response = handleI18nRouting(request);

  // Her misafir için bir kez kimlik üretilir; sepet ve siparişler bu kimliğe bağlanır
  if (!request.cookies.has(USER_COOKIE)) {
    response.cookies.set(USER_COOKIE, crypto.randomUUID(), userCookieOptions);
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
