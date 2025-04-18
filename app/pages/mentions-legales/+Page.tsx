import React from "react";

export function Page() {
  return (
    <div className="flex flex-col gap-4 p-4 text-slate-700 dark:text-slate-300">
      <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">Mentions légales</h1>

      <section>
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">Éditeur du site</h2>
        <p>
          <span className="font-bold">Nom :</span> <strong className="font-normal">Gauthier Daniels</strong>
        </p>
        <p>
          <span className="font-bold">Adresse physique :</span>{" "}
          <strong className="font-normal">689 Chemin Latéral, 45240 La Ferté Saint-Aubin</strong>
        </p>
        <p>
          <span className="font-bold">Adresse email :</span>{" "}
          <strong className="font-normal">gauthier@gauthierdaniels.fr</strong>
        </p>
        <p>
          <span className="font-bold">Téléphone :</span> <strong className="font-normal">+33 6 52 84 92 41</strong>
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">Directeur de la publication</h2>
        <p>
          <span className="font-bold">Nom :</span> <strong className="font-normal">Gauthier Daniels</strong>
        </p>
        <p>
          <span className="font-bold">Adresse email :</span>{" "}
          <strong className="font-normal">gauthier@gauthierdaniels.fr</strong>
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-slate-900 dark:text-slate-100">Hébergement du site</h2>
        <p>
          <span className="font-bold">Nom :</span> <strong className="font-normal">Infomaniak Network SA</strong>
        </p>
        <p>
          <span className="font-bold">Site internet :</span> <strong className="font-normal">www.infomaniak.com</strong>
        </p>
        <p>
          <span className="font-bold">Adresse physique :</span>{" "}
          <strong className="font-normal">Rue Eugène Marziano 25, 1227 Les Acacias (GE), Suisse</strong>
        </p>
      </section>
    </div>
  );
}
