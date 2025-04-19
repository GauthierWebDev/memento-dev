import type { Theme } from "@/contexts/ThemeContext";

import { getTelefuncContext } from "@/lib/getTelefuncContext";
import { CookieParser } from "@/services/CookieParser";

export async function onUpdateThemeCookie(value: Theme) {
  const context = getTelefuncContext();
  const { reply } = context;

  CookieParser.set(reply, "theme", value, 365);

  return { ok: true, message: "Updated theme cookie", value };
}

export async function onDeleteThemeCookie() {
  const context = getTelefuncContext();
  const { reply } = context;

  CookieParser.delete(reply, "theme");

  return { ok: true, message: "Deleted theme cookie" };
}
