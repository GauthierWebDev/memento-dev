import { usePageContext } from "vike-react/usePageContext";
import { ClockIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/lib/navigation";
import React from "react";

type DocsHeaderProps = {
  title?: string;
  estimatedReadingTime?: string;
};

export function DocsHeader(props: DocsHeaderProps) {
  const { urlPathname } = usePageContext();

  const section = navigation.find((section) => section.links.find((link) => link.href === urlPathname));

  if (!props.title && !section) {
    return null;
  }

  return (
    <header className="mb-9 space-y-1">
      {section && <p className="font-display text-sm font-medium text-violet-500">{section.title}</p>}
      {props.title && (
        <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">{props.title}</h1>
      )}
      {props.estimatedReadingTime && (
        <p className="text-sm text-slate-500 dark:text-slate-400 inline-flex items-center gap-1">
          <ClockIcon className="w-4" /> {props.estimatedReadingTime}
        </p>
      )}
    </header>
  );
}
