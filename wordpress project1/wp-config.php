<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ruyE~~p8N#zz6~4~>#iO=PXt`PEE$ybFgIE*c|e>6VL>+>H7dUaz%X//) F)s*Qb' );
define( 'SECURE_AUTH_KEY',  'j;pKCP.w_2[#FW)59QYGG9+M0g=j@?@Fa_U50~HUpEI}0Z:QDxTUUFFtdmO|Q4Q<' );
define( 'LOGGED_IN_KEY',    'mi8KCX2)hx?(is@DQz#)PSmfaj721/$fna~w.?oy}D.ipB2O:=hMenA9|(>R3QaO' );
define( 'NONCE_KEY',        '_y:&d1TP3E^k=uKj7%@Bw=k[C_1{C6GZb`>8R, sL{OryIQ%acOwM?EKA1|5?J`&' );
define( 'AUTH_SALT',        'YF[[gWn;v D;#$@{r.u8q(ZYG=SNJF~4ie&suEzx3_KxZYgys%Z]eC2_eC]V/Q*B' );
define( 'SECURE_AUTH_SALT', 'oy`7(*$IxbY$uRu!BWWwHd/m@8ri2=X4[`1SA5<JtW{K|5MzA&%qzFDDh-XQ<>;?' );
define( 'LOGGED_IN_SALT',   'a[2Xs]$bq;w.zUc^4&yrHYOV:)~5ojih Z2r-(68I6j4;;YON7i+7U=IQH50bL@N' );
define( 'NONCE_SALT',       '3TTy4)vz12L03I%+wcT8R0Xbf%}0@3(i(b4cx)tJS;=tf<&=rr<|/:KT:(e63J_v' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
