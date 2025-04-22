import type { JSX } from "solid-js";
import { createSignal, onCleanup } from "solid-js";

type SmoothScrollProps = JSX.IntrinsicElements["div"] & {
	children: JSX.Element;
};

export function SmoothScroll(props: SmoothScrollProps) {
	const [isScrolling, setIsScrolling] = createSignal(false);
	let animationFrameId: number | null = null;

	const easeOutQuad = (t: number, b: number, c: number, d: number) => {
		const time = t / d;
		return -c * time * (time - 2) + b;
	};

	const smoothScroll = (deltaY: number) => {
		const scrollSpeed = 3;
		const currentScroll = window.scrollY;
		const targetScroll = deltaY * scrollSpeed;
		const duration = 300;
		const startTime = performance.now();

		const animateScroll = (currentTime: number) => {
			const elapsedTime = currentTime - startTime;
			const ease = easeOutQuad(
				elapsedTime,
				currentScroll,
				targetScroll,
				duration,
			);

			window.scrollTo(0, ease);

			if (elapsedTime < duration) {
				animationFrameId = requestAnimationFrame(animateScroll);
			} else {
				setIsScrolling(false);
			}
		};

		animationFrameId = requestAnimationFrame(animateScroll);
	};

	const isMobile = () => {
		const regex =
			/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
		return regex.test(navigator.userAgent);
	};

	const isElementScrollable = (element: HTMLElement) => {
		if (!element) return false;

		return (
			element.scrollHeight > element.clientHeight && element.tagName !== "HTML"
		);
	};

	const findScrollableParent = (element: HTMLElement) => {
		let currentElement: HTMLElement | null = element;

		while (currentElement) {
			if (isElementScrollable(currentElement)) {
				return currentElement;
			}

			currentElement = currentElement.parentElement;
		}

		return null;
	};

	const handleWheel = (event: WheelEvent) => {
		if (isMobile()) return;
		if (event.ctrlKey) return;
		if (event.metaKey) return;

		const hoveredElement = document.elementFromPoint(
			event.clientX,
			event.clientY,
		) as HTMLElement;

		if (findScrollableParent(hoveredElement)) {
			if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
			return;
		}

		event.preventDefault();
		event.stopPropagation();

		if (isScrolling()) {
			if (animationFrameId !== null) {
				cancelAnimationFrame(animationFrameId);
			}
		}

		requestAnimationFrame(() => {
			smoothScroll(event.deltaY);
			setIsScrolling(false);
		});

		setIsScrolling(true);
	};

	onCleanup(() => {
		if (animationFrameId !== null) {
			cancelAnimationFrame(animationFrameId);
		}
	});

	return (
		<div {...props} onWheel={handleWheel} style={{ "touch-action": "auto" }}>
			{props.children}
		</div>
	);
}
