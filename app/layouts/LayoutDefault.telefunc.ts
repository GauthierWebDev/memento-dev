import type { PageContext } from "vike/types";

import { getTelefuncContext } from "@/lib/getTelefuncContext";
import { CookieParser } from "@/services/CookieParser";

type ConsentCookies = keyof PageContext["cookies"]["consent"];

export async function onUpdateConsentCookie(cookieName: ConsentCookies, cookieValue: boolean) {
  const context = getTelefuncContext();
  console.log(`Updating cookie ${cookieName} to ${cookieValue}`);

  const { reply } = context;
  CookieParser.set(reply, cookieName, cookieValue.toString(), 365);

  return { ok: true, message: "Updated consent cookie" };
}
