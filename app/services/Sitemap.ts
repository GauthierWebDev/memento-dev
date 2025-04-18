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
  private readonly pagesPath = path.join(__dirname, "pages");
  private readonly dataPath = path.join(__dirname, "data");
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

  private addSitemapElement(url: SitemapElement): void {
    this.sitemap += `<url>`;
    this.sitemap += `<loc>${url.location}</loc>`;
    this.sitemap += `<lastmod>${url.lastmod || this.lastModified}</lastmod>`;
    this.sitemap += `<priority>${url.priority}</priority>`;
    this.sitemap += `</url>`;
  }

  private buildSitemap(): void {
    this.prependSitemap();
    this.urls.forEach(this.addSitemapElement.bind(this));
    this.appendSitemap();
  }

  private saveSitemap(): void {
    fs.writeFileSync(this.sitemapPath, this.sitemap, "utf8");
  }

  private loadPriority(href: string): string {
    const isRootUrl = ["/", ""].includes(href);

    if (isRootUrl) return "1.0";
    const countOfSlashes = (href.match(/\//g) || []).length;
    return (1 - countOfSlashes * 0.1).toFixed(1);
  }

  private loadLastModified(href: string): string {
    return this.lastModified;
  }

  private getFileServerLocation(href: string) {
    const jsxHref = ["/politique-de-confidentialite", "/mentions-legales"];
    const isJsxFile = jsxHref.includes(href);

    if (isJsxFile) {
      return path.join(this.pagesPath, href.replace("/", ""), "+Page.tsx");
    }

    return path.join(this.pagesPath, href.replace("/", ""), "page.md");
  }

  private loadSubitems(subitems: (typeof navigation)[number]["links"][number]["subitems"]): void {
    subitems.forEach((subitem) => {
      const fileLocation = this.getFileServerLocation(subitem.href);
      console.log("File location:", fileLocation);

      const priority = this.loadPriority(subitem.href);
      const lastmod = this.loadLastModified(subitem.href);
      const location = `${this.baseUrl}${subitem.href}`;

      this.urls.push({
        location,
        lastmod,
        priority,
      });
    });
  }

  private loadSection(section: (typeof navigation)[number]): void {
    section.links.forEach((link) => {
      if (link.subitems.length > 0) {
        return this.loadSubitems(link.subitems);
      }

      const priority = this.loadPriority(link.href);
      const lastmod = this.loadLastModified(link.href);
      const location = `${this.baseUrl}${link.href}`;

      this.urls.push({
        location,
        lastmod,
        priority,
      });
    });
  }

  private loadUrls(): void {
    navigation.forEach(this.loadSection.bind(this));

    this.urls = Array.from(new Set(this.urls)).sort((a, b) => {
      return a.location.localeCompare(b.location);
    });

    console.log("Loaded URLs:", this.urls);
  }

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
