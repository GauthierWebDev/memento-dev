import { createEffect, createSignal } from "solid-js";

export function ReadProgressBar() {
	const articleContentElement: HTMLElement | null =
		document.getElementById("article-content");
	if (!articleContentElement) return null;

	const [width, setWidth] = createSignal("0%");

	const handleScroll = () => {
		const articleHeight = articleContentElement.scrollHeight;
		const articleTopPosition =
			articleContentElement.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		// Calculer la hauteur visible de l'élément dans la fenêtre
		const visibleHeight = Math.min(
			articleHeight,
			windowHeight + articleTopPosition,
		);

		// Calculer la position de défilement relative à l'élément
		const elementScrollTop = -articleTopPosition;

		// Calculer le pourcentage de défilement relatif à l'élément
		const percentage =
			(elementScrollTop / (articleHeight - windowHeight)) * 100;

		// Limiter le pourcentage entre 0 et 100
		const clampedPercentage = Math.max(0, Math.min(100, percentage));

		setWidth(`${clampedPercentage}%`);
	};

	createEffect(() => {
		window.addEventListener("scroll", handleScroll);

		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<div
			aria-hidden
			class="sticky inset-x-0 top-20 z-50 h-1 w-full bg-violet-50"
		>
			<div
				class="bg-violet-300 h-full transition-all duration-75"
				style={{ width: width() }}
			/>
		</div>
	);
}
