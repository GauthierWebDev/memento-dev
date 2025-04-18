import { navigation } from "@/lib/navigation";
import path from "path";
import fs from "fs";

const __dirname = path.resolve();

const getBaseUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://memento-dev.fr";
  }

  return `http://localhost:${process.env.PORT || 3000}`;
};

type SitemapElement = {
  location: string;
  lastmod: string;
  priority: string;
};

class Sitemap {
  private readonly sitemapPath = path.join(__dirname, "public", "sitemap.xml");
  private readonly lastModified = new Date().toISOString();
  private readonly baseUrl = getBaseUrl();

  private urls: SitemapElement[] = [];
  private sitemap: string = "";

  private static instance: Sitemap;

  private constructor() {}

  public static getInstance(): Sitemap {
    if (!Sitemap.instance) {
      Sitemap.instance = new Sitemap();
    }
    return Sitemap.instance;
  }

  private resetMemory(): void {
    this.sitemap = "";
    this.urls = [];
  }

  private prependSitemap(): void {
    this.sitemap = `<?xml version="1.0" encoding="UTF-8"?>`;
    this.sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">`;
  }

  private appendSitemap(): void {
    this.sitemap += `</urlset>`;
  }

  private buildSitemap(): void {
    this.prependSitemap();
    this.appendSitemap();
  }

  private saveSitemap(): void {
    fs.writeFileSync(this.sitemapPath, this.sitemap, "utf8");
  }

  private loadUrls(): void {}

  public generateSitemap(): void {
    console.log("Generating sitemap...");

    this.resetMemory();
    this.loadUrls();
    this.buildSitemap();
    this.saveSitemap();

    console.log("Sitemap generated successfully.");
  }
}

export const sitemap = Sitemap.getInstance();
