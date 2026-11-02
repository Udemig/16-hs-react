import { cookies } from "next/headers";
import { USER_COOKIE } from "@/lib/user-cookie";

// Server component ve route handler'larda mevcut misafir kimliğini çerezden okur
export async function getUserId(): Promise<string | null> {
  const store = await cookies();
  return store.get(USER_COOKIE)?.value ?? null;
}
