import { children, type JSX } from "solid-js";

import { Snippet } from "@/components/Snippet";

const testSuiteSnippets = [
	{
		name: "Données invalides",
		children: (
			<ul>
				<li>
					<strong>Les données d'entrée</strong>
					<ul>
						<li>
							Adresse e-mail : <code>mauvaise-adresse@email</code>
						</li>
						<li>
							Mot de passe : <code>password</code>
						</li>
					</ul>
				</li>
				<li>
					<strong>Les données de sortie attendues</strong>
					<ul>
						<li>
							Erreur : <code>Adresse e-mail invalide</code>
						</li>
						<li>
							Erreur :{" "}
							<code>
								Le mot de passe ne respecte pas les critères de sécurité requis
							</code>
						</li>
					</ul>
				</li>
				<li>
					<strong>Les données de sortie obtenues</strong>
					<ul>
						<li>
							Erreur : <code>Adresse e-mail invalide</code>
						</li>
						<li>
							Erreur :{" "}
							<code>
								Le mot de passe ne respecte pas les critères de sécurité requis
							</code>
						</li>
					</ul>
				</li>
			</ul>
		),
	},
	{
		name: "Données valides",
		children: (
			<ul>
				<li>
					<strong>Les données d'entrée</strong>
					<ul>
						<li>
							Adresse e-mail : <code>bonne-adresse@email.fr</code>
						</li>
						<li>
							Mot de passe : <code>Password123&</code>
						</li>
					</ul>
				</li>
				<li>
					<strong>Les données de sortie attendues</strong>
					<ul>
						<li>
							Succès : <code>Utilisateur inscrit avec succès</code>
						</li>
					</ul>
				</li>
				<li>
					<strong>Les données de sortie obtenues</strong>
					<ul>
						<li>
							Succès : <code>Utilisateur inscrit avec succès</code>
						</li>
					</ul>
				</li>
			</ul>
		),
	},
	{
		name: "Adresse e-mail déjà utilisée",
		children: (
			<ul>
				<li>
					<strong>Les données d'entrée</strong>
					<ul>
						<li>
							Adresse e-mail : <code>adresse-email@utilisee.fr</code>
						</li>
						<li>
							Mot de passe : <code>Password123&</code>
						</li>
					</ul>
				</li>
				<li>
					<strong>Les données de sortie attendues</strong>
					<ul>
						<li>
							Erreur : <code>Adresse e-mail déjà utilisée</code>
						</li>
					</ul>
				</li>
				<li>
					<strong>Les données de sortie obtenues</strong>
					<ul>
						<li>
							Erreur : <code>Adresse e-mail déjà utilisée</code>
						</li>
					</ul>
				</li>
			</ul>
		),
	},
];

export default {
	testSuite: () => <Snippet snippets={testSuiteSnippets} />,
};
