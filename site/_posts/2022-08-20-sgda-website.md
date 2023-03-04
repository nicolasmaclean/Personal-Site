---
title: SGDA Website
description: John Mai and I redesigned the UTD SGDA's website.
categories: [programming, web]
tags: [Jekyll, HTML, CSS, Web-Development]
---

<iframe src="https://utdsgda.club" class="w-100 no-side-margin img-center" style="height: 30rem;"></iframe>

After becoming a Junior Officer for UTDallas' Student Game Developer Association (SGDA), I was paired with our new Technical Officer [John Mai](https://www.linkedin.com/in/john-huy-mai/). Our first job was to redesign the club's site to match [Phu Lee](https://www.linkedin.com/in/phu--le)'s rebranding of the club's graphics. I did all of the programming and helped develop the new design.

The previous site served us well, but as it changed hands (some of which had less or no experience with Jekyll) tech debt built up. Hacks were used to modify the [Bulma-Clean theme](http://jekyllthemes.org/themes/bulma-clean-theme/) that led to an overcomplicated codebase. I removed the Bulma-Clean theme and replaced the Bulma CSS library with [RaisinCSS](https://github.com/tretapey/raisincss). The ultimate effect being, a much more simplified code base and a smaller build.

### Design

John, Phu, and I spent time looking at marketing materials created the past year and identified aspects of our brand's style. Dark (patterned) backgrounds; our signature red, yellow, green,and blue colors are used to emphasize headers and information; and text/box shadows to create depth. The style feel arcadey but not cartoonish. Compositions also feel dynamic though interesting placement and slight rotations.

While creating the design, we experimented a lot with color gradients trying the find the delicate balance. I settled on the slim gradient below the navbar and above the footer. It creates strong division from the content of the page while providing a fun splash of color.

### CSS

RaisinCSS attempts to simplify page styling by exposing a large portion of commonly used CSS styles as indivual classes. For example, making a flex-box would require 2 classes to set the display and flex-direction: `flex flex-column`. This means that HTML files would contain more style information, but I could quickly prototype page layouts. This also means I relied on page-specific CSS files to a much smaller degree.

Again, my focus was to reset our site's tech debt. I wanted to design our site to look good, obviously, but also for it to be simple to maintain and hand-off. This is why JavaScript was used only where absolutely necessary or if the payoff was worth it. CSS was used to create as much of the animations as possible. In fact, all animations on the site were created using CSS except the title that follow your cursor on desktop.

### Optimization

{% include image.html type="post" name="lighthouse.png" class="pc-80 no-side-margin img-center" caption="Google Lighthouse Score: 100's" %}

Lastly, I spent time optimizing the website's request count, load speed, and accessibility with the help of Google Chrome's LightHouse. The extremely small page-specific CSS files could be inlined using Jekyll's `Include` functionality while remaining separate files; Sass' `@import` is used to concatenate `.scss` fies at compile time to reduce the number `.css` files linked on a page; and minification of `.html` and `.css` files upon build further optimize files.