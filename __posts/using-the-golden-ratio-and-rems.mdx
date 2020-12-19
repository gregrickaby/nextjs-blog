---
title: "Web Typography: Using The Golden Ratio and REM's"
date: '2013-05-19'
slug: 'using-the-golden-ratio-and-rems'
excerpt: ''
category:
  - 'code'
tags:
  - 'typography'
coverImage: '/assets/blog/images/generic.jpg'
author:
  name: 'Greg Rickaby'
  picture: '/assets/blog/authors/greg.jpg'
ogImage:
  url: '/assets/blog/images/generic.jpg'
---

When WordPress 3.5 beta 1 was released it came with, ["Twenty Twelve"](http://wordpress.org/extend/themes/twentytwelve). While looking at [style.css](http://core.trac.wordpress.org/browser/trunk/wp-content/themes/twentytwelve/style.css), I noticed the use of "REM" to set font sizes and margins. I had NO idea what an REM was. In fact, I just started using EM's in other child-themes. Immediately, I turned to Google and started researching.

## I thought REM was a band?

By definition, the [REM unit](http://www.w3.org/TR/css3-values/#rem-unit) is: *"Equal to the computed value of ‘font-size’ on the root element. When specified on the ‘font-size’ property of the root element, the ‘rem’ units refer to the property's initial value.*"

**TL;DR** The REM is one of the newest font-size standards for CSS3. It stands for "Root EM". You base your calculation on the _default font-size of the HTML element_ - NOT the parent like EM. **It's basically "EM v2.0".**

## So what?

The problem with Pixels are, they absolutely do-not-scale in Internet Explorer. Furthermore, with the onset of Responsive Web Design, having fonts that scale (in relation to the screen width) has become paramount. Percentages (%) and EM's are better, but they're tricky and compound. Still not an answer. A real solution?

## Use the REM

First you need to set a default "root" font-size variable:

```
html {
    font-size: 62.5%
}
```

_Why 62.5% instead of 100%?_ Simplicity.

Our default font is now 10px, which makes math easier. Now, 1.0rem = 10px. This becomes our **$rembase**.

Calculate other font sizes by dividing your desired size by the `$rembase` (in pixels). Let's say, you want your `<h1>` tags to be 26px?

```
26 ÷ 10 = 2.6rem
```

or

```
32 ÷ 10 = 3.2rem
48 ÷ 10 = 4.8rem
```

and so on...Let's take a look at a sample Stylesheet:

```
/* $rembase = 10px */

html {
    font-size: 62.5%;
}

body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 1.0rem; /* 10 ÷ $rembase */
}

h1,
h2 {
    font-size: 2.6rem; /* 26 ÷ $rembase */
}

h3,
h4 {
    font-size: 1.8rem; /* 18 ÷ $rembase */
}
```

That looks simple enough right? Just move the decimal. Now your fonts will scale perfectly during a browser re-size (if using responsive design), or if a user were to zoom in or out.

## But what about Line Height?

Line heights have always given me headaches, that was until Chris Pearson released his _Golden Ratio Typography Calculator_. Now, figuring out line heights (among other settings) is a snap.

1. Input your desired font size (16px)
2. Specify how wide your content box is (mine is 740px)
3. Click "Set my type!"

[The Golden Ratio Typography Calculator](http://www.pearsonified.com/typography/) spits out optimized typography values:

[![pearsons-golden-ratio-tool](images/pearsons-golden-ratio-tool.jpg)](http://www.pearsonified.com/typography/)

The calculator tells us our default line height should be 26px. This variable is the **$line-height-base.**

We're going to be using "[Unitless line heights](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/)" as explained by Eric Meyer, so we can avoid unexpected results. What's so awesome about the unitless line height? You only have to specify it once in the <body> tag. Now, ALL other line height(s) are relative to the parent font-size. That's too easy! (Of course, you can still specify your own to maintain complete control.)

To calculate, you divide the **$line-height-base** by the font-size for that particular element (in pixels).

```
26 ÷ 16 = 1.625
```

How would that look in our sample style-sheet?

```
/*
$fontbase = 16
$line-height-base = 26
*/

html {
    font-size: 62.5%;
}

body {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 1.625; /* $line-height-base ÷ $fontbase */
}

h1,
h2 {
    font-size: 2.6rem;
    line-height: 1; /* $line-height-base ÷ 26 */
}

h3,
h4 {
    font-size: 1.8rem;
    line-height: 1.444 /* $line-height-base ÷ 18 */
}
```

_Note: We'll only use three decimal places to right since most browsers only calculate that far._

## What about margins?

Yes, you can even use REM to set your margins. Margins, or "vertical spacing" is calculated using either 24px or 48px to maintain vertical rhythm. Let's divide 24px by our `$rembase:`

```
24 ÷ 10 = 2.4rem
```

Here's our sample stylesheet:

```
/*
$rembase = 10
$line-height-base = 26
*/

.some-div {
     margin: 2.4rem 0; /* 24 ÷ $rembase */
}

.another-div {
    padding: 4.8rem; /* 48 ÷ $rembase */
    margin-bottom: 2.4rem; /* 24 ÷ $rembase */
}
```

## I'm convinced, now tell me about browser support.

At the time of writing: REM's are supported in Firefox, Chrome, Safari, Opera and yes, even IE 9 & 10. It's also supported in all mobile browsers except for Opera Mini.

Check out this list: [http://caniuse.com/rem](http://caniuse.com/rem)

## What about fallbacks?

As is the case with most CSS3 wizardry, REM support in IE 6, 7, and 8 is lacking and will require a PX fallback. By declaring REM's after PX's in the CSS this example  will degrade gracefully to the PX:

```
html {
    font-size: 62.5;
}

body {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.625;
}

h1,
h2 {
    font-size: 26px;
    font-size: 2.6rem;
}

h3,
h4 {
    font-size: 18px;
    font-size: 1.8rem;
    line-height: 1.444;
}

.some-div {
     margin: 24px 0;
     margin: 2.4rem 0;
}
```

The purpose of this post was not to stand on a soapbox and preach, but educate you on the advantages of using REM's to enhance the typography on your site. Your comments are welcome below.

### PX to REM Sass Mixin

```
// Create REM values with PX fall back
//
// Generate a REM with PX fallback from
// $baseFontSize. Enter the desired size based
// on pixels in numerical form. Supports shorthand.
//
// Forked from: http://codepen.io/thejameskyle/pen/JmBjc
//
// @author Greg Rickaby
// @since 1.0
//
// Usage: @include rem($property, $values);
// Example Usage:
//    @include rem(font-size, 16px);
//    @include rem(margin, 0 24px 0 12px);
//
// Outputs:
//    font-size: 16px;
//    font-size: 1.6rem;
//    margin: 0 24px 0 12px;
//    margin: 0 2.4rem 0 1.2rem;
// ----------------------------------
$baseFontSize: 10; // Based on HTML reset html { font-size: 62.5%; }

@function parseInt($n) {
  @return $n / ($n * 0 + 1);
}

@mixin rem($property, $values) {
	$px : ();
	$rem: ();

	$root: $baseFontSize;

	@each $value in $values {
		@if $value == 0 or $value == auto {
			$px : append($px , $value);
			$rem: append($rem, $value);
		}

		@else if type-of($value) == number {
			$unit: unit($value);
			$val: parseInt($value);

			@if $unit == "px" {
				$px : append($px,  $value);
				$rem: append($rem, ($val / $root + rem));
			}

			@if $unit == "rem" {
				$px : append($px,  ($val * $root + px));
				$rem: append($rem, $value);
			}
		}

		@else {
			$px : append($px,  $value);
			$rem: append($rem, $value);
		}
	}

	@if $px == $rem {
		#{$property}: $px;
	} @else {
		#{$property}: $px;
		#{$property}: $rem;
	}
}

@function rem($value) {
	$root: $baseFontSize;
	$val: parseInt($value);
	$return: ();

	@if unit($value) == "px" {
		$return: append($return, ($val / $root + rem));
	} @else {
		$return: append($return, ($val * $root + px));
	}

	@return $return;
}
```

### Further reading

https://www.youtube.com/watch?v=XbU-i1SE5JY

- [http://snook.ca/archives/html_and_css/font-size-with-rem](http://snook.ca/archives/html_and_css/font-size-with-rem)
- [http://blog.typekit.com/2011/11/09/type-study-sizing-the-legible-letter/](http://blog.typekit.com/2011/11/09/type-study-sizing-the-legible-letter/)
- [http://jsbin.com/acide4/8](http://jsbin.com/acide4/8)
- [http://offroadcode.com/prototypes/rem-calculator/](http://offroadcode.com/prototypes/rem-calculator/)
