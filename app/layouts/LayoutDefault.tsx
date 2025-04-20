import type { JSXElement } from "solid-js";

import { usePageContext } from "vike-solid/usePageContext";
import { HeroSection } from "@/partials/HeroSection";
import { Navigation } from "@/partials/Navigation";
import { Header } from "@/partials/Header";
import { Footer } from "@/partials/Footer";
import { DocsLayout } from "./DocsLayout";
import { Toaster } from "solid-toast";

import "./tailwind.css";

type DefaultLayoutProps = {
	children: JSXElement;
};

export default function DefaultLayout(props: DefaultLayoutProps) {
	const { urlPathname } = usePageContext();

	return (
		<>
			<div class="flex w-full flex-col font-sans">
				<Header />

				{urlPathname === "/" && <HeroSection />}

				<div class="relative mx-auto w-full flex max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
					<div class="hidden lg:relative lg:block lg:flex-none">
						<div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50" />
						<div class="absolute top-16 right-0 bottom-0 hidden h-12 w-px bg-linear-to-t from-slate-800" />
						<div class="absolute top-28 right-0 bottom-0 hidden w-px bg-slate-800" />
						<div class="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-x-hidden overflow-y-auto py-16 pr-8 pl-0.5 xl:w-72 xl:pr-16">
							<Navigation />
						</div>
					</div>
					<DocsLayout>{props.children}</DocsLayout>
				</div>

				<Footer />
			</div>

			<Toaster />
		</>
	);
}
