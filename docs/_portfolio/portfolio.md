---
permalink: /projects/portfolio.html
layout: post

title: My Portfolio
description: I explore the development process for my website.
tags: [Jekyll, HTML, CSS, Adobe XD, Web Development]
---

{% include image.html type="project" name="full.jpg" class="pc-100 no-side-margin img-center" %}

This website was tough project for me. Unlike the Cellular Automata framework, this site's appearence and layout is quite important. I want to present it and it show my content is readable and asthetic fashion. I couldn't just throw all my content on one page and call it a day. Right from the beginning, I spent some time brainstorming designs and prototyping them in Adobe XD.

## Design Process

{% include image.html type="project" name="prototype.jpg" caption="these are screen-grabs straight from Adobe XD" class="pc-80 no-side-margin img-center" %}

My prototypes (and the final) are really going for a more gallery like experience to view a collection of projects. I felt, when I started, that I didn't have alot of content to show off, so I hesitated giving each project its own page. It forced my designs to cram in images/videos with very little explainations all onto webpage.

{% include video.html type="project" name="carousel.mp4" caption="this was my implementation of the 'carousel' design" class="pc-80 no-side-margin img-center" %}

## Jekyll

This current iteration really unlocked alot of Jekyll's features. By separating projects into their own pages, I've been able to really streamline the process of adding/updating content with markdown files, as opposed to html. It makes adding new projects much more simple.

To add a project, I add a new sub-folder under _assets for the project that contains all the images and videos associated and write a markdown file. Writing the content through markdown is extremely intuitive and completely removes the friction of trying to create content, of dealing with html.

{% include image.html type="project" name="markdown.jpg" caption="look at how easy it is to write new pages" class="pc-80 no-side-margin img-center" %}

## What I Learned

I've worked with HTML and CSS for quite some time now, so I know how to translate what I want into code or can find a solution otherwise, but some of the less black and white concepts of web development (like responsiveness) are little less familar. Those concepts are usually a little more hidden, in that beginners won't find information about them unless they look for it.

Working on this site has exposed me to a lot more concepts that fall into this category that ellude most beginners and intermediate developers. Choosing to use Jekyll was apart of a decision to get away from working with vanilla html, css, JavaScript and streamline development. I wanted it to be easy to update the content of my site, so Jekyll's template system along with the ability to use Liquid allowed me to further separate my content my the layout and style of the site.

I made a conscious effort while developing the site and some work refactoring the code after the fact to really simplify my code. I used Sass to separate my css into different files and organize them. It really helped me make my css more reusable and reduce any redundancies. It also has the nice side effect of making my site a little more lean.