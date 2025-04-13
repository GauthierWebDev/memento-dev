import path from "path";

type SnippetsCache = Map<string, string>;

class SnippetsService {
  private static instance: SnippetsService;

  private cache: SnippetsCache = new Map();

  public static getInstance(): SnippetsService {
    if (!SnippetsService.instance) {
      SnippetsService.instance = new SnippetsService();
    }

    return SnippetsService.instance;
  }

  public getFromCache(key: string): string | undefined {
    return this.cache.get(key);
  }

  private doesCacheHas(key: string): boolean {
    return this.cache.has(key);
  }

  public setToCache(key: string, value: string): void {
    this.cache.set(key, value);
  }

  public showCache(): SnippetsCache {
    return this.cache;
  }

  public identifyNewSnippets(content: string): [string[], string[]] | undefined {
    const regex = /{%\s?snippet.*(path="\S*").*\/%}/g;
    const snippets = content.match(regex);
    if (!snippets) return;

    const snippetsPath = snippets
      .map((snippet) => {
        const pathMatch = snippet.match(/path="([^"]+)"/);

        const path = pathMatch?.[1];
        if (!path) return null;

        return path;
      })
      .filter((path) => path !== null) as string[];

    const snippetsPathSet = new Set(snippetsPath);

    return [
      Array.from(snippetsPathSet).filter((snippetPath) => {
        return this.doesCacheHas(snippetPath) === false;
      }),
      Array.from(snippetsPathSet),
    ];
  }
}

export const snippetsService = SnippetsService.getInstance();
