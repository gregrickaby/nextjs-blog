---
title: 'Remove WooCommerce Styles and Scripts'
date: '2013-05-19'
excerpt: ''
category:
  - 'code'
tags:
  - 'wordpress'
  - 'woocommerce'
coverImage: '/assets/blog/images/generic.jpg'
author:
  name: 'Greg Rickaby'
  picture: '/assets/blog/authors/greg.jpg'
ogImage:
  url: '/assets/blog/images/generic.jpg'
---

[WooCommerce](http://www.woothemes.com/woocommerce/) is absolutely *the most brilliant and easy-to-use shopping cart for WordPress* - but it's heavy! I'll show you how to remove the cruft!

## **Option 1**: Use a filter

There are a couple of ways to do this. The easiest is to remove the three primary stylesheets using a simple filter in `functions.php`

```
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );
```

## **Option 2**: A bit more control

If you want fine grain control over what appears where, then this function uses a conditional tag to dequeue styles and scripts.

```
/**
 * Manage WooCommerce styles and scripts.
 */
function grd_woocommerce_script_cleaner() {

	// Remove the generator tag
	remove_action( 'wp_head', array( $GLOBALS['woocommerce'], 'generator' ) );

	// Unless we're in the store, remove all the cruft!
	if ( ! is_woocommerce() && ! is_cart() && ! is_checkout() ) {
		wp_dequeue_style( 'woocommerce_frontend_styles' );
		wp_dequeue_style( 'woocommerce-general');
		wp_dequeue_style( 'woocommerce-layout' );
		wp_dequeue_style( 'woocommerce-smallscreen' );
		wp_dequeue_style( 'woocommerce_fancybox_styles' );
		wp_dequeue_style( 'woocommerce_chosen_styles' );
		wp_dequeue_style( 'woocommerce_prettyPhoto_css' );
		wp_dequeue_script( 'selectWoo' );
		wp_deregister_script( 'selectWoo' );
		wp_dequeue_script( 'wc-add-payment-method' );
		wp_dequeue_script( 'wc-lost-password' );
		wp_dequeue_script( 'wc_price_slider' );
		wp_dequeue_script( 'wc-single-product' );
		wp_dequeue_script( 'wc-add-to-cart' );
		wp_dequeue_script( 'wc-cart-fragments' );
		wp_dequeue_script( 'wc-credit-card-form' );
		wp_dequeue_script( 'wc-checkout' );
		wp_dequeue_script( 'wc-add-to-cart-variation' );
		wp_dequeue_script( 'wc-single-product' );
		wp_dequeue_script( 'wc-cart' );
		wp_dequeue_script( 'wc-chosen' );
		wp_dequeue_script( 'woocommerce' );
		wp_dequeue_script( 'prettyPhoto' );
		wp_dequeue_script( 'prettyPhoto-init' );
		wp_dequeue_script( 'jquery-blockui' );
		wp_dequeue_script( 'jquery-placeholder' );
		wp_dequeue_script( 'jquery-payment' );
		wp_dequeue_script( 'fancybox' );
		wp_dequeue_script( 'jqueryui' );
	}
}
add_action( 'wp_enqueue_scripts', 'grd_woocommerce_script_cleaner', 99 );
```

## **Option 3**: Nuke it

Kill all the things, forever. You'll write your own styles, because you're a fucking ninja.

```
/**
 * Remove all WooCommerce scripts and styles! Forever!
 */
function grd_remove_woocommerce_styles_scripts() {
	remove_action( 'wp_head', array( $GLOBALS['woocommerce'], 'generator' ) );
	remove_action( 'wp_enqueue_scripts', array( $GLOBALS['woocommerce'], 'frontend_scripts' ) );
}
define( 'WOOCOMMERCE_USE_CSS', false );
add_action( 'init', 'grd_remove_woocommerce_styles_scripts', 99 );
```

**Further reading:**

WooCommerce [has a page](http://docs.woothemes.com/document/disable-the-default-stylesheet/) dedicated for style & script management. Also, take a look at the [PHP Class](http://docs.woothemes.com/wc-apidocs/source-class-WC_Frontend_Scripts.html) responsible for enqueuing styles and scripts.

_Thanks to everyone who's suggested things in the comments. Peer code-review is amazing, and it's why I share this stuff._
