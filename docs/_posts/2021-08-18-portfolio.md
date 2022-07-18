---
title: My Portfolio
description: I explore the development process for my website.
tags: [Jekyll, HTML, CSS, Adobe XD, Web Development]
---

{% include image.html type="post" name="full.jpg" class="pc-100 no-side-margin img-center" %}

This website was a very different project for me. From the beginng, I knew there were two important factors to keep in mind: the aesthetics and maintainability. I couldn't throw all of my content on a single page and call it a day. I used Adobe XD to design several prototypes before beginning any coding. It was immensly helpful to keep myself on track as I built the site. I could look back at my designs to remind myself the goals of my chosen design and what it should look like. I also had to design my site with longevity in mind. I wanted it to be easy to update the content and tweak the styles of each page. I chose to use Jekyll because I could easily add new content in the form of markdown files and utilize SCSS to organize my CSS in a more modular fashion.

## Design Process

{% include image.html type="post" name="prototype.jpg" caption="these are screen-grabs straight from Adobe XD" class="pc-80 no-side-margin img-center" %}

I knew from the beginning the site should be a gallery of projects. However when I began, I felt I did not have much to show for. I felt my current works were insignificant and too few. I way overthought and overengineered my designs, specifically the carousel idea as you can see below. I tried to compensate for this insecurity by creating a more unique design and functionality, but it simply was not worth it. The design was less intuitive to interact with and crammed too many elements in a small space. It was simply overwhelming to view.

As I continued to work on other projects, I was able to realize this issue and overcome this insecurity. I moved towards a minimialist design that was much easier to interact with and read. This has also had the pleasant side effect of leaning into Jekyll's layout system for a much stronger maintainability.

{% include video.html type="post" name="carousel.mp4" caption="this was my implementation of the 'carousel' design" class="pc-80 no-side-margin img-center" %}

## Jekyll

This current iteration really unlocked a lot of Jekyll's features. By separating projects into their own pages, I've been able to really streamline the process of adding/updating content with markdown files, as opposed to html. It makes adding new projects much more simple.

To add a project, I add a new sub-folder under \_assets for the project that contains all the images and videos associated and write a markdown file. Writing the content through markdown is extremely intuitive and completely removes the friction of trying to create content.

{% include image.html type="post" name="markdown.jpg" caption="look at how easy it is to write new pages" class="pc-80 no-side-margin img-center" %}

## What I Learned

I've worked with HTML and CSS for quite some time now, so I know how to translate what I want into code or can find a solution otherwise, but some of the less black and white concepts of web development (like responsiveness) are little less familar. Those concepts are usually a little more hidden, in that you will not find those concepts unless you look for them.

Working on this site has exposed me to a lot more concepts that fall into this category that ellude most beginners and intermediate developers. Choosing to use Jekyll was apart of a decision to get away from working with vanilla html, css, JavaScript and streamline development. I wanted it to be easy to update the content of my site, so Jekyll's template system along with the ability to use Liquid allowed me to further separate content from layout.

I made a conscious effort while developing the site and some work refactoring the code after the fact to really simplify my code. I used Sass to separate my css into different files and organize them. It really helped me make my css more reusable and reduce any redundancies. It also has the nice side effect of making my site a little more lean.
