---
title: 'Filter and clean the Archive Title'
date: '2016-04-13'
slug: 'customize-archive-title'
excerpt: ''
category:
  - 'code'
tags:
  - 'wordpress'
coverImage: '/assets/blog/images/generic.jpg'
author:
  name: 'Greg Rickaby'
  picture: '/assets/blog/authors/greg.jpg'
ogImage:
  url: '/assets/blog/images/generic.jpg'
---

This client wanted to feature their archive titles in a large hero area. The PSD excluded the prefixes like, "Category:", "Tag:", "Author:", etc...

The snippet below allows you to strip out the prefixes used in the [get_the_archive_title();](https://developer.wordpress.org/reference/functions/get_the_archive_title/) function, as well as any HTML tags.

![Screenshot of the clean archive title](images/Screenshot-2016-04-12-10.26.15.jpg)

Screenshot of the "clean" archive title.

[Jeremy Pry](https://twitter.com/JPry) helped me solve this by inserting this [regular expression](https://regex101.com/r/zP2vI9/1) into PHP's `preg_replace();`  function. It executes a find and replace on the `$title` variable.

```
<?php
/**
 * Remove archive title prefixes.
 *
 * @param  string  $title  The archive title from get_the_archive_title();
 * @return string          The cleaned title.
 */
function grd_custom_archive_title( $title ) {
	// Remove any HTML, words, digits, and spaces before the title.
	return preg_replace( '#^[\w\d\s]+:\s*#', '', strip_tags( $title ) );
}
add_filter( 'get_the_archive_title', 'grd_custom_archive_title' );
```