---
layout: post
title: The Sound of Twitter
---

Twitter is based solely around sending text based messages to each other. However what if we could change this and interpret the text as sound?

This thought inspired our latest hack-a-thon project. Alongside <a href="http://twitter.com/maxtillich">@maxtillich</a> and <a href="http://twitter.com/aguming">@aguming</a>. We decided to use <a href="http://datasift.com">DataSift</a> to measure the sentiment of users and assign sounds based on how happy or sad a user is.


<h2>HTML5 Audio</h2>


I've been itching to use the new <code>&lt;audio&gt;</code> tag in HTML5 and it's finally gotten support in most of the major browsers. Using <a href="http://twitter.com/aguming">@aguming</a> music skills we created 12 different sounds to reflect each of the different moods we can determine. We then listen into DataSift and measure the average sentiment every 500 milliseconds and play the correct sound.

What we get is a slightly surreal experience of how twitter sounds.

What we have produced was about 24 hours of work, and made a brief introduction to the sound of Twitter. 

This project is available on <a href="https://github.com/datasift/Sound-of-Twitter">Github</a>

UPDATE - <a href="http://thelisteningmachine.org/">The Listening Machine</a> explores this idea more fully but is not associated with this project.


<!--<iframe width="640" height="360" src="https://www.youtube.com/embed/z1glJZZCEUQ?rel=0" frameborder="0">    </iframe>-->