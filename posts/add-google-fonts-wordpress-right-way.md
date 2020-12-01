---
title: 'Add Google Fonts to WordPress'
date: '2014-05-30'
---

When using Google Fonts with WordPress, you should NOT use `@import`, nor just place the HTML in the header. Instead use a function and enqueue them.

First, create a function which sets up the Google Fonts...what's more is this function also allows the fonts to be translated.

```
function grd_register_google_fonts() {

	$fonts_url = '';

	/**
	 * Translators: If there are characters in your language that are not
	 * supported by the following, translate this to 'off'. Do not translate
	 * into your own language.
	 */
	$roboto    = esc_html_x( 'on', 'Roboto font: on or off', '_s' );
	$open_sans = esc_html_x( 'on', 'Open Sans font: on or off', '_s' );

	if ( 'off' !== $roboto || 'off' !== $open_sans ) {
		$font_families = array();

		if ( 'off' !== $roboto ) {
			$font_families[] = 'Roboto:400,700';
		}

		if ( 'off' !== $open_sans ) {
			$font_families[] = 'Open Sans:400,300,700';
		}

		$query_args = array(
			'family' => rawurlencode( implode( '|', $font_families ) ),
		);

		$fonts_url = add_query_arg( $query_args, '//fonts.googleapis.com/css' );
	}

	return $fonts_url;
}
```

Finally, enqueue the Google Fonts:

```
function grd_enqueue_google_fonts() {
    wp_enqueue_style( 'theme-slug-fonts', grd_register_google_fonts(), array(), null );
}
add_action( 'wp_enqueue_scripts', 'grd_enqueue_google_fonts' );
```

If you want, you can also add the Google Fonts to the WordPress editor:

```
function grd_editor_styles() {
    add_editor_style( array( 'editor-style.css', grd_register_google_fonts() ) );
}
add_action( 'after_setup_theme', 'grd_editor_styles' );
```
