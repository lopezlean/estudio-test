#!/bin/bash
# on mocla server we are in $HOME/www/isb
# nginx virtual host : estudiofrontier.com

WORKING_DIR=$HOME/www

$WORKING_DIR/scripts/wp-cli.phar db drop --yes --allow-root
$WORKING_DIR/scripts/wp-cli.phar db create --allow-root

$WORKING_DIR/scripts/wp-cli.phar db import $WORKING_DIR/wp-content/themes/isb/database/db.sql --allow-root

$WORKING_DIR/scripts/wp-cli.phar search-replace  'estudiofrontier.com' 'localhost'   --allow-root
$WORKING_DIR/scripts/wp-cli.phar elementor replace_urls 'https://estudiofrontier.com' 'http://localhost'    --allow-root
$WORKING_DIR/scripts/wp-cli.phar search-replace 'https://localhost' 'http://localhost'   --allow-root
$WORKING_DIR/scripts/wp-cli.phar elementor replace_urls 'https://localhost'  'http://localhost'   --allow-root
$WORKING_DIR/scripts/wp-cli.phar search-replace 'https://localhost' 'http://localhost'   --allow-root

$WORKING_DIR/scripts/wp-cli.phar theme activate hello-elementor --allow-root
