---
layout: post
categories: null
published: false
title: "When a month isn't a month"
---

I hate dealing with time, as a client side JS developer I find myself often in conundrums about timezones, months and days. My current problem is dealing with the term 'month' and what a user would expect in certain situations.

As programmers we take the lazy approach to a month, it's typically evaluated to 28 days (4 weeks) because this is the number of weeks we expect in a month, even though it's 4.3 on average.

Take this example;

`2016/03/31 minus one month` There isn't 31 days in Feburary so what would the user expect? In my studies i've concluded that where the date is greater than the number of days reduce to 

Technically a month is never a constant figure, in terms of days, it can be anywhere inbetween 28 days and 31 days. However a lot of programmers get lazy and equate a month to 4 weeks, this is not correct. Take for example the current date 2016/02/10 because we are in a leap year this month has 29 days, in fact this year no month has 28 days.

2016/03/31 - 1 month What does that equate to? There are 31 days in feb so you'll have to default to 2016/02/28
