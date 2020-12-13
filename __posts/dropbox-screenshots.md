---
title: 'Use Dropbox to take and share screenshots'
date: '2014-01-08'
slug: 'dropbox-screenshots'
excerpt: ''
category:
  - 'code'
tags:
  - 'macos'
  - 'dropbox'
coverImage: '/assets/blog/images/generic.jpg'
author:
  name: 'Greg Rickaby'
  picture: '/assets/blog/authors/greg.jpg'
ogImage:
  url: '/assets/blog/images/generic.jpg'
---

Did you know you can use Dropbox to take and share screenshots? You can and it's as easy as enabling the option.

### 1) Turn on Dropbox screenshot sharing

Open Dropbox settings, and enable "Share screenshots using Dropbox".

[![Screenshot 2014-01-08 11.27.14](images/Screenshot-2014-01-08-11.27.14.png)](https://gregrickaby.com/wp-content/uploads/2014/01/Screenshot-2014-01-08-11.27.14.png)

### 2) Take a screenshot

Now it's time to use a keyboard shortcut to take a screenshot. Don't worry, after a few times this will become second nature!

**MacOS**
`CMD + SHIFT + 4` - captures a selected area
`CMD + SHIFT + 3` - captures the whole desktop

**Windows**
`ALT + PRINTSCREEN` - captures the active windows
`CONTROL + PRINTSCREEN` - captures the whole desktop

### 3) Share the screenshot

Dropbox automatically copies the screenshot URL to your clipboard and gives you a notification:

![Screenshot 2014-01-08 11.32.30](images/Screenshot-2014-01-08-11.32.30-300x96.png)

All you need to do is paste the URL!

### **Troubleshooting**

`CMD + SHIFT + 4` not working on your Mac?

Open "System Preferences" and navigation to "Keyboard" and then "Shortcuts". Enable all the options.

[![Screenshot 2014-01-08 11.42.36](images/Screenshot-2014-01-08-11.42.36.png)](https://gregrickaby.com/wp-content/uploads/2014/01/Screenshot-2014-01-08-11.42.36.png)

**Screenshots saving to your desktop instead of Dropbox?**

Sometimes the default directory for screenshots gets changed to your desktop. We can change the directory using the terminal. Open terminal and type the following:

```
$ defaults write com.apple.screencapture location /Users/yourname/Dropbox/Screenshots/
```

Now restart the system UI:

```
$ killall SystemUIServer
```