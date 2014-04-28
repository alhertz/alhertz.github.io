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

<!-- Before I get down to business, let me preface this post with a quick story. The first real [Hackathon] (http://codemkrs.com/superbowl/) I ever attended was only about a year ago and man was I green behind the ears. I had used frontend frameworks before, and played around with version control using git but overall I was completely in the dark. I didn't know what the hell languages like node, ruby, python, etc were and the only thing I knew of PHP was what I knew from Wordpress. Shit man, at the time, I thought because I knew how to build a wordpress site that I was a PHP developer. I had a lot to learn.

Needless to say, the hackathon blew my mind and I learned a lot. Out of all the awesome I left with after that weekend, the thing that stuck with me most was that when it comes to building products and/or applications the devil really is in the detail. -->

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