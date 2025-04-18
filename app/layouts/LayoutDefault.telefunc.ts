import { getTelefuncContext } from "@/lib/getTelefuncContext";
import { CookieParser } from "@/services/CookieParser";

export async function onUpdateConsentCookie(cookieName: string, cookieValue: boolean) {
  const context = getTelefuncContext();
  console.log(`Updating cookie ${cookieName} to ${cookieValue}`);

  const { reply } = context;
  CookieParser.set(reply, cookieName, cookieValue.toString(), 365);

  return { ok: true, message: "Updated consent cookie" };
}
