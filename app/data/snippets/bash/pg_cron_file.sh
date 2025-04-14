#!/bin/bash

# Variables
DB_USER="user"
DB_NAME="database"
BACKUP_DIR="/path/to/backup"
DATE=$(date +"%Y%m%d%H%M%S")

# Création du répertoire de sauvegarde
mkdir -p $BACKUP_DIR

# Sauvegarde de la base de données
pg_dump -U $DB_USER $DB_NAME > $BACKUP_DIR/$DB_NAME-$DATE.sql