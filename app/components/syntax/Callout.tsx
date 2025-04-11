import { Icon } from "@syntax/Icon";
import clsx from "clsx";

const styles = {
  note: {
    container: "bg-violet-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
    title: "text-violet-900 dark:text-violet-400",
    body: "text-violet-800 [--tw-prose-background:var(--color-violet-50)] prose-a:text-violet-900 prose-code:text-violet-900 dark:text-slate-300 dark:prose-code:text-slate-300",
  },
  warning: {
    container: "bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
    title: "text-amber-900 dark:text-amber-500",
    body: "text-amber-800 [--tw-prose-underline:var(--color-amber-400)] [--tw-prose-background:var(--color-amber-50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:var(--color-violet-700)] dark:prose-code:text-slate-300",
  },
};

const icons = {
  note: (props: { className?: string }) => <Icon icon="lightbulb" {...props} />,
  warning: (props: { className?: string }) => <Icon icon="warning" color="amber" {...props} />,
};

export function Callout({
  title,
  children,
  type = "note",
}: {
  title: string;
  children: React.ReactNode;
  type?: keyof typeof styles;
}) {
  let IconComponent = icons[type];

  return (
    <div className={clsx("my-8 flex flex-col rounded-3xl p-6", styles[type].container)}>
      <div className="flex items-center gap-6">
        <IconComponent className="h-8 w-8 flex-none" />
        <p className={clsx("!m-0 font-display text-xl text-balance", styles[type].title)}>{title}</p>
      </div>
      <div className="mt-4 flex-auto">
        <div className={clsx("prose mt-2.5", styles[type].body)}>{children}</div>
      </div>
    </div>
  );
}
