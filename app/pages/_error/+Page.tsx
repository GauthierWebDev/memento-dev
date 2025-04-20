import { usePageContext } from "vike-solid/usePageContext";
import { Link } from "@/components/Link";

export default function Page() {
	const pageContext = usePageContext();

	if (pageContext.is404) {
		return (
			<>
				<div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
					<div class="flex h-full flex-col items-center justify-center text-center">
						<p class="font-display text-sm font-medium text-slate-900">404</p>
						<h1 class="mt-3 font-display text-3xl tracking-tight text-slate-900">
							Page introuvable
						</h1>
						<p class="mt-2 text-sm text-slate-500">
							Désolé, nous ne pouvons pas trouver la page que vous recherchez.
						</p>
						<Link href="/" class="mt-8 text-sm font-medium text-slate-900">
							Retour à l&apos;accueil
						</Link>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<h1>Erreur {pageContext.abortStatusCode || 500}</h1>
			<p>
				{(pageContext.abortReason as string) ??
					"Une erreur s'est produite lors du chargement de la page."}
			</p>
		</>
	);
}
