<?php
/**
 * Single Product title
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/title.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.4.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

global $product, $show_rating_below_title;

$stars = '';

if ( ! $product ) {
	return;
}

if ( $show_rating_below_title ) {
	$count   = $product->get_rating_count();
	$average = $product->get_average_rating();

	if ( $count ) {
		$stars = "<div class=\"rating rating-inline filled-" . absint( $average ) . ( $average - intval( $average ) > .49 ? ' and-half' : '' ) . "\" itemprop=\"aggregateRating\" itemscope itemtype=\"http://schema.org/AggregateRating\" title=\"" . sprintf( __( 'Rated %s out of 5', 'woocommerce' ), $average ) . "\">

		<span class=\"glyphicon glyphicon-star star-1\"></span>
		<span class=\"glyphicon glyphicon-star star-2\"></span>
		<span class=\"glyphicon glyphicon-star star-3\"></span>
		<span class=\"glyphicon glyphicon-star star-4\"></span>
		<span class=\"glyphicon glyphicon-star star-5\"></span>

	</div>";
	}
}
?>

    <h1 itemprop="name" class="product_title entry-title"><?php echo esc_html( get_the_title() ); ?></h1>

<?php if ( get_data( 'shop_single_product_category' ) ): ?>

	<?php echo wc_get_product_category_list( $product->get_id(), ', ', '<span class="posted_in">', $stars . '</span>' ); ?>

<?php else: ?>

    <br/>

<?php endif; ?>