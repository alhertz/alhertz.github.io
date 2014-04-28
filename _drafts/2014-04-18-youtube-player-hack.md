---
layout: post
title:  "A Minimal Music Player Powered by YouTube"
date:   2014-04-18 10:41:50
categories: Hacks
permalink: minimal-music-player-powered-by-youtube
description: 
---

A Minimal Music Player Powered by YouTube
==========

<iframe width="600" height="600" src="//www.youtube-nocookie.com/embed/_-Qpj-bNidA" frameborder="0" allowfullscreen></iframe>


1. Copy and Paste the Existing Embed Code Provided by YouTube & Edit the width and height so that they are the same values</h3>

{% highlight html%}
<iframe width="600" height="600" src="//www.youtube-nocookie.com/embed/_-Qpj-bNidA" frameborder="0" allowfullscreen></iframe>
{% endhighlight %}

2. Remove toolbars, related content, and progress bar by appending the following snippet just after the end of the src link.

{% highlight html %}
?rel=0;3&amp;autohide=1&amp;showinfo=0
{% endhighlight %}
