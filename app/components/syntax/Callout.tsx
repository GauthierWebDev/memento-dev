import { Icon } from "@syntax/Icon";
import React from "react";
import clsx from "clsx";

const styles = {
  note: {
    container: "bg-violet-50 dark:bg-violet-800/60 dark:ring-1 dark:ring-violet-300/10",
    title: "text-violet-900 dark:text-violet-400",
    body: "text-slate-800 [--tw-prose-background:var(--color-slate-50)] prose-a:text-slate-900 prose-code:text-slate-900 dark:text-slate-300 dark:prose-code:text-slate-300",
  },
  warning: {
    container: "bg-amber-50 dark:bg-amber-800/60 dark:ring-1 dark:ring-amber-300/10",
    title: "text-amber-900 dark:text-amber-500",
    body: "text-slate-800 [--tw-prose-underline:var(--color-slate-400)] [--tw-prose-background:var(--color-slate-50)] prose-a:text-slate-900 prose-code:text-slate-900 dark:text-slate-300 dark:[--tw-prose-underline:var(--color-slate-700)] dark:prose-code:text-slate-300",
  },
  question: {
    container: "bg-amber-50 dark:bg-amber-800/60 dark:ring-1 dark:ring-amber-300/10",
    title: "text-amber-900 dark:text-amber-500",
    body: "text-slate-800 [--tw-prose-underline:var(--color-slate-400)] [--tw-prose-background:var(--color-slate-50)] prose-a:text-slate-900 prose-code:text-slate-900 dark:text-slate-300 dark:[--tw-prose-underline:var(--color-slate-700)] dark:prose-code:text-slate-300",
  },
};

const icons = {
  note: (props: { className?: string }) => <Icon icon="lightbulb" {...props} />,
  warning: (props: { className?: string }) => <Icon icon="warning" color="amber" {...props} />,
  question: (props: { className?: string }) => <Icon icon="question" color="blue" {...props} />,
};

export function Callout({
  title,
  children,
  type = "note",
  collapsible = false,
}: {
  title: string;
  children: React.ReactNode;
  type?: keyof typeof styles;
  collapsible?: boolean;
}) {
  const IconComponent = icons[type];

  return (
    <div
      className={clsx("my-8 flex flex-col rounded-3xl p-6", styles[type].container, { "cursor-pointer": collapsible })}
    >
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
