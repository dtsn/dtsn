---
title: Advanced Tooltips in Trace
---

I was recently given the request to improve the tooltips within [Trace](http://datasift.github.io/trace). In particular have a tooltip when a user hovers at any point in a in line chart.

The problem requires us to interpolate the value at any given point of the graph. The idea about how to do this is to find the current mouse position and covert it into a scale the domain functions will understand. For this talk through I will be focusing on the `x` domain.

We need to calculate 2 values `offsetLeft` of the SVG element, `clientX` of the mouse pointer. This will lead us to the 3rd value of the position of the pointer within the chart.

<img src="/assets/images/posts/tooltips-trace.png" />

I can work out the position of the SVG by working out the position of the DIV which wraps the element. Subtracting this from the mouse position results in the following:

{% highlight javascript %}
var offsetLeft = document.getElementById('your_id').offsetLeft,
    clientX = d3.event.clientX,
    leftValue = clientX - offsetLeft;
{% endhighlight %}

D3 has recently introduced a `domain.invert` function which will take the opposite of the domain and convert it back into a value. This will lead to the following.

{% highlight javascript %}
leftValue = this.xfunc.invert(leftValue + document.body.scrollLeft);
{% endhighlight %}

This will give you the value at the given point. However it won't give you an accurate value, this has a flaw because it's based on the position of the mouse pointer and where the event is fired when it enters the SVG path. Which means it's off by half the width of the path, when a line is vertical. Unfortunately I don't know how to calculate the width of a SVG path at any given point. Any ideas?
