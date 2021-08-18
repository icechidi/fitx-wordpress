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
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'sachin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'sachin' );

/** MySQL hostname */
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
define( 'AUTH_KEY',         'kCO$KUPv#8X=Go};GFozI$&p,W&<^SauDnT$0x Kp|@lL!N*aDqJ>0ctH#d8ifBz' );
define( 'SECURE_AUTH_KEY',  '[^oAu!Jqm%MZTR)Db?4A^=]B 8X0Si6o_RhxZb4TjfC~qDf:KKiAqL]z0Ey}E~1=' );
define( 'LOGGED_IN_KEY',    'W41hyr4.n>k$ g#P$;e*y({&VSyoK@2~l^5OU{Dcs[%hf@FGl&mq]bcFggN@ aBR' );
define( 'NONCE_KEY',        ' sOv=X{eK^rj1DL);]A8vl1~`gP!#2oSxlXaeyo;4-xp6_~/VZMRiVLu#i}f%-[]' );
define( 'AUTH_SALT',        's4UX]g;xX._pb~(<fkFpUjL=YX~dG]]Z@.E.l_s&A6U/{5u~nJXh=>*x8rM]$Kh$' );
define( 'SECURE_AUTH_SALT', 'x7bvJ2Sj}Z]A#dfrC3)p~wK.3*<~RV+YrJ:l3r,XR m;Oe^Q/&_i,Y=UTQS:fU7K' );
define( 'LOGGED_IN_SALT',   'plpCx7ligv0=G6Ez#@ A{J+(G/.Y]_8c?,p6qU^GC3Nu}//0BE@CoHA4FCE:.rjr' );
define( 'NONCE_SALT',       'gf6bow]s5w[JRs7^qpDY]6dw3I,iiszBby6@ij3`H~GB2Cm5{38:%ahFL[0d1hQV' );

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
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
