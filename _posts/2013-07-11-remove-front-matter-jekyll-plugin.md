--- 
title: Remove Front Matter in Jekyll Includes
layout: post
tags:
  - Jekyll
---

I'm working on a few Jekyll plugins which use front matter in include files to define template options. The problem is that front matter isn't automatically excluded from files in the /_include directory. So I've written a little plugin which will remove it from the file.

{% highlight ruby %}
module Jekyll
	module RemoveFrontMatterFilter
		def removefrontmatter input
			# find the first
			first = input.index("---")
			if (first == nil) 
				input
			end

			# find the second
			second = input.index("---", first + 1)
			if (second == nil)
				input
			end

			#{}"First: #{first} Second: #{second}"

			#strip the string
			input[first..second + 2] = ''
			#return input
			input
		end
	end
end
Liquid::Template.register_filter Jekyll::RemoveFrontMatterFilter
{% endhighlight %} 

Use use it as follows:

{% highlight html %}
{% raw %}
{% capture includedfile %}
	{% include includedfile.html %}
{% endcapture %}
{{ includedfile | removefrontmatter }}
{% endraw %}
{% endhighlight %}