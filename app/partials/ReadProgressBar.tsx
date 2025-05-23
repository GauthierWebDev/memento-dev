import { createEffect, createSignal } from "solid-js";

export function ReadProgressBar() {
  const articleContentElement: HTMLElement | null = document.getElementById("article-content");
  if (!articleContentElement) return null;

  const [width, setWidth] = createSignal("0%");

  const handleScroll = () => {
    const articleHeight = articleContentElement.scrollHeight;
    const topPosition = articleContentElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (articleHeight <= windowHeight) {
      setWidth("100%");
      return;
    }

    const elementScrollTop = -topPosition;
    const scrollableHeight = articleHeight - windowHeight;
    const percentage = (elementScrollTop / scrollableHeight) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));

    setWidth(`${clampedPercentage}%`);
  };

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  });

  return (
    <div aria-hidden="true" class="fixed inset-x-0 bottom-0 lg:top-0 z-50 h-1 w-full bg-violet-50 pointer-events-none">
      <div class="bg-violet-300 h-full transition-all duration-300 ease-out" style={{ width: width() }} />
    </div>
  );
}
