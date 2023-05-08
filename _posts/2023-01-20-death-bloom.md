---
title: Death Bloom
description: I lead a team of 10 programmers among a greater ~40 team to create an immersive, FPS, horror game over the course of 3 months.
categories: [programming, web]
tags: [Unreal, Leadership, Blueprints]
---

<div class="flex flex-row align-items-center">
    {% include media.html type="post" name="Concept_Cellar.png" class="w-100 pc-90 img-center no-margin-top" %}
    {% include media.html type="post" name="Concept_Squeeze.png" class="w-100 pc-90 img-center no-margin-top" %}
</div>

Death Bloom is an immersive, FPS, horror game created in Unreal 5.1 for the Game Lab class. The player finds themself in an old, decrepit house that they must escape from while being chased by Árveado.

A direct download can be made [here](https://github.com/metalac190/GameLab_S23Game/releases) from the GitHub release and you can find our GitHub repository [here](https://github.com/metalac190/GameLab_S23Game)!

## What is Game Lab

Very briefly, this is a class that aims to simulate a game studio enviornment. We have a medium-sized team with students of different skillsets that work together to create a game aligning to our directors' (the professors) vision. I explain it a bit more in a [post](../../../2022/04/ghost-house/) about my previous experience in this class.

---

## What I Did

As the programming lead, my workload shifted to include less programming as management was more active, but I also spent more time designing and planning systems for others to implement. We meet twice a week: first to get updates on what everyone had worked on; second to open discussion with other departments as necessary and plan work for the coming week.

Myself and my production manager tracked tasks, progress, and tickets (kind of) through Google Sheets. Although, not my favorite software for management, my team felt more comfortable with it than Trello or other solutions. It was a constant game of updating our list of tasks to be done and update progress for team members. In the future, I would like to more heavily advocate for something else, but spreadsheets can still do the job.

Related to programming, I filled in the cracks, kept the project organized, provided Git support, and designed systems for others to implement.

## Spline Mesh

{% include media.html type="post" name="SplineRoots.png" class="w-4/5 mx-auto" %}

This was my first semester in Unreal, so Blueprints and the generally lower barrier to develop simple tools was eye-opening for me. I found splines to be really useful for exposing more intuitive controls for tools. For the above root, this is really the only approach but I also used it for a "Squeeze Through" mechanic.

Our Lead Artist, [Ben Cressman](https://www.linkedin.com/in/1pyre/), began developing a blueprint that would allow roots to be built using splines. It would create a static mesh instance along this spline. It worked fairly well, but he handed it over to me clean-up and add more features.

Specifically, I added the ability to seemlessly taper the mesh as it moves down the spline. Tapering has 2 settings: `Taper Start` that is percent from the beginning to start tapering and `Taper Scale` which is the proportion of scale at the end to the scale of the beginning. The thickness can also be adjusted, because scaling the object would not maintain the position of spline points.

## Player Movement

For this team, I find a more hands-free approach is fairly good. All of my team members are hard-working and motivated. They enjoy working on the project and can for the most part manage themselves. The only area that I've had to manage more actively is our player blueprint. There's a tendency to just throw all of the code in there, but we're using GitHub so it becomes a game of avoiding merge conflicts.

Most of my team, including me, were new to Unreal at the beginning of the project so the lack of strong organization or design was somewhat expected. However, as we became more experienced and our project grew, I stepped in and facilitated the design of systems to a stronger degree. Specifically, I moved all of our player movement code to an `ActorComponent`. Almost everything could be done in the component instead of directly on the player, which decreases the surface area of code prone to conflicts.

While doing moving the code to an `ActorComponent` I forced my team to use a system of "Move Modes", instead of a whole bunch of booleans to manage crouching, walking, climbing... This made movement much more modular and where code should be found more clear. Instead of searching for a "Start Squeeze" event in a massive event graph, there is now a `Squeeze_Start` function on the `AC_Movement` component.

## Squeeze

<div class="flex flex-row align-items-center">
    {% include media.html type="post" name="Squeeze_Straight.png" class="w-2/5 mx-auto" %}
    {% include media.html type="post" name="Squeeze_Curve.png" class="w-3/5 mx-auto" %}
</div>

Our design team requested a "Squeeze" mechanism so that the player, when in a squeeze mode, is constrained to a specific movement path and camera angle. The initial design, from [Dani Murillo](https://www.linkedin.com/in/danielmarmur/), simply used 2 triggers to enter and exit the "Squeeze" mode and while in this mode, the player's position was a function of time between these 2 triggers.

I helped him rework the blueprint to simlify our level designer's experience with customizing the instance and introduce a spline to drive the position. Now, triggers are automatically created the ends of the spline meaning designers have less to adjust when placing this blueprint in the level; and more points may be added to the spline to allow squeezing through corridors that aren't straight. This also has the nice side effect of allowing some more complex vertical movement during the squeeze.

{% include media.html type="post" name="Squeeze.gif" caption="Squeezing in our Pre-Alpha" %}

## Reflection

Although, as of writing this, we are only half-way through the project, I've so much and we've been doing some awesome work. I've learned about Unreal in general, writing blueprints, and grown as a leader. Unreal encourages programmers to expose tools in design friendly ways that not only enable development but streamline it. Blueprints allow designers and artist an easy way to coordinate more complex code written by me. This isn't even mentioning editor blueprints and python to automate repetitive tasks and enforce project-wide standards.

In regards to management, I've become better at recognizing when team members could use a push or when they need a break. Our team was rather large so it was easier to lighten load for people that needed it, but at times it was more difficult to make sure there was work for those wanting it. I worked with people wanting more work to create tasks we needed (but hadn't thought of yet) and to brainstorm ideas to help polish the game.

I was initially hesitant about our change from Unity to Unreal. I had used Unity and C# for 4 years, so changing to Unreal and C++ was scary. Unreal's guide for Unity developers showed Unreal C++ vs. Unity C# and Unity has a much cleaner look. We don't have to deal with pointers and their C# ecosystem has plenty of nice syntax sugar. But for this project we stuck to blueprints so I didn't even deal with that for this project.

This experience has brought a new perspective on the Unreal vs Unity war to me. Both a perfectly good game engines. They have pros and cons. Some games are better suited to one over the other (if not one of those at all!). But Unreal's Blueprints are simply more way more powerful than Unity's Visual Scripting. Blueprints and Unreal's library of tools enable designers and artists to a degree, Unity doesn't match without an extensive library of additional code or plugins.