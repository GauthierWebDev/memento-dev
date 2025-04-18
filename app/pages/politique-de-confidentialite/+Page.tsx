import { CookiesContext } from "@/components/common/Cookies";
import { Button } from "@/components/syntax/Button";
import { Link } from "@/components/common/Link";
import React, { useContext } from "react";

export function Page() {
  const { setIsOpen } = useContext(CookiesContext);

  return (
    <div className="grow px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 flex flex-col gap-4 text-slate-700 dark:text-slate-300">
      <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
        Politique de confidentialité
      </h1>

      <section className="flex flex-col gap-2">
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">1. Introduction</h2>

        <p>
          Sur <strong>Memento Dev</strong>, qui est un site à but de documentation, je prends très au sérieux la
          protection de votre vie privée et de vos données personnelles.
        </p>

        <p>
          Cette politique de confidentialité explique comment je collecte, utilise et protège les informations des
          utilisateurs de ce site.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">2. Outils externes</h2>

        <p>
          Mon site ne collecte aucune donnée personnelle de manière directe. Cependant, j&apos;utilise des outils
          externes pour améliorer votre expérience utilisateur et analyser l&apos;utilisation du site.
        </p>

        <section className="ml-4">
          <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">a. Google Analytics</h3>
          <p>
            J&apos;utilise <strong>Google Analytics</strong> pour analyser le trafic et l&apos;utilisation de mon site.
            Les données collectées par Google Analytics sont anonymisées et ne sont pas partagées avec des tiers.
          </p>
        </section>

        <section className="ml-4">
          <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">b. Umami</h3>
          <p>
            <strong>Umami</strong> est un autre outil d&apos;analyse que j&apos;utilise pour comprendre comment les
            visiteurs interagissent avec mon site. Comme <strong>Google Analytics</strong>, les données collectées sont
            anonymisées et ne sont pas tranmises à des tiers.
          </p>
        </section>

        <section className="ml-4">
          <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">c. Cookie &quot;theme&quot;</h3>
          <p>
            J&apos;utilise et dépose un cookie nommé &quot;theme&quot; pour mémoriser votre préférence de thème (clair
            ou sombre). Ce cookie est utilisé uniquement pour personnaliser votre expérience utilisateur et n&apos;est
            pas utilisé à des fins de suivi ou de marketing.
          </p>
        </section>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">3. Cookies</h2>

        <p>
          Ce site utilise des cookies pour améliorer votre expérience utilisateur et analyser l&apos;utilisation du
          site. Les cookies sont de petits fichiers texte stockés sur votre appareil lorsque vous visitez un site web.
          Ils permettent de mémoriser vos préférences et d&apos;analyser le trafic du site.
        </p>

        <p>
          Vous pouvez gérer vos préférences de cookies directement via les paramètres de votre navigateur. La plupart
          des navigateurs vous permettent de refuser ou de supprimer les cookies. Cependant, cela peut affecter votre
          expérience sur le site et certaines fonctionnalités peuvent ne pas fonctionner correctement (comme la
          personnalisation du thème par exemple).
        </p>

        <p>
          Pour reconfigurer les cookies, vous pouvez appuyer sur le bouton &quot;Paramétrer les cookies&quot; à la suite
          de ce paragraphe.
        </p>

        <Button variant="secondary" className="w-max max-w-full" onClick={() => setIsOpen(true)}>
          Paramétrer les cookies
        </Button>

        <p>
          Pour plus d&apos;informations sur la gestion des cookies, vous pouvez consulter la documentation de votre
          navigateur. Voici quelques liens utiles :
        </p>

        <ul className="list-disc pl-4">
          <li>
            <Link
              href="https://support.google.com/chrome/answer/95647?hl=fr"
              className="text-violet-500 dark:text-violet-400"
            >
              Google Chrome
            </Link>
          </li>
          <li>
            <Link
              href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
              className="text-violet-500 dark:text-violet-400"
            >
              Mozilla Firefox
            </Link>
          </li>
          <li>
            <Link
              href="https://support.microsoft.com/fr-fr/help/278835/how-to-delete-cookie-files-in-internet-explorer"
              className="text-violet-500 dark:text-violet-400"
            >
              Internet Explorer
            </Link>
          </li>
          <li>
            <Link href="https://support.apple.com/fr-fr/HT201265" className="text-violet-500 dark:text-violet-400">
              Safari
            </Link>
          </li>
          <li>
            <Link
              href="https://support.microsoft.com/fr-fr/help/278835/how-to-delete-cookie-files-in-internet-explorer"
              className="text-violet-500 dark:text-violet-400"
            >
              Microsoft Edge
            </Link>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">4. Utilisation des données</h2>

        <p>
          Les données collectées par les outils d&apos;analyse sont utilisées uniquement pour améliorer le site Memento
          Dev et comprendre comment les visiteurs l&apos;utilisent. Je n&apos;utilise pas ces données à des fins
          commerciales ou pour cibler des publicités.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">5. Protection des données</h2>

        <p>
          Les données collectées par <strong>Google Analytics</strong> et <strong>Umami</strong> sont anonymisées et
          stockées de manière sécurisée par ces services. Je ne stocke aucune donnée personnelle sur mes propres
          serveurs. Pour plus d&apos;informations sur la manière dont ces services protègent vos données, veuillez
          consulter leurs politiques de confidentialité respectives.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">6. Vos droits</h2>

        <p>
          Étant donné que je ne stocke aucune donnée personnelle, je ne suis pas en mesure de répondre aux demandes
          d&apos;accès, de rectification ou de suppression de données personnelles. Cependant, vous pouvez gérer vos
          préférences de cookies directement via les paramètres de votre navigateur. Pour toute question concernant vos
          droits, veuillez me contacter à <strong>gauthier@gauthierdaniels.fr</strong>.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">
          7. Modifications de la Politique de Confidentialité
        </h2>

        <p>
          Je me réserve le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront
          publiées sur cette page et entreront en vigueur immédiatement. Je vous encourage à consulter régulièrement
          cette page pour rester informé de mes pratiques en matière de confidentialité.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">8. Contact</h2>

        <p>
          Si vous avez des questions ou des préoccupations concernant ma politique de confidentialité, veuillez me
          contacter à l&apos;adresse suivante : <strong>gauthier@gauthierdaniels.fr</strong>.
        </p>
      </section>
    </div>
  );
}
