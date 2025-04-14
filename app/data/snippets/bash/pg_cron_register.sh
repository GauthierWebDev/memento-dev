# Ouvrir le fichier de tâches cron
crontab -e

# Ajouter la tâche de sauvegarde, toutes les nuits à minuit
0 * * * * /path/to/backup.sh