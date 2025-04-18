import type { PageContext } from "vike/types";

import { FastifyReply } from "fastify";

type ConsentCookies = keyof PageContext["cookies"]["consent"];
type SettingsCookie = keyof PageContext["cookies"]["settings"];

type CookieKeys = ConsentCookies | SettingsCookie;

export class CookieParser {
  private rawCookies: string;
  private cookies: Record<string, string>;

  constructor(rawCookies: string) {
    this.rawCookies = rawCookies;
    this.cookies = {};
    this.parse();
  }

  parse(): Record<string, string> {
    return this.rawCookies.split("; ").reduce(
      (acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = decodeURIComponent(value);
        return acc;
      },
      {} as Record<string, string>,
    );
  }

  get(key: CookieKeys, formatter?: Function): string | undefined {
    const value = this.cookies[key];

    console.log({ key, value });

    if (formatter) return formatter(value);
    return value;
  }

  static set(reply: FastifyReply, key: CookieKeys, value: string, daysDuration = 30): FastifyReply {
    const options = {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 60 * 60 * 24 * daysDuration * 1000),
    };

    reply.setCookie(key, value, options);

    return reply;
  }
}
