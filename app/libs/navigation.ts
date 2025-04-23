const navigationsTypes = {
  GLOBAL: "👋 Général",
  CERTIFICATIONS: "🎓 Certifications",
  DOCUMENTATIONS: "📚 Documentations",
  OTHER: "🔗 Autres",
};

export type NavigationSection = {
  title: string;
  type: (typeof navigationsTypes)[keyof typeof navigationsTypes];
  position: "start" | "end" | "auto";
  links: NavigationLink[];
};

export type NavigationOG = Partial<{
  image: string;
}>;

export type NavigationLink = {
  title: string;
  href: string;
  og?: NavigationOG;
  subitems: NavigationSubItem[];
};

export type NavigationSubItem = {
  title: string;
  href: string;
};

export const navigation: NavigationSection[] = [
  {
    title: "Préambule",
    type: navigationsTypes.GLOBAL,
    position: "start",
    links: [
      { title: "Memento Dev", href: "/", subitems: [] },
      { title: "Certifications", href: "/certifications", subitems: [] },
      { title: "Documentations", href: "/docs", subitems: [] },
    ],
  },
  {
    title: "Communauté",
    type: navigationsTypes.GLOBAL,
    position: "start",
    links: [
      {
        title: "Influenceurs",
        href: "/communaute/influenceurs",
        subitems: [],
      },
      {
        title: "Partages et réutilisations",
        href: "/communaute/partages",
        subitems: [],
      },
    ],
  },
  {
    title: "Légal",
    type: navigationsTypes.OTHER,
    position: "end",
    links: [
      { title: "Mentions légales", href: "/mentions-legales", subitems: [] },
      {
        title: "Politique de confidentialité",
        href: "/politique-de-confidentialite",
        subitems: [],
      },
    ],
  },
  {
    title: "Développeur Web et Web Mobile",
    type: navigationsTypes.CERTIFICATIONS,
    position: "auto",
    links: [
      { title: "Résumé du titre", href: "/certifications/dwwm", subitems: [] },
      {
        title: "Activité Type 1",
        href: "/certifications/dwwm/at1",
        subitems: [
          { title: "Résumé de l'AT", href: "/certifications/dwwm/at1" },
          { title: "CP 1", href: "/certifications/dwwm/at1/cp1" },
          { title: "CP 2", href: "/certifications/dwwm/at1/cp2" },
          { title: "CP 3", href: "/certifications/dwwm/at1/cp3" },
          { title: "CP 4", href: "/certifications/dwwm/at1/cp4" },
        ],
      },
      {
        title: "Activité Type 2",
        href: "/certifications/dwwm/at2",
        subitems: [
          { title: "Résumé de l'AT", href: "/certifications/dwwm/at2" },
          { title: "CP 5", href: "/certifications/dwwm/at2/cp5" },
          { title: "CP 6", href: "/certifications/dwwm/at2/cp6" },
          { title: "CP 7", href: "/certifications/dwwm/at2/cp7" },
          { title: "CP 8", href: "/certifications/dwwm/at2/cp8" },
        ],
      },
    ],
  },
  {
    title: "Front-end",
    type: navigationsTypes.DOCUMENTATIONS,
    position: "auto",
    links: [
      {
        title: "React",
        href: "/docs/react",
        subitems: [
          { title: "Introduction", href: "/docs/react" },
          { title: "Initialisation", href: "/docs/react/initialisation" },
          { title: "Syntaxe JSX", href: "/docs/react/jsx" },
          { title: "Premier composant", href: "/docs/react/premier-composant" },
          {
            title: "State et cycle de vie",
            href: "/docs/react/state-et-cycle-de-vie",
          },
          { title: "Hooks", href: "/docs/react/hooks" },
          { title: "Le hook useContext", href: "/docs/react/use-context" },
          { title: "Le hook useReducer", href: "/docs/react/use-reducer" },
        ],
      },
      {
        title: "HTML",
        href: "/docs/html",
        subitems: [{ title: "Introduction", href: "/docs/html" }],
      },
    ],
  },
  {
    title: "Base de données",
    type: navigationsTypes.DOCUMENTATIONS,
    position: "auto",
    links: [
      {
        title: "Merise",
        href: "/docs/merise",
        og: { image: "/merise/og.webp" },
        subitems: [
          { title: "Introduction", href: "/docs/merise" },
          {
            title: "Dictionnaire de données",
            href: "/docs/merise/dictionnaire-de-donnees",
          },
          { title: "Modèle Conceptuel de Données", href: "/docs/merise/mcd" },
          { title: "Modèle Logique de Données", href: "/docs/merise/mld" },
          { title: "Modèle Physique de Données", href: "/docs/merise/mpd" },
        ],
      },
    ],
  },
];

export function doesLinkSubitemExist(link: NavigationLink, subitemHref: string): boolean {
  return link.subitems.some((subitem) => subitem.href === subitemHref);
}

export function findNavigationLink(namespace: string, href?: string): NavigationLink | undefined {
  const currentUrl = `/${namespace}/${href}`.replace(/\/+/g, "/").replace(/\/$/, "");

  const foundLink = navigation
    .flatMap((section) => section.links)
    .find((link) => {
      return link.href === currentUrl || doesLinkSubitemExist(link, currentUrl);
    });

  return foundLink;
}
