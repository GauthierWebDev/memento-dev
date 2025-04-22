import { For } from "solid-js";

type DataTable = {
	tableName: string;
	hiddenInBasic?: boolean;
	documentName: string;
	columns: DataColumn[];
	primaryKeys?: string[];
	foreignKeys?: string[];
};

type DataColumnType =
	| "Alphanumérique"
	| "Alphabétique"
	| "Numérique"
	| "Date"
	| "Logique";

type DataColumn = {
	name: string;
	logical: string;
	dbmsType: string;
	dbmsLength?: number;
	length?: string | number;
	type: DataColumnType;
	hiddenInTechnical?: boolean;
	hiddenInBasic?: boolean;
	dbmsConstraints: string[];
	constraints?: string[];
};

const data: DataTable[] = [
	{
		tableName: "musician",
		documentName: "Musicien",
		primaryKeys: ["id_musician"],
		columns: [
			{
				name: "code musicien",
				logical: "id_musician",
				dbmsType: "SERIAL",
				type: "Numérique",
				hiddenInBasic: true,
				dbmsConstraints: ["NOT_NULL", "UNIQUE"],
			},
			{
				name: "Nom",
				logical: "lastname",
				dbmsType: "VARCHAR",
				type: "Numérique",
				length: 30,
				dbmsLength: 30,
				dbmsConstraints: ["NOT_NULL"],
				constraints: ["Obligatoire"],
			},
			{
				name: "Prénom",
				logical: "firstname",
				dbmsType: "VARCHAR",
				type: "Numérique",
				length: 30,
				dbmsLength: 30,
				dbmsConstraints: ["NOT_NULL"],
				constraints: ["Obligatoire"],
			},
			{
				name: "Instruments",
				logical: "instruments",
				dbmsType: "VARCHAR[]",
				type: "Alphabétique",
				length: 30,
				dbmsLength: 30,
				dbmsConstraints: ["NOT_NULL"],
				constraints: ["Obligatoire"],
			},
			{
				name: "Adresse e-mail",
				logical: "email",
				dbmsType: "VARCHAR",
				type: "Alphanumérique",
				length: 50,
				dbmsLength: 50,
				dbmsConstraints: ["NOT_NULL", "UNIQUE"],
				constraints: ["Obligatoire", "Unique"],
			},
			{
				name: "Mot de passe",
				logical: "password",
				dbmsType: "VARCHAR",
				type: "Alphanumérique",
				length: "> 12",
				dbmsLength: 32,
				dbmsConstraints: ["NOT_NULL"],
				constraints: ["Obligatoire"],
			},
		],
	},
	{
		tableName: "musician_participates_event",
		documentName: "",
		hiddenInBasic: true,
		primaryKeys: ["id_musician", "event_id"],
		foreignKeys: ["id_musician", "event_id"],
		columns: [
			{
				name: "",
				logical: "event_id",
				dbmsType: "SERIAL",
				type: "Numérique",
				dbmsConstraints: ["NOT_NULL"],
			},
			{
				name: "Lieu",
				logical: "location",
				dbmsType: "VARCHAR",
				type: "Alphabétique",
				dbmsLength: 30,
				dbmsConstraints: ["NOT_NULL"],
			},
			{
				name: "Date et heure",
				logical: "datetime",
				dbmsType: "TIMESTAMP",
				type: "Alphabétique",
				dbmsLength: 30,
				dbmsConstraints: ["NOT_NULL"],
			},
		],
	},
	{
		tableName: "event",
		documentName: "",
		hiddenInBasic: true,
		primaryKeys: ["id_event"],
		columns: [
			{
				name: "",
				logical: "id_event",
				dbmsType: "SERIAL",
				type: "Numérique",
				dbmsConstraints: ["NOT_NULL", "UNIQUE"],
			},
			{
				name: "Lieu",
				logical: "location",
				dbmsType: "VARCHAR",
				type: "Alphabétique",
				dbmsLength: 30,
				dbmsConstraints: ["NOT_NULL"],
			},
			{
				name: "Date et heure",
				logical: "datetime",
				dbmsType: "TIMESTAMP",
				type: "Alphabétique",
				dbmsLength: 30,
				dbmsConstraints: ["NOT_NULL"],
			},
		],
	},
	{
		tableName: "concert",
		documentName: "Concert",
		primaryKeys: ["id_concert"],
		foreignKeys: ["event_id"],
		columns: [
			{
				name: "code concert",
				logical: "id_concert",
				dbmsType: "SERIAL",
				type: "Numérique",
				hiddenInBasic: true,
				dbmsConstraints: ["NOT_NULL", "UNIQUE"],
			},
			{
				name: "Date et heure",
				logical: "datetime",
				dbmsType: "TIMESTAMP",
				type: "Date",
				hiddenInTechnical: true,
				dbmsConstraints: ["NOT_NULL"],
				constraints: ["Obligatoire"],
			},
			{
				name: "Lieu",
				logical: "location",
				dbmsType: "VARCHAR",
				type: "Alphabétique",
				hiddenInTechnical: true,
				dbmsConstraints: ["NOT_NULL"],
				constraints: ["Obligatoire"],
			},
			{
				name: "Tarif",
				logical: "price",
				dbmsType: "MONEY",
				type: "Numérique",
				dbmsConstraints: [],
				constraints: ["Obligatoire"],
			},
			{
				name: "",
				logical: "event_id",
				dbmsType: "SERIAL",
				type: "Numérique",
				hiddenInBasic: true,
				dbmsConstraints: ["NOT_NULL"],
			},
		],
	},
	{
		tableName: "rehearsal",
		documentName: "Répétition",
		primaryKeys: ["id_rehearsal"],
		foreignKeys: ["event_id"],
		columns: [
			{
				name: "code répétition",
				logical: "id_rehearsal",
				dbmsType: "SERIAL",
				type: "Numérique",
				hiddenInBasic: true,
				dbmsConstraints: ["NOT_NULL", "UNIQUE"],
			},
			{
				name: "Date et heure",
				logical: "datetime",
				dbmsType: "TIMESTAMP",
				type: "Date",
				hiddenInTechnical: true,
				dbmsConstraints: ["NOT_NULL"],
				constraints: ["Obligatoire"],
			},
			{
				name: "Lieu",
				logical: "location",
				dbmsType: "VARCHAR",
				type: "Alphabétique",
				hiddenInTechnical: true,
				dbmsConstraints: ["NOT_NULL"],
				constraints: ["Obligatoire"],
			},
			{
				name: "",
				logical: "event_id",
				dbmsType: "SERIAL",
				type: "Numérique",
				hiddenInBasic: true,
				dbmsConstraints: ["NOT_NULL"],
			},
		],
	},
];

type DictionnaryTableProps = {
	isTechnical?: boolean;
};

export default function DictionnaryTable(props: DictionnaryTableProps) {
	return (
		<For
			each={data.filter((table) => props.isTechnical || !table.hiddenInBasic)}
		>
			{(table) => (
				<table class="block max-w-full overflow-x-auto border-collapse text-sm">
					<thead>
						<tr>
							<th scope="col">
								{props.isTechnical ? "Colonne" : "Nom de la donnée"}
							</th>
							<th scope="col">{props.isTechnical ? "Type" : "Format"}</th>
							<th scope="col">Longueur</th>
							<th scope="col">Contraintes</th>
						</tr>
					</thead>
					<tbody>
						<For
							each={table.columns.filter((column) =>
								props.isTechnical
									? !column.hiddenInTechnical
									: !column.hiddenInBasic,
							)}
						>
							{(column) => (
								<tr>
									<td>{props.isTechnical ? column.logical : column.name}</td>
									<td>{props.isTechnical ? column.dbmsType : column.type}</td>
									<td>
										{props.isTechnical
											? column.dbmsLength || "-"
											: column.length || "-"}
									</td>
									<td>
										{props.isTechnical
											? column.dbmsConstraints?.join(", ") || "-"
											: column.constraints?.join(", ") || "-"}
									</td>
								</tr>
							)}
						</For>
					</tbody>
					<tfoot>
						<tr>
							<td class="text-left">
								<strong>{props.isTechnical ? "Table" : "Document"}</strong>
							</td>
							<td colSpan={3} class="text-left">
								{props.isTechnical ? table.tableName : table.documentName}
							</td>
						</tr>
						{props.isTechnical && (
							<tr>
								{table.primaryKeys && table.primaryKeys.length > 0 && (
									<>
										<td class="text-left">
											<strong>Clé primaire</strong>
										</td>
										<td class="text-left">({table.primaryKeys.join(", ")})</td>
									</>
								)}
								{table.foreignKeys && table.foreignKeys.length > 0 && (
									<>
										<td class="text-left">
											<strong>Clé(s) étrangère(s)</strong>
										</td>
										<td class="text-left">{table.foreignKeys.join(", ")}</td>
									</>
								)}
							</tr>
						)}
					</tfoot>
				</table>
			)}
		</For>
	);
}
