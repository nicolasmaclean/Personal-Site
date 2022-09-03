---
title: Roll Dem Bones
description: I lead a team of 5 other students through the GMTK 48 hour game jam and the Dallas Society of Play's (DSOP) 2 week slow jam.
categories: [programming, game-dev, game-jam]
tags: [Unity, Game-Jam, 3D]
---

<!-- {% include video.html type="post" name="gameplay.mp4" class="pc-100 no-side-margin img-center" %} -->

<div class="flex-row items-center">
    {% include image.html type="post" name="game-start.png" class="w-100 pc-90 img-center margin-bottom-1rem" %}
    {% include image.html type="post" name="game-hall.png" class="w-100 pc-90 img-center margin-bottom-1rem" %}
</div>

<div class="flex-row items-center">
    {% include image.html type="post" name="game-title.png" class="w-100 pc-90 img-center no-margin-top" %}
    {% include image.html type="post" name="game-lose.png" class="w-100 pc-90 img-center no-margin-top" %}
</div>

I worked with 8 other members of the SGDA, including [Phu Lee](https://www.linkedin.com/in/phu--le), [Ariana Mendez](https://www.linkedin.com/in/ariana-z-mendez/), Shelley Sugiharto, and [John Mai](https://www.linkedin.com/in/john-huy-mai/). The final build can be found on [itch.io](https://amendez.itch.io/roll-dem-bones)!

### Animations

As I have gained more experience developing FPS games in Unity, a lot of the work towards the beginning of the project can be rather simple, boiler-plate code. However, I have relatively little experience with 3D Animations in Unity. I have had little opportunity to work with complex Animators as I have little experience in animation. Over the course of the slow-jam, I had to redo the PlayerController as features demmanded by Phu simply were not supported by the previous system.

I learned to lean into the Animator Controller. Instead of tracking cooldowns and the progress of the current animation state from within other components, I learned to poll that information from the Animator Controller. This enabled Phu to adjust the transitions between animation clips from the inspector, which improved our workflow and the visual quality of transitions.

{% include image.html type="post" name="animator.png" class="w-100 pc-90 img-center no-margin-top" %}

One of the more challenging features that forced me to clean up the Player's animator was the ability to combo melee attacks. There were 3 different animation clips (each for a different type of swing) that needed to be depending on the length of time since the last swing. My initial efforts to track the time spent in each state and since state changes created a complicated mess of edge cases that broke the animations.

This much cleaner system, shown above, uses the `Exit Time` property of transitions to track the timing of swings.

### Production

Shelley was an incoming freshman at the time with relatively little experience with game development. She came on as our 2d artist. She did a great job setting aside time to work on whatever tasks we had for her, but she also did a great job listening whenever we tried to teach her. I introduced a workflow for her to import 2D assets into the project (with GitHub) and introduced her to adjacent areas like VFX.

I was really happy with how I was able to keep Shelley engaged with the project regardless of her beginner status. Of course, this was also thanks to Shelley for being so flexible.