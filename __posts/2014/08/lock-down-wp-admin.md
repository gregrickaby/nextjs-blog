---
title: 'Lock down the WordPress Dashboard'
date: '2014-08-31'
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

Because of the recent increase in attacks on WordPress, we were recently chatting about locking down `/wp-admin` and `wp-login.php`.

We discussed the [Limit Login Attempts](http://wordpress.org/plugins/limit-login-attempts/) plugin, which works really well. If a user fails to login after a certain amount of attempts, they are blacklisted for a period of time. But what if we did more?

## .htaccess

You could use `.htaccess` to **deny all traffic (except ours) based on IP address**. The code to "deny all" is pretty simple and easy to implement. Simply drop the snippet below into `.htaccess`_,_ and _change the IP address to yours._

This will block anyone from accessing both `wp-login.php` AND the WordPress dashboard. Don't worry, if your IP address changes, you can always edit it later using FTP. Here's an example:

```
<IfModule mod_rewrite.c>
RewriteEngine on
RewriteCond %{REQUEST_URI} ^(.*)?wp-login\.php(.*)$ [OR]
RewriteCond %{REQUEST_URI} ^(.*)?wp-admin$
RewriteCond %{REMOTE_ADDR} !^101\.167\.112\.117$
RewriteRule ^(.*)$ - [R=403,L]
</IfModule>

# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```

## Cloudflare

Cloudflare's Firewall is also a great way to lock down the WordPress Dashboard.

[![clouflare firewall settings](images/Screenshot-2019-10-26-13.25.32-1024x735.png)](https://gregrickaby.com/wp-content/uploads/2019/10/Screenshot-2019-10-26-13.25.32.png)