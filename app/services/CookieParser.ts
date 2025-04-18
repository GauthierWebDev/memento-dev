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

  public static buildOptions(daysDuration: number | Date) {
    let expires: Date;

    if (daysDuration instanceof Date) {
      expires = daysDuration;
    } else {
      expires = new Date(Date.now() + 60 * 60 * 24 * daysDuration * 1000);
    }

    return {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires,
    };
  }

  parse() {
    this.cookies = this.rawCookies.split("; ").reduce(
      (acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = decodeURIComponent(value);
        return acc;
      },
      {} as Record<string, string>,
    );
  }

  get(key: CookieKeys): string | undefined;
  get<T = unknown>(key: CookieKeys, formatter: (value: string) => T): T | undefined;
  get<T = unknown>(key: CookieKeys, formatter?: (value: string) => T): T | string | undefined {
    const value = this.cookies[key];

    if (formatter) return formatter(value);
    return value;
  }

  static set(reply: FastifyReply, key: CookieKeys, value: string, daysDuration = 30): FastifyReply {
    const options = CookieParser.buildOptions(daysDuration);
    reply.setCookie(key, value, options);

    return reply;
  }

  static delete(reply: FastifyReply, key: CookieKeys): FastifyReply {
    const options = CookieParser.buildOptions(new Date("1900-01-01"));
    reply.setCookie(key, "", options);

    return reply;
  }
}
