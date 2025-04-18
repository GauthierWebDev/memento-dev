import { Link } from "@/components/common/Link";
import React from "react";

export function Page() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
        Politique de confidentialité
      </h1>

      <section>
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

      <section>
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">2. Outils externes</h2>

        <p>
          Mon site ne collecte aucune donnée personnelle de manière directe. Cependant, j'utilise des outils externes
          pour améliorer votre expérience utilisateur et analyser l'utilisation du site.
        </p>

        <section>
          <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">Google Analytics</h3>
          <p>
            J'utilise <strong>Google Analytics</strong> pour analyser le trafic et l'utilisation de mon site. Les
            données collectées par Google Analytics sont anonymisées et ne sont pas partagées avec des tiers.
          </p>
        </section>

        <section>
          <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">Umami</h3>
          <p>
            <strong>Umami</strong> est un autre outil d'analyse que j'utilise pour comprendre comment les visiteurs
            interagissent avec mon site. Comme <strong>Google Analytics</strong>, les données collectées sont
            anonymisées et ne sont pas tranmises à des tiers.
          </p>
        </section>

        <section>
          <h3 className="font-display text-lg text-slate-900 dark:text-slate-100">Cookie "theme"</h3>
          <p>
            J'utilise et dépose un cookie nommé "theme" pour mémoriser votre préférence de thème (clair ou sombre). Ce
            cookie est utilisé uniquement pour personnaliser votre expérience utilisateur et n'est pas utilisé à des
            fins de suivi ou de marketing.
          </p>
        </section>
      </section>

      <section>
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">3. Utilisation des données</h2>

        <p>
          Les données collectées par les outils d'analyse sont utilisées uniquement pour améliorer le site Memento Dev
          et comprendre comment les visiteurs l'utilisent. Je n'utilise pas ces données à des fins commerciales ou pour
          cibler des publicités.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">4. Protection des données</h2>

        <p>
          Les données collectées par Google Analytics et Umami sont anonymisées et stockées de manière sécurisée par ces
          services. Je ne stocke aucune donnée personnelle sur mes propres serveurs. Pour plus d'informations sur la
          manière dont ces services protègent vos données, veuillez consulter leurs politiques de confidentialité
          respectives.
        </p>
      </section>
    </div>
  );
}
