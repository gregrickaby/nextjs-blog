---
title: '301 Redirects with .htaccess'
date: '2013-05-21'
slug: '301-redirects-with-htaccess'
excerpt: ''
category:
  - 'code'
tags:
  - 'apache'
  - 'servers'
coverImage: '/assets/blog/images/generic.jpg'
author:
  name: 'Greg Rickaby'
  picture: '/assets/blog/authors/greg.jpg'
ogImage:
  url: '/assets/blog/images/generic.jpg'
---

After I dumped my database and blew up my site, I wanted to resurrect my most popular content. I needed to setup 301 redirects so both users and Google could find my (old) content in its (new) location.

The structure looks like this:

![301-redirect-instructions](images/301-redirect-instructions.png)

Redirect an entire website:

```
Redirect 301 / http://new-url.com
```

Redirect an old permalink:

```
Redirect 301 /2011/02/old.html http://new-url.com/same-content-new-permalink/
```

Redirect WordPress local development uploads, to dev/prod server:

```
RedirectMatch 301 ^/wp-content/uploads/(.*) http://mylivesite.com/wp-content/uploads/$1
```

You could also leverage WordPress and a quick function:

```
/**
 * Force old permalinks to a new page.
 */
function grd_301_redirect() {
	// Get the URL.
	$url = untrailingslashit( 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] );
	// Redirect to the correct page!
	if ( is_404() && ( false !== strpos( $url, 'old-page-url' ) ) ) {
		wp_redirect( 'https://new-url.com/new-page-url', 301 );
	}
}
add_action( 'template_redirect', 'grd_301_redirect' );
```
