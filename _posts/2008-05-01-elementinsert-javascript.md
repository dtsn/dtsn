---
title: Prototype Element.Insert
date: 2008-05-01 00:00:00 Z
tags:
- prototypejs
- javascript
- element.insert
layout: post
---

[Prototype](http://www.prototypejs.org) has a very useful function which is not well documented, [Element.inset](http://www.prototypejs.org/api/element/insert). Element.insert is a very powerful prototype function which lets you insert a element in one of 4 positions, <em>before, after, top, bottom</em> of an element.

If we wanted to insert an element after a element we would use this code:

{% highlight javascript %}
Element.insert(first-element, {
	top: content
});
{% endhighlight %}

Expanding this further:

{% highlight javascript %}
// lets create our element
var dummy = new Element('div').update('Hello World');
// add the element
Element.insert($('hook'), {
	after: dummy
});
{% endhighlight %}

_Where hook is the element we want before our created element_

This code will add our Hello World text after the div with the id of hook.