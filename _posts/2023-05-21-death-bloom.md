---
title: Death Bloom | Lead Programmer
description: I lead a team of 10 programmers among a greater ~40 team to create an immersive, FPS, horror game over the course of 3 months.
categories: [programming, web]
tags: [Unreal, Leadership, Blueprints]
---

{% include media.html type="post" name="Trailer.mp4" class="w-4/5 mx-auto" %}

Death Bloom is an immersive, FPS, horror game created in Unreal 5.1 for the Game Lab class over the course of the Spring 2023 semester.


> Survive a dark fairy tale where you must burn the heart of Arveado to survive the night. Using a storybook as your guide, find lost pages to learn the dark secrets of this mysterious forest dwelling and who lives inside.
> 
> Solve puzzles, investigate curious objects and journey deeper into a fantastical world of danger, but don’t look in the wrong places or your story may end too soon.

Builds of the game can be found in our [GitHub releases](https://github.com/metalac190/GameLab_S23Game/releases) and you can find our GitHub repository [here](https://github.com/metalac190/GameLab_S23Game)!

<details>
    <summary> What is Game Lab? </summary>

    Very briefly, this is a class that aims to simulate a game studio enviornment. A medium-sized team (~40) of students with varying skillsets work together to create a game aligning to our directors' vision.
    <br><br>

    The heirarchy is as follows: directors (professors) -> producer -> department lead and department manager -> team member
</details>

---

## What I Did

I was *programming lead* for a team of 10. I did spend a portion of my time programming, but a large amount of my energy was managing. I planned out required features, carefully assigned tasks to my team, and handled higher-level cross department communications.

Planning for the programming team was a challenging aspect for me. While I am perfectly familiar with how my previous projects have evolved during development, game lab seems to have a heightened volitility that exaggerates the experience.

I learned to rely on my production manager, [Ally Duong](https://www.linkedin.com/in/allyduong/), to help take notes and check in with team members or other departments.

I also had to carefully consider each team member's temperment, skills, and personal situation to best determine tasks. For example, I found [Will Callihan](https://www.linkedin.com/in/william-callihan-360b44207/) to be extremely dependable. His computer science background helped him appraoch complex tasks without overcomplicating them. There was the small caveat that I had to be careful with how much work I gave him. I didn't want to burn him out and he had other classes/personal things to balance.

### Spline Mesh

{% include media.html type="post" name="AdvancedSplineMesh.png" class="w-4/5 mx-auto" %}

Our Lead Artist, [Ben Cressman](https://www.linkedin.com/in/1pyre/), and I collaborated on a more advanced version of Unreal's *Spline Mesh*. My end result is a blueprint that creates a variable amount of static mesh components along a spline with a simplified tapering system.

The user can allow the resolution (number of spline meshes) to be automatically determined by the mesh's bounding box to prevent stretching the model or input a custom resolution. they may also adjust what percentage the final tapered end should be and where along the spline that should being.

Feel free to poke around the some of the blueprint below :) Right click + drag to move around and ctrl + scroll to zoom.

<iframe src="https://blueprintue.com/render/y5t-j9ob/" scrolling="no" allowfullscreen class="w-full" style="height: 30rem;"></iframe>

### Squeeze

<div class="flex flex-row align-items-center">
    {% include media.html type="post" name="Squeeze_Straight.png" class="w-2/5 mx-auto" %}
    {% include media.html type="post" name="Squeeze_Curve.png" class="w-3/5 mx-auto" %}
</div>

I helped [Dani Murillo](https://www.linkedin.com/in/danielmarmur/) create a "Squeeze" mechanic, requested by our level designers. While he handeled a majority of the development, I spent time working with him during the design and refactoring phases, as well as, polishing the UX for the level designers.

I always emphasize the importance of our role as programmers: we write code and build tools to enable artists and designers to make the game. For the squeeze mechanic, I spent time polishing how it was placed in the world and configured.

Designers could simply drag-and-drop the blueprint into the level and directly edit a spline component to adjust the path followed during squeezes. The construction script automatically created triggers at each end of the spline and their radii could be adjusted with a variable on the blueprint instance. While this removed the freedom to choose the collider shape, it enforced a consistent physics interaction and optimized the workflow for level designers.

## Reflection

I am really proud of this project and of my team. There's a million things we could've done differently, areas we messed up, and mechanics/levels that needed more time to improve but that's just how it is. No project is perfect.

This was the first project most of the team had done in Unreal, including me, so it was really impressive how much we accomplished during 3 months. We learned a ton about Unreal (and how to handle Unreal projects with Git) and made a complete game.

I had a blast being the lead of such a great team and seeing each team member grow so much was an incredible privilege. I'll miss this team, but I'm excited for our next project.
