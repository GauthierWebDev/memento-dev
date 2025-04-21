import { Snippet } from "@/components/Snippet";

const bashPgCronFileSnippets = [
	{
		name: "pg_cron.sh",
		codeLanguage: "bash",
		withLineNumbers: true,
		code: `#!/bin/bash

# Variables
DB_USER="user"
DB_NAME="database"
BACKUP_DIR="/path/to/backup"
DATE=$(date +"%Y%m%d%H%M%S")

# Création du répertoire de sauvegarde
mkdir -p $BACKUP_DIR

# Sauvegarde de la base de données
pg_dump -U $DB_USER $DB_NAME > $BACKUP_DIR/$DB_NAME-$DATE.sql`,
	},
];

const bashPgCronRegisterSnippets = [
	{
		name: "pg_cron_register.sh",
		codeLanguage: "bash",
		withLineNumbers: true,
		code: `# Ouvrir le fichier de tâches cron
crontab -e

# Ajouter la tâche de sauvegarde, toutes les nuits à minuit
0 * * * * /path/to/backup.sh`,
	},
];

export default {
	bashPgCronFile: () => <Snippet snippets={bashPgCronFileSnippets} />,
	bashPgCronRegister: () => <Snippet snippets={bashPgCronRegisterSnippets} />,
};
