--- 
title: Keeping gh-pages in sync with your master branch
layout: post
tags: 
  - Jekyll
  - Github
---

I always find it frustrating to constintly do a pull request between my `master` and `gh-pages` branches. However now thanks to a [StackOverflow](http://stackoverflow.com/questions/5807459/github-mirroring-gh-pages-to-master#answer-7472481) post from denbuzze there is a really simple tool.

Typically you would do the following:

	git checkout gh-pages
	git merge master
	git push origin gh-pages

However if you add the following to the end of your `.git/config` file in your local repository. This will happen automatically.

	push = +refs/heads/master:refs/heads/gh-pages
	push = +refs/heads/master:refs/heads/master

Note: This will only work if you use `git push` not `git push origin branchname`