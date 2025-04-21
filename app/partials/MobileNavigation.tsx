import type { JSX } from "solid-js";

import { usePageContext } from "vike-solid/usePageContext";
import { createEffect, createSignal } from "solid-js";
import { Dialog, DialogPanel } from "terracotta";
import { Navigation } from "./Navigation";
import { Link } from "@/components/Link";
import { Logo } from "@/components/Logo";

function MenuIcon(props: JSX.IntrinsicElements["svg"]) {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 24 24"
			fill="none"
			stroke-width="2"
			stroke-linecap="round"
			{...props}
		>
			<path d="M4 7h16M4 12h16M4 17h16" />
		</svg>
	);
}

function CloseIcon(props: JSX.IntrinsicElements["svg"]) {
	return (
		<svg
			{...props}
			aria-hidden="true"
			viewBox="0 0 24 24"
			fill="none"
			stroke-width="2"
			stroke-linecap="round"
		>
			<path d="M5 5l14 14M19 5l-14 14" />
		</svg>
	);
}

function CloseOnNavigation(props: { close: () => void }) {
	const pageContext = usePageContext();

	createEffect(() => {
		props.close();
	}, [pageContext.urlPathname, props.close]);

	return null;
}

export function MobileNavigation() {
	const [isOpen, setIsOpen] = createSignal(false);
	const close = () => setIsOpen(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				class="relative"
				aria-label="Ouvrir le menu de navigation"
			>
				<MenuIcon class="h-6 w-6 stroke-slate-500" />
			</button>

			<CloseOnNavigation close={close} />

			<Dialog
				isOpen={isOpen()}
				onClose={close}
				class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur-sm lg:hidden"
				aria-label="Navigation"
			>
				<DialogPanel class="min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 sm:px-6">
					<div class="flex items-center">
						<button
							type="button"
							onClick={close}
							aria-label="Fermer le menu de navigation"
						>
							<CloseIcon class="h-6 w-6 stroke-slate-500" />
						</button>

						<Link href="/" class="ml-6" aria-label="Page d'accueil">
							<Logo class="h-6 w-auto shrink-0" />
						</Link>
					</div>
					<Navigation class="mt-5 px-1" onLinkClick={close} />
				</DialogPanel>
			</Dialog>
		</>
	);
}
