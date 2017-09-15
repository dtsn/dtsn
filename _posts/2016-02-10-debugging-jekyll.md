---
title: Debugging Jekyll
date: 2016-02-10 00:00:00 Z
categories:
- jekyll
layout: post
description: Debugging jekyll using inspect
keywords: jekyll, jekyllrb, debug, debugging
---

**tldr;** - Use `inspect` as a filter, like below;
{% highlight javascript %}
<%= <variable> | inspect %>
{% endhighlight %}

I've recently spent a lot of time within [Jekyll](https://jekyllrb.com/) in the hope that given my site some much need attention will get my blogging again. I was really pleased to find that the `inspect` filter has finally be [implemented in Jekyll](https://github.com/jekyll/jekyll/pull/2867). This has been a long time coming for me, before this I was using `<variable> | json`. However the documentation is pretty sparce.


