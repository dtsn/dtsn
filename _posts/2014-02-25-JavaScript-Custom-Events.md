--- 
title: JavaScript Custom Events
layout: post
tags: 
  - JavaScript
  - Events
  - Event
  - CustomEvent
  - dispatchEvent
---

I have been googling around for how to pass custom event data into a JavaScript `Event` object. Turns out you can't what you need to do is to use the realtively new object called `CustomEvent`.

{% highlight javascript %}
var myCustomEvent = new CustomEvent('dtsn', customParam);

function eventHandler(e) {
	// will log out our customParam object
	console.log(e);
};
{% endhighlight %}

You can find out more information on the excellent [MDN custom event page](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events). 