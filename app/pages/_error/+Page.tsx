import { usePageContext } from "vike-react/usePageContext";
import { Link } from "@/components/common/Link";
import React from "react";

export default function Page() {
  const { is404 } = usePageContext();

  if (is404) {
    return (
      <>
        <div className="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <p className="font-display text-sm font-medium text-slate-900 dark:text-white">404</p>
            <h1 className="mt-3 font-display text-3xl tracking-tight text-slate-900 dark:text-white">
              Page introuvable
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Désolé, nous ne pouvons pas trouver la page que vous recherchez.
            </p>
            <Link href="/" className="mt-8 text-sm font-medium text-slate-900 dark:text-white">
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <h1>500 Internal Server Error</h1>
      <p>Something went wrong.</p>
    </>
  );
}
