---
title: U.S. Presidental Debates
date: 2012-10-25 00:00:00 Z
tags:
- Data Art
- Visulisation
- JavaScript
- DataSift
- Presidents
- Obama
- Romney
layout: post
---

<p style="font-size: 14px; text-align: center;"><em><a href="http://election.datasift.com">http://election.datasift.com</a></em></p>

The us presidential election is just around the corner. in the run up to the election there is a great deal of focus on the live debates. two debates based upon a different range of topics. this is very unfamiar to us in the uk we have only recently adopted televised live debates in the 2010 election.The past three years have just flown by but it looks like its another U.S. presential election.

To prove how versatile datasift can be the marketing & data science teams commissioned me to create something users can see the impact of the live debates on the general population through the use of Twitter.

To this end we developed a micro site of datasift.com which details a variety of information we are able to gather about what people talk about around the elections and make predictions on how we think people will vote. We are able to do this even down to a city level.

<h3><span>Node == real time</span></h3>

The major requirement of the site was to display the information we gather live to the user as the debates are happening. We are able to do this using Node.js and a client based websocket connection. This is the first time I have used node.js in production, it worked very well and managed to stay up dispite both a large number of requests and a large amount of data to be processed from DataSift.

The graphs and visualisations where written with the help of D3.js a fantastic framework which helps with the manipulation of SVG elements which in turn allows us to customise the design.

<img class="last" src="/assets/images/posts/election.png" alt="election.datasift.com" />