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

  get(key: string, formatter?: Function): string | undefined {
    const value = this.cookies[key];

    if (formatter) return formatter(value);
    return value;
  }
}
