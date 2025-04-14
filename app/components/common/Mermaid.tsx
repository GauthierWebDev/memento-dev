import MermaidRenderer from "react-mermaid2";

type MermaidProps = {
  path: string;
};

export function Mermaid(props: MermaidProps) {
  return (
    <MermaidRenderer
      chart={`
    sequenceDiagram
    autonumber

    box rgba(139,92,246,.1) Navigateur
    actor Utilisateur
    end

    box rgba(139,92,246,.1) Serveur
    participant Routeur
    participant Contrôleur
    participant Modèle
    participant Vue
    end

    participant Base de données

    Utilisateur->>Routeur: Je veux voir la page d'accueil
    Routeur->>Contrôleur: Appelle la méthode \`home\`
    alt Si des données sont nécessaires
        Contrôleur->>Modèle: Demande les données
        Modèle->>Base de données: Récupère les données
        Base de données-->>Modèle: Retourne les données
        Modèle-->>Contrôleur: Retourne les données
    end
    Contrôleur->>Vue: Demande le HTML
    Vue-->>Contrôleur: Retourne le HTML généré
    Contrôleur->>Utilisateur: Retourne le HTML généré
  `}
    />
  );
}
