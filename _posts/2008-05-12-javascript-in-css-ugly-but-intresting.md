--- 
title: JavaScript in CSS, Ugly But Interesting
layout: post
---

There is a very little used and unknown method which allows you to utilise JavaScript within a CSS file. The CSS Expression property allows you to assign a JavaScript expression to a CSS property. For example, this allows you to set the position of an element according to the browser size.

{% highlight javascript %}
width:expression(document.body.clientWidth > 950 ? "950px": "100%" );
{% endhighlight %}

__Do not use CSS Expression, they are unreliable, slow and are only supported in IE!__

CSS Expression suddenly came to me as a solution for the currently much debated feature [here](http://www.dave-woods.co.uk/index.php/css-variables/) and [here](http://www.css3.info/new-features-proposed-for-css/) of [variables](http://disruptive-innovations.com/zoo/cssvariables/) in CSS3. This could theoretically be currently achieved through the use of CSS Expressions.

{% highlight javascript %}
function blue() {
	return 'blue';
}
{% endhighlight %}

{% highlight css %}
body { background: expression(blue()); }
{% endhighlight %}

CSS Expressions are horrible and unsupported, so please don't use them in development. They do, however, highlight a interesting and little known feature of CSS.
