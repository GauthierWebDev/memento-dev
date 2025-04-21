import { createEffect, createSignal } from "solid-js";

export function ReadProgressBar() {
	const articleContentElement: HTMLElement | null =
		document.getElementById("article-content");
	if (!articleContentElement) return null;

	const [width, setWidth] = createSignal("0%");

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const pageHeight = document.documentElement.scrollHeight;
		const scrollHeight = articleContentElement.scrollHeight;

		const gapWithBottom = pageHeight - scrollHeight;
		const scrollableHeight = pageHeight - gapWithBottom;

		const scrollPercentage = Math.round((scrollTop / scrollableHeight) * 100);

		setWidth(`${scrollPercentage}%`);
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
