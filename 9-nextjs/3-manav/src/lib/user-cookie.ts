// Misafir kullanıcıyı tanımlayan çerez; sepet ve siparişler bu kimliğe bağlanır
export const USER_COOKIE = "furkanevin35";

export const userCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
};
