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
define( 'DB_NAME', 'wordpress_1' );

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
define( 'AUTH_KEY',         '=t*J7o}adZnF0GP>+R$z9DB[P=v7d~)ghvrF>m%}_8S).3EC0:Z7XRenyab;GD*=' );
define( 'SECURE_AUTH_KEY',  'Q1uKq9e.[7!Z{M#`Q}McMc}ENq};-f&i{q1=|BLEsf.X`j]FYYVN])!D1J]e7;|H' );
define( 'LOGGED_IN_KEY',    '(fI&]6%L1m)jIUQJ%(hE5i#C:$SWEU4pUp_{YlD|=~$ARFq)juJg1eR>DhCM~foC' );
define( 'NONCE_KEY',        'zf0i5HP[s$qjEhg^NVIQAHR52s8Xq]C-[zHfeZcP^k+M`G^y=dbYEoYwlalVCku:' );
define( 'AUTH_SALT',        'gecD[QU.F.kbei(BsFFZ4-NCAVirNy`r6_e_a@~u(85]fCo%A`LOoj*A%~ K%Cb2' );
define( 'SECURE_AUTH_SALT', '*GBa=Ys,*6>!H024-h&={TjYY!l($=%g+<Gd0Y3@7I~gL&=R]]cq)8V/i(H|5/XJ' );
define( 'LOGGED_IN_SALT',   ')X$luFE:.L)mZ6dhw_jJxC8&F4! ;~l.9*gZ<eXp2chYPXDRWn:-CT!Uedbo_9>|' );
define( 'NONCE_SALT',       'qMI5-*Eht6&ppzZG*D<z]U?IUL>p_P*w)/rH-c6O{.NR{o)oPih7lS:oW~+Ce^xj' );

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
