import { navigation } from "@/libs/navigation";
import path from "node:path";
import fs from "node:fs";

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
	private readonly sitemapPath = path.join(__dirname, "public", "sitemap.xml");
	private readonly lastModified = new Date().toISOString();
	private readonly baseUrl = getBaseUrl();

	private urls: SitemapElement[] = [];
	private sitemap = "";

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
		this.sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
	}

	private appendSitemap(): void {
		this.sitemap += "</urlset>";
	}

	private addSitemapElement(url: SitemapElement): void {
		this.sitemap += "<url>";
		this.sitemap += `<loc>${url.location}</loc>`;
		this.sitemap += `<lastmod>${url.lastmod || this.lastModified}</lastmod>`;
		this.sitemap += `<priority>${url.priority}</priority>`;
		this.sitemap += "</url>";
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

	private loadLastModified(stat?: fs.Stats): string {
		return stat ? stat.mtime.toISOString() : this.lastModified;
	}

	private getFileServerLocation(href: string) {
		if (href === "/") return path.join(this.pagesPath, "index", "+Page.mdx");
		return path.join(this.pagesPath, href.replace("/", ""), "+Page.mdx");
	}

	private loadSubitems(
		subitems: (typeof navigation)[number]["links"][number]["subitems"],
	): void {
		for (const subitem of subitems) {
			const fileLocation = this.getFileServerLocation(subitem.href);
			let fileDetails: fs.Stats | undefined;
			try {
				fileDetails = fs.statSync(fileLocation);
			} catch (error) {
				console.error(`Error loading file for ${subitem.href}:`, error);
			}

			const priority = this.loadPriority(subitem.href);
			const lastmod = this.loadLastModified(fileDetails);
			const location = `${this.baseUrl}${subitem.href}`;

			this.urls.push({
				location,
				lastmod,
				priority,
			});
		}
	}

	private loadSection(section: (typeof navigation)[number]): void {
		for (const link of section.links) {
			if (link.subitems.length > 0) {
				this.loadSubitems(link.subitems);
				return;
			}

			const fileLocation = this.getFileServerLocation(link.href);
			let fileDetails: fs.Stats | undefined;

			try {
				fileDetails = fs.statSync(fileLocation);
			} catch (error) {
				console.error(`Error loading file for ${link.href}:`, error);
			}

			const priority = this.loadPriority(link.href);
			const lastmod = this.loadLastModified(fileDetails);
			const location = `${this.baseUrl}${link.href}`;

			this.urls.push({
				location,
				lastmod,
				priority,
			});
		}
	}

	private loadUrls(): void {
		navigation.forEach(this.loadSection.bind(this));

		this.urls = Array.from(new Set(this.urls)).sort((a, b) => {
			return a.location.localeCompare(b.location);
		});
	}

	public getSitemap(): string {
		if (!this.sitemap) this.generateSitemap();
		return this.sitemap;
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
