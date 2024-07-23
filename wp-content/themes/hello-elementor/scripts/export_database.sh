#!/bin/sh

docker-compose exec db mysqldump -u wordpress -pwordpress wordpress --no-tablespaces > database/db.sql
