#!/bin/sh

WORKING_DIR=/var/www/html
docker-compose exec wordpress apt-get update
docker-compose exec wordpress apt-get install mariadb-client -y
docker-compose exec wordpress cp -R $WORKING_DIR/wp-content/themes/hello-elementor/scripts $WORKING_DIR
docker-compose exec wordpress $WORKING_DIR/scripts/wp-cli.phar db drop --yes --allow-root
docker-compose exec wordpress $WORKING_DIR/scripts/wp-cli.phar db create --allow-root

docker-compose exec wordpress $WORKING_DIR/scripts/wp-cli.phar db import $WORKING_DIR/wp-content/themes/hello-elementor/database/db.sql --allow-root


docker-compose exec wordpress $WORKING_DIR/scripts/wp-cli.phar search-replace  'estudiofrontier.com' 'localhost'   --allow-root
docker-compose exec wordpress $WORKING_DIR/scripts/wp-cli.phar elementor replace_urls 'https://estudiofrontier.com' 'http://localhost'    --allow-root
docker-compose exec wordpress $WORKING_DIR/scripts/wp-cli.phar search-replace 'http://estudiofrontier.com' 'https://estudiofrontier.com'   --allow-root
docker-compose exec wordpress $WORKING_DIR/scripts/wp-cli.phar elementor replace_urls 'http://estudiofrontier.com'  'https://estudiofrontier.com'   --allow-root

