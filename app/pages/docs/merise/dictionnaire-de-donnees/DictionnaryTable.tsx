export default function DictionnaryTable() {
	return (
		<table class="block max-w-full overflow-x-auto border-collapse text-sm">
			<thead>
				<tr>
					<th scope="col">Nom de la donnée</th>
					<th scope="col">Format</th>
					<th scope="col">Longueur</th>
					<th scope="col">Contraintes</th>
					<th scope="col">Document</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Nom</td>
					<td>Alphabétique</td>
					<td>30</td>
					<td>Obligatoire</td>
					<td>Musicien</td>
				</tr>
				<tr>
					<td>Prénom</td>
					<td>Alphabétique</td>
					<td>30</td>
					<td>Obligatoire</td>
					<td>Musicien</td>
				</tr>
				<tr>
					<td>Instruments</td>
					<td>Alphabétique</td>
					<td>30</td>
					<td>Obligatoire</td>
					<td>Musicien</td>
				</tr>
				<tr>
					<td>Adresse e-mail</td>
					<td>Alphanumérique</td>
					<td>50</td>
					<td>Obligatoire, unique</td>
					<td>Musicien</td>
				</tr>
				<tr>
					<td>Mot de passe</td>
					<td>Alphanumérique</td>
					<td>&gt; 12</td>
					<td>Obligatoire</td>
					<td>Musicien</td>
				</tr>
				<tr>
					<td>Date et heure de concert</td>
					<td>Date</td>
					<td>-</td>
					<td>Obligatoire</td>
					<td>Concert</td>
				</tr>
				<tr>
					<td>Lieu de concert</td>
					<td>Alphabétique</td>
					<td>50</td>
					<td>Obligatoire</td>
					<td>Concert</td>
				</tr>
				<tr>
					<td>Tarif</td>
					<td>Numérique</td>
					<td>-</td>
					<td>-</td>
					<td>Concert</td>
				</tr>
				<tr>
					<td>Date et heure de répétition</td>
					<td>Date</td>
					<td>-</td>
					<td>Obligatoire</td>
					<td>Répétition</td>
				</tr>
				<tr>
					<td>Lieu de répétition</td>
					<td>Alphabétique</td>
					<td>50</td>
					<td>Obligatoire</td>
					<td>Répétition</td>
				</tr>
			</tbody>
		</table>
	);
}
