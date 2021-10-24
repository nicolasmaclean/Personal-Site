---
permalink: /projects/space-explorer.html
layout: post

title: Space Explorer
description: I created a simple, 2D space survival game in Unity.
tags: [Unity, 2D]
---

{% include video.html type="project" name="gameplay.mp4" class="pc-100 no-side-margin img-center" %}

This simple survival game was made for the *Scripting for Games 1 class*. The player can pickup powerups to help them survive as long as possible as they dodge randomly generated enemies.

The enemy spawning system was my main focus for the project. I experimented with placement and spawn rates of enemies. My final version of the game, converted between viewport and world space to spawn the enemies just offscreen from the player. This created greater consistency so that the enemy's velocity would not be too high by the time it crosses the player's view.

{% include image.html type="project" name="graph.jpg" class="pc-100 no-side-margin img-center" %}

Each frame, a randomly generated number (from 0 to 1) would be compared to the shown curve. If it is below both of the curves, it would spawn an enemy. I utilized parameters to easily adjust the balancing. The parameters i, a, and t correspond to the inital/target spawnrates and target time, respectively.