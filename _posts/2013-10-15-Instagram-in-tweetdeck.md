--- 
title: Instagram in Tweetdeck
layout: post
categories: JavaScript
---

**Update** - Just released a new version which supports Instagram videos.

As Instagram increases in popularity I've been getting more and more annoyed with the lack of support for Instagram within Tweetdeck. So i've decided to finally put an end to it and write a little JavaScript plugin using [tampermonkey](http://tampermonkey.net/) to automatically show a thumbnail for instagram URL's. This will only currently work on web.tweetdeck.com but please feel free to modify and edit the plugin.

<img src="/images/posts/instagram.png" alt="Instagram videos in Tweetdeck"/>

View the [Gist](https://gist.github.com/dtsn/6866575).

{% highlight javascript %}
// ==UserScript==
// @name           TweetDeck Instagram
// @description    Adds instagram to Tweetdeck
// @include        https://web.tweetdeck.com/*
// @version        0.1
// ==/UserScript==

var func = function () {

	var Instagram = function () {
		this.links = [];
	};

	Instagram.prototype.add = function (url, element) {

		if (this.links.indexOf(url) !== -1) {
			// already done this link
			return;
		}
		this.links.push(url);

		var script = document.createElement('script'),
			// create a random callback
			callback = 'instagram_' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

		// add the url
		script.src = 'https://api.instagram.com/oembed?url=' + url + '&callback=' + callback;

		// append the script
		document.head.appendChild(script);

		// create the callback on the window object since this is annoyomoused 
		window[callback] = function (res) {
			var img = document.createElement('img');
			img.src = res.url;
			img.width = "230";
            img.style.marginTop = "10px";
			this.insertBefore(img);
		}.bind(element);
	};

	
	var instagram = new Instagram();

	var poll = function () {
		var nodes = document.getElementsByTagName('a');
		for (var i = 0; i < nodes.length; i++) {
			if (nodes[i].innerHTML.indexOf('instagram.com') !== -1) {
				instagram.add(nodes[i].innerHTML, nodes[i]);
			}
		}
	};

	setInterval(poll, 1000);
};

var script = document.createElement("script");
script.textContent = "(" + func.toString() + ")();";
document.body.appendChild(script);
{% endhighlight %}

This plugin is really simple we are first searching all the links in the page for anything which mentions `instagram`. Once we have a link we are hitting the JSONP API of Instagram to fetch the image and insert it directly into Tweetdeck.

<h3><span>Installation</span></h3>
To install first install the browser extension [tampermonkey](http://tampermonkey.net/). Once installed create a new script, copy and paste the code in above. Make sure you enable the script and there you go.
