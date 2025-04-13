const navigationsTypes = {
  GLOBAL: "👋 Général",
  CERTIFICATIONS: "🎓 Certifications",
  DOCUMENTATIONS: "📚 Documentations",
};

export type NavigationSection = {
  title: string;
  type: (typeof navigationsTypes)[keyof typeof navigationsTypes];
  position: "start" | "auto";
  links: NavigationLink[];
};

export type NavigationLink = {
  title: string;
  href: string;
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
      { title: "Influenceurs", href: "/docs/communaute/influenceurs", subitems: [] },
      { title: "Partages et réutilisations", href: "/docs/communaute/partages", subitems: [] },
    ],
  },
  {
    title: "Développeur Web et Web Mobile",
    type: navigationsTypes.CERTIFICATIONS,
    position: "auto",
    links: [
      { title: "Résumé", href: "/certifications/dwwm", subitems: [] },
      {
        title: "Activité Type 1",
        href: "/certifications/dwwm/at1",
        subitems: [
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
          { title: "Initialisation", href: "/docs/react/initialisation" },
          { title: "Syntaxe JSX", href: "/docs/react/jsx" },
          { title: "Premier composant", href: "/docs/react/premier-composant" },
          { title: "State et cycle de vie", href: "/docs/react/state-et-cycle-de-vie" },
          { title: "Hooks", href: "/docs/react/hooks" },
          { title: "Le hook useContext", href: "/docs/react/use-context" },
          { title: "Le hook useReducer", href: "/docs/react/use-reducer" },
        ],
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
        subitems: [
          { title: "Dictionnaire de données", href: "/docs/merise/dictionnaire-de-donnees" },
          { title: "Modèle Conceptuel de Données", href: "/docs/merise/modele-conceptuel-de-donnees" },
        ],
      },
    ],
  },
];
