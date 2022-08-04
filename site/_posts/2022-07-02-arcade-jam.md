---
title: Arcade Game Jam | Revenge of the Roombas
description: I lead a team of 4 other students to create a 3d, arena fighter for the SGDA and MakerSpace's Spring 2022 Game Jam.
categories: [programming, game-dev, game-jam]
tags: [Unity, Game-Jam, 3D]
---

{% include video.html type="post" name="gameplay.mp4" class="pc-100 no-side-margin img-center" %}

Ariana Mendez, Conor Boone, Wesley Pate, Kellyn Mendez, and myself created this game for the SGDA's Spring 2022 game jam. We spent a week building the game in Unity and receieved *Best Technical Achievement*. The game jam page is [here](https://amendez.itch.io/revenge-of-the-roombas) and the repo may be found [here](https://github.com/nicolasmaclean/arcade-jam).

<div class="flex-row">
    {% include image.html type="post" name="gameplay_01.png" class="pc-90 img-center margin-bottom-1rem" %}
    {% include image.html type="post" name="gameplay_02.png" class="pc-90 img-center margin-bottom-1rem" %}
</div>

<div class="flex-row">
    {% include image.html type="post" name="gameplay_03.png" class="pc-90 img-center no-margin-top" %}
    {% include image.html type="post" name="gameplay_04.png" class="pc-90 img-center no-margin-top" %}
</div>

This jam was a little more unique in that it coincided with the unveiling of the MakerSpace's arcade cabinet so we were encouraged to build our games for it. The theme was "Combo". Our team very quickly agreed that leaning into the arcade cabinet would be a lot more fun. Working under that constraint helped guide our decision making and focus our energy. It was also a really awesome experience watching others play our game on an arcade cabinet!

In retrospect, I filled not only the role of programmer but also project lead. I taught Kellyn Unity specific concepts for programming like coroutines and UI while specifically giving her tasks to incrementally build experience with Unity; I worked closely with Connor to integrate animations and VFX into gameplay; and created a system for Wesley to connect SFX to actions in-game.

---

{% include image.html type="post" name="enemyWalla.png" class="pc-60 img-center" caption="<a href=\"https://github.com/nicolasmaclean/arcade-jam/blob/develop/arcade-jam/Assets/_Game/Scripts/Mechanics/Enemy/EnemyWalla.cs\"> This Script on GitHub </a>" %}

I setup a StateMachine base class for the enemy AI to leverage Unity's `NavMeshAgent` that could be inherited from to create specific enemy types. In the above screenshot, we have the "Walla" enemy that randomly wanders while trying to maintain a certain distance from the player. Their role was to clutter the screen, create a little chaos, and give the player some targets. Implementation requires the derrived enemy class and any necessary `State`s. The derrived class coordinates transitions and manages the AI's state, while the `State` objects allow modular logic to be reused between enemies.