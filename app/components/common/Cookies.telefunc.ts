import type { PageContext } from "vike/types";

import { getTelefuncContext } from "@/lib/getTelefuncContext";
import { CookieParser } from "@/services/CookieParser";

export type ConsentCookies = keyof PageContext["cookies"]["consent"];

export async function onUpdateConsentCookie(cookieName: ConsentCookies, cookieValue: boolean) {
  const context = getTelefuncContext();
  const { reply } = context;

  CookieParser.set(reply, cookieName, cookieValue.toString(), 365);

  return { ok: true, message: "Updated consent cookie", cookieName, cookieValue };
}

export async function onSetAllConsentCookie(cookieValue: boolean) {
  const context = getTelefuncContext();
  const { reply } = context;

  CookieParser.set(reply, "analytics", cookieValue.toString(), 365);
  CookieParser.set(reply, "customization", cookieValue.toString(), 365);

  return { ok: true, message: "Updated consents cookies" };
}
