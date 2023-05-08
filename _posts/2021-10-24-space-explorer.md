---
title: Space Explorer
description: I created a simple, 2D space survival game in Unity.
categories: [programming, game-dev]
tags: [Unity, 2D]
---

{% include media.html type="post" name="gameplay.mp4" %}

This simple survival game was made for the _Scripting for Games 1 class_. The player can pickup powerups to help them survive as long as possible as they dodge randomly generated enemies.

The enemy spawning system was my main focus for the project. I experimented with placement and spawn rates of enemies. My final version of the game, converts between viewport and world space to spawn enemies just offscreen from the player. This creates greater consistency so that enemies's velocities are not too high by the time they crosses the player's view.

{% include media.html type="post" name="graph.jpg" %}

Each frame, a randomly generated number (from 0 to 1) is compared to the shown curve. If it is below the curve, it would spawn an enemy. The parameters i, a, and t correspond to the inital spawnrate, target spawnrate, and target time, respectively. I utilized these parameters to easily adjust the difficulty of the game.
