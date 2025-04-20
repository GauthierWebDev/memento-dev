import { Logo } from "@/components/Logo";
import { Link } from "@/components/Link";

export function Footer() {
	return (
		<footer class="bg-slate-50 text-slate-700">
			<div class="mx-auto w-full flex flex-col max-w-8xl sm:px-6 lg:px-8 py-8">
				<div>
					<div class="flex items-center gap-2 mb-2">
						<Logo class="h-8 w-auto" />
						<strong class="font-display text-2xl">Memento Dev</strong>
					</div>

					<p>
						Plateforme de ressources et documentations synthétiques et concises,
						conçue pour les développeurs ou passionnés de l&lsquo;informatique
						en quête de savoir.
					</p>
				</div>

				<hr class="my-6 border-slate-200" />

				<div>
					<div class="flex items-center gap-2">
						<strong class="font-display">
							&copy; 2022 - {new Date().getFullYear()} Memento Dev. Tous droits
							réservés
						</strong>
					</div>

					<p class="text-sm text-slate-500">
						Memento Dev est une plateforme open-source, développée par{" "}
						<Link href="https://gauthierdaniels.fr" class="font-bold">
							Gauthier Daniels
						</Link>
						, soutenue et maintenue par une communauté de contributeurs
						passionnés.
					</p>
				</div>
			</div>
		</footer>
	);
}
