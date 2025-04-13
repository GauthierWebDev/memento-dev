import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { usePageContext } from "vike-react/usePageContext";
import { Link } from "@/components/common/Link";
import { navigation } from "@/lib/navigation";
import { useState } from "react";
import clsx from "clsx";

type NavigationItemProps = {
  section: (typeof navigation)[number];
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

function NavigationItem(props: NavigationItemProps) {
  const { urlPathname } = usePageContext();

  const [isOpened, setIsOpened] = useState(() => {
    return props.section.links.some(
      (link) => link.href === urlPathname || link.subitems?.some((subitem) => subitem.href === urlPathname),
    );
  });

  return (
    <>
      <h2
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpened((prev) => !prev);
            e.preventDefault();
          }
        }}
        className={clsx(
          "font-display font-medium cursor-pointer",
          isOpened ? "text-violet-600 dark:text-violet-200" : "text-slate-900 dark:text-white ",
        )}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        {isOpened ? (
          <ChevronUpIcon className="inline-block mr-2 h-5 w-5 text-slate-400" />
        ) : (
          <ChevronDownIcon className="inline-block mr-2 h-5 w-5 text-slate-400" />
        )}
        <span className="sr-only">{isOpened ? "Masquer" : "Afficher"}</span>

        {props.section.title}

        <span className="text-slate-400 dark:text-slate-500"> ({props.section.links.length})</span>
      </h2>
      {isOpened && (
        <ul
          role="list"
          className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800 mb-9"
        >
          {props.section.links.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                onClick={props.onLinkClick}
                className={clsx(
                  "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:h-1.5 before:w-1.5 before:rounded-full",
                  { "before:top-1/2 before:-translate-y-1/2": !link.subitems },
                  { "before:top-3 before:-translate-y-1/2": link.subitems },
                  link.href === urlPathname || link.subitems?.some((subitem) => subitem.href === urlPathname)
                    ? "font-semibold text-violet-500 before:bg-violet-500"
                    : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300",
                )}
              >
                {link.title}
                {link.subitems && <span className="text-slate-400 dark:text-slate-500"> ({link.subitems.length})</span>}
              </Link>
              {link.subitems && (
                <ul
                  role="list"
                  className="ml-4 border-l-2 border-slate-100 lg:space-y-1 lg:border-slate-200 dark:border-slate-800 mb-4"
                >
                  {link.subitems.map((subitem) => (
                    <li key={subitem.href} className="relative">
                      <Link
                        href={subitem.href}
                        onClick={props.onLinkClick}
                        className={clsx(
                          "block w-full pl-3.5 before:pointer-events-none before:absolute before:top-1/2 before:-left-1 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                          subitem.href === urlPathname
                            ? "font-semibold text-violet-500 before:bg-violet-500"
                            : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300",
                        )}
                      >
                        {subitem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function Navigation({
  className,
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const firstSections = navigation.filter((section) => section.position === "start");

  const filteredSections = navigation
    .filter((section) => section.position === "auto" || section.position === undefined)
    .reduce(
      (acc, section) => {
        if (!acc[section.type]) {
          acc[section.type] = [];
        }
        acc[section.type].push(section);
        return acc;
      },
      {} as Record<string, typeof navigation>,
    );

  return (
    <nav className={clsx("text-base lg:text-sm", className)}>
      <ul role="list" className="space-y-4">
        {firstSections.map((section) => (
          <li key={section.title}>
            <NavigationItem section={section} onLinkClick={onLinkClick} />
          </li>
        ))}
        {Object.entries(filteredSections).map(([type, sections]) => (
          <li key={type}>
            <h2 className="font-display font-bold text-base text-slate-900 dark:text-white">{type}</h2>
            {sections.map((section) => (
              <NavigationItem key={section.title} section={section} onLinkClick={onLinkClick} />
            ))}
          </li>
        ))}
      </ul>
    </nav>
  );
}
