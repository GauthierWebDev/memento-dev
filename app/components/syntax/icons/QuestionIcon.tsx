import { DarkMode, Gradient, LightMode } from "@syntax/Icon";

export function QuestionIcon({ id, color }: { id: string; color?: React.ComponentProps<typeof Gradient>["color"] }) {
  return (
    <>
      <defs>
        <Gradient id={`${id}-gradient`} color={color} gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)" />
        <Gradient id={`${id}-gradient-dark`} color={color} gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)" />
      </defs>
      <LightMode>
        <circle cx={20} cy={20} r={12} fill={`url(#${id}-gradient)`} />
        <path
          d="M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m 16.39 14.617 l 1.179 -3.999 C 17.38 9.304 16.133 9.127 15.469 10.645 C 15.306 11.269 14.71 11.12 14.71 10.537 a 1.66 1.66 5 1 1 3.808 0.217 l -1.5182 5.4314 a 0.602 0.602 5 0 1 -1.1795 -0.1032 Z"
          className="fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
          fillOpacity={0.5}
          stroke="currentColor"
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </LightMode>
      <DarkMode>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
          fill={`url(#${id}-gradient-dark)`}
        />
      </DarkMode>
    </>
  );
}
