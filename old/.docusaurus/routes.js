import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/mentions-legales',
    component: ComponentCreator('/mentions-legales', '3be'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd0f'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'd1d'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'ce1'),
            exact: true
          },
          {
            path: '/tags/accessibilite',
            component: ComponentCreator('/tags/accessibilite', '2ae'),
            exact: true
          },
          {
            path: '/tags/architecture',
            component: ComponentCreator('/tags/architecture', '851'),
            exact: true
          },
          {
            path: '/tags/back-end',
            component: ComponentCreator('/tags/back-end', '6ff'),
            exact: true
          },
          {
            path: '/tags/base-de-donnees',
            component: ComponentCreator('/tags/base-de-donnees', 'c03'),
            exact: true
          },
          {
            path: '/tags/bibliotheque',
            component: ComponentCreator('/tags/bibliotheque', 'ea9'),
            exact: true
          },
          {
            path: '/tags/cda',
            component: ComponentCreator('/tags/cda', '0a1'),
            exact: true
          },
          {
            path: '/tags/chiffrement',
            component: ComponentCreator('/tags/chiffrement', '2b5'),
            exact: true
          },
          {
            path: '/tags/conception',
            component: ComponentCreator('/tags/conception', '41f'),
            exact: true
          },
          {
            path: '/tags/csr',
            component: ComponentCreator('/tags/csr', 'ff7'),
            exact: true
          },
          {
            path: '/tags/css',
            component: ComponentCreator('/tags/css', '7e4'),
            exact: true
          },
          {
            path: '/tags/deploiement',
            component: ComponentCreator('/tags/deploiement', '1fd'),
            exact: true
          },
          {
            path: '/tags/design-pattern',
            component: ComponentCreator('/tags/design-pattern', '902'),
            exact: true
          },
          {
            path: '/tags/dictionnaire-de-donnees',
            component: ComponentCreator('/tags/dictionnaire-de-donnees', 'f5a'),
            exact: true
          },
          {
            path: '/tags/dwwm',
            component: ComponentCreator('/tags/dwwm', 'f4f'),
            exact: true
          },
          {
            path: '/tags/eco-conception',
            component: ComponentCreator('/tags/eco-conception', '273'),
            exact: true
          },
          {
            path: '/tags/environnement-de-developpement',
            component: ComponentCreator('/tags/environnement-de-developpement', '3cd'),
            exact: true
          },
          {
            path: '/tags/front-end',
            component: ComponentCreator('/tags/front-end', 'c2a'),
            exact: true
          },
          {
            path: '/tags/frontend',
            component: ComponentCreator('/tags/frontend', '1d6'),
            exact: true
          },
          {
            path: '/tags/hachage',
            component: ComponentCreator('/tags/hachage', 'ee1'),
            exact: true
          },
          {
            path: '/tags/html',
            component: ComponentCreator('/tags/html', '548'),
            exact: true
          },
          {
            path: '/tags/integration',
            component: ComponentCreator('/tags/integration', '75a'),
            exact: true
          },
          {
            path: '/tags/interface-utilisateur-ui',
            component: ComponentCreator('/tags/interface-utilisateur-ui', 'e38'),
            exact: true
          },
          {
            path: '/tags/java-script-type-script',
            component: ComponentCreator('/tags/java-script-type-script', 'c31'),
            exact: true
          },
          {
            path: '/tags/maquettage',
            component: ComponentCreator('/tags/maquettage', 'e6b'),
            exact: true
          },
          {
            path: '/tags/merise',
            component: ComponentCreator('/tags/merise', 'ccf'),
            exact: true
          },
          {
            path: '/tags/modele-conceptuel-de-donnees-mcd',
            component: ComponentCreator('/tags/modele-conceptuel-de-donnees-mcd', 'ebd'),
            exact: true
          },
          {
            path: '/tags/modele-logique-de-donnees-mld',
            component: ComponentCreator('/tags/modele-logique-de-donnees-mld', '20f'),
            exact: true
          },
          {
            path: '/tags/modele-physique-de-donnees-mpd',
            component: ComponentCreator('/tags/modele-physique-de-donnees-mpd', 'cd9'),
            exact: true
          },
          {
            path: '/tags/modele-relationnel-de-donnees-mrd',
            component: ComponentCreator('/tags/modele-relationnel-de-donnees-mrd', '865'),
            exact: true
          },
          {
            path: '/tags/modelisation',
            component: ComponentCreator('/tags/modelisation', '141'),
            exact: true
          },
          {
            path: '/tags/orm-odm',
            component: ComponentCreator('/tags/orm-odm', '523'),
            exact: true
          },
          {
            path: '/tags/react',
            component: ComponentCreator('/tags/react', '79a'),
            exact: true
          },
          {
            path: '/tags/responsive',
            component: ComponentCreator('/tags/responsive', 'cac'),
            exact: true
          },
          {
            path: '/tags/reverse-proxy',
            component: ComponentCreator('/tags/reverse-proxy', 'c72'),
            exact: true
          },
          {
            path: '/tags/securite',
            component: ComponentCreator('/tags/securite', '6b3'),
            exact: true
          },
          {
            path: '/tags/seo-referencement-naturel',
            component: ComponentCreator('/tags/seo-referencement-naturel', 'ab8'),
            exact: true
          },
          {
            path: '/tags/serveur-web',
            component: ComponentCreator('/tags/serveur-web', 'ab3'),
            exact: true
          },
          {
            path: '/tags/sql',
            component: ComponentCreator('/tags/sql', 'b91'),
            exact: true
          },
          {
            path: '/tags/ssg',
            component: ComponentCreator('/tags/ssg', '845'),
            exact: true
          },
          {
            path: '/tags/ssr',
            component: ComponentCreator('/tags/ssr', '292'),
            exact: true
          },
          {
            path: '/tags/tests',
            component: ComponentCreator('/tags/tests', '924'),
            exact: true
          },
          {
            path: '/tags/vike',
            component: ComponentCreator('/tags/vike', 'c29'),
            exact: true
          },
          {
            path: '/tags/vite',
            component: ComponentCreator('/tags/vite', '8b4'),
            exact: true
          },
          {
            path: '/tags/wireframe',
            component: ComponentCreator('/tags/wireframe', '9fd'),
            exact: true
          },
          {
            path: '/tags/zoning',
            component: ComponentCreator('/tags/zoning', '487'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', '8ab'),
            routes: [
              {
                path: '/category/️-archives',
                component: ComponentCreator('/category/️-archives', '0da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-bases-de-données',
                component: ComponentCreator('/category/-bases-de-données', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-frontend',
                component: ComponentCreator('/category/-frontend', '08c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/-titres-professionnels',
                component: ComponentCreator('/category/-titres-professionnels', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/contribuer',
                component: ComponentCreator('/contribuer', 'dda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/glossaires/titres-professionnel',
                component: ComponentCreator('/glossaires/titres-professionnel', '04c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '6da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/bases-de-donnees/modelisation/dictionnaire-de-donnees',
                component: ComponentCreator('/ressources/bases-de-donnees/modelisation/dictionnaire-de-donnees', '098'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/bases-de-donnees/modelisation/mcd',
                component: ComponentCreator('/ressources/bases-de-donnees/modelisation/mcd', '985'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/bases-de-donnees/modelisation/merise',
                component: ComponentCreator('/ressources/bases-de-donnees/modelisation/merise', '524'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/frontend/react/contextes',
                component: ComponentCreator('/ressources/frontend/react/contextes', '0b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/frontend/react/hooks',
                component: ComponentCreator('/ressources/frontend/react/hooks', 'f45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/frontend/react/initialiser-un-projet-react',
                component: ComponentCreator('/ressources/frontend/react/initialiser-un-projet-react', '993'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/frontend/react/intro',
                component: ComponentCreator('/ressources/frontend/react/intro', '821'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/frontend/react/premier-composant',
                component: ComponentCreator('/ressources/frontend/react/premier-composant', '797'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/frontend/react/reducers',
                component: ComponentCreator('/ressources/frontend/react/reducers', 'c34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/frontend/react/state-et-cycle-de-vie',
                component: ComponentCreator('/ressources/frontend/react/state-et-cycle-de-vie', 'b0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/frontend/react/syntaxe-jsx',
                component: ComponentCreator('/ressources/frontend/react/syntaxe-jsx', '5c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ressources/influenceurs-et-createurs',
                component: ComponentCreator('/ressources/influenceurs-et-createurs', '21b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/soutiens-et-contributeurs',
                component: ComponentCreator('/soutiens-et-contributeurs', '50d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/archives/DWWM/2018-2023/AT1/CP1',
                component: ComponentCreator('/titres-professionnels/archives/DWWM/2018-2023/AT1/CP1', '523'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/archives/DWWM/2018-2023/AT1/CP2',
                component: ComponentCreator('/titres-professionnels/archives/DWWM/2018-2023/AT1/CP2', 'ddc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/archives/DWWM/2018-2023/AT1/CP3',
                component: ComponentCreator('/titres-professionnels/archives/DWWM/2018-2023/AT1/CP3', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/archives/DWWM/2018-2023/AT1/CP4',
                component: ComponentCreator('/titres-professionnels/archives/DWWM/2018-2023/AT1/CP4', '54e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/archives/DWWM/2018-2023/AT2/CP5',
                component: ComponentCreator('/titres-professionnels/archives/DWWM/2018-2023/AT2/CP5', 'a1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/archives/DWWM/2018-2023/AT2/CP6',
                component: ComponentCreator('/titres-professionnels/archives/DWWM/2018-2023/AT2/CP6', 'b0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/archives/DWWM/2018-2023/AT2/CP7',
                component: ComponentCreator('/titres-professionnels/archives/DWWM/2018-2023/AT2/CP7', '6cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/archives/DWWM/2018-2023/AT2/CP8',
                component: ComponentCreator('/titres-professionnels/archives/DWWM/2018-2023/AT2/CP8', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/archives/DWWM/2018-2023/intro',
                component: ComponentCreator('/titres-professionnels/archives/DWWM/2018-2023/intro', '736'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT1/CP1',
                component: ComponentCreator('/titres-professionnels/CDA/AT1/CP1', 'e53'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT1/CP2',
                component: ComponentCreator('/titres-professionnels/CDA/AT1/CP2', 'dcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT1/CP3',
                component: ComponentCreator('/titres-professionnels/CDA/AT1/CP3', 'd1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT1/CP4',
                component: ComponentCreator('/titres-professionnels/CDA/AT1/CP4', 'e7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT2/CP5',
                component: ComponentCreator('/titres-professionnels/CDA/AT2/CP5', 'ef6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT2/CP6',
                component: ComponentCreator('/titres-professionnels/CDA/AT2/CP6', '581'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT2/CP7',
                component: ComponentCreator('/titres-professionnels/CDA/AT2/CP7', '01b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT2/CP8',
                component: ComponentCreator('/titres-professionnels/CDA/AT2/CP8', '16a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT3/CP10',
                component: ComponentCreator('/titres-professionnels/CDA/AT3/CP10', 'a1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT3/CP11',
                component: ComponentCreator('/titres-professionnels/CDA/AT3/CP11', '806'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/AT3/CP9',
                component: ComponentCreator('/titres-professionnels/CDA/AT3/CP9', '965'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/CDA/intro',
                component: ComponentCreator('/titres-professionnels/CDA/intro', '8d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/AT1/CP1',
                component: ComponentCreator('/titres-professionnels/DWWM/AT1/CP1', '724'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/AT1/CP2',
                component: ComponentCreator('/titres-professionnels/DWWM/AT1/CP2', '38b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/AT1/CP3',
                component: ComponentCreator('/titres-professionnels/DWWM/AT1/CP3', '8c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/AT1/CP4',
                component: ComponentCreator('/titres-professionnels/DWWM/AT1/CP4', 'b07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/AT2/CP5',
                component: ComponentCreator('/titres-professionnels/DWWM/AT2/CP5', '6e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/AT2/CP6',
                component: ComponentCreator('/titres-professionnels/DWWM/AT2/CP6', 'aaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/AT2/CP7',
                component: ComponentCreator('/titres-professionnels/DWWM/AT2/CP7', '737'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/AT2/CP8',
                component: ComponentCreator('/titres-professionnels/DWWM/AT2/CP8', 'c43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/intro',
                component: ComponentCreator('/titres-professionnels/DWWM/intro', '9b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/DWWM/soutenance',
                component: ComponentCreator('/titres-professionnels/DWWM/soutenance', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/retours',
                component: ComponentCreator('/titres-professionnels/retours', 'd84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/titres-professionnels/se-preparer',
                component: ComponentCreator('/titres-professionnels/se-preparer', 'e8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
