import blurIndigoImage from "@/images/blur-indigo.webp";
import blurCyanImage from "@/images/blur-cyan.webp";
import { HeroBackground } from "./HeroBackground";
import { Snippet } from "@/components/Snippet";
import { Button } from "@/components/Button";
import Image from "@/components/Image";

const snippets = [
	{
		name: "memento-dev.config.js",
		codeLanguage: "javascript",
		withLineNumbers: true,
		code: `export default {
	role: "developer",
	qualifications: [
		"DWWM",
		"CDA",
		"CDUI",
	]
}`,
	},
	{
		name: "package.json",
		codeLanguage: "json",
		withLineNumbers: true,
		code: `{
	"name": "memento-dev",
	"version": "2.0.0",
	"description": "Memento Dev est une plateforme open-source, soutenue et maintenue par une communauté de contributeurs passionnés.",
	"main": "index.ts",
	"license": "MIT"
}`,
	},
];

export function HeroSection() {
	return (
		<div class="overflow-hidden bg-slate-900">
			<div class="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
				<div class="mx-auto grid max-w-2xl w-full grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
					<div class="relative z-10 md:text-center lg:text-left">
						<Image
							class="absolute right-full bottom-full -mr-72 -mb-56 opacity-50"
							src={blurCyanImage}
							alt=""
							width={530}
							height={530}
						/>

						<div class="relative">
							<p class="inline bg-linear-to-r from-indigo-200 via-violet-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
								Souviens-toi que tu développeras.
							</p>

							<p class="mt-3 text-2xl tracking-tight text-slate-400">
								Découvrez des ressources essentielles pour améliorer tes
								compétences en développement.
							</p>

							<div class="mt-8 flex gap-4 md:justify-center lg:justify-start">
								<Button href="/docs">Accédez aux ressources</Button>
								<Button
									href="https://github.com/GauthierWebDev/memento-dev"
									variant="secondary"
								>
									Voir sur Github
								</Button>
							</div>
						</div>
					</div>
					<div class="relative lg:static xl:pl-10">
						<div class="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] lg:-top-32 lg:right-0 lg:-bottom-32 lg:left-[calc(50%+14rem)] lg:[mask-image:none]">
							<HeroBackground class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
						</div>

						<div class="relative">
							<Image
								class="absolute -top-64 -right-64"
								src={blurCyanImage}
								alt=""
								width={530}
								height={530}
								loading="eager"
							/>

							<Image
								class="absolute -right-44 -bottom-40"
								src={blurIndigoImage}
								alt=""
								width={567}
								height={567}
								loading="eager"
							/>

							<div class="absolute inset-0 rounded-2xl bg-linear-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10 blur-lg" />
							<div class="absolute inset-0 rounded-2xl bg-linear-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10" />

							<Snippet class="min-h-64" dark snippets={snippets} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
