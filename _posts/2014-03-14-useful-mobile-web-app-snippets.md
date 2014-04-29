---
layout: post
title:  "Useful Mobile Web App User Experience Sprinkles"
date:   2014-03-14 10:18:50
categories: Thoughts
permalink: useful-mobile-web-app-snippets
description: 
---

Useful Mobile Web App User Experience Sprinkles 
==========

It's the little things that make the biggest differences. That being said, here are some usefull snippets for mobile Apple devices you may want to make sure you're using if you aren't already when building web applications.


Remove Toolbars
----------
{% highlight html%}
<meta name="apple-mobile-web-app-capable" content="yes">
{% endhighlight %}

Change the status bar color
----------
{% highlight html%}
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
{% endhighlight %}

Touch Icon 
----------
{% highlight html%}
<link rel="apple-touch-icon" href="img/app-icon.png"/>
{% endhighlight %}

Splash Screen Image
----------
{% highlight html%}
<link rel="apple-touch-startup-image" href="img/splash-screen.png" />
{% endhighlight %}

**Note:**
These get a lot more verbose but for simplicitys sake, I've included the code a bit abridged. If you want a good example of these snippets en masse, [check out this epic gist] (https://gist.github.com/tfausak/2222823) by Taylor Fausak. 