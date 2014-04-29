---
layout: post
title:  "Styling File Inputs Without Going Insane"
date:   2014-02-25 17:10:00
categories: Code
permalink: styling-file-inputs-with-out-going-insane
description: I know there are many examples of how to do this so please feel free express your undying hatred if you so desire. I just need to get this ingrained in my head after feeling quite nagged by it on a recent project. Writing a quick little tutorial is the best way to do that for me. Additionally, share any thoughts on how this could be improved or done differently too. I would love that.
---

Styling File Inputs Without Going Insane 
==========

I know there are many examples of how to do this so please feel free express your undying hatred if you so desire. I just need to get this ingrained in my head after feeling quite nagged by it on a recent project. Writing a quick little tutorial is the best way to do that for me. Additionally, share any thoughts on how this could be improved or done differently too. I would love that.



HTML
----------

{% highlight html%}
<input name="file" type="file">
{% endhighlight %}

SCSS
----------

{% highlight scss %}
input[type="file"] {
  color: transparent; 
  position: relative;
  -webkit-user-select: none;
  &::-webkit-file-upload-button {
    visibility: hidden
  }
  &:before {
    color: #999;
    content: 'Upload Image';
    position: absolute;
    left: 20px;
  }
  &:after {
    color: #CCC;
    content: "\f030";
    font-family: 'FontAwesome';
    position: absolute;
    right: 20px;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid #999;
    &:before {
      color: #999;
    }
  }
  &:focus {
    outline: 0;
  }
}
{% endhighlight %}

Result
----------
<input name="file" type="file">

I'm using [Font Awesome](http://fontawesome.io) for the camera icon if you couldn't tell by looking at the code and I'm not sure how well it will work with other icon fonts but I have a feeling the approach should be similar for other ones like [Entypo](http://www.entypo.com/). [Symbol Set](http://symbolset.com/) I know is a bit different but not much. It actually requires a bit less code which is nice. The only important thing to remember is the power of the :before and :after pseudo-selectors. They dope.

Feel free to post any thoughts, questions, critique, etc. Thanks for reading.
