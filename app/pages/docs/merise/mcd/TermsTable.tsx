export default function TermsTable() {
	return (
		<table class="block max-w-full overflow-x-auto border-collapse text-sm">
			<thead>
				<tr>
					<th scope="col">Terme</th>
					<th scope="col">Définition</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<strong class="font-semibold text-slate-800">Entité</strong>
					</td>
					<td>
						Représentation d'un regroupement de données <em>(rectangle)</em>
					</td>
				</tr>
				<tr>
					<td>
						<strong class="font-semibold text-slate-800">Attribut</strong>
					</td>
					<td>Donnée précise d'une entité</td>
				</tr>
				<tr>
					<td>
						<strong class="font-semibold text-slate-800">Relation</strong>
					</td>
					<td>
						Lien entre deux entités <em>(bulle ovale/arrondie)</em>, accompagné
						d'un verbe à l'infinitif
					</td>
				</tr>
				<tr>
					<td>
						<strong class="font-semibold text-slate-800">Cardinalité</strong>
					</td>
					<td>
						Nombre d'occurrences <em>(minimum et maximum)</em> d'une entité par
						rapport à une autre
					</td>
				</tr>
				<tr>
					<td>
						<strong class="font-semibold text-slate-800">Discriminant</strong>{" "}
						<em>
							(ou{" "}
							<strong class="font-semibold text-slate-800">déterminant</strong>/
							<strong class="font-semibold text-slate-800">identifiant</strong>)
						</em>
					</td>
					<td>
						Attribut qui permet d'identifier une entité de manière unique{" "}
						<em>(ex: matricule)</em>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
